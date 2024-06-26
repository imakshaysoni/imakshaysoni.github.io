// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'imakshaysoni', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/imakshaysoni/imakshaysoni.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/imakshaysoni/resume, then set base to '/resume/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['imakshaysoni/my-project1', 'imakshaysoni/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['imakshaysoni/resume'], // List of repository names to display. example: ['imakshaysoni/my-project1', 'imakshaysoni/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
//         {
//           title: 'Project Name',
//           description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//           imageUrl:
//             'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
//           link: 'https://example.com',
//         },
//         {
//           title: 'Project Name',
//           description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//           imageUrl:
//             'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
//           link: 'https://example.com',
//         },
      ],
    },
  },
  seo: {
    title: 'Akshay Soni',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'imakshaysoni',
    twitter: '',
    mastodon: '',
    researchGate: 'iamakshaysoni',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://imakshaysoni.github.io/',
    phone: '8871667107',
    email: 'akshaysoni460@gmail.com',
  },
  resume: {
    fileUrl:
      'https://imakshaysoni.github.io/resume/', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'FastApi',
    'Amazon Web Services',
    'C++',
    'Boto3',
    'PostgreSQL',
    'MySQL',
    'Data Structure & Algorithms',
    'Git',
    'Docker',
    'System Design',
  ],
  experiences: [
    {
      company: 'Opcito Technology',
      position: 'Senior Software Developer ',
      from: 'Jan 2022',
      to: 'Present',
      companyLink: 'https://www.opcito.com/',
    },
    {
      company: 'Futurense Technologies',
      position: 'Data Engineer',
      from: 'August 2021',
      to: 'January 2022',
      companyLink: 'https://futurense.com/',
    },
    {
      company: 'Amdocs SmartOps India',
      position: 'Software Engineer',
      from: 'November 2018',
      to: 'August 2021',
      companyLink: 'https://www.amdocs.com/',
    },
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'Lakshmi Narain College of Technology ',
      degree: 'Bachelor of Engineering',
      from: '2014',
      to: '2018',
    },
  ],
  publications: [
//     {
//       title: 'Publication Title',
//       conferenceName: '',
//       journalName: 'Journal Name',
//       authors: 'John Doe, Jane Smith',
//       link: 'https://example.com',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     },
//     {
//       title: 'Publication Title',
//       conferenceName: 'Conference Name',
//       journalName: '',
//       authors: 'John Doe, Jane Smith',
//       link: 'https://example.com',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'imakshaysoni', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/imakshaysoni/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
