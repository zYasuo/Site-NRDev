export const siteConfig = {
  name: "NR",
  ano: new Date().getFullYear(),
  url: "https://nrconexoes.com",
  ogImage: "https://nrconexoes.com/og.jpg",
  description: "Provedor de Internet",
  direitos: "Todos os direitos reservados",
  links: {
    login: "https://nrconexoes.com.br/central_assinante_web/login",
  },
};

export type SiteConfig = typeof siteConfig;
