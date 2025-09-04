// Security utilities for ALCORE application

// XSS Protection
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// HTML sanitization for rich content
export const sanitizeHTML = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

// Email validation with security considerations
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const sanitized = sanitizeInput(email);
  return emailRegex.test(sanitized) && sanitized.length <= 254;
};

// Phone number validation
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[1-9]\\d{0,15}$/;
  const cleaned = phone.replace(/[\\s\\-\\(\\)]/g, '');
  return phoneRegex.test(cleaned) && cleaned.length >= 7 && cleaned.length <= 15;
};

// URL validation
export const isValidURL = (url: string): boolean => {
  try {
    const parsedURL = new URL(url);
    return ['http:', 'https:'].includes(parsedURL.protocol);
  } catch {
    return false;
  }
};

// Rate limiting helper
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }

    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    return true;
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }
}

export const rateLimiter = new RateLimiter();

// CSRF Token generation
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Secure random string generation
export const generateSecureId = (length: number = 16): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(36)).join('').substring(0, length);
};

// Content Security Policy helper
export const getCSPHeader = (): string => {
  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https: wss:",
    "media-src 'self' data: https:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; ');
};

// Secure headers for responses
export const getSecurityHeaders = (): Record<string, string> => {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Content-Security-Policy': getCSPHeader()
  };
};

// Input validation schemas
export const ValidationSchemas = {
  contactForm: {
    name: (value: string) => {
      const sanitized = sanitizeInput(value.trim());
      return sanitized.length >= 2 && sanitized.length <= 100 && /^[a-zA-ZÀ-ÿ\\s]+$/.test(sanitized);
    },
    email: isValidEmail,
    phone: isValidPhone,
    message: (value: string) => {
      const sanitized = sanitizeInput(value.trim());
      return sanitized.length >= 10 && sanitized.length <= 1000;
    }
  },
  chatForm: {
    message: (value: string) => {
      const sanitized = sanitizeInput(value.trim());
      return sanitized.length >= 1 && sanitized.length <= 500;
    }
  }
};

// Secure localStorage wrapper
export class SecureStorage {
  private static encrypt(data: string, key: string): string {
    // Simple XOR encryption for demo (use proper encryption in production)
    let result = '';
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(result);
  }

  private static decrypt(data: string, key: string): string {
    try {
      const decoded = atob(data);
      let result = '';
      for (let i = 0; i < decoded.length; i++) {
        result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      }
      return result;
    } catch {
      return '';
    }
  }

  static setItem(key: string, value: any, encryptionKey: string = 'alcore-key'): void {
    try {
      const stringValue = JSON.stringify(value);
      const encrypted = this.encrypt(stringValue, encryptionKey);
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error('SecureStorage setItem error:', error);
    }
  }

  static getItem<T>(key: string, encryptionKey: string = 'alcore-key'): T | null {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      
      const decrypted = this.decrypt(encrypted, encryptionKey);
      return JSON.parse(decrypted);
    } catch (error) {
      console.error('SecureStorage getItem error:', error);
      return null;
    }
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

// Security audit logger
export class SecurityLogger {
  private static logs: Array<{
    timestamp: number;
    type: string;
    message: string;
    userAgent: string;
    url: string;
  }> = [];

  static log(type: string, message: string): void {
    this.logs.push({
      timestamp: Date.now(),
      type,
      message,
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    // Keep only last 100 logs to prevent memory issues
    if (this.logs.length > 100) {
      this.logs.shift();
    }

    // In production, send to security monitoring service
    if (type === 'SECURITY_VIOLATION') {
      console.warn('Security violation detected:', message);
    }
  }

  static getLogs(): typeof SecurityLogger.logs {
    return [...this.logs];
  }

  static clearLogs(): void {
    this.logs = [];
  }
}

// DOM security helpers
export const secureDOMManipulation = {
  safeInnerHTML: (element: HTMLElement, content: string) => {
    element.textContent = content; // Always use textContent instead of innerHTML
  },
  
  safeAttribute: (element: HTMLElement, attr: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    element.setAttribute(attr, sanitizedValue);
  },
  
  safeEventListener: (element: HTMLElement, event: string, handler: EventListener) => {
    element.addEventListener(event, handler, { passive: true });
  }
};
