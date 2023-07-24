const config = {
   // Ricerca all'interno del sito
    search: {
      provider: "kbar",
      
    },
    // title will be displayed on the top of your site
    title: "Mario Focaccio - Digital Garden",
    logo:"../logo.svg",
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
      { label: "discord", href: "https://discord.gg/UrsKR9Ps" },
    ],
    // links to the pages you want to link to in the navbar
    navLinks: [{ href: "/about", name: "About" },
               { href: "/blog", name: "Blog" },
               { href:"/learning", name: "Learning notes"},
               { href:"/_all", name: "All"},
               { href:"/contatti", name: "Contatti"},
            ],
    navbarTitle: {
      logo: "../logo.svg",
      text: " ",
      version: "Alpha",
    },
    showToc: true,
    showSidebar: false,
    nextSeo: {
      titleTemplate: "%s | Mario Focaccio",
      description:
        "Digital Gardening open source.",
      canonical: "https://mariofocaccio.it",
      openGraph: {
        title: "Mario Focaccio",
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