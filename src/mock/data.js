import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Matthew Riddett | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my developer portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matthew Riddett',
  subtitle: "I build games, apps and things for the web.",
  cta: 'Tell me more...',
};

// ABOUT DATA
export const aboutData = {
  img: 'mrprofilepic.webp',
  paragraphOne:
    "Hi there, my name is Matthew. I'm a front-end developer based in Victoria BC. I'm currently agressively unemployed and looking for the next opportunity.",
  paragraphTwo:
    'I started learning to code last year (2019) building an app that helps kids with non-verbal autism learn to read and communicate. From there I branched out to web development and am now seeking to start a new career in the field.',
  paragraphThree: 'Some of my work is listed below',
  resume: 'https://www.matthewriddett.com/Static/Matthew_Riddett_Developer_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'mlu_banner.webp',
    title: 'MyLevelUP',
    info: 'Some Stuff',
    info2: 'Some more stuff...',
    url: 'https://mylevelup.app',
    repo: 'https://github.com/lazyninjacat/mylevelup', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'inferno_banner.webp',
    title: 'Inferno Fall',
    info: 'Built for Orca Jam 2019',
    info2:
      'A Journey through Dantes inferno. Text-based adventure game based on original public domain material',
    url: 'https://play.google.com/store/apps/details?id=com.lazyninjacat.fallintoinferno',
    repo: 'https://github.com/lazyninjacat/infernofall', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blogPreview.webp',
    title: 'My Blog',
    info: 'Built with Gatsby, react, webpack, graphQL.',
    info2: 'Used to keep a log of my software dev learning.',
    url: 'https://reverent-turing-5f0b1e.netlify.com/blog/',
    repo: 'https://github.com/lazyninjacat/mrblog', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'personalWebsite.webp',
    title: 'Personal Website v.1',
    info: 'Built with HTML, (S)CSS, and JS.',
    info2:
      'This was my first attempt at building a developer portfolio. I built it partly as an exercise in web development fundamentals. Focused in particular on developing proficiency with Sass.',
    url: 'https://flamboyant-noyce-a93995.netlify.com',
    repo: 'https://github.com/lazyninjacat/lazyninjacat.github.io', // if no repo, the button will not show up
  },
];
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'matthew.riddett@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://www.twitter.com/lazyninjacat',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/lazyninja',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-riddett-106937167/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/lazyninjacat',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
