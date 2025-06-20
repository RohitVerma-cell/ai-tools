const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const tools = [
  {
    "id": 1,
    "name": "ChatGPT",
    "category": "Writing",
    "url": "https://chat.openai.com",
    "excerpt": "Advanced conversational AI for content creation, research, and brainstorming.",
    "tags": [
      "AI Assistant",
      "Chatbot",
      "Content Generation"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 2,
    "name": "Midjourney",
    "category": "Image",
    "url": "https://www.midjourney.com",
    "excerpt": "Generate high-quality, creative images from text prompts using AI.",
    "tags": [
      "AI Art",
      "Image Generator",
      "Creative"
    ],
    "pricing": "Paid"
  },
  {
    "id": 3,
    "name": "Copy.ai",
    "category": "Marketing",
    "url": "https://www.copy.ai",
    "excerpt": "AI-powered tool for generating marketing copy, ads, and blog posts.",
    "tags": [
      "Copywriting",
      "Content Marketing",
      "Ad Generator"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 4,
    "name": "D-ID",
    "category": "Video",
    "url": "https://www.d-id.com",
    "excerpt": "Turn photos into talking videos using advanced AI animation.",
    "tags": [
      "Talking Avatar",
      "Video Creation",
      "Animation"
    ],
    "pricing": "Paid"
  },
  {
    "id": 5,
    "name": "Otter.ai",
    "category": "Productivity",
    "url": "https://otter.ai",
    "excerpt": "Transcribe meetings, lectures, and conversations automatically.",
    "tags": [
      "Transcription",
      "Meetings",
      "Productivity"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 6,
    "name": "Descript",
    "category": "Audio/Video Editing",
    "url": "https://www.descript.com",
    "excerpt": "Edit audio and video like a doc, with powerful AI voice and video tools.",
    "tags": [
      "Audio Editing",
      "Video Editing",
      "Podcast"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 7,
    "name": "Notion AI",
    "category": "Productivity",
    "url": "https://www.notion.so/product/ai",
    "excerpt": "Enhance your notes and docs with AI-powered writing and organization.",
    "tags": [
      "Notes",
      "Productivity",
      "Knowledge Base"
    ],
    "pricing": "Paid"
  },
  {
    "id": 8,
    "name": "Lumen5",
    "category": "Video",
    "url": "https://www.lumen5.com",
    "excerpt": "Easily turn articles and blogs into engaging marketing videos.",
    "tags": [
      "Video Creation",
      "Content Marketing",
      "Social Media"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 9,
    "name": "Grammarly",
    "category": "Writing",
    "url": "https://www.grammarly.com",
    "excerpt": "Real-time grammar and style suggestions to enhance your writing.",
    "tags": [
      "Grammar",
      "Proofreading",
      "Writing Assistant"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 10,
    "name": "Synthesia",
    "category": "Video",
    "url": "https://www.synthesia.io",
    "excerpt": "Create professional AI videos with custom avatars and voiceovers.",
    "tags": [
      "AI Video",
      "Avatar",
      "Training Videos"
    ],
    "pricing": "Paid"
  },
  {
    "id": 11,
    "name": "Pictory",
    "category": "Video",
    "url": "https://pictory.ai",
    "excerpt": "Automatically create short, shareable videos from long content.",
    "tags": [
      "Video Editing",
      "Shorts",
      "Content Repurposing"
    ],
    "pricing": "Paid"
  },
  {
    "id": 12,
    "name": "Jasper",
    "category": "Writing",
    "url": "https://www.jasper.ai",
    "excerpt": "AI writing assistant for blogs, ads, emails, and website copy.",
    "tags": [
      "Copywriting",
      "Content Marketing",
      "AI Writing"
    ],
    "pricing": "Paid"
  },
  {
    "id": 13,
    "name": "Remove.bg",
    "category": "Image",
    "url": "https://www.remove.bg",
    "excerpt": "Instantly remove backgrounds from images using AI.",
    "tags": [
      "Image Editing",
      "Background Removal",
      "Photo"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 14,
    "name": "RunwayML",
    "category": "Video/Image",
    "url": "https://runwayml.com",
    "excerpt": "Cutting-edge AI for video editing, inpainting, and creative workflows.",
    "tags": [
      "Video Editing",
      "Image Editing",
      "Creative AI"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 15,
    "name": "Quillbot",
    "category": "Writing",
    "url": "https://quillbot.com",
    "excerpt": "Paraphrase and summarize text instantly with AI.",
    "tags": [
      "Paraphrasing",
      "Summarizer",
      "Grammar"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 16,
    "name": "HeyGen",
    "category": "Video",
    "url": "https://www.heygen.com",
    "excerpt": "Create AI-generated spokesperson videos in minutes.",
    "tags": [
      "Avatar",
      "AI Video",
      "Presenter"
    ],
    "pricing": "Paid"
  },
  {
    "id": 17,
    "name": "Tome",
    "category": "Productivity",
    "url": "https://tome.app",
    "excerpt": "Generate beautiful AI-powered presentations in seconds.",
    "tags": [
      "Presentation",
      "Slides",
      "Productivity"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 18,
    "name": "Perplexity",
    "category": "Research",
    "url": "https://www.perplexity.ai",
    "excerpt": "Get instant, cited answers to any question using advanced AI search.",
    "tags": [
      "AI Search",
      "Research",
      "Assistant"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 19,
    "name": "Murf.ai",
    "category": "Audio",
    "url": "https://murf.ai",
    "excerpt": "Convert text to realistic AI voiceovers for videos and presentations.",
    "tags": [
      "Voiceover",
      "Audio",
      "Text-to-Speech"
    ],
    "pricing": "Freemium"
  },
  {
    "id": 20,
    "name": "Leonardo AI",
    "category": "Image",
    "url": "https://leonardo.ai",
    "excerpt": "Create stunning game assets, concept art, and visuals with AI.",
    "tags": [
      "AI Art",
      "Image Generation",
      "Game Design"
    ],
    "pricing": "Freemium"
  }
]

let favorites = [];

app.get('/api/tools', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = tools.filter(tool => tool.category.toLowerCase() === category.toLowerCase());
    return res.json(filtered);
  }
  res.json(tools);
});

app.post('/api/favorites', (req, res) => {
  const { toolId } = req.body;
  const existing = favorites.find(f => f.id === toolId);
  if (existing) {
    return res.status(400).json({ error: 'Tool already favorited' });
  }
  const tool = tools.find(t => t.id === toolId);
  if (!tool) return res.status(404).json({ error: 'Tool not found' });
  favorites.push(tool);
  res.json({ message: 'Favorite saved' });
});

app.get('/api/favorites', (req, res) => {
  res.json(favorites);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));