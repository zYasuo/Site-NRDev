"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import { useCookieConsentStore } from '@/hooks/cookies/useCookie';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { setSecureCookie } from "@/util/nookies/client";

export default function CookieConsent({ demo = false, onAcceptCallback = () => { }, onDeclineCallback = () => { } }) {
    const { consentGiven, setConsent } = useCookieConsentStore();
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const handleAccept = useCallback(() => {
        setConsent(true);
        setSecureCookie("cookieConsent", "true");
        closeConsentModal();
        onAcceptCallback();
    }, [onAcceptCallback, setConsent]);

    const handleDecline = useCallback(() => {
        setConsent(false);
        setSecureCookie("cookieConsent", "false");
        closeConsentModal();
        onDeclineCallback();
    }, [onDeclineCallback, setConsent]);

    const closeConsentModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            setHide(true);
        }, 700);
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    useEffect(() => {
        setIsOpen(true);
        if (consentGiven && !demo) {
            closeConsentModal();
        }
    }, [consentGiven, demo]);

    return (
        <Card className={cn("fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700 p-4", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>
            <div>
                <div className="grid gap-2">
                    <div className="border-b border-border dark:border-background/20 h-14 flex items-center justify-between p-4">
                        <h1 className="text-lg font-medium">
                            Este site usa cookies
                        </h1>
                        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-normal text-start">
                            Usamos cookies para melhorar sua experiência e analisar o tráfego do site. Suas preferências serão salvas de forma segura.
                            <br />
                            <br />
                            <span className="text-xs">Ao clicar em <span className="font-medium opacity-80">Aceitar</span>, você concorda com nossa política de cookies.</span>
                            <br />
                            <a href="#" className="text-xs underline">Saiba mais.</a>
                        </p>
                        {showOptions && (
                            <div className="mt-4">
                                <div className="flex items-center justify-between py-2">
                                    <Label htmlFor="necessary-cookies" className="text-sm">Cookies necessários</Label>
                                    <Switch id="necessary-cookies" checked disabled />
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <Label htmlFor="analytics-cookies" className="text-sm">Cookies de análise (Google Analytics)</Label>
                                    <Switch id="analytics-cookies" />
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <Label htmlFor="advertising-cookies" className="text-sm">Cookies de publicidade</Label>
                                    <Switch id="advertising-cookies" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                        <Button onClick={handleAccept} className="w-full">Aceitar</Button>
                        <Button onClick={handleDecline} className="w-full" variant="secondary">Recusar</Button>
                        <Button onClick={toggleOptions} className="w-full" variant="outline">
                            {showOptions ? 'Ocultar Opções' : 'Mostrar Opções'}
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
