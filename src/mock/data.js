import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jeryl Estopace | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Hi! I'm Jeryl Estopace. Welcome to my Portfolio website.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Jeryl Estopace',
  subtitle: 'I like to build things with code.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne:
    "I graduated with a bachelor's degree in Accounting and have been in the accounting and software services industry for more than 8 years. I'm currently working for a company as a Technical Support Engineer assisting NetSuite users.",
  paragraphTwo:
    'In 2018, I decided to pursue my old dream of becoming a Full Stack Developer. I made a commitment to learn how to code every day and also enrolled in a Graduate Diploma in Computer Science program in a university. In 2019, I published my first Flutter mobile app, created a couple of Flutter mobile application prototypes, launched a series of videos teaching Flutter and the Dart programming language, and trained a group of developers on how to create Flutter applications.',
  paragraphThree:
    'On May 16, 2020, I finally earned my Full Stack, Developer Certification at freeCodeCamp.org after completing more than 1800 hours of coursework and submitting 30 projects ranging from "Responsive Web Design" to "Information Security and Quality Assurance". I am regularly building my side-projects and explore different web development stacks outside of work.',
  resume: 'https://drive.google.com/file/d/1fWyTUMbUcG73pqZKY0HpUaOGzRr4kB3N/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'facecatch1.png',
    title: 'FaceCatch',
    info:
      'This is a full stack web application that detects the faces in an image. I built this web app using React Hooks for the front-end, Node.js and Express.js for the back-end, and PostgreSQL for the Database. I then deployed all of them in Heroku and connected the front-end and back-end to their own GitHub repositories.',
    info2: '',
    url: 'https://facecatch.herokuapp.com/',
    repo: 'https://github.com/JerylDEv/facecatch', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'myCloudList.png',
    title: 'My Cloud To-do List',
    info:
      'I always wanted to have a plain tool to store my ideas and to-dos. For this reason, I created this Android app called My Cloud To-do List using Flutter SDK and Firebase. Once you have logged in to the app, you can store your ideas and to-dos inside your Phone and into the Cloud.',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.jeryldev.my_scheduler&hl=en',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pokedex.png',
    title: 'Pokédex Project',
    info:
      'I created this website to practice React Hooks. The API I used is made by PokéAPI while the Pokéball icons I used are created by Those Icons from Flaticon.',
    info2: '',
    url: 'https://jeryldev.github.io/pokedex/',
    repo: 'https://github.com/JerylDEv/pokedex', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'codepenCollection.png',
    title: "Jeryl Estopace's freeCodeCamp Projects at CodePen",
    info:
      'This is a collection of my freeCodeCamp projects at CodePen.io. This is a collection of my freeCodeCamp projects in Responsive Web Design, Front End Libraries, and Data Visualization.',
    info2: '',
    url: 'https://codepen.io/collection/DOMkkd?grid_type=list',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'glitchCollection.png',
    title: "Jeryl Estopace's freeCodeCamp Projects at Glitch",
    info:
      "This is a collection of my freeCodeCamp projects at Glitch.com. This is a collection of my freeCodeCamp projects in API's and Microservices and Information Security And Quality Assurance.",
    info2: '',
    url: 'https://glitch.com/@JerylDEv/jeryl-estopaces-free-code-camp-projects',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jeryldevsocial@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/JerylDEv',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/JerylDEv',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/JerylDEv',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeryldev/',
    },
    {
      id: uuidv1(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCqMwRtVseF099OjN8DF7diw',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
