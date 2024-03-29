import { IProyect } from "@interfaces/proyect.interface";

export const projects: IProyect[] = [
  {
    name: 'InfoReader App',
    description: 'This is a web application that allows you to read technology news, using RSS feeds from different sources and saving them in a database. It also allows you to create a user account and save your favorite news.',
    image: 'https://res.cloudinary.com/dfeujtobk/image/upload/v1658775333/InfoReader/InfoReader_dok2nr.png',
    technologies: ['Angular', 'NodeJs', 'Express', 'MongoDB'],
    urlGithub: 'https://github.com/marcode24/InfoReader-App',
    urlProduction: 'https://inforeader.netlify.app/',
  },
  {
    name: 'Smart Dental',
    description: 'This application allows you to manage a dental clinic, it allows you to guide a history of the patient, manage the appointments, inventory, employees and patients.',
    image: 'https://res.cloudinary.com/dfeujtobk/image/upload/v1675893002/Smart%20Dental/preview-1_ku4dli.png',
    technologies: ['Angular', 'NestJs', 'MySQL', 'Docker'],
    urlGithub: 'https://github.com/marcode24/smart-dental-frontend',
    urlProduction: 'https://smart-dental-a704f.web.app/',
  },
  {
    name: 'Bon Appetito App',
    description: 'Here you can buy or build your own pizza, choose the ingredients and the size of the pizza, and then you can order it.',
    image: 'https://res.cloudinary.com/dfeujtobk/image/upload/v1675889524/Bon%20Appetito/BonAppetito_vmdbma.png',
    technologies: ['Angular', 'TypeScript', 'SASS', 'HTML'],
    urlGithub: 'https://github.com/marcode24/bon-appetito',
    urlProduction: 'https://bon-appetito.netlify.app/',
  },
  {
    name: 'Memory Game',
    description: 'This is a memory game, you have to find the pairs of cards, you have 3 levels of difficulty, easy, medium and hard.',
    image: 'https://res.cloudinary.com/dfeujtobk/image/upload/v1675889755/Memory%20Game/Card-Memory-Game_yjtzmp.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    urlGithub: 'https://github.com/marcode24/memory-game',
    urlProduction: 'https://marcode24.github.io/memory-game/',
  },
  {
    name: 'Unit Converter',
    description: 'This is a unit converter, you can convert from one unit to another, it has different categories, such as length, weight, volume, etc.',
    image: 'https://res.cloudinary.com/dfeujtobk/image/upload/v1666050773/Unit%20Converter/Unit-Converter_vzcznu.png',
    technologies: ['Angular', 'TypeScript', 'CSS', 'HTML'],
    urlGithub: 'https://github.com/marcode24/Unit-Converter',
    urlProduction: 'https://unit-converter-site.netlify.app/',
  }
];
