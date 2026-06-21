import primeseedImg from '../assets/primeseedbd.png';
import pureOriginImg from '../assets/pure-origin-rajshahi.png';
import aatradingImg from '../assets/aatrading.png';
import kasbyiqImg from '../assets/kasbyIQ.png';
import currencyAgentImg from '../assets/currency_agent.png';
import voiceAgentImg from '../assets/voice_agent.png';
import fbAutomationImg from '../assets/fb_automation.jpg';
import telegramAutomationImg from '../assets/telegram_automation.jpeg';
import n8nAutomationImg from '../assets/n8n_automation.jpeg';
import linkedinCommentImg from '../assets/linkedin_auto_comment.png';
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

export const projects = [

  // ── Web & SaaS ──────────────────────────────────────────────────────────────
  {
    category: 'Web & SaaS',
    title: 'Prime Seed BD — Bilingual E-Commerce Platform',
    description: 'Production e-commerce storefront for a Bangladeshi seed retailer. Bilingual EN/বাংলা UI, product catalog with search and filtering, cart, COD + bKash/Nagad checkout, email-OTP auth, order tracking, and full admin dashboard. SEO/GEO-optimized with JSON-LD, hreflang, dynamic sitemap, and llms.txt.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth v5', 'Zustand', 'next-intl', 'Docker', 'Cloudflare Tunnel', 'GitHub Actions'],
    link: 'https://primeseedbd.com',
    image: primeseedImg,
  },
  {
    category: 'Web & SaaS',
    title: 'AA Trading — Automated Futures Trading Platform',
    description: 'SaaS platform selling institutional-grade NinjaTrader 8 strategies and indicators. Stripe subscription and lifetime license checkout, 7-day free trial, multi-tenant license validation, JWT auth with refresh interceptor, email notifications, and admin dashboard for order and license management. Stripe webhooks handle payment events, trial expiry, and failed renewal flows in real time. Deployed on AWS EC2 (Ubuntu) behind Nginx reverse proxy with PM2 process management and GitHub Actions CI/CD.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Stripe', 'JWT', 'Nginx', 'PM2', 'AWS EC2', 'GitHub Actions'],
    link: 'https://aatrading.us',
    image: aatradingImg,
  },
  {
    category: 'Web & SaaS',
    title: 'KasbyIQ — Real Estate Psychographic SaaS',
    description: 'B2B SaaS for real estate brokerages. Profiles agents across 6 behavioral dimensions — autonomy, competence, relatedness, grit, self-regulation, and EQ — to improve hiring and retention. Brokers see team-level insights; agents see coaching recommendations locked behind subscription. Stripe handles subscription billing and webhook-driven access control tied to plan status. Backend runs on AWS EC2 with PostgreSQL on AWS RDS, Prisma ORM, and SSL-secured Nginx — production-grade infrastructure built for US market.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS RDS', 'Prisma', 'NextAuth v5', 'Stripe', 'Tailwind CSS', 'Resend', 'AWS EC2', 'GitHub Actions'],
    link: 'http://54.159.236.60/',
    image: kasbyiqImg,
  },
  {
    category: 'Web & SaaS',
    title: 'Pure Origin Rajshahi — E-Commerce + FB AI Bot',
    description: 'Farm-to-door mango and local produce storefront with a bilingual Bengali AI customer service bot. Bot polls Facebook post comments and Messenger every 15s, replies with conversation context using Groq LLaMA 3.3 70B, serves a fixed price catalogue to prevent hallucination, and handles payment claims. 27 daily auto-posts pulled from Google Sheets with Drive images — zero manual posting.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Python', 'Flask', 'Groq API', 'LLaMA 3.3', 'Facebook Graph API', 'Google Sheets', 'Stripe', 'Vercel', 'Render'],
    link: 'https://pure-origin-rajshahi.vercel.app/',
    image: pureOriginImg,
  },
  {
    category: 'Web & SaaS',
    title: 'Quiz Web App — Backbencher School',
    description: 'Chapter-wise quiz platform for SSC, HSC, admission, and job exam candidates. Timed sessions, Bangla content, detailed result explanations.',
    tech: ['React.js', 'Tailwind CSS', 'React Router'],
    link: 'https://github.com/abdurrahmanrussel/backbencher-school',
    image: quizAppImg,
  },
  {
    category: 'Web & SaaS',
    title: 'Ed-Tech Website',
    description: 'Production ed-tech frontend built during industrial attachment at Monstarlab. CI/CD pipeline deployed to Firebase Hosting.',
    tech: ['React', 'HTML', 'CSS', 'Firebase'],
    link: 'https://github.com/abdurrahmanrussel/amrao-pari-react-frontend',
    image: edtechImg,
  },
  {
    category: 'Web & SaaS',
    title: 'E-Commerce Frontend',
    description: 'Responsive e-commerce frontend with authentication layer built with Angular. Component-driven UI with secure login flow.',
    tech: ['Angular', 'HTML', 'CSS'],
    link: 'https://github.com/abdurrahmanrussel/E-Commerce-Project-Angular-',
    image: ecommerceImg,
  },
  {
    category: 'Web & SaaS',
    title: 'Agriculture Information Portal',
    description: 'Bangla-language crop disease portal helping Bangladeshi farmers identify and manage agricultural diseases.',
    tech: ['PHP', 'HTML', 'CSS'],
    link: '',
    image: cropImg,
  },

  // ── AI & Agents ─────────────────────────────────────────────────────────────
  {
    category: 'AI & Agents',
    title: 'AI Currency Agent — ADK + A2A + MCP',
    description: 'Multi-agent currency conversion system on AWS EC2. Google ADK orchestration, A2A protocol, MCP tool calling, Groq LiteLLM — containerized with Docker.',
    tech: ['Python', 'ADK', 'A2A Protocol', 'MCP', 'FastAPI', 'Groq', 'Docker', 'AWS EC2'],
    link: 'http://51.20.7.105:8000/',
    image: currencyAgentImg,
  },
  {
    category: 'AI & Agents',
    title: 'Real-Time Voice AI Assistant',
    description: 'Speech-to-speech assistant: Whisper STT → Groq LLaMA 3.3 70B reasoning → Kokoro TTS output. Continuous conversational loop in Google Colab.',
    tech: ['Python', 'Whisper', 'Groq AI', 'LLaMA 3.3', 'Kokoro TTS'],
    link: 'https://lnkd.in/gdzyx9_t',
    image: voiceAgentImg,
  },
  {
    category: 'AI & Agents',
    title: 'LLaMA-2 QLoRA Fine-Tuning',
    description: 'Fine-tuned LLaMA-2 7B with 4-bit quantization and LoRA adapters on Guanaco 1K (~16M trainable params) for instruction-following tasks.',
    tech: ['PyTorch', 'Transformers', 'LLaMA-2', 'QLoRA'],
    link: 'https://github.com/abdurrahmanrussel/llama2-qlora-finetune',
    image: llamaFineTuneImg,
  },
  {
    category: 'AI & Agents',
    title: 'RAG-Based PDF QA System',
    description: 'RAG pipeline for PDF documents: OCR text extraction → FAISS vector indexing → grounded answers via 4-bit quantized LLaMA-2.',
    tech: ['Python', 'FAISS', 'OCR', 'LLaMA-2'],
    link: 'https://github.com/abdurrahmanrussel/rag-pdf-qa',
    image: ragQaImg,
  },
  {
    category: 'AI & Agents',
    title: 'GMC Product Highlights Generator',
    description: 'Pipeline that cleans TSV product feed data, detects language, and generates SEO-ready highlights using Gemini 2.5 Flash for Google Merchant Center.',
    tech: ['Python', 'Gemini API', 'Language Detection'],
    link: 'https://github.com/abdurrahmanrussel/gmc-product-highlights',
    image: gmcHighlightsImg,
  },
  {
    category: 'AI & Agents',
    title: 'AI Agents & Embeddings Research',
    description: 'Progression through Word2Vec, FAISS-based RAG with Ollama/Groq, and a LangGraph reasoning agent with Gemini API tracked in LangSmith.',
    tech: ['Python', 'Word2Vec', 'LangChain', 'LangGraph', 'FAISS', 'Gemini API', 'Groq', 'LangSmith', 'Ollama'],
    link: '',
    image: null,
  },

  // ── Automation ──────────────────────────────────────────────────────────────
  {
    category: 'Automation',
    title: 'Facebook Business AI Automation',
    description: '7 auto-posts/day from Google Sheets, Groq LLaMA 3.3 70B Bangla NLP comment replies, Messenger webhook for customer queries — zero infrastructure cost.',
    tech: ['Python', 'Flask', 'React', 'Groq AI', 'LLaMA 3.3', 'Facebook Graph API', 'Google Apps Script'],
    link: 'https://lnkd.in/gVZt-eTR',
    image: fbAutomationImg,
  },
  {
    category: 'Automation',
    title: 'AI LinkedIn Content Engine',
    description: 'Multi-agent n8n pipeline: 3 data sources, 3 competing LLM agents, 30-day deduplication, Slack approval gate. Self-hosted on GCP. Executes in 45 seconds.',
    tech: ['n8n', 'LLM', 'Google Sheets API', 'Slack', 'GCP', 'LinkedIn API'],
    link: '',
    image: n8nAutomationImg,
  },
  {
    category: 'Automation',
    title: 'n8n AI Workflow Suite',
    description: 'Suite of n8n automations: Telegram bot with live data pipelines, AI Gmail digest, lead capture, and Stripe payment → auto email trigger.',
    tech: ['n8n', 'Telegram API', 'Stripe', 'Gmail API', 'News API', 'Google Sheets'],
    link: '',
    image: telegramAutomationImg,
  },
  {
    category: 'Automation',
    title: 'LinkedIn Comment Automation Bot',
    description: 'Searches LinkedIn posts by keyword and drops natural AI-generated comments. Playwright persistent session, Groq Llama 3.1, single-command execution.',
    tech: ['Python', 'Playwright', 'Groq API', 'LLaMA 3.1'],
    link: '',
    image: linkedinCommentImg,
  },

  // ── ML & Data ───────────────────────────────────────────────────────────────
  {
    category: 'ML & Data',
    title: 'MNIST Digit Recognition — SVM',
    description: 'SVM classifier for handwritten digit recognition with feature normalization and grid-search hyperparameter tuning.',
    tech: ['Python', 'Scikit-learn', 'SVM'],
    link: 'https://github.com/abdurrahmanrussel/mnist-svm-classification',
    image: mnistSvmImg,
  },
  {
    category: 'ML & Data',
    title: 'Iris Classification — MLP vs. SVM',
    description: 'NumPy MLP from scratch benchmarked against Scikit-learn SVM on Iris dataset. Evaluated with ROC, F1, and confusion matrix.',
    tech: ['NumPy', 'Scikit-learn', 'MLP', 'SVM'],
    link: 'https://github.com/abdurrahmanrussel/iris-mlp-svm',
    image: irisMlpSvmImg,
  },
  {
    category: 'ML & Data',
    title: 'Single-Layer Perceptron — Iris',
    description: 'Single-layer perceptron from scratch for binary classification. Evaluated with confusion matrix, ROC curve, and F1 score.',
    tech: ['Python', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/abdurrahmanrussel/iris-single-layer-perceptron',
    image: irisPerceptronImg,
  },
  {
    category: 'ML & Data',
    title: 'Binary Classification Neural Network',
    description: 'Neural network from scratch in NumPy — forward propagation, backpropagation, and gradient descent. No ML framework used.',
    tech: ['Python', 'NumPy', 'Neural Networks'],
    link: 'https://github.com/abdurrahmanrussel/binary-classification-nn--numpy-',
    image: binaryNNImg,
  },
  {
    category: 'ML & Data',
    title: 'Logic Gates via Neural Networks',
    description: 'AND, OR, and XOR logic gates implemented as neural networks in NumPy, demonstrating why XOR requires a multi-layer architecture.',
    tech: ['Python', 'NumPy'],
    link: 'https://github.com/abdurrahmanrussel/Logic-gates-using-Neural-Networks',
    image: logicGatesImg,
  },
  {
    category: 'ML & Data',
    title: 'Linear Regression from Scratch',
    description: 'Univariate and multivariate linear regression with gradient descent in NumPy — no ML libraries.',
    tech: ['Python', 'NumPy'],
    link: 'https://github.com/abdurrahmanrussel/linear_regression_demo',
    image: linearRegressionImg,
  },
  {
    category: 'ML & Data',
    title: 'OCR Pipeline',
    description: 'Document digitization pipeline using Tesseract OCR and OpenCV preprocessing — noise reduction, thresholding, and deskewing.',
    tech: ['Python', 'OpenCV', 'Tesseract'],
    link: 'https://github.com/abdurrahmanrussel/OCR',
    image: ocrPipelineImg,
  },
  {
    category: 'ML & Data',
    title: 'Python Data Visualization & EDA',
    description: 'EDA suite with Pandas, Matplotlib, Seaborn, and Plotly — heatmaps, pairplots, and interactive dashboards.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
    link: 'https://github.com/abdurrahmanrussel/python-data-visualization-and-analysis',
    image: dataVizImg,
  },
  {
    category: 'ML & Data',
    title: 'India Chikungunya Outbreak Visualization',
    description: 'Animated GIFs of state-wise Chikungunya incidence across India (2018–2025) mapped over GeoJSON administrative boundaries.',
    tech: ['Python', 'Matplotlib', 'GeoJSON'],
    link: 'https://github.com/abdurrahmanrussel/chikungunya-india-visualization',
    image: chikungunyaVizImg,
  },

  // ── Embedded ────────────────────────────────────────────────────────────────
  {
    category: 'Embedded',
    title: 'Autonomous Fire-Fighting Robot',
    description: 'Arduino robot using IR flame sensors and a servo-controlled water pump to autonomously detect and suppress fires.',
    tech: ['Arduino', 'IR Sensors', 'Servo Motor'],
    link: 'https://github.com/abdurrahmanrussel/Arduino-Fire-Fighting-Robot',
    image: robotImg,
  },
  {
    category: 'Embedded',
    title: 'Automatic Plant Watering System',
    description: 'Soil-moisture-aware irrigation system — relay-controlled water pump triggers only when moisture drops below threshold.',
    tech: ['Arduino', 'Soil Moisture Sensor', 'Relay'],
    link: 'https://github.com/abdurrahmanrussel/Automatic-Plant-Watering-System',
    image: plantWateringImg,
  },

];
