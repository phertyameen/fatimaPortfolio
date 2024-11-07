import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tomato,
  kadahive,
  emmanuel,
  lawal,
  github,
  linkedin,
  love,
  phone,
  twitter,
  whatsapp,
  repository,
  imagegenerator,
  metaverse,
  naijabuzz300,
  shoppingcart,
  portfolio,
  summarizer,
  trendsgram,
  travelbuddy,
} from "../assets";

const socialss = [
  {
    icon: repository,
    url: "https://github.com/naijabuz",
  },
  {
    icon: linkedin,
    url: "https://www.linkedin.com/in/tomilolaaaaa/",
  },
  // {
  //   icon: love,
  // },
  // {
  //   icon: phone,
  //   desc: "(+234)7036513120",
  // },
  {
    icon: twitter,
    url: "https://twitter.com/tomilolaaaaar",
  },
  {
    icon: whatsapp,
    url: "https://wa.me/+2349059694751/",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "WordPress Developer",
    icon: backend,
  },
  {
    title: "Technical Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "KadaHive Tech Hub",
    icon: kadahive,
    iconBg: "#383E56",
    date: "August 2023 - October 2023",
    points: [
      "Creating responsive websites using Html, CSS, JavaScript, React & WordPress",
      "Testing and debugging of company's clients' websites",
      "Updating and implementing the latest SEO techniques for both existing and new company projects",
      "Collaboration with UI/UX designers to ensure the technical feasibility of the designs",
      "Writing technical documentations and updating user guides to facilitate the end-users' understanding of the applications",
    ],
  },
  {
    title: "Procurement Officer",
    company_name: "Tomato Jos Farming & Processing Ltd",
    icon: tomato,
    iconBg: "#E6DEDD",
    date: "June 2021 - April 2023",
    points: [
      "Managing the acquisition of goods and services for the organization",
      "Sourcing suppliers, negotiating contracts and ensuring cost-effectiveness",
      "Maintaining compliance with procurement policies and regulations to support operational needs",
      "Daily tracking and reconciliation of data entry discrepancies",
      "Monitoring of inventory thresholds across multiple departments",
      "Monthly forecast of purchases based on previous historical data",
      "Creation of a Procurement Request Management system on Google spreadsheets",
      "Ensured efficient and cost-effective procurement processes.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I always knew he will do great things. Started rough but he knows how stuff works now.",
    name: "Emeka Ndubusi",
    designation: "Hub Manager",
    company: "Kadahive",
    image: kadahive,
  },
  {
    testimonial:
      "Tomi is dedicated and comitted to continous Learning. I like that about him. Keep pushing bro.",
    name: "David Adigun",
    designation: "Tech Talent Instructor",
    company: "React Dev",
    image: emmanuel,
  },
  {
    testimonial:
      "A problem solver. Bold insights and creative ideas. Nothing but good words for Tomilola.",
    name: "Abdulmateen Lawal",
    designation: "Technical Product Manager",
    company: "Innovations Inc",
    image: lawal,
  },
];

const projects = [
  {
    name: "TrendsGram",
    description:
      "A social media platform where authenticated users can create and share posts with everyone on the platform. Some of the features includes user accounts, home feeds, like and save posts, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescripts",
        color: "pink-text-gradient",
      },
    ],
    image: trendsgram,
    source_code_link: "https://github.com/naijabuz/trendsgram",
    demo_link: "https://trendsgram.vercel.app/",
  },
  {
    name: "Travel Buddy",
    description:
      "A trvel guide website with modern and eye cathing designs optimized for performance and mobile responsiveness across all platforms",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travelbuddy,
    source_code_link: "https://github.com/naijabuz/travel-buddy",
    demo_link: "https://travel-buddy-nu.vercel.app/",
  },
  {
    name: "Openai Article Summarizer",
    description:
      "An SPA web app where users can input the url to an article website and the platform summarizes the whole text for the user. Features: Saves users previous searhces in local storage, well structured",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid-API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: summarizer,
    source_code_link: "https://github.com/naijabuz/ai-article-summarizer",
    demo_link: "https://ai-article-summariza.netlify.app/",
  },
  {
    name: "Metaverse Madness",
    description:
      "Metaverse is a new thing in the future, where you can enjoy the feel of virtual world by feeling like it's really real. Immersive designs and appealing animations",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/naijabuz/MetaverseMadness",
    demo_link: "https://the-meta-mad.netlify.app/",
  },
  {
    name: "AI Image Generator",
    description:
      "A web-based application that allows users to create AI images based on their text inputs with options to share with the community and download the images to their devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
    ],
    image: imagegenerator,
    source_code_link: "https://github.com/naijabuz/ai-images-generator",
    demo_link: "https://ai-imagez-generator.netlify.app/",
  },
  {
    name: "NaijaBuzz300",
    description:
      "A music solutions platform offering music promotions services to artistes and stakeholders in the music industry. Equipped with tools like artiste to-do app, etc.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "WordPress",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: naijabuzz300,
    source_code_link: "https://github.com/naijabuz?tab=repositories",
    demo_link: "https://naijabuzz300.net/",
  },
  {
    name: "A Minimalist Portfolio",
    description:
      "A minimalistic portfolio made for developers to display projects, link to their demo work and social handles",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/naijabuz/minimalist-portfolio",
    demo_link: "https://my-bio-portfolio.netlify.app/",
  },
  {
    name: "Shopping Cart",
    description:
      "A simple shopping cart project for users to add items to cart, display total prices and items, remove items, display all items and clear the items from the cart.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
    ],
    image: shoppingcart,
    source_code_link:
      "https://github.com/naijabuz/clothing-store/tree/main/Shopping-Cart",
    demo_link: "https://shoppng-cart.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialss,
};
