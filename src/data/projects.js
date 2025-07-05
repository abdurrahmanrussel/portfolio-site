import ecommerceImg from '../assets/project_ecommerce.png';
import edtechImg from '../assets/project_edtech.png';
import cropImg from '../assets/project_crop.png';
import robotImg from '../assets/project_robot.png';
import plantWateringImg from '../assets/project_plant_watering.png';
import quizAppImg from '../assets/project_quizapp.png'; // ⚠️ Add this image to your assets folder

export const projects = [
  
  {
    title: 'E-commerce Website',
    description:
      'Designed frontend and login functionality for an e-commerce platform, using Angular to create a responsive and user-friendly interface.',
    tech: ['Angular', 'HTML', 'CSS'],
    link: 'https://github.com/abdurrahmanrussel/E-Commerce-Project-Angular-',
    image: ecommerceImg,
  },
  {
    title: 'Ed-Tech Website',
    description:
      'Collaborated with a team to build a frontend website during industrial attachment. Utilized CI/CD pipeline and deployed the website using Firebase.',
    tech: ['ReactJS', 'HTML', 'CSS', 'Firebase'],
    link: 'https://github.com/abdurrahmanrussel/amrao-pari-react-frontend',
    image: edtechImg,
  },
  {
    title: 'Quiz Web Application',
    description:
      'An interactive quiz web application built with React and TailwindCSS, designed for SSC, HSC, Admission, and Job exams. Users can select categories, choose subjects, and take quizzes chapter-wise, with results and explanations.',
    tech: ['React.js', 'TailwindCSS', 'React Router'],
    link: 'https://github.com/abdurrahmanrussel/backbencher-school', // ✅ Update this link if different
    image: quizAppImg,
  },
  {
    title: 'Agriculture Information Portal',
    description:
      'Developed a Bangla website on crops and diseases in Bangladesh with a user-friendly interface, aimed at helping farmers identify and manage different diseases effectively.',
    tech: ['PHP', 'HTML', 'CSS'],
    link: '', // add GitHub link if available
    image: cropImg,
  },
  {
    title: 'Fire Fighting Robot Car',
    description:
      'Designed an Arduino-based fire-fighting robot with IR sensors and a servo motor to detect and extinguish fire automatically.',
    tech: ['Arduino', 'IR Sensors', 'Servo Motor'],
    link: 'https://github.com/abdurrahmanrussel/Arduino-Fire-Fighting-Robot',
    image: robotImg,
  },
  {
    title: 'Automatic Plant Watering System',
    description:
      'Designed an automatic plant watering system that monitors soil moisture and waters plants as needed.',
    tech: ['Arduino', 'Soil Moisture Sensor', 'Relay'],
    link: 'https://github.com/abdurrahmanrussel/Automatic-Plant-Watering-System',
    image: plantWateringImg,
  },
];
