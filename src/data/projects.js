import ecommerceImg from '../assets/project_ecommerce.png';
import edtechImg from '../assets/project_edtech.png';
import cropImg from '../assets/project_crop.png';
import qatvqImg from '../assets/project_qatvq.png';

export const projects = [
  {
    title: 'QAT-VQ Model Compression',
    description:
      'Compressed DistilBERT using Quantization-Aware Training and Vector Quantization, reducing size from 132MB to 122MB while retaining 0.82 accuracy.',
    tech: ['PyTorch', 'Transformers', 'Python'],
    link: 'https://github.com/abdurrahmanrussel/QAT-VQ-Compression',
    image: qatvqImg,
  },
  {
    title: 'E-commerce Website',
    description: 'Frontend and login functionality for an e-commerce platform built with Angular.',
    tech: ['Angular', 'HTML', 'CSS'],
    link: 'https://github.com/abdurrahmanrussel/E-Commerce-Project-Angular-',
    image: ecommerceImg,
  },
  {
    title: 'Ed‑Tech Website',
    description: 'ReactJS frontend for an education tech platform with CI/CD via Firebase.',
    tech: ['React', 'Firebase'],
    link: 'https://github.com/abdurrahmanrussel/amrao-pari-react-frontend',
    image: edtechImg,
  },
  {
    title: 'Agriculture Information Portal',
    description:
      'Bangla website helping farmers identify and manage crop diseases.',
    tech: ['PHP', 'HTML', 'CSS'],
    link: 'https://github.com/abdurrahmanrussel/Agri-Info-Portal', // hypothetical
    image: cropImg,
  },
];
