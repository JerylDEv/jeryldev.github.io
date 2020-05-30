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
    'I currently work as a Technical Support Engineer assisting NetSuite users. I have been in the technical software service industry for more than 6 years now.',
  paragraphTwo:
    'In 2018, I decided to pursue my old dream of becoming a Full Stack Developer and so I made a commitment to study how to code every day. In 2019, I was able to publish my first Flutter mobile application, create a couple of Flutter mobile application prototypes, create videos teaching the Dart programming language and Flutter, and train a group of people on how to create Flutter application.',
  paragraphThree:
    'On December 29, 2019, I started to learn full stack web development at freeCodeCamp.org and I also took the "The Complete Web Developer in 2020: Zero to Mastery" course at Udemy. I finally earned my Full Stack, Developer Certification at freeCodeCamp.org on May 16, 2020 and have been building full stack web applications since.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  // resume: 'https://www.slideshare.net/slideshow/embed_code/key/54t6obJEXh6XZJ', // if no resume, the button will not show up
  resume:
    'https://docs.google.com/document/d/12ylvhQ5HieBl_EwHJor3DuNF6n0L2sR-ZA5fBsnx7os/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'myCloudList.png',
    title: 'My Cloud To-do List',
    info:
      'I always wanted to have a plain tool to store my ideas and to-dos. For this reason, I created this Android app called My Cloud To-do List using Flutter SDK and Firebase. Once you have logged in to the app, you can store your ideas and to-dos inside your Phone and into the Cloud. ',
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
