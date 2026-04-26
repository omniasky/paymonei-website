/**
 * Build a URL into the merchant console (paymonei-webapp).
 *
 * Reads NEXT_PUBLIC_APP_URL at build time. In production this is
 * `https://app.paymonei.com`; in dev set it to `http://localhost:3002`
 * via .env.local.
 *
 * Defaults to the production URL so a missing env var doesn't silently
 * point at the wrong place.
 */
const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.paymonei.com'
).replace(/\/+$/, '');

export function appUrl(path: string = '/'): string {
  if (!path.startsWith('/')) path = `/${path}`;
  return `${APP_URL}${path}`;
}

export const APP_REGISTER_URL = appUrl('/register');
export const APP_LOGIN_URL = appUrl('/login');
