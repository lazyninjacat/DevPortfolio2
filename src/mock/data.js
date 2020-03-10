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
  subtitle: 'I build games, apps and things for the web.',
  cta: 'Tell me more...',
};

// ABOUT DATA
export const aboutData = {
  img: 'mrprofilepic.JPG',
  paragraphOne:
    "Hi there, my name is Matthew. I'm a front-end developer based in Victoria BC. I'm currently looking for employment and opportunities to further develop my skills.",
  paragraphTwo:
    'I started learning to code last year (2019) building an app that helps kids with non-verbal autism learn to read and communicate. From there I branched out to web development and am now seeking to start a new career in the field.',
  paragraphThree:
    "Here are a few of the technologies I've been learning/using recently: Unity, C#, React, GraphQL, Gatsby, JavaScript, Babel, Webpack, Sass/CSS, Git, Netlify, WebGL, SQL ",
  resume: 'https://www.matthewriddett.com/Static/Matthew_Riddett_Developer_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'personalWebsiteVersionTwoPreview.png',
    title: 'Personal Website V.2',
    info: 'This Website!',
    info2:
      'Built with Gatsby, React and GraphQL. I made this with the goal of maximizing all Lighthouse audit metrics, and building a simple, clean version of my portfolio.',
    info3: 'React, GraphQL, Gatsby, Sass',
    url: 'https://keen-jepsen-223bad.netlify.com/',
    repo: 'https://github.com/lazyninjacat/DevPortfolio2', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mluPreview.png',
    title: 'MyLevelUP',
    info:
      'A personalized learning app for non-verbal kids on the autism spectrum. I built this with the help of a number of folks over the course of two years.',
    info2:
      "The app (iOS or Android) adapts to each learner's unique strengths and challenges, improving over time with repeated use, and includes a comprehensive and customizable parent/educator back-end.",
    info3: 'Unity, C#, SQLite, Google Play, Apple App Store',
    url: 'https://mylevelup.app',
    repo: 'https://github.com/lazyninjacat/mylevelup', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'inferno_banner.webp',
    title: 'Inferno Fall',
    info: 'Built for Orca Jam 2019',
    info2:
      'A single-player narrative based adventure game, following Dante through the Inferno of the Devine Comedy.',
    info3: 'Unity, C#, SQLite',

    url: 'https://play.google.com/store/apps/details?id=com.lazyninjacat.fallintoinferno',
    repo: 'https://github.com/lazyninjacat/infernofall', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'blogPreview.webp',
    title: 'My Blog',
    info: 'Built with Gatsby, react, webpack, graphQL.',
    info2: 'Used to keep a log of my software dev learning.',
    info3: 'React, GraphQL, Gatsby, Netlify CMS',

    url: 'https://reverent-turing-5f0b1e.netlify.com/blog/',
    repo: 'https://github.com/lazyninjacat/mrblog', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pwvone.PNG',
    title: 'Personal Website v.1',
    info: 'Built with HTML, (S)CSS, and JS.',
    info2:
      'This was my first attempt at building a developer portfolio. I built it partly as an exercise in web development fundamentals. Focused in particular on developing proficiency with Sass.',
    info3: 'HTML, Sass/CSS, JS, Netlify',

    url: 'https://flamboyant-noyce-a93995.netlify.com',
    repo: 'https://github.com/lazyninjacat/lazyninjacat.github.io', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'dicegame.webp',
    title: 'Dice Game',
    info:
      "I Built this as part of a Udemy Complete JavaScript course. It's a simple dice game for two players, first one to the pre-set total wins.",
    info2:
      'This was built as an exercise in pure ES5 javascript, simple CSS styling and webdesign fundamentals.',
    info3: 'HTML, CSS, JS',

    url: 'https://jolly-lovelace-beba7d.netlify.com/',
    repo: 'https://github.com/lazyninjacat/DiceGame', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'budgetapppreview.webp',
    title: 'Budget App',
    info:
      'A simple monthly budget calculator/tracker app. Built as an exercise in JavaScript fundamentals.',
    info2: 'Built as part of a Udemy complete Javascript course.',
    info3: 'HTML, CSS, JS',

    url: 'https://admiring-babbage-3c39d3.netlify.com/',
    repo: 'https://github.com/lazyninjacat/BudgetApp', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'dantePreview.webp',
    title: 'A Tribute to Dante Alighieri',
    info: 'Built as an exercise for freecodecamp.org. Simple html and css single page site.',
    info2: 'This is one of my very first ever web pages!',
    info3: 'HTML, CSS',

    url: 'https://admiring-goodall-86a0ea.netlify.com/',
    repo: 'https://github.com/lazyninjacat/DanteTribute', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ggj2020_1.webp',
    title: 'If These Walls Could Talk',
    info:
      "Built this with two others for Global Game Jam 2020. It's a house manager sim, where you have to fix up an old house and manage your tenants' happiness.",
    info2: 'A work in progress...',
    info3: 'Unity, C#, WebGL',

    url: 'https://admiring-goodall-86a0ea.netlify.com/',
    repo: 'https://github.com/lazyninjacat/DanteTribute', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ggj2019.webp',
    title: "Why Don't You Just Go Home!!",
    info: 'Built for Global Game Jam 2019.',
    info2: "It's a voice-controlled golf game where you have to yell at the ball to make it move.",
    info3: 'Unity, C#',

    url: 'https://github.com/lazyninjacat/GGJ2019',
    repo: 'https://github.com/lazyninjacat/GGJ2019', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rgp.PNG',
    title: 'Responsive Grid',
    info: 'A responsive grid with embeded links. An exercise in Sass :-)',
    info2: 'Built as an exercise to learn responsive design with CSS FLexbox and CSS Grid.',
    info3: 'HTML, Sass/CSS',

    url: 'https://github.com/lazyninjacat/GGJ2019',
    repo: 'https://github.com/lazyninjacat/GGJ2019', // if no repo, the button will not show up
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
