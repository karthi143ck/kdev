import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Karthick K',
  title: "Hello, I'm Karthick",
  description:
    "I'm passionate Full Stack web developer with a focus on creating complete projects using cutting-edge technologies like React.js, Ant Design, TypeScript, MongoDB, Python, and Flask. I have a diverse skill set that spans frontend and backend development, allowing me to build responsive and dynamic web applications.",
  resumeLink:
    'https://drive.google.com/file/d/18g0nHnynwYdgH_pQ-GDAUQGAa0DfHrmO/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'karthi143ck',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://karthi143ck.github.io/',
  linkedin: 'https://www.linkedin.com/in/karthick-k-3959251aa/',
  github: 'https://github.com/karthi143ck',
  instagram: 'https://www.instagram.com/karthi143ck',
  facebook: 'https://www.facebook.com/100040440710650',
  twitter: 'https://twitter.com/karthi143ck',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Flask & Flask REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Flask',
          fontAwesomeClassName: 'logos:flask',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        // {
        //   skillName: 'Heroku',
        //   fontAwesomeClassName: 'logos:heroku-icon',
        // },
        // {
        //   skillName: 'PostgreSQL',
        //   fontAwesomeClassName: 'logos:postgresql',
        // },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        // {
        //   skillName: 'Github Actions',
        //   fontAwesomeClassName: 'logos:github-actions',
        // },
        // {
        //   skillName: 'Cloudinary',
        //   fontAwesomeClassName: 'logos:cloudinary',
        // },
        // {
        //   skillName: 'Nginx',
        //   fontAwesomeClassName: 'logos:nginx',
        // },
        // {
        //   skillName: 'Sentry',
        //   fontAwesomeClassName: 'logos:sentry-icon',
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '70', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Adhiyamaan College of Engineering',
    subHeader:
      'Bachelor of Engineering in Electrical and Electronics Engineering',
    duration: 'September 2019 - April 2023',
    desc: 'Participated in the research of IoT and published 2 papers.',
    grade: 'CGPA: 8.5',
    descBullets: [
      'IoT based smart billing system',
      'IoT based smart monitoring system',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer',
    company: 'SISCASO',
    companyLogo: '/img/icons/common/siscaso.jpg',
    date: 'Dec 2022 - Current',
    desc: "Create a dynamic web applications using HTML, CSS, JavaScript, ReactJS, and Ant Design. I'm also skilled in TypeScript for type-safe development and integrating backend systems with MongoDB, Python, and Flask for efficient data management and processing.",
  },
  {
    role: 'IoT Developer',
    company: 'Emertxe Information Technologies',
    companyLogo: '/img/icons/common/emertxe.jpg',
    date: 'Nov 2022 – Dec 2022',
    desc: 'As an IoT Developer, I designed and simulated advanced IoT projects using various technologies like embedded systems, sensors, and communication protocols. I focused on optimizing their performance and ensuring seamless integration for real-world applications.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Portfolio Website',
    desc: 'Software Portfolio Website Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/karthi143ck/kdev',
    link: 'https://www.kdev.in.net/',
  },
  {
    name: 'Meshl',
    desc: 'With Meshl Mart, it’s easy to create the website with the best price.',
    github: 'https://github.com/karthi143ck/meshl1',
    link: 'https://meshl.kdev.in.net/',
  },
];

export const feedbacks: FeedbackType[] = [
  
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Karthick Dev',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Karthick',
  // image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://www.kdev.in.net/',
  keywords: [
    'Karthick K',
    'Kdev',
    '@karthi143ck',
    'meshl',
    'webcrown',
    'karthick Portfolio ',
  ],
};
