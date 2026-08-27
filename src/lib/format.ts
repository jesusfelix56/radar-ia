import { site } from '../site.config';

const dateFormatter = new Intl.DateTimeFormat(site.locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function formatDate(date: Date | string) {
  const value = typeof date === 'string' ? new Date(date) : date;
  return dateFormatter.format(value);
}

export function isoDate(date: Date | string) {
  const value = typeof date === 'string' ? new Date(date) : date;
  return value.toISOString().split('T')[0];
}

export function formatPrice(value: number, currency = 'EUR') {
  return new Intl.NumberFormat(site.locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
