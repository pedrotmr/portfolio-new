export type Project = {
  name: string;
  github: string;
  link?: string;
  description: string[];
  tags: string[];
  image: string;
};

export const projects: Project[] = [
  {
    name: 'Juicy',
    github: 'https://github.com/pedrotmr/juicy',
    description: [
      'Juicy is a web application which allow users to find different cocktail recipes in a visually appealing user interface and also post and share their own creations with all the users.',
      'The app was created with the idea that everyone could enjoy a good cocktail at home, without having to go out and spend lots of money.',
    ],
    tags: ['TypeScript', 'React', 'Saas', 'Redux', 'Cypress', 'Node.js', 'Express', 'MongoDB'],
    image: '/images/projects/juicy.gif',
  },
  {
    name: 'Schlepper',
    github: 'https://github.com/pedrotmr/schlepper-app',
    description: [
      'Schlepper is a record/tape/cd trading application that focuses on in-town trades to bypass the growing expense of the post-office.',
      'Users can add albums to their collection and make trades with people in thier community by finding them in the "find trades" section.',
    ],
    tags: ['TypeScript', 'React', 'Redux', 'Node.js', 'Express', 'PostgresSQL'],
    image: '/images/projects/schlepper.gif',
  },
  {
    name: 'Zims',
    github: 'https://github.com/pedrotmr/zims',
    description: [
      'ZIMS is a play-to-earn gaming applicaiton, which allows users to play arcade games and click actions buttons to earn points, which can then be later used to mint NFTs.',
      'Collaborated with a team of five engineers developing the application from the ground up.',
    ],
    tags: ['JavaScript', 'React', 'Redux', 'Chakra UI', 'Truffle', 'Ganache', 'Moralis'],
    image: '/images/projects/zims.gif',
  },
  // {
  //   name: 'News Aggregator',
  //   github: 'https://github.com/pedrotmr/news-aggregator',
  //   link: 'https://news-aggregator-kohl-three.vercel.app/',
  //   description: [
  //     'This website aggregates news articles from different sources, offering a streamlined and personalized way to stay informed.',
  //     'Users can customize their news feed based on personal preferences, ensuring relevant and tailored content.',
  //   ],
  //   tags: ['JavaScript', 'React', 'React Query', 'TailwindCSS', 'Docker'],
  //   image: '/images/projects/news-aggregator.png',
  // },
  {
    name: 'Crypto Tools',
    github: 'https://github.com/pedrotmr/crypto-tools',
    link: 'https://web3-dapp-iota.vercel.app/',
    description: [
      'This application allows users to track the top market trending cryptocurrencies with a simple and intuitive interface.',
      'Users can also check their crypto wallet balances and send and swap cryptocurrencies from the Ethereum newtork.',
    ],
    tags: ['JavaScript', 'React', 'TailwindCSS', 'SWR', 'Ethers.js', 'Lightweight Charts'],
    image: '/images/projects/crypto-tools.png',
  },
];
