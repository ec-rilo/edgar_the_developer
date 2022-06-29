import heroImg from '../../public/images/projects/rumble/rumble-phones-imgs.png';
import mobileImg from '../../public/images/projects/rumble/rumble-mobile.png';
import decoImg1 from '../../public/images/projects/rumble/rumble-deco-img-1.png';
import decoImg2 from '../../public/images/projects/rumble/rumble-deco-img-2.png';
import decoImg3 from '../../public/images/projects/rumble/rumble-deco-img-3.png';

const hero = {

  title: 'Default',
  subtitle: '',
  paragraphsArr: [''],
  repo: '#',
  imgSrc: heroImg,

};

const purpose = {

  paragraphsArr: [''],
  imgSrc: mobileImg,
  alt: '',
  cover: false,

};

const skills = {

  skillsArr: [
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
  ],
  paragraphsArr: [''],

};

const problem = {

  paragraphsArr: [
    `
    I've taken courses that had an emphasis on understanding web development technologies as well as the basics of computer science concepts. After having pair programmed with many different people and applied the web development concepts into many projects you can now see my skills reflected on all new projects I've created.
    `
  ],

};

const pictures = {

  arr: [
    { src: decoImg3, alt: "#"},
    { src: decoImg2, alt: "#"},
    { src: decoImg1, alt: "#"},
  ]

};

const pictures2 = {

  arr: [
    { src: heroImg, alt: "#"},
  ]

};

const whatsNext = {

  paragraphsArr: [''],

};

const lessons = {

  paragraphsArr: [''],

};

const altProjects = [

  {
    title: '',
    subTitle: '',
    src: heroImg,
    alt: '',
  },

];

const rumbleData = {
  hero,
  purpose,
  skills,
  problem,
  pictures,
  lessons,
  whatsNext,
  altProjects,
  pictures2,
};

export default rumbleData;
