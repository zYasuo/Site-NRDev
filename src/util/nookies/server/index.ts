import { cookies } from 'next/headers';
import { decrypt } from '@/lib/crypto';

const secureCookiePrefix = 'securePrefix_';

export function getFilialId(): string {
  const cookieStore = cookies();
  const encryptedId = cookieStore.get(`${secureCookiePrefix}filialId`)?.value || "";
  return decrypt(encryptedId) || "";
}

export function getClienteId(): string {
  const cookieStore = cookies();
  const encryptedId = cookieStore.get(`${secureCookiePrefix}clienteId`)?.value || "";
  return decrypt(encryptedId) || "";
}
