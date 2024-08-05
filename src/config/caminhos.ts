import { MainNavItem, SidebarNavItem } from "@/types/header/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Planos",
      href: "/planos",
    },
    {
      title: "Faturas",
      href: "/faturas",
    },
    // {
    //   title: "Contrate Online",
    //   href: "/contrate-online",
    // },
  ],
  sidebarNav: [
    // {
    //   title: "Mais Pesquisados",
    //   items: [
    //     {
    //       title: "Inicio",
    //       href: "/home",
    //       items: [],
    //     },
    //     {
    //       title: "Planos",
    //       href: "/planos",
    //       items: [],
    //     },
    //     {
    //       title: "Empresa",
    //       href: "/empresa",
    //       items: [],
    //     }
    //   ],
    // },

    {
      title: "Planos",
      items: [
        {
          title: "Residênciais",
          href: "/planos",
          items: [],
        },
      ],
    },
    // {
    //   title: "Para Empresas",
    //   items: [
    //     {
    //       title: "Para Empresas",
    //       href: "/para-empresas",
    //       items: [],
    //     },
    //   ],
    // },
    {
      title: "Serviços",
      items: [
        // {
        //   title: "Contrate Online",
        //   href: "/contrate-online",
        //   items: [],
        // },
        {
          title: "Faturas",
          href: "/faturas",
          items: [],
        },
      ],
    },

    {
      title: "Conheça a NR",
      items: [
        {
          title: "Quem Somos",
          href: "/conheca-a-nr/quem-somos",
          items: [],
        },
        {
          title: "Política de Privacidade",
          href: "/conheca-a-nr/politicas-de-privacidade",
          items: [],
        },
      ],
    },
    {
      title: "Fale Conosco",
      items: [
        {
          title: "Ouvidoria",
          href: "/fale-conosco/ouvidoria",
          items: [],
        },
        // {
        //   title: "Trabalhe Conosco",
        //   href: "/fale-conosco/trabalhe-conosco",
        //   items: [],
        // },
        // {
        //   title: "Seja um Parceiro",
        //   href: "/fale-conosco/seja-um-parceiro",
        //   items: [],
        // },
      ],
    },
  ],
};
