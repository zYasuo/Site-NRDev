"use server";
import { H2, Paragraph } from "@/components/global/textos";

export async function SectionPoliticaDePrivacidade() {
  return (
    <>
      <div className="dark:bg-primary/15 bg-muted/15">
        <div className="container py-24 sm:py-32 space-y-4">
          <div className="space-y-2">
            <H2
              text="Política de Privacidade"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Na NR Conexões, valorizamos sua privacidade e estamos comprometidos em proteger suas informações. Esta política descreve como coletamos, usamos e protegemos os dados pessoais que você nos fornece ao usar nosso site e outros serviços relacionados." />
          </div>
          <div className="space-y-2">
            <H2
              text="Coleta de Informações"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Solicitamos informações pessoais apenas quando necessário para fornecer nossos serviços. Isso pode incluir nome, endereço de e-mail, informações de contato e outras informações relevantes para o serviço solicitado. Todas as informações são coletadas de maneira justa e legal, com seu consentimento explícito." />
          </div>
          <div className="space-y-2">
            <H2
              text="Uso de Informações"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="As informações coletadas são usadas para fornecer e melhorar nossos serviços, bem como para comunicação com você sobre esses serviços. Podemos usar suas informações para personalizar sua experiência e para fornecer suporte ao cliente quando necessário. Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário por lei ou com seu consentimento explícito" />
          </div>
          <div className="space-y-2">
            <H2
              text="Armazenamento e Segurança"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Mantemos suas informações pessoais apenas pelo tempo necessário para fornecer os serviços solicitados e para cumprir com as obrigações legais. Adotamos medidas de segurança adequadas para proteger suas informações contra perda, uso indevido, acesso não autorizado, divulgação, cópia, uso ou modificação não autorizados." />
          </div>
          <div className="space-y-2">
            <H2
              text="Cookies"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Nosso site usa cookies para melhorar sua experiência de navegação. Os cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a entender como você interage com nosso site. Você pode optar por desativar os cookies em seu navegador, mas isso pode afetar a funcionalidade do site." />
          </div>
          <div className="space-y-2">
            <H2
              text="Links para Terceiros"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Nosso site pode conter links para outros sites que não são operados por nós. Não temos controle sobre o conteúdo e práticas de privacidade desses sites e não assumimos responsabilidade por eles." />
          </div>

          <div className="space-y-2">
            <H2
              text="Seus Direitos"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Se desejar exercer esses direitos ou tiver dúvidas sobre como lidamos com seus dados, entre em contato conosco." />
          </div>
          <div className="space-y-2">
            <H2
              text="Termos de Uso"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Ao acessar nosso site, você concorda em cumprir estes termos de serviço. Os materiais contidos em nosso site são protegidos por leis de direitos autorais e marcas comerciais." />
          </div>
          <H2
            text="Limitação de Responsabilidade"
            className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
          />
          <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Não seremos responsáveis por quaisquer danos decorrentes do uso ou incapacidade de usar os materiais em nosso site." />
          <div className="space-y-2">
            <H2
              text="Lei Aplicável"
              className="text-lxl md:text-2xl lg:text-3xl tracking-tighter text-left font-regular font-semibold font-sans"
            />
            <Paragraph className="text-muted-foreground mt-2 md:mt-4 text-sm md:text-md lg:text-lg leading-relaxed tracking-tight font-regular font-sans" text="Estes termos e condições são regidos e interpretados de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018, e você concorda irrevogavelmente com a jurisdição exclusiva dos tribunais nessa jurisdição." />
          </div>
        </div>
      </div>
    </>
  );
}
