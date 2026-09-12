# 😂 Memeboard

A chaotic meme keyboard web app that reacts to your typing with meme sounds, animations, visual effects, and secret word triggers.

> *"Because typing normally is boring."*

---

## ✨ Features

- **😂 Dynamic Meme Reactions**: Every keystroke triggers custom, animated reactions like `"BONK 💥"`, `"WAIT... WHAT?"`, `"F 💀"`, `"AAAAAA!"`, and `"SKILL ISSUE 💀"`.
- **🔊 Procedural Web Audio API Sound Engine**: Zero audio file dependencies, zero copyright issues, instant playback with mechanical clicks, pops, explosions, meows, coins, alarms, and glitch chirps.
- **⌨️ Dual Keyboard Support**:
  - Full support for your **physical keyboard** when the webpage is focused.
  - Realistic 3D tactile **on-screen QWERTY virtual keyboard** with active press animations and hover glows.
- **⚡ Secret Word Triggers**:
  - `boom` ➔ Screen-shaking explosion + `"BOOOOM 💥"`
  - `cat` ➔ Bouncing cats & paws + `"MEOW 🐱"`
  - `party` ➔ Confetti rain celebration + `"PARTY TIME 🎉"`
  - `love` ➔ Floating hearts + `"LOVE DETECTED ❤️"`
  - `fire` ➔ Flame burst + `"IT'S GETTING HOT 🔥"`
  - `sus` ➔ Emergency alarm & red flash + `"SUS DETECTED 🚨"`
  - `ghost` ➔ Spooky floating phantoms + `"BOO 👻"`
  - `money` ➔ Raining cash & coins + `"MONEY MONEY MONEY 💸"`
  - `matrix` ➔ Green digital code stream canvas + `"ENTERING THE MATRIX"`
  - `error` ➔ Screen glitch jitter & buzz + `"SYSTEM ERROR 💀"`
- **🔥 Dynamic Chaos Level Meter**:
  - Keystrokes build up chaos (`0%` to `100%`).
  - Reaching 100% triggers an epic **"MAXIMUM CHAOS"** multi-effect celebration with rainbow screen flash and confetti before resetting.
- **🎨 Multi-Theme System**:
  - 🌑 **Dark**: Sleek obsidian slate with cyan and neon purple accents.
  - 🌌 **Cyber**: Cyberpunk high-contrast yellow, electric cyan, and hot magenta.
  - 🔥 **Chaos**: Volcanic magma ember, blazing orange, and fiery red glow.
- **⚙️ Settings Panel**:
  - Sound Effects toggle (`On` / `Off`).
  - Visual Effects toggle (`On` / `Off`).
  - Chaos Mode toggle (`On` / `Off`).
  - Reduced Motion accessibility toggle (`On` / `Off`).
  - Theme switcher.
- **🎵 Custom Key Sounds (Shift, Space, Tab, 'A')**:
  - Automatically plays your custom audio when you place `shift.mp3`, `space.mp3`, `tab.mp3`, or `a.mp3` inside `sounds/`.
  - Alternatively, upload any audio file directly inside the **⚙️ Settings** modal.
  - Test buttons in Settings allow quick previews.
- **📋 Text Buffer Tools**: Live character and word count, copy to clipboard button (`📋 Copy`), and complete reset button (`🗑️ Clear`).
- **📱 Fully Responsive**: Fluid sizing optimized for Desktop, Laptop, Tablet, and Mobile devices.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic structure, accessibility attributes (`aria-*`), clean layout.
- **CSS3**: CSS Custom Properties (Theme tokens), 3D tactile keycaps, glassmorphism (`backdrop-filter`), keyframe animations, responsive media queries.
- **Vanilla JavaScript**: Pure ES6+ object-oriented architecture without any frameworks or external libraries.
- **Web Audio API**: Browser-native real-time procedural sound synthesizer.

---

## 🚀 How to Run

1. Clone or download this project folder.
2. Open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari, Arc, Brave):
   - Simply double-click `index.html` or drag-and-drop it into your browser window.
   - Alternatively, serve it via any static file server:
     ```bash
     npx serve .
     # or
     python -m http.server 8080
     ```
3. Start typing on your keyboard or click on the on-screen keys to unleash chaos!

---

## 🗺️ Future Plans

- **🎵 More Sounds & Custom Sound Packs**: Ability to drag-and-drop custom `.mp3` and `.wav` audio files into the `sounds/` directory.
- **🎆 More Visual Effects**: Fireworks, laser beams, meme gif popups, and water ripples.
- **🎨 Additional Themes**: Retro 80s Synthwave, Y2K Pastel, and Terminal Monochrome.
- **⚡ Custom Word Trigger Editor**: Let users map their own secret words to custom sounds and animations.
- **🖥️ Desktop Application**: Package Memeboard with Electron / Tauri for native window management.
- **🌐 System-Wide Keyboard Mode**: Background daemon / hook allowing Memeboard reactions while typing in other apps across your operating system.

---

## 📄 License

MIT License • Created for **Memeboard** v1.0
