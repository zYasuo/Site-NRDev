import {create} from 'zustand';
import { setSecureCookie, getSecureCookie } from '@/util/nookies/client';

interface CookieConsentState {
  consentGiven: boolean;
  setConsent: (consent: boolean) => void;
}

export const useCookieConsentStore = create<CookieConsentState>((set) => ({
  consentGiven: getSecureCookie('cookieConsent') === 'true',
  setConsent: (consent: boolean) => {
    setSecureCookie('cookieConsent', String(consent));
    set({ consentGiven: consent });
  },
}));

