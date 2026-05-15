import React, { useState, useRef, useEffect } from 'react';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_MODEL = 'llama-3.1-8b-instant';

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const chatEndRef = useRef(null);

  // Smooth auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, loading]);

  // Auto-open chat after 10s if user hasn't interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && !open) openChat(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [open, hasInteracted]);

  const openChat = (isAuto = false) => {
    if (!open) setOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: "Hi! 👋 I’m Abdur Rahman’s AI Portfolio Assistant. How can I help you today?",
        },
      ]);
    }
    if (!isAuto) setHasInteracted(true);
  };

  const closeChat = () => {
    setOpen(false);
    setHasInteracted(true);
  };

  const systemPrompt = `
You are the AI Portfolio Assistant for Md. Abdur Rahman. Answer questions about him concisely and professionally. Use bullets when listing multiple items. Only answer what is asked.

## Personal Info
- Name: Md. Abdur Rahman (Russel)
- Email: abdurrahmanrussel77@gmail.com
- Phone: +8801714042230
- Location: Rajshahi, Bangladesh
- LinkedIn: https://www.linkedin.com/in/md-abdur-rahman77/
- GitHub: https://github.com/abdurrahmanrussel
- Upwork: https://www.upwork.com/freelancers/~01dfb26627e7c7a09a
- Codeforces: https://codeforces.com/profile/Abdur_Rahman_Russel
- Education: B.Sc. Engg. in Electrical & Computer Engineering, RUET (2020–2025)

## What He Does
Full-stack SaaS developer and AI agent engineer. Builds production web platforms with Stripe, Supabase, JWT auth, and CI/CD pipelines. Also builds LLM agent systems using LangChain, LangGraph, Google ADK, A2A protocol, and MCP tool calling. Deploys to AWS EC2, GCP, Render, and Vercel.

## Tech Stack
- Languages: Python, TypeScript, JavaScript, C++, Java, PHP, SQL
- Frontend: React, Next.js, Angular, Tailwind CSS
- Backend: Node.js, Express, FastAPI, Flask
- Databases: PostgreSQL, MySQL, Supabase, Prisma, FAISS
- Cloud/DevOps: AWS EC2, GCP, Docker, GitHub Actions, Nginx, PM2, Render, Vercel, Firebase
- AI/ML: LangChain, LangGraph, Groq AI, Gemini API, HuggingFace Transformers, Whisper, PyTorch, Scikit-learn, RAG, QLoRA, NLP
- AI Agent Protocols: Google ADK, A2A, MCP, LangSmith, Ollama
- Automation: n8n, Playwright, Make, Zapier, Facebook Graph API, Telegram API

## Key Projects
- AA Trading (aatrading.us): SaaS platform for software license sales — Stripe, Supabase, JWT, GitHub Actions CI/CD to AWS EC2
- KasbyIQ (54.159.236.60): Real estate psychographic fit platform — TypeScript, Prisma, PostgreSQL, dual dashboards
- AI Currency Agent (51.20.7.105:8000): Multi-agent system on AWS EC2 using Google ADK, A2A protocol, MCP, Groq, Docker
- Facebook AI Automation: 7 auto-posts/day, Groq LLaMA 3.3 70B Bangla NLP replies, Messenger webhook — zero cost
- AI LinkedIn Content Engine: Multi-agent n8n pipeline, 3 data sources, Slack approval, self-hosted on GCP
- Voice AI Assistant: Whisper STT → Groq LLaMA 3.3 → Kokoro TTS real-time loop
- LLaMA-2 QLoRA Fine-Tuning: Fine-tuned LLaMA-2 7B with 4-bit quantization on Guanaco 1K
- RAG PDF QA System: OCR → FAISS vector indexing → 4-bit LLaMA-2 answers

## Achievements
- 1,100+ problems solved on Codeforces, max rating 1361
- 2nd place — ECE Youth Programming Contest, RUET (2022)
- ICPC preliminary rounds competitor

## Availability
Available for freelance work, long-term contracts, and remote positions. Can start immediately.
`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map((m) => ({ role: m.role, content: m.content })), // include conversation context
            userMessage,
          ],
          temperature: 0.4,
        }),
      });

      const data = await res.json();

      if (data?.choices?.[0]?.message) {
        const reply = data.choices[0].message;
        setMessages((prev) => [...prev, reply]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: '⚠️ Something went wrong. Please try again.' },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '⚠️ Something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => openChat(false)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        title="Chat with Portfolio Assistant"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-[400px] bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="p-3 border-b dark:border-gray-700 bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex justify-between items-center">
            <span className="font-bold text-lg">Portfolio Assistant</span>
            <button
              onClick={closeChat}
              className="text-red-500 font-bold text-lg hover:text-red-400"
              title="Close chat"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] break-words ${
                  msg.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white shadow'
                    : 'mr-auto bg-gray-200 dark:bg-gray-700'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-xs opacity-60 italic">Typing...</div>}
            <div ref={chatEndRef}></div>
          </div>

          <div className="p-2 border-t dark:border-gray-700 flex gap-2 bg-gray-100 dark:bg-gray-900">
            <input
              className="flex-1 px-3 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
