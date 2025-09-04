import ecommerceImg from '../assets/project_ecommerce.png';
import edtechImg from '../assets/project_edtech.png';
import cropImg from '../assets/project_crop.png';
import robotImg from '../assets/project_robot.png';
import plantWateringImg from '../assets/project_plant_watering.png';
import quizAppImg from '../assets/project_quizapp.png'; 
import mnistSvmImg from '../assets/project_mnist_svm.png';
import irisMlpSvmImg from '../assets/project_iris_mlp_svm.png';
import irisPerceptronImg from '../assets/project_iris_perceptron.png';
import binaryNNImg from '../assets/project_binary_nn.png';
import dataVizImg from '../assets/project_data_viz.png';
import chikungunyaVizImg from '../assets/project_chikungunya.gif';
import logicGatesImg from '../assets/project_logic_gates.png';
import linearRegressionImg from '../assets/project_linear_regression.png';
import ocrPipelineImg from '../assets/project_ocr.png';
import gmcHighlightsImg from '../assets/project_gmc_highlights.png';
import llamaFineTuneImg from '../assets/project_llama_finetune.png';
import ragQaImg from '../assets/project_rag_qa.png';

// ⚠️ Add this image to your assets folder

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

  {
  title: 'MNIST SVM Classification',
  description:
    'Implemented an SVM model for handwritten digit recognition with feature scaling and hyperparameter tuning.',
  tech: ['Python', 'Scikit-learn', 'SVM'],
  link: 'https://github.com/abdurrahmanrussel/mnist-svm-classification',
  image: mnistSvmImg,
},
{
  title: 'Iris MLP & SVM Classification',
  description:
    'Built and compared MLP (from scratch in NumPy) and SVM models on the Iris dataset; evaluated with ROC and F1 score.',
  tech: ['NumPy', 'Scikit-learn', 'MLP', 'SVM'],
  link: 'https://github.com/abdurrahmanrussel/iris-mlp-svm',
  image: irisMlpSvmImg,
},
{
  title: 'Single Layer Perceptron (Iris Dataset)',
  description:
    'Implemented a single layer perceptron to classify the Iris dataset and evaluated using confusion matrix, ROC, and F1 score.',
  tech: ['Python', 'NumPy', 'Matplotlib'],
  link: 'https://github.com/abdurrahmanrussel/iris-single-layer-perceptron',
  image: irisPerceptronImg,
},
{
  title: 'Binary Classification Neural Network',
  description:
    'Developed a binary classification neural network from scratch in NumPy with forward/backward propagation and accuracy evaluation.',
  tech: ['Python', 'NumPy', 'Neural Networks'],
  link: 'https://github.com/abdurrahmanrussel/binary-classification-nn--numpy-',
  image: binaryNNImg,
},
{
  title: 'Python Data Visualization & Analysis',
  description:
    'Performed exploratory data analysis using Pandas, Matplotlib, Seaborn, and Plotly; created heatmaps, pairplots, and interactive dashboards.',
  tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
  link: 'https://github.com/abdurrahmanrussel/python-data-visualization-and-analysis',
  image: dataVizImg,
},
{
  title: 'State-wise Chikungunya Data Visualization GIFs',
  description:
    'Created animated GIFs visualizing 2018–2025 Indian state-wise Chikungunya data using Python and JSON maps for clear insights.',
  tech: ['Python', 'Matplotlib', 'GeoJSON'],
  link: 'https://github.com/abdurrahmanrussel/chikungunya-india-visualization',
  image: chikungunyaVizImg,
},
{
  title: 'Logic Gates Using Neural Networks',
  description:
    'Simulated AND, OR, and XOR gates using neural networks to demonstrate learning capability of simple models.',
  tech: ['Python', 'NumPy'],
  link: 'https://github.com/abdurrahmanrussel/Logic-gates-using-Neural-Networks',
  image: logicGatesImg,
},
{
  title: 'Linear Regression Demo',
  description:
    'Implemented linear regression from scratch to predict numerical outcomes with gradient descent.',
  tech: ['Python', 'NumPy'],
  link: 'https://github.com/abdurrahmanrussel/linear_regression_demo',
  image: linearRegressionImg,
},
{
  title: 'Optical Character Recognition (OCR) Pipeline',
  description:
    'Built an OCR pipeline using Tesseract and OpenCV to extract text from scanned documents and images.',
  tech: ['Python', 'OpenCV', 'Tesseract'],
  link: 'https://github.com/abdurrahmanrussel/OCR',
  image: ocrPipelineImg,
},
{
  title: 'GMC Highlights Generator with Gemini API',
  description:
    'Cleaned TSV product data, performed language detection, and generated product highlights using Python and Gemini 2.5 Flash pipeline.',
  tech: ['Python', 'Gemini API', 'Lang Detection'],
  link: 'https://github.com/abdurrahmanrussel/gmc-product-highlights',
  image: gmcHighlightsImg,
},
{
  title: 'LLaMA-2 QLoRA Fine-Tuning',
  description:
    'Fine-tuned LLaMA-2 7B with QLoRA on Guanaco 1K dataset (~16M parameters) for instruction-following tasks.',
  tech: ['PyTorch', 'Transformers', 'LLaMA-2', 'QLoRA'],
  link: 'https://github.com/abdurrahmanrussel/llama2-qlora-finetune',
  image: llamaFineTuneImg,
},
{
  title: 'RAG-based PDF QA System',
  description:
    'Developed a RAG pipeline: uploaded PDFs, extracted text with OCR, created FAISS embeddings, and used a 4-bit LLaMA-2 model to answer questions.',
  tech: ['Python', 'FAISS', 'OCR', 'LLaMA-2'],
  link: 'https://github.com/abdurrahmanrussel/rag-pdf-qa',
  image: ragQaImg,
},

];
