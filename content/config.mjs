const config = {
   // Ricerca all'interno del sito
    search: {
      provider: "kbar",
      
    },
    //Title will be displayed on the top of your site
    title: "Mario Focaccio - Digital Garden",
    logo:"../../../logo.svg",
    
    // adding a description helps with SEO
    description: "Digital garden di Mario Focaccio. Una raccolta di appunti, note e idee.",
    // author of site displayed on the bottom of your site
    author: " Mario Focaccio",
    defaultAuthor: "Mario Focaccio",
    // logo image
    authorLogo: "../logo.svg",
    
    // url to author website
    domain: "https://mariofocaccio.it",
    analytics: "G-XXXX",
    social: [
      { label: "github", href: "https://github.com/focacciomario" },
      //{ label: "discord", href: "https://discord.gg/UrsKR9Ps" },
    ],
    // links to the pages you want to link to in the navbar
    navLinks: [{ href:"/about", name: "About"},
               //{ href:"/aboutGarden", name: "Su questo sito"},
               { href: "/progetti", name: "Progetti" },
               { href:"/learning", name: "Note"},
               { href: "/blog", name: "Blog" },
               { href: "/contatto", name: "Contatti" },
               { href:"/_all", name: "Indice"},
               
            ],
    navbarTitle: {
      logo: "../../../logo.svg",
      text: " ",
      version: "Alpha",
    },
    showToc: true,
    showSidebar: true,
    nextSeo: {
      additionalLinkTags: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icon.png', sizes: '120x120' },
      ],
      titleTemplate: "%s | Mario Focaccio",
      description:
        "A public collection of my Personal Knowledge Management about coding, AI, Bioengineering, 3D print.",
      canonical: "https://mariofocaccio.it",
      openGraph: {
        title: "Mario Focaccio",
        locale: 'it_IT',
        images: [
          {
            url: "https://flowershow.app/assets/images/frontpage-screenshot.jpg",
            alt: "Mario Focaccio",
            width: 1200,
            height: 627,
            type: "image/jpg",
          },
        ],
      },
      twitter: {
        handle: "@focacciomario",
        site: "https://mariofocaccio.it",
        cardType: "summary_large_image",
      },
    },
  };
  
  export default config;