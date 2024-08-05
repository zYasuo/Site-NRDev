import CryptoJS from 'crypto-js';

const secretKey = process.env.SECRET_KEY || 'your-secret-key-here';

export const encrypt = (text: string) => {
  const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
  return encodeURIComponent(encrypted); 
};

export const decrypt = (ciphertext: string) => {
  const decoded = decodeURIComponent(ciphertext);
  const bytes = CryptoJS.AES.decrypt(decoded, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
