import { setCookie as setNookiesCookie, destroyCookie, parseCookies } from 'nookies';
import { encrypt, decrypt } from '@/lib/crypto';

const secureCookiePrefix = 'securePrefix_';

export const setSecureCookie = (name: string, value: string, options = {}) => {
  const encryptedValue = encrypt(value);
  setNookiesCookie(null, `${secureCookiePrefix}${name}`, encryptedValue, {
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    ...options,
  });
};

export const getSecureCookie = (name: string) => {
  const cookies = parseCookies();
  const encryptedValue = cookies[`${secureCookiePrefix}${name}`];
  return encryptedValue ? decrypt(encryptedValue) : null;
};

export const removeSecureCookie = (name: string) => {
  destroyCookie(null, `${secureCookiePrefix}${name}`, { path: '/' });
};
