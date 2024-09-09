type TimelineEntry = {
  company_name: string;
  position: string;
  company_url: string;
  date: string;
  color: 'purple' | 'orange' | 'yellow' | 'sky' | 'green' | 'lightGreen' | 'pink';
  description: string;
  bulletPoints?: string[];
  tags: string[];
  imageUrls?: string[];
};

export const timelineData: TimelineEntry[] = [
  {
    company_name: 'Hello Outbound',
    position: 'Frontend Developer',
    company_url: 'https://www.hellooutbound.com/',
    date: '2023 - 2024',
    color: 'sky',
    tags: ['React', 'Next.js', 'Chakra UI', 'React Query', 'Charts.js', 'Node.js'],
    description:
      'Hello Outbound is sales agency build by engineers, growth strategists, and copywriters.',
    bulletPoints: [
      'Led migration from Angular to React, boosting user experience and stability.',
      'Built performant, reusable React components aligned with Figma designs.',
      'Ensured cross-browser compatibility and optimized performance.',
      'Contributed to backend improvements with Node.',
    ],
    imageUrls: ['/images/timeline/hello-outbound-1.png', '/images/timeline/hello-outbound-2.png'],
  },
  {
    company_name: 'Energi',
    position: 'Web3 Frontend Developer',
    company_url: 'https://energi.world/',
    date: '2022 - 2023',
    color: 'green',
    description:
      'Energi is the safest blockchain for DeFi and NFTs, featuring innovative security protocols to prevent cybercrime. ',
    bulletPoints: [
      'Built user interfaces for decentralized apps with React, Next.js, and Material UI.',
      'Integrated smart contracts with Web3.js and Ether.js for blockchain interactions.',
      'Collaborated with designers and backend to sync UI/UX with app structures.',
      'Stayed at the forefront of blockchain and frontend development technologies.',
    ],
    tags: ['React', 'Next.js', 'Material UI', 'Blockhain', 'Ethers.js', 'Web3.js'],
    imageUrls: ['/images/timeline/energi-1.png', '/images/timeline/energi-2.png'],
  },
  {
    company_name: 'Vendo',
    position: 'Frontend Developer',
    company_url: 'https://www.getvendo.com/',
    color: 'lightGreen',
    date: '2022',
    description:
      'Vendo is an all-in-one SaaS solution that lets you launch your own multi-vendor marketplace e-commerce business within days.',
    bulletPoints: [
      'Maintained codebase with Next.js and TailwindCSS for quality and performance.',
      'Built reusable components for a multi-vendor platform with StrapiCMS.',
      'Authored test cases to improve reliability and reduce bugs.',
      'Integrated Sentry for error tracking and performance monitoring.',
      'Handled version control with GitHub and deployments via Vercel.',
    ],
    tags: ['Next.js', 'TailwindCSS', 'StrapiCMS', 'Sentry', 'Vercel'],
    imageUrls: ['/images/timeline/vendo-1.png', '/images/timeline/vendo-2.png'],
  },
  {
    company_name: 'Clutch',
    position: 'Web3 Frontend Developer',
    company_url: 'https://www.joinclutch.xyz/',
    color: 'pink',
    date: '2021 - 2022',
    description:
      'Clutch Wallet is a toolkit designed to simplify the onboarding process for users into Web3, with user-friendly security features.',
    bulletPoints: [
      'Developed a robust DeFi crypto wallet with seamless smart contract integration.',
      'Implementd token sending and swapping functionalities.',
      'Built reusable React components styles with Saas.',
      'Contributed to the project’s success with steady growth and positive feedback.',
      'Ensured security, reliability, and adaptability throughout the developmen',
    ],
    tags: ['React', 'Saas', 'Typescript', 'Ethereum', 'Ethers.js', 'Solidity'],
    imageUrls: ['/images/timeline/clutch-1.png', '/images/timeline/clutch-2.png'],
  },
];
