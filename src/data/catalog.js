/**
 * The KuikDown catalogue.
 *
 * Everything on the site comes from the `entries` array below. Adding
 * something = adding one object. Nothing else needs to change.
 *
 *   id           unique slug (React key)
 *   name         card title
 *   version      optional, shown next to the name
 *   description  one line of copy
 *   category     key from `categories` below
 *   url          where the card goes
 *   type         'link' for a site, 'download' for a file
 *
 * Download entries additionally carry:
 *   fileName, size, platform ('android' | 'windows'), sha256 (optional)
 */

const RELEASE = 'https://github.com/sirnewson/kuikdown/releases/download/v1.0.0'

export const categories = {
  ai: { label: 'AI Tools', icon: 'sparkles' },
  software: { label: 'Software', icon: 'appWindow' },
  tools: { label: 'Tools', icon: 'wrench' },
  games: { label: 'Games', icon: 'gamepad' },
  apps: { label: 'Apps', icon: 'smartphone' },
}

export const platforms = {
  android: { label: 'APK', icon: 'smartphone' },
  windows: { label: 'Windows', icon: 'monitor' },
}

const link = (id, name, description, category, url) => ({
  id,
  name,
  description,
  category,
  url,
  type: 'link',
})

export const entries = [
  // ---------------------------------------------------------------- AI tools
  link('chatgpt', 'ChatGPT', "OpenAI's assistant for writing, code and analysis.", 'ai', 'https://chatgpt.com'),
  link('claude', 'Claude', "Anthropic's assistant. Long documents, code, projects.", 'ai', 'https://claude.ai'),
  link('gemini', 'Gemini', "Google's assistant, wired into Search and Workspace.", 'ai', 'https://gemini.google.com'),
  link('perplexity', 'Perplexity', 'Answer engine that cites its sources as it goes.', 'ai', 'https://www.perplexity.ai'),
  link('grok', 'Grok', "xAI's assistant, with live access to posts on X.", 'ai', 'https://grok.com'),
  link('deepseek', 'DeepSeek', 'Open-weight reasoning models, free to chat with.', 'ai', 'https://chat.deepseek.com'),
  link('lechat', 'Le Chat', "Mistral's fast European assistant.", 'ai', 'https://chat.mistral.ai'),
  link('notebooklm', 'NotebookLM', 'Upload sources, get grounded notes and audio overviews.', 'ai', 'https://notebooklm.google.com'),
  link('huggingface', 'Hugging Face', 'Models, datasets and demos for everything open source.', 'ai', 'https://huggingface.co'),
  link('midjourney', 'Midjourney', 'Image generation with the strongest house style.', 'ai', 'https://www.midjourney.com'),
  link('ideogram', 'Ideogram', 'Image generator that actually renders text correctly.', 'ai', 'https://ideogram.ai'),
  link('leonardo', 'Leonardo AI', 'Image generation with fine control over style and pose.', 'ai', 'https://leonardo.ai'),
  link('runway', 'Runway', 'Video generation and editing from text or footage.', 'ai', 'https://runwayml.com'),
  link('suno', 'Suno', 'Full songs — vocals, lyrics and backing — from a prompt.', 'ai', 'https://suno.com'),
  link('elevenlabs', 'ElevenLabs', 'Voice cloning, dubbing and text to speech.', 'ai', 'https://elevenlabs.io'),
  link('cursor', 'Cursor', 'The AI-first code editor, built on VS Code.', 'ai', 'https://cursor.com'),
  link('v0', 'v0', 'Describe a UI, get working React and Tailwind back.', 'ai', 'https://v0.app'),
  link('replit', 'Replit', 'Build and host an app from the browser, with an agent.', 'ai', 'https://replit.com'),

  // ---------------------------------------------------------------- Software
  link('vscode', 'VS Code', 'The editor most of the world codes in. Free.', 'software', 'https://code.visualstudio.com'),
  link('obs', 'OBS Studio', 'Screen recording and live streaming. Open source.', 'software', 'https://obsproject.com'),
  link('vlc', 'VLC', 'Plays every video and audio format you will meet.', 'software', 'https://www.videolan.org/vlc/'),
  link('sevenzip', '7-Zip', 'Archiver that opens everything and compresses harder.', 'software', 'https://www.7-zip.org'),
  link('blender', 'Blender', '3D modelling, animation and rendering. Free.', 'software', 'https://www.blender.org'),
  link('gimp', 'GIMP', 'Full image editor, no subscription.', 'software', 'https://www.gimp.org'),
  link('krita', 'Krita', 'Digital painting built by and for illustrators.', 'software', 'https://krita.org'),
  link('audacity', 'Audacity', 'Multi-track audio recording and editing.', 'software', 'https://www.audacityteam.org'),
  link('figma', 'Figma', 'Interface design and prototyping in the browser.', 'software', 'https://www.figma.com'),
  link('notion', 'Notion', 'Notes, docs and databases in one workspace.', 'software', 'https://www.notion.so'),
  link('sharex', 'ShareX', 'Screenshots, screen recording and instant upload.', 'software', 'https://getsharex.com'),
  link('ninite', 'Ninite', 'Tick the apps you want, get one clean installer.', 'software', 'https://ninite.com'),

  // ------------------------------------------------------------------- Tools
  link('photopea', 'Photopea', 'Photoshop in a browser tab. Opens PSD files.', 'tools', 'https://www.photopea.com'),
  link('squoosh', 'Squoosh', 'Compress images, compare quality side by side.', 'tools', 'https://squoosh.app'),
  link('excalidraw', 'Excalidraw', 'Hand-drawn style diagrams and whiteboarding.', 'tools', 'https://excalidraw.com'),
  link('ilovepdf', 'iLovePDF', 'Merge, split, compress and convert PDFs.', 'tools', 'https://www.ilovepdf.com'),
  link('removebg', 'remove.bg', 'Strips the background out of any photo.', 'tools', 'https://www.remove.bg'),
  link('regex101', 'regex101', 'Write and debug regular expressions with explanations.', 'tools', 'https://regex101.com'),
  link('cyberchef', 'CyberChef', 'Encode, decode, hash and analyse data in one place.', 'tools', 'https://gchq.github.io/CyberChef/'),
  link('jsoncrack', 'JSON Crack', 'Turns messy JSON into a graph you can read.', 'tools', 'https://jsoncrack.com'),
  link('carbon', 'Carbon', 'Turn a code snippet into a shareable image.', 'tools', 'https://carbon.now.sh'),
  link('hibp', 'Have I Been Pwned', 'Check whether an account turned up in a breach.', 'tools', 'https://haveibeenpwned.com'),
  link('virustotal', 'VirusTotal', 'Scan a file or link against 70+ engines before you run it.', 'tools', 'https://www.virustotal.com'),
  link('speedtest', 'Speedtest', 'Measure the connection you are actually paying for.', 'tools', 'https://www.speedtest.net'),

  // ------------------------------------------------------------------- Games
  link('steam', 'Steam', 'The main PC games store and library.', 'games', 'https://store.steampowered.com'),
  link('epic', 'Epic Games Store', 'Store with a free game to claim every week.', 'games', 'https://store.epicgames.com'),
  link('gog', 'GOG', 'DRM-free games, including a deep back catalogue.', 'games', 'https://www.gog.com'),
  link('itch', 'itch.io', 'Indie and experimental games, most of them free.', 'games', 'https://itch.io'),
  link('xboxcloud', 'Xbox Cloud Gaming', 'Stream console games to a browser or phone.', 'games', 'https://www.xbox.com/play'),
  link('geforcenow', 'GeForce NOW', 'Stream your own PC library on NVIDIA hardware.', 'games', 'https://www.nvidia.com/en-us/geforce-now/'),
  link('crazygames', 'CrazyGames', 'Browser games, nothing to install.', 'games', 'https://www.crazygames.com'),
  link('poki', 'Poki', 'Quick browser games that load in seconds.', 'games', 'https://poki.com'),

  // --------------------------------------------------------------- Downloads
  {
    id: 'sportzx-31',
    name: 'SportzX',
    version: 'v3.1',
    description: 'Newest build. Direct install package.',
    category: 'apps',
    type: 'download',
    fileName: 'SportzX_3.1v.apk',
    size: '19.9 MB',
    platform: 'android',
    url: `${RELEASE}/SportzX_3.1v.apk`,
    sha256: '98afe8b8c22c96c3b1021bfd9432e660a7cfae209d5d308d21f41cb971d2f44f',
  },
  {
    id: 'sportzx-25',
    name: 'SportzX',
    version: 'v2.5',
    description: 'Previous release, kept around for older devices.',
    category: 'apps',
    type: 'download',
    fileName: 'SportzX_v2.5.apk',
    size: '12.1 MB',
    platform: 'android',
    url: 'https://www.mediafire.com/file/2hc35uh370gj0ti/SportzX_v2.5.apk/file',
  },
  {
    id: 'explore-player',
    name: 'Explore Player',
    version: 'v3.0.0',
    description: 'Desktop audio player, DJ flows, spectrum visualizers, cinema box & karaoke. Full offline installer.',
    category: 'software',
    type: 'download',
    fileName: 'Explore-Player-Setup-3.0.0.exe',
    size: '119.0 MB',
    platform: 'windows',
    url: `${RELEASE}/Explore-Player-Setup-3.0.0.exe`,
    sha256: '29afc8a066406481cc73f5303b14ff0a76f86d48a200388af90ed753c5b5fedd',
  },
  {
    id: 'freetube',
    name: 'FreeTube',
    version: 'v0.23.14 beta',
    description: 'Private YouTube client for the desktop. 64-bit setup.',
    category: 'software',
    type: 'download',
    fileName: 'freetube-0.23.14-beta-setup-x64.exe',
    size: '80.8 MB',
    platform: 'windows',
    url: `${RELEASE}/freetube-0.23.14-beta-setup-x64.exe`,
    sha256: 'ea9e47fce8a591f05df65805b68693c3a955699ed3060d85c3cb0d9d389479aa',
  },
  {
    id: 'birdfont',
    name: 'BirdFont',
    version: 'v6.15.5',
    description: 'Font editor for TTF, EOT and SVG fonts. Free edition.',
    category: 'software',
    type: 'download',
    fileName: 'birdfont-6.15.5-free.exe',
    size: '16.8 MB',
    platform: 'windows',
    url: `${RELEASE}/birdfont-6.15.5-free.exe`,
    sha256: '359791001559f2cb4d63161f5b0e9df1b4948f5cb5af84a5cb17c292c558c5a2',
  },
  {
    id: 'framer',
    name: 'Framer',
    description: 'Interactive design and prototyping app for Windows.',
    category: 'software',
    type: 'download',
    fileName: 'Framer.exe',
    size: '143.5 MB',
    platform: 'windows',
    url: `${RELEASE}/Framer.exe`,
    sha256: '03e152171bdd25796fccecc9c9af297c49dd70cb8523aec09c82b124ce9766e9',
  },
  {
    id: 'psd-viewer',
    name: 'PSD Viewer',
    version: 'v3.2',
    description: 'Open and preview Photoshop .psd files without Photoshop.',
    category: 'software',
    type: 'download',
    fileName: 'psd-viewer-3.2.exe',
    size: '9.5 MB',
    platform: 'windows',
    url: `${RELEASE}/psd-viewer-3.2.exe`,
    sha256: '7955658b55b89cf7e57107badf7420a37f1da090809dfc8e7ab6c7977d32a63e',
  },
  {
    id: 'camo-studio',
    name: 'Camo Studio',
    description: 'Use your phone as a webcam. Small online installer.',
    category: 'software',
    type: 'download',
    fileName: 'Camo-Studio-Installer.exe',
    size: '1.1 MB',
    platform: 'windows',
    url: `${RELEASE}/Camo-Studio-Installer.exe`,
    sha256: 'ec12a717febb731e4b0815abb51e518dc0e3b41db1bf1984a78be7403f6bb844',
  },
]
