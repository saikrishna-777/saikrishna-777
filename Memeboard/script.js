/**
 * MEMEBOARD - The Chaotic Sound Keyboard
 * Version: 1.0.0
 * Architecture: Clean Vanilla JavaScript with Web Audio API Synthesizer,
 * Particle FX Engine, and Responsive Physical/Virtual Keyboard Engine.
 */

'use strict';

/* ==========================================================================
   1. SOUND SYSTEM (Native Web Audio API Synthesizer)
   ========================================================================== */
class SoundSystem {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initialized = false;
    this.customAudioMap = {};
    this.initCustomAudio();
  }

  initCustomAudio() {
    // 1. Shift audio element
    const shiftEl = document.getElementById('audio-shift-element');
    if (shiftEl) {
      this.customAudioMap['shift'] = shiftEl;
      const statusEl = document.getElementById('custom-shift-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/shift.mp3';
    } else {
      const shiftAudio = new Audio('sounds/shift.mp3');
      this.customAudioMap['shift'] = shiftAudio;
      shiftAudio.load();
    }

    // 2. Space audio element
    const spaceEl = document.getElementById('audio-space-element');
    if (spaceEl) {
      this.customAudioMap['space'] = spaceEl;
      try { spaceEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-space-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/space.mp3 (Fah sound)';
    } else {
      const spaceAudio = new Audio('sounds/space.mp3?v=2');
      this.customAudioMap['space'] = spaceAudio;
      spaceAudio.load();
    }

    // 3. Tab audio element
    const tabEl = document.getElementById('audio-tab-element');
    if (tabEl) {
      this.customAudioMap['tab'] = tabEl;
      try { tabEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-tab-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/tab.mp3 (Thud Effect)';
    } else {
      const tabAudio = new Audio('sounds/tab.mp3?v=1');
      this.customAudioMap['tab'] = tabAudio;
      tabAudio.load();
    }

    // 4. 'A' key audio element
    const aEl = document.getElementById('audio-a-element');
    if (aEl) {
      this.customAudioMap['a'] = aEl;
      try { aEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-a-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/a.mp3 (AA with Reverb)';
    } else {
      const aAudio = new Audio('sounds/a.mp3?v=1');
      this.customAudioMap['a'] = aAudio;
      aAudio.load();
    }

    // 5. ESC key audio element
    const escEl = document.getElementById('audio-esc-element');
    if (escEl) {
      this.customAudioMap['esc'] = escEl;
      try { escEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-esc-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/esc.mp3 (Saiiii)';
    } else {
      const escAudio = new Audio('sounds/esc.mp3?v=1');
      this.customAudioMap['esc'] = escAudio;
      escAudio.load();
    }

    // 6. Delete key audio element
    const deleteEl = document.getElementById('audio-delete-element');
    if (deleteEl) {
      this.customAudioMap['delete'] = deleteEl;
      try { deleteEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-delete-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/delete.mp3 (Car)';
    } else {
      const deleteAudio = new Audio('sounds/delete.mp3?v=1');
      this.customAudioMap['delete'] = deleteAudio;
      deleteAudio.load();
    }

    // 7. Ctrl key audio element
    const ctrlEl = document.getElementById('audio-ctrl-element');
    if (ctrlEl) {
      this.customAudioMap['ctrl'] = ctrlEl;
      try { ctrlEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-ctrl-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/ctrl.mp3';
    } else {
      const ctrlAudio = new Audio('sounds/ctrl.mp3?v=1');
      this.customAudioMap['ctrl'] = ctrlAudio;
      ctrlAudio.load();
    }

    // 8. CapsLock key audio element
    const capsEl = document.getElementById('audio-caps-element');
    if (capsEl) {
      this.customAudioMap['caps'] = capsEl;
      try { capsEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-caps-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/caps.mp3';
    } else {
      const capsAudio = new Audio('sounds/caps.mp3?v=1');
      this.customAudioMap['caps'] = capsAudio;
      capsAudio.load();
    }

    // 9. C key audio element
    const cEl = document.getElementById('audio-c-element');
    if (cEl) {
      this.customAudioMap['c'] = cEl;
      try { cEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-c-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/c.mp3';
    } else {
      const cAudio = new Audio('sounds/c.mp3?v=1');
      this.customAudioMap['c'] = cAudio;
      cAudio.load();
    }

    // 10. E key audio element
    const eEl = document.getElementById('audio-e-element');
    if (eEl) {
      this.customAudioMap['e'] = eEl;
      try { eEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-e-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/e.mp3';
    } else {
      const eAudio = new Audio('sounds/e.mp3?v=1');
      this.customAudioMap['e'] = eAudio;
      eAudio.load();
    }

    // 11. H key audio element
    const hEl = document.getElementById('audio-h-element');
    if (hEl) {
      this.customAudioMap['h'] = hEl;
      try { hEl.load(); } catch (e) {}
      const statusEl = document.getElementById('custom-h-status');
      if (statusEl) statusEl.textContent = 'Active: sounds/h.mp3';
    } else {
      const hAudio = new Audio('sounds/h.mp3?v=1');
      this.customAudioMap['h'] = hAudio;
      hAudio.load();
    }
    
    // 12. Backspace key audio element
    const backspaceAudio = new Audio('sounds/Aaye.mp3');
    this.customAudioMap['backspace'] = backspaceAudio;
    backspaceAudio.load();

    // 13. Alt key audio
    const altAudio = new Audio('sounds/alt.mp3');
    this.customAudioMap['alt'] = altAudio;
    altAudio.load();

    // 14. I key audio
    const iAudio = new Audio('sounds/i.mp3');
    this.customAudioMap['i'] = iAudio;
    iAudio.load();

    // 15. W key audio
    const wAudio = new Audio('sounds/w.mp3');
    this.customAudioMap['w'] = wAudio;
    wAudio.load();

    // 16. Enter key audio
    const enterAudio = new Audio('sounds/enter.mp3');
    this.customAudioMap['enter'] = enterAudio;
    enterAudio.load();

    // 17. Number and letter key audio
    ['1', '2', '3', '4', '5', 'b', 'd', 'f', 'g', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'].forEach((key) => {
      const audio = new Audio(`sounds/${key}.mp3`);
      this.customAudioMap[key] = audio;
      audio.load();
    });
  }

  setCustomSound(key, fileOrUrl) {
    try {
      if (typeof fileOrUrl === 'string') {
        const audio = new Audio(fileOrUrl);
        this.customAudioMap[key] = audio;
        return audio;
      } else if (fileOrUrl instanceof File || fileOrUrl instanceof Blob) {
        const url = URL.createObjectURL(fileOrUrl);
        const audio = new Audio(url);
        this.customAudioMap[key] = audio;
        return audio;
      }
    } catch (e) {
      console.warn('Error setting custom sound:', e);
    }
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    } catch (e) {
      console.warn('Web Audio API not supported on this browser:', e);
    }
  }

  ensureUnlocked() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle(enable) {
    if (typeof enable === 'boolean') {
      this.enabled = enable;
    } else {
      this.enabled = !this.enabled;
    }
    return this.enabled;
  }

  // --- Sound Generation Methods ---

  /** Mechanical keyboard click transient */
  playClick() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.04);

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.04);
  }
  /** Bubbly pitched pop sound */
  playPop() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(620, t);
    osc.frequency.exponentialRampToValueAtTime(140, t + 0.09);

    gain.gain.setValueAtTime(0.22, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.09);
  }

  /** Deep sub-bass boom with filtered noise burst */
  playBoom() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Sub-bass sweep
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.6);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.6);

    // Noise explosion burst
    try {
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.1));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, t);
      filter.frequency.exponentialRampToValueAtTime(80, t + 0.4);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start(t);
      noise.stop(t + 0.4);
    } catch (e) {
      // Graceful fallback if noise buffer fails
    }
  }

  /** Cat Meow sliding tone */
  playMeow() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(360, t);
    osc.frequency.linearRampToValueAtTime(740, t + 0.18);
    osc.frequency.exponentialRampToValueAtTime(280, t + 0.48);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.25, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.48);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.48);
  }

  /** Party celebratory fanfare arpeggio */
  playParty() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const t = this.ctx.currentTime;

    notes.forEach((freq, i) => {
      const startTime = t + i * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.22);
    });
  }

  /** Retro Arcade Double Coin ping */
  playCoins() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(987.77, t); // B5
    gain1.gain.setValueAtTime(0.18, t);
    gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(t);
    osc1.stop(t + 0.12);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1318.51, t + 0.08); // E6
    gain2.gain.setValueAtTime(0.25, t + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(t + 0.08);
    osc2.stop(t + 0.35);
  }

  /** Warning / Sus Emergency Alarm siren pulse */
  playAlarm() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    for (let i = 0; i < 2; i++) {
      const pulseTime = t + i * 0.18;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(i % 2 === 0 ? 880 : 700, pulseTime);
      osc.frequency.linearRampToValueAtTime(i % 2 === 0 ? 600 : 920, pulseTime + 0.14);

      gain.gain.setValueAtTime(0.18, pulseTime);
      gain.gain.exponentialRampToValueAtTime(0.001, pulseTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(pulseTime);
      osc.stop(pulseTime + 0.15);
    }
  }

  /** Spooky eerie Ghost whistle */
  playGhost() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, t);
    osc.frequency.linearRampToValueAtTime(680, t + 0.3);
    osc.frequency.linearRampToValueAtTime(400, t + 0.6);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.2, t + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.6);
  }

  /** Matrix terminal cyber data chirps */
  playMatrix() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    for (let i = 0; i < 6; i++) {
      const chipTime = t + i * 0.05;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(1200 + Math.random() * 1200, chipTime);

      gain.gain.setValueAtTime(0.06, chipTime);
      gain.gain.exponentialRampToValueAtTime(0.001, chipTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(chipTime);
      osc.stop(chipTime + 0.04);
    }
  }

  /** Glitch discordant error buzz */
  playGlitch() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.setValueAtTime(85, t + 0.06);
    osc.frequency.setValueAtTime(220, t + 0.12);
    osc.frequency.setValueAtTime(60, t + 0.18);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.26);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.26);
  }

  /** Epic Maximum Chaos sound effect */
  playMaxChaos() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Rapid ascending siren + boom
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(1400, t + 0.5);

    gain.gain.setValueAtTime(0.28, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.55);

    setTimeout(() => {
      this.playBoom();
      this.playParty();
    }, 450);
  }

  /** Ascending energetic power-up riser */
  playPowerUp() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.28);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.28);
  }

  /** Plays custom audio for Shift key, or defaults to playPowerUp */
  playShift() {
    if (!this.enabled) return;
    this.ensureUnlocked();

    const audio = this.customAudioMap['shift'] || document.getElementById('audio-shift-element');
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.volume = 0.95;
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch(() => {
            this.playPowerUp();
          });
        }
        return;
      } catch (e) {
        this.playPowerUp();
        return;
      }
    }

    this.playPowerUp();
  }

  /** Plays custom audio for Space key, or defaults to playClick */
  playSpace() {
    if (!this.enabled) return;
    this.ensureUnlocked();

    const audio = this.customAudioMap['space'] || document.getElementById('audio-space-element');
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.volume = 0.95;
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch(() => {
            this.playClick();
          });
        }
        return;
      } catch (e) {
        this.playClick();
        return;
      }
    }

    this.playClick();
  }

  /** Plays custom audio for Tab key, or defaults to playClick */
  playTab() {
    if (!this.enabled) return;
    this.ensureUnlocked();

    const audio = this.customAudioMap['tab'] || document.getElementById('audio-tab-element');
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.volume = 0.95;
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch(() => {
            this.playClick();
          });
        }
        return;
      } catch (e) {
        this.playClick();
        return;
      }
    }

    this.playClick();
  }

  /** Plays custom audio for 'A' key, or defaults to playClick */
  playA() {
    if (!this.enabled) return;
    this.ensureUnlocked();

    const audio = this.customAudioMap['a'] || document.getElementById('audio-a-element');
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.volume = 0.95;
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch(() => {
            this.playClick();
          });
        }
        return;
      } catch (e) {
        this.playClick();
        return;
      }
    }

    this.playClick();
  }

  /** Plays custom audio for ESC key, or defaults to playClick */
  playEsc() {
    if (!this.enabled) return;
    this.ensureUnlocked();

    const audio = this.customAudioMap['esc'] || document.getElementById('audio-esc-element');
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.volume = 0.95;
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch(() => {
            this.playClick();
          });
        }
        return;
      } catch (e) {
        this.playClick();
        return;
      }
    }

    this.playClick();
  }

  /** Plays custom audio for Delete key, or defaults to playClick */
  playDelete() {
    if (!this.enabled) return;
    this.ensureUnlocked();

    const audio = this.customAudioMap['delete'] || document.getElementById('audio-delete-element');
    if (audio) {
      try {
        audio.currentTime = 0;
        audio.volume = 0.95;
        const promise = audio.play();
        if (promise !== undefined) {
          promise.catch(() => {
            this.playClick();
          });
        }
        return;
      } catch (e) {
        this.playClick();
        return;
      }
    }

    this.playClick();
  }
  /** Plays custom audio for Backspace key, or defaults to playClick */
  playBackspace() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['backspace'];
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for Alt key, or defaults to playClick */
  playAlt() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['alt'];
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for I key, or defaults to playClick */
  playI() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['i'];
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for W key, or defaults to playClick */
  playW() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['w'];
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for Enter key, or defaults to playClick */
  playEnter() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['enter'];
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays a mapped number or letter key sound, or defaults to playClick */
  playMappedKey(key) {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap[key];
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for Ctrl key, or defaults to playClick */
  playCtrl() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['ctrl'] || document.getElementById('audio-ctrl-element');
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for CapsLock key, or defaults to playClick */
  playCaps() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['caps'] || document.getElementById('audio-caps-element');
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for C key, or defaults to playClick */
  playC() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['c'] || document.getElementById('audio-c-element');
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for E key, or defaults to playClick */
  playE() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['e'] || document.getElementById('audio-e-element');
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }

  /** Plays custom audio for H key, or defaults to playClick */
  playH() {
    if (!this.enabled) return;
    this.ensureUnlocked();
    const audio = this.customAudioMap['h'] || document.getElementById('audio-h-element');
    if (audio) {
      try { audio.currentTime = 0; audio.volume = 0.95; const p = audio.play(); if (p) p.catch(() => this.playClick()); return; }
      catch (e) { this.playClick(); return; }
    }
    this.playClick();
  }
}

/* ==========================================================================
   2. VISUAL EFFECTS ENGINE (Particles, Canvas, CSS Overlays)
   ========================================================================== */
class VisualFXEngine {
  constructor() {
    this.enabled = true;
    this.reducedMotion = false;
    this.particlesContainer = document.getElementById('particles-container');
    this.screenFlash = document.getElementById('screen-flash');
    this.matrixCanvas = document.getElementById('matrix-canvas');
    this.matrixActive = false;
    this.matrixAnimId = null;

    this.initMatrix();
  }

  initMatrix() {
    if (!this.matrixCanvas) return;
    const canvas = this.matrixCanvas;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  flashScreen(color = 'white', duration = 300) {
    if (!this.enabled || this.reducedMotion || !this.screenFlash) return;
    this.screenFlash.style.background = color;
    this.screenFlash.style.animation = `flashAnim ${duration}ms ease-out forwards`;
    setTimeout(() => {
      if (this.screenFlash) this.screenFlash.style.animation = '';
    }, duration);
  }

  shakeScreen(duration = 450) {
    if (!this.enabled || this.reducedMotion) return;
    document.body.style.animation = `memeShake ${duration}ms ease-in-out`;
    setTimeout(() => {
      document.body.style.animation = '';
    }, duration);
  }

  triggerExplosion() {
    if (!this.enabled) return;
    this.flashScreen('rgba(255, 100, 0, 0.7)', 350);
    this.shakeScreen(400);

    const emojis = ['💥', '🔥', '⚡', '💣', '✨'];
    const count = this.reducedMotion ? 5 : 24;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.fontSize = `${24 + Math.random() * 32}px`;
      el.style.left = `${centerX}px`;
      el.style.top = `${centerY}px`;

      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 260;
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance;

      el.style.setProperty('--dest-x', `${destX}px`);
      el.style.setProperty('--dest-y', `${destY}px`);
      el.style.animation = `confettiBurst ${600 + Math.random() * 400}ms cubic-bezier(0.1, 0.9, 0.2, 1) forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 1100);
    }
  }

  triggerConfetti() {
    if (!this.enabled) return;
    const colors = ['#00f0ff', '#ff0077', '#ffe600', '#00ff88', '#9d4edd', '#ffffff'];
    const emojis = ['🎉', '✨', '🥳', '🎊', '⭐'];
    const count = this.reducedMotion ? 10 : 36;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';

      if (Math.random() > 0.4) {
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.fontSize = `${18 + Math.random() * 20}px`;
      } else {
        el.style.width = `${8 + Math.random() * 10}px`;
        el.style.height = `${12 + Math.random() * 14}px`;
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.borderRadius = '3px';
      }

      el.style.left = `${Math.random() * 100}vw`;
      el.style.top = '-20px';

      const drift = (Math.random() - 0.5) * 160;
      const rot = Math.random() * 720;
      el.style.setProperty('--x-drift', `${drift}px`);
      el.style.setProperty('--rot', `${rot}deg`);
      el.style.animation = `floatDownMoney ${1200 + Math.random() * 1200}ms cubic-bezier(0.2, 0.6, 0.3, 1) forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }
  }

  triggerHearts() {
    if (!this.enabled) return;
    const hearts = ['❤️', '💖', '💕', '💓', '💗', '🥰', '✨'];
    const count = this.reducedMotion ? 6 : 22;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';
      el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      el.style.fontSize = `${20 + Math.random() * 32}px`;
      el.style.left = `${15 + Math.random() * 70}vw`;
      el.style.bottom = '80px';

      const drift = (Math.random() - 0.5) * 120;
      const rot = (Math.random() - 0.5) * 60;
      el.style.setProperty('--x-drift', `${drift}px`);
      el.style.setProperty('--rot', `${rot}deg`);
      el.style.animation = `floatUpFade ${1000 + Math.random() * 800}ms ease-out forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 1900);
    }
  }

  triggerCat() {
    if (!this.enabled) return;
    const cats = ['🐱', '😹', '😻', '🐾', '😺', '🐈', '✨'];
    const count = this.reducedMotion ? 5 : 18;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';
      el.textContent = cats[Math.floor(Math.random() * cats.length)];
      el.style.fontSize = `${26 + Math.random() * 28}px`;
      el.style.left = `${Math.random() * 85}vw`;
      el.style.bottom = '100px';

      const drift = (Math.random() - 0.5) * 200;
      el.style.setProperty('--x-drift', `${drift}px`);
      el.style.setProperty('--rot', `${(Math.random() - 0.5) * 50}deg`);
      el.style.animation = `floatUpFade ${1200 + Math.random() * 600}ms cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 1900);
    }
  }

  triggerFire() {
    if (!this.enabled) return;
    const flames = ['🔥', '🌋', '💥', '⚡', '✨'];
    const count = this.reducedMotion ? 6 : 24;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';
      el.textContent = flames[Math.floor(Math.random() * flames.length)];
      el.style.fontSize = `${28 + Math.random() * 32}px`;
      el.style.left = `${10 + Math.random() * 80}vw`;
      el.style.bottom = '60px';

      el.style.setProperty('--drift', `${(Math.random() - 0.5) * 120}px`);
      el.style.animation = `fireRise ${800 + Math.random() * 600}ms ease-out forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 1500);
    }
  }

  triggerAlarm() {
    if (!this.enabled) return;
    this.flashScreen('rgba(255, 0, 50, 0.45)', 600);
    this.shakeScreen(450);

    const alarms = ['🚨', '📮', '⛔', '👀', 'SUS'];
    for (let i = 0; i < 8; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';
      el.textContent = alarms[Math.floor(Math.random() * alarms.length)];
      el.style.fontSize = '34px';
      el.style.left = `${Math.random() * 90}vw`;
      el.style.top = `${20 + Math.random() * 60}vh`;
      el.style.animation = `memePop 500ms ease-out forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 900);
    }
  }

  triggerGhost() {
    if (!this.enabled) return;
    const ghosts = ['👻', '💀', '🕯️', '🦇'];
    const count = this.reducedMotion ? 4 : 12;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';
      el.textContent = ghosts[Math.floor(Math.random() * ghosts.length)];
      el.style.fontSize = `${32 + Math.random() * 30}px`;
      el.style.left = `${Math.random() * 90}vw`;
      el.style.bottom = '120px';

      el.style.animation = `ghostFloatAnim ${1600 + Math.random() * 800}ms ease-in-out forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }
  }

  triggerMoney() {
    if (!this.enabled) return;
    const money = ['💸', '💵', '💰', '🤑', '🪙'];
    const count = this.reducedMotion ? 8 : 28;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'floating-fx-item';
      el.textContent = money[Math.floor(Math.random() * money.length)];
      el.style.fontSize = `${24 + Math.random() * 26}px`;
      el.style.left = `${Math.random() * 95}vw`;
      el.style.top = '-30px';

      const drift = (Math.random() - 0.5) * 220;
      const rot = Math.random() * 720;
      el.style.setProperty('--x-drift', `${drift}px`);
      el.style.setProperty('--rot', `${rot}deg`);
      el.style.animation = `floatDownMoney ${1400 + Math.random() * 1200}ms ease-in forwards`;

      this.particlesContainer.appendChild(el);
      setTimeout(() => el.remove(), 2700);
    }
  }

  triggerMatrix() {
    if (!this.enabled || !this.matrixCanvas) return;
    const canvas = this.matrixCanvas;
    const ctx = canvas.getContext('2d');
    canvas.classList.add('active');

    const chars = '0123456789ABCDEF$#%&*+-/~';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -50;
    }

    const startTime = Date.now();
    const duration = 2800; // run for 2.8 seconds

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff66';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      if (Date.now() - startTime < duration) {
        this.matrixAnimId = requestAnimationFrame(render);
      } else {
        canvas.classList.remove('active');
        setTimeout(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 400);
      }
    };

    if (this.matrixAnimId) cancelAnimationFrame(this.matrixAnimId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
  }

  triggerGlitch() {
    if (!this.enabled) return;
    document.body.classList.add('glitch-active');
    this.shakeScreen(600);
    setTimeout(() => {
      document.body.classList.remove('glitch-active');
    }, 600);
  }

  triggerMaxChaos() {
    this.flashScreen('rgba(255, 255, 255, 0.9)', 400);
    this.shakeScreen(1200);
    document.body.classList.add('max-chaos-active');
    this.triggerExplosion();
    this.triggerConfetti();
    setTimeout(() => {
      document.body.classList.remove('max-chaos-active');
    }, 2000);
  }
}

/* ==========================================================================
   3. MEMEBOARD APP CONTROLLER
   ========================================================================== */
class MemeboardApp {
  constructor() {
    this.sound = new SoundSystem();
    this.fx = new VisualFXEngine();

    // App state
    this.textBuffer = '';
    this.chaosLevel = 0;
    this.chaosModeEnabled = true;
    this.isShiftActive = false;
    this.isCapsLocked = false;
    this.currentTheme = 'dark';

    // Key reactions dictionary
    this.keyReactions = {
      a: 'AAAAAA!',
      b: 'BONK 💥',
      c: 'C',
      d: 'DAMAGE',
      e: 'EEEE',
      f: 'F 💀',
      g: 'G',
      h: 'HUH?',
      i: 'I SEE',
      j: 'J',
      k: 'K',
      l: 'LOL',
      m: 'M',
      n: 'NOPE',
      o: 'OHH',
      p: 'P',
      q: 'WHY Q?',
      r: 'R',
      s: 'SUS?',
      t: 'T',
      u: 'U',
      v: 'V',
      w: 'W',
      x: 'X',
      y: 'Y',
      z: 'Z',
      ' ': 'SPACE TIME',
      Enter: 'BOOM 💥',
      Backspace: 'NOOO, COME BACK 😭',
      Shift: 'BIG LETTER ENERGY',
      CapsLock: 'WHY ARE YOU SHOUTING?',
      Tab: 'TAB TAB TAB',
      Escape: 'RUN AWAY 🏃',
      Control: 'CONTROL YOURSELF 🎮',
      Alt: 'ALT REALITY 🌀'
    };

    // Generic random reactions pool for other keys or typing bursts
    this.memeReactionsPool = [
      'WAIT... WHAT?',
      'BONK 💥',
      'BRUH 💀',
      'NOOO 😭',
      'WHY DID YOU TYPE THAT?',
      'CHAOS DETECTED',
      'SKILL ISSUE 💀',
      'SHEESH 🥶',
      'TOUCH GRASS 🌱',
      'NO CAP 🧢',
      'ABSOLUTE CINEMA 🎬',
      'EMOTIONAL DAMAGE 💔'
    ];

    // Word triggers dictionary
    this.wordTriggers = {
      boom: {
        reaction: 'BOOOOM 💥',
        fx: () => { this.fx.triggerExplosion(); this.sound.playBoom(); },
        chaos: 15
      },
      cat: {
        reaction: 'MEOW 🐱',
        fx: () => { this.fx.triggerCat(); this.sound.playMeow(); },
        chaos: 15
      },
      party: {
        reaction: 'PARTY TIME 🎉',
        fx: () => { this.fx.triggerConfetti(); this.sound.playParty(); },
        chaos: 15
      },
      love: {
        reaction: 'LOVE DETECTED ❤️',
        fx: () => { this.fx.triggerHearts(); this.sound.playPop(); },
        chaos: 15
      },
      fire: {
        reaction: "IT'S GETTING HOT 🔥",
        fx: () => { this.fx.triggerFire(); this.sound.playBoom(); },
        chaos: 15
      },
      sus: {
        reaction: 'SUS DETECTED 🚨',
        fx: () => { this.fx.triggerAlarm(); this.sound.playAlarm(); },
        chaos: 15
      },
      ghost: {
        reaction: 'BOO 👻',
        fx: () => { this.fx.triggerGhost(); this.sound.playGhost(); },
        chaos: 15
      },
      money: {
        reaction: 'MONEY MONEY MONEY 💸',
        fx: () => { this.fx.triggerMoney(); this.sound.playCoins(); },
        chaos: 15
      },
      matrix: {
        reaction: 'ENTERING THE MATRIX',
        fx: () => { this.fx.triggerMatrix(); this.sound.playMatrix(); },
        chaos: 15
      },
      error: {
        reaction: 'SYSTEM ERROR 💀',
        fx: () => { this.fx.triggerGlitch(); this.sound.playGlitch(); },
        chaos: 15
      }
    };

    this.cacheDOMElements();
    this.bindEvents();
    this.loadPreferences();
  }

  cacheDOMElements() {
    // Header controls
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.soundIcon = document.getElementById('sound-icon');
    this.soundText = document.getElementById('sound-text');
    this.btnThemeQuick = document.getElementById('btn-theme-quick');
    this.themeIcon = document.getElementById('theme-icon');
    this.themeText = document.getElementById('theme-text');
    this.btnClearMain = document.getElementById('btn-clear-main');
    this.btnSettings = document.getElementById('btn-settings');
    this.chaosIndicator = document.getElementById('chaos-indicator');
    this.chaosStatusText = document.getElementById('chaos-status-text');

    // Display elements
    this.reactionMessage = document.getElementById('reaction-message');
    this.typingBox = document.getElementById('typing-box');
    this.typedContent = document.getElementById('typed-content');
    this.statChars = document.getElementById('stat-chars');
    this.statWords = document.getElementById('stat-words');
    this.btnCopyText = document.getElementById('btn-copy-text');

    // Chaos meter elements
    this.chaosPercent = document.getElementById('chaos-percent');
    this.chaosFill = document.getElementById('chaos-fill');
    this.chaosProgressbar = document.getElementById('chaos-progressbar');

    // Keyboard container
    this.keyboardContainer = document.getElementById('keyboard-container');
    this.keyCaps = document.getElementById('key-capslock');
    this.keyShift = document.getElementById('key-shift');

    // Settings Modal
    this.settingsModal = document.getElementById('settings-modal');
    this.btnCloseModal = document.getElementById('btn-close-modal');
    this.btnSaveSettings = document.getElementById('btn-save-settings');
    this.settingSound = document.getElementById('setting-sound');
    this.settingEffects = document.getElementById('setting-effects');
    this.settingChaos = document.getElementById('setting-chaos');
    this.settingReducedMotion = document.getElementById('setting-reduced-motion');
    this.themeChoiceBtns = document.querySelectorAll('.theme-choice-btn');

    // Custom shift sound controls
    this.inputCustomShift = document.getElementById('input-custom-shift');
    this.btnTestShift = document.getElementById('btn-test-shift');
    this.customShiftStatus = document.getElementById('custom-shift-status');

    // Custom space sound controls
    this.inputCustomSpace = document.getElementById('input-custom-space');
    this.btnTestSpace = document.getElementById('btn-test-space');
    this.customSpaceStatus = document.getElementById('custom-space-status');

    // Custom tab sound controls
    this.inputCustomTab = document.getElementById('input-custom-tab');
    this.btnTestTab = document.getElementById('btn-test-tab');
    this.customTabStatus = document.getElementById('custom-tab-status');

    // Custom 'A' sound controls
    this.inputCustomA = document.getElementById('input-custom-a');
    this.btnTestA = document.getElementById('btn-test-a');
    this.customAStatus = document.getElementById('custom-a-status');

    // Custom ESC sound controls
    this.inputCustomEsc = document.getElementById('input-custom-esc');
    this.btnTestEsc = document.getElementById('btn-test-esc');
    this.customEscStatus = document.getElementById('custom-esc-status');

    // Custom Delete sound controls
    this.inputCustomDelete = document.getElementById('input-custom-delete');
    this.btnTestDelete = document.getElementById('btn-test-delete');
    this.customDeleteStatus = document.getElementById('custom-delete-status');

    // Custom Ctrl sound controls
    this.inputCustomCtrl = document.getElementById('input-custom-ctrl');
    this.btnTestCtrl = document.getElementById('btn-test-ctrl');
    this.customCtrlStatus = document.getElementById('custom-ctrl-status');

    // Custom CapsLock sound controls
    this.inputCustomCaps = document.getElementById('input-custom-caps');
    this.btnTestCaps = document.getElementById('btn-test-caps');
    this.customCapsStatus = document.getElementById('custom-caps-status');

    // Custom C sound controls
    this.inputCustomC = document.getElementById('input-custom-c');
    this.btnTestC = document.getElementById('btn-test-c');
    this.customCStatus = document.getElementById('custom-c-status');

    // Custom E sound controls
    this.inputCustomE = document.getElementById('input-custom-e');
    this.btnTestE = document.getElementById('btn-test-e');
    this.customEStatus = document.getElementById('custom-e-status');

    // Custom H sound controls
    this.inputCustomH = document.getElementById('input-custom-h');
    this.btnTestH = document.getElementById('btn-test-h');
    this.customHStatus = document.getElementById('custom-h-status');
  }

  bindEvents() {
    // 1. Global physical keyboard typing listener
    window.addEventListener('keydown', (e) => this.handlePhysicalKeyDown(e));
    window.addEventListener('keyup', (e) => this.handlePhysicalKeyUp(e));

    // 2. Virtual on-screen keys click/press
    if (this.keyboardContainer) {
      this.keyboardContainer.addEventListener('click', (e) => {
        const keyBtn = e.target.closest('.key');
        if (!keyBtn) return;
        this.handleVirtualKeyClick(keyBtn);
      });
    }

    // 3. Header Action Buttons
    this.btnSoundToggle.addEventListener('click', () => this.toggleSound());
    this.btnThemeQuick.addEventListener('click', () => this.cycleTheme());
    this.btnClearMain.addEventListener('click', () => this.clearAll());
    this.btnCopyText.addEventListener('click', () => this.copyTypedText());
    this.typingBox.addEventListener('click', () => this.typingBox.focus());

    // 4. Word triggers ribbon pills
    document.querySelectorAll('.trigger-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const word = pill.dataset.word;
        if (word) this.simulateWordTyping(word);
      });
    });

    // 5. Settings Modal Open/Close
    this.btnSettings.addEventListener('click', () => this.openSettings());
    this.btnCloseModal.addEventListener('click', () => this.closeSettings());
    this.btnSaveSettings.addEventListener('click', () => this.closeSettings());
    this.settingsModal.addEventListener('click', (e) => {
      if (e.target === this.settingsModal) this.closeSettings();
    });

    // 6. Settings Inputs
    this.settingSound.addEventListener('change', (e) => {
      this.sound.toggle(e.target.checked);
      this.updateSoundButtonUI();
    });
    this.settingEffects.addEventListener('change', (e) => {
      this.fx.enabled = e.target.checked;
    });
    this.settingChaos.addEventListener('change', (e) => {
      this.toggleChaosMode(e.target.checked);
    });
    this.settingReducedMotion.addEventListener('change', (e) => {
      this.fx.reducedMotion = e.target.checked;
    });

    // Custom Shift Sound File Picker & Test Button
    if (this.inputCustomShift) {
      this.inputCustomShift.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          this.sound.setCustomSound('shift', file);
          if (this.customShiftStatus) {
            this.customShiftStatus.textContent = `Active: ${file.name}`;
          }
          this.sound.playShift();
          this.setReaction('CUSTOM SHIFT SOUND LOADED 🎵', 'pop');
        }
      });
    }

    if (this.btnTestShift) {
      this.btnTestShift.addEventListener('click', () => {
        this.sound.playShift();
        this.setReaction('BIG LETTER ENERGY (TEST)', 'pop');
      });
    }

    // Custom Space Sound File Picker & Test Button
    if (this.inputCustomSpace) {
      this.inputCustomSpace.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          this.sound.setCustomSound('space', file);
          if (this.customSpaceStatus) {
            this.customSpaceStatus.textContent = `Active: ${file.name}`;
          }
          this.sound.playSpace();
          this.setReaction('CUSTOM SPACE SOUND LOADED 🚀', 'pop');
        }
      });
    }

    if (this.btnTestSpace) {
      this.btnTestSpace.addEventListener('click', () => {
        this.sound.playSpace();
        this.setReaction('SPACE TIME (TEST)', 'pop');
      });
    }

    // Custom Tab Sound File Picker & Test Button
    if (this.inputCustomTab) {
      this.inputCustomTab.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          this.sound.setCustomSound('tab', file);
          if (this.customTabStatus) {
            this.customTabStatus.textContent = `Active: ${file.name}`;
          }
          this.sound.playTab();
          this.setReaction('CUSTOM TAB SOUND LOADED 💥', 'pop');
        }
      });
    }

    if (this.btnTestTab) {
      this.btnTestTab.addEventListener('click', () => {
        this.sound.playTab();
        this.setReaction('TAB TAB (TEST)', 'pop');
      });
    }

    // Custom 'A' Sound File Picker & Test Button
    if (this.inputCustomA) {
      this.inputCustomA.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          this.sound.setCustomSound('a', file);
          if (this.customAStatus) {
            this.customAStatus.textContent = `Active: ${file.name}`;
          }
          this.sound.playA();
          this.setReaction('CUSTOM A SOUND LOADED 😱', 'pop');
        }
      });
    }

    if (this.btnTestA) {
      this.btnTestA.addEventListener('click', () => {
        this.sound.playA();
        this.setReaction('AAAAAA! (TEST)', 'pop');
      });
    }

    // Custom ESC Sound File Picker & Test Button
    if (this.inputCustomEsc) {
      this.inputCustomEsc.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          this.sound.setCustomSound('esc', file);
          if (this.customEscStatus) {
            this.customEscStatus.textContent = `Active: ${file.name}`;
          }
          this.sound.playEsc();
          this.setReaction('CUSTOM ESC SOUND LOADED 🏃', 'pop');
        }
      });
    }

    if (this.btnTestEsc) {
      this.btnTestEsc.addEventListener('click', () => {
        this.sound.playEsc();
        this.setReaction('RUN AWAY! (TEST)', 'pop');
      });
    }

    // Custom Delete Sound File Picker & Test Button
    if (this.inputCustomDelete) {
      this.inputCustomDelete.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          this.sound.setCustomSound('delete', file);
          if (this.customDeleteStatus) {
            this.customDeleteStatus.textContent = `Active: ${file.name}`;
          }
          this.sound.playDelete();
          this.setReaction('CUSTOM DELETE SOUND LOADED 🚗', 'pop');
        }
      });
    }

    if (this.btnTestDelete) {
      this.btnTestDelete.addEventListener('click', () => {
        this.sound.playDelete();
        this.setReaction('VROOM! (TEST)', 'pop');
      });
    }

    // Custom Ctrl Sound File Picker & Test Button
    if (this.inputCustomCtrl) {
      this.inputCustomCtrl.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          this.sound.setCustomSound('ctrl', file);
          if (this.customCtrlStatus) {
            this.customCtrlStatus.textContent = `Active: ${file.name}`;
          }
          this.sound.playCtrl();
          this.setReaction('CUSTOM CTRL SOUND LOADED 🎮', 'pop');
        }
      });
    }

    if (this.btnTestCtrl) {
      this.btnTestCtrl.addEventListener('click', () => {
        this.sound.playCtrl();
        this.setReaction('CONTROL YOURSELF! (TEST)', 'pop');
      });
    }

    // Custom CapsLock Sound
    if (this.inputCustomCaps) {
      this.inputCustomCaps.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) { this.sound.setCustomSound('caps', file); if (this.customCapsStatus) this.customCapsStatus.textContent = `Active: ${file.name}`; this.sound.playCaps(); this.setReaction('CUSTOM CAPS SOUND LOADED 🔡', 'pop'); }
      });
    }
    if (this.btnTestCaps) {
      this.btnTestCaps.addEventListener('click', () => { this.sound.playCaps(); this.setReaction('WHY ARE YOU SHOUTING? (TEST)', 'pop'); });
    }

    // Custom C Sound
    if (this.inputCustomC) {
      this.inputCustomC.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) { this.sound.setCustomSound('c', file); if (this.customCStatus) this.customCStatus.textContent = `Active: ${file.name}`; this.sound.playC(); this.setReaction('CUSTOM C SOUND LOADED', 'pop'); }
      });
    }
    if (this.btnTestC) {
      this.btnTestC.addEventListener('click', () => { this.sound.playC(); this.setReaction('C (TEST)', 'pop'); });
    }

    // Custom E Sound
    if (this.inputCustomE) {
      this.inputCustomE.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) { this.sound.setCustomSound('e', file); if (this.customEStatus) this.customEStatus.textContent = `Active: ${file.name}`; this.sound.playE(); this.setReaction('CUSTOM E SOUND LOADED', 'pop'); }
      });
    }
    if (this.btnTestE) {
      this.btnTestE.addEventListener('click', () => { this.sound.playE(); this.setReaction('EEEE (TEST)', 'pop'); });
    }

    // Custom H Sound
    if (this.inputCustomH) {
      this.inputCustomH.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) { this.sound.setCustomSound('h', file); if (this.customHStatus) this.customHStatus.textContent = `Active: ${file.name}`; this.sound.playH(); this.setReaction('CUSTOM H SOUND LOADED', 'pop'); }
      });
    }
    if (this.btnTestH) {
      this.btnTestH.addEventListener('click', () => { this.sound.playH(); this.setReaction('HUH? (TEST)', 'pop'); });
    }

    this.themeChoiceBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.setTheme;
        if (theme) this.setTheme(theme);
      });
    });
  }

  /* --- Preferences Handling --- */
  loadPreferences() {
    try {
      const savedTheme = localStorage.getItem('memeboard_theme');
      if (savedTheme) this.setTheme(savedTheme);

      const savedSound = localStorage.getItem('memeboard_sound');
      if (savedSound !== null) {
        const isSoundOn = savedSound === 'true';
        this.sound.toggle(isSoundOn);
        this.settingSound.checked = isSoundOn;
        this.updateSoundButtonUI();
      }
    } catch (e) {
      // LocalStorage could be restricted in some iframe contexts
    }
  }

  savePreferences() {
    try {
      localStorage.setItem('memeboard_theme', this.currentTheme);
      localStorage.setItem('memeboard_sound', String(this.sound.enabled));
    } catch (e) {}
  }

  /* --- Sound Toggling --- */
  toggleSound() {
    const newState = this.sound.toggle();
    this.settingSound.checked = newState;
    this.updateSoundButtonUI();
    if (newState) {
      this.sound.playPop();
      this.setReaction('SOUND ENABLED 🔊', 'pop');
    } else {
      this.setReaction('SOUND MUTED 🔇', 'pop');
    }
    this.savePreferences();
  }

  updateSoundButtonUI() {
    if (this.sound.enabled) {
      this.soundIcon.textContent = '🔊';
      this.soundText.textContent = 'SOUND ON';
      this.btnSoundToggle.classList.remove('muted');
    } else {
      this.soundIcon.textContent = '🔇';
      this.soundText.textContent = 'SOUND MUTED';
      this.btnSoundToggle.classList.add('muted');
    }
  }

  /* --- Theme System --- */
  setTheme(themeName) {
    const legacyThemeNames = { cyber: 'light', chaos: 'neon' };
    const normalizedTheme = legacyThemeNames[themeName] || themeName;
    this.currentTheme = normalizedTheme;
    document.body.dataset.theme = normalizedTheme;

    const themeIcons = { dark: '🌑', light: '○', neon: '●' };
    const themeLabels = { dark: 'Dark', light: 'Light', neon: 'Neon' };

    this.themeIcon.textContent = themeIcons[normalizedTheme] || '🎨';
    this.themeText.textContent = themeLabels[normalizedTheme] || normalizedTheme;

    this.themeChoiceBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.setTheme === normalizedTheme);
    });

    this.savePreferences();
  }

  cycleTheme() {
    const order = ['dark', 'light', 'neon'];
    const nextIndex = (order.indexOf(this.currentTheme) + 1) % order.length;
    this.setTheme(order[nextIndex]);
    this.sound.playPop();
    this.setReaction(`THEME: ${order[nextIndex].toUpperCase()} ✨`, 'pop');
  }

  /* --- Settings Modal --- */
  openSettings() {
    this.settingsModal.removeAttribute('hidden');
    this.sound.playPop();
  }

  closeSettings() {
    this.settingsModal.setAttribute('hidden', '');
    this.savePreferences();
  }

  /* --- Chaos Mode & Meter --- */
  toggleChaosMode(enabled) {
    this.chaosModeEnabled = enabled;
    this.settingChaos.checked = enabled;
    if (enabled) {
      this.chaosIndicator.classList.add('chaos-active');
      this.chaosStatusText.textContent = 'ON';
    } else {
      this.chaosIndicator.classList.remove('chaos-active');
      this.chaosStatusText.textContent = 'OFF';
    }
  }

  increaseChaos(amount = 2) {
    if (!this.chaosModeEnabled) return;
    this.chaosLevel = Math.min(100, this.chaosLevel + amount);
    this.updateChaosMeterUI();

    if (this.chaosLevel >= 100) {
      this.triggerMaxChaosEvent();
    }
  }

  updateChaosMeterUI() {
    const percent = Math.round(this.chaosLevel);
    this.chaosPercent.textContent = `${percent}%`;
    this.chaosFill.style.width = `${percent}%`;
    this.chaosProgressbar.setAttribute('aria-valuenow', percent);
  }

  triggerMaxChaosEvent() {
    this.setReaction('💥 MAXIMUM CHAOS REACHED! 💥', 'shake');
    this.sound.playMaxChaos();
    this.fx.triggerMaxChaos();

    setTimeout(() => {
      this.chaosLevel = 0;
      this.updateChaosMeterUI();
      this.setReaction('CHAOS RESET! KEEP TYPING...', 'pop');
    }, 2400);
  }

  /* --- Reaction Banner Manager --- */
  setReaction(text, animationType = 'pop') {
    if (!this.reactionMessage) return;
    this.reactionMessage.textContent = text;
    this.reactionMessage.classList.remove('pop', 'shake');
    // Force reflow to restart CSS animation cleanly
    void this.reactionMessage.offsetWidth;
    this.reactionMessage.classList.add(animationType);
  }

  /* --- Buffer & Typing Handling --- */
  handlePhysicalKeyDown(e) {
    // If user is inside an input in modal, don't hijack
    if (e.target.tagName === 'INPUT') return;

    // Normalize and track modifiers
    if (e.key === 'Shift') {
      this.isShiftActive = true;
      if (this.keyShift) this.keyShift.classList.add('pressed');
    }
    if (e.key === 'CapsLock') {
      this.isCapsLocked = !this.isCapsLocked;
      if (this.keyCaps) this.keyCaps.classList.toggle('locked', this.isCapsLocked);
    }

    // Highlight corresponding on-screen key
    this.highlightOnScreenKey(e.key, e.code, true);

    // Process key typing action
    this.processKeyAction(e.key, e);
  }

  handlePhysicalKeyUp(e) {
    if (e.key === 'Shift') {
      this.isShiftActive = false;
      if (this.keyShift) this.keyShift.classList.remove('pressed');
    }
    this.highlightOnScreenKey(e.key, e.code, false);
  }

  handleVirtualKeyClick(keyBtn) {
    const key = keyBtn.dataset.key;
    const code = keyBtn.dataset.code;

    // Animate key click briefly
    keyBtn.classList.add('pressed');
    setTimeout(() => keyBtn.classList.remove('pressed'), 120);

    if (key === 'Shift') {
      this.isShiftActive = !this.isShiftActive;
      keyBtn.classList.toggle('pressed', this.isShiftActive);
    } else if (key === 'CapsLock') {
      this.isCapsLocked = !this.isCapsLocked;
      keyBtn.classList.toggle('locked', this.isCapsLocked);
    }

    this.processKeyAction(key, null);
  }

  highlightOnScreenKey(key, code, isPressed) {
    if (!this.keyboardContainer) return;
    // Find key by data-code or data-key
    let keyEl = null;
    if (code) {
      keyEl = this.keyboardContainer.querySelector(`[data-code="${code}"]`);
    }
    if (!keyEl && key) {
      keyEl = this.keyboardContainer.querySelector(`[data-key="${key.toLowerCase()}"]`) ||
              this.keyboardContainer.querySelector(`[data-key="${key}"]`);
    }

    if (keyEl) {
      if (isPressed) {
        keyEl.classList.add('pressed');
      } else {
        if (key !== 'Shift' || !this.isShiftActive) {
          keyEl.classList.remove('pressed');
        }
      }
    }
  }

  processKeyAction(key, originalEvent) {
    // 1. Backspace
    if (key === 'Backspace') {
      if (originalEvent) originalEvent.preventDefault();
      this.sound.playBackspace();
      if (this.textBuffer.length > 0) {
        this.textBuffer = this.textBuffer.slice(0, -1);
        this.setReaction(this.keyReactions.Backspace, 'shake');
        this.increaseChaos(1);
      }
    }
    // 1b. Delete
    else if (key === 'Delete') {
      if (originalEvent) originalEvent.preventDefault();
      this.sound.playDelete();
      this.setReaction('DELETED! 🚗💨', 'shake');
      this.increaseChaos(1);
    }
    // 2. Enter
    else if (key === 'Enter') {
      if (originalEvent) originalEvent.preventDefault();
      this.textBuffer += '\n';
      this.sound.playEnter();
      this.setReaction(this.keyReactions.Enter, 'pop');
      this.increaseChaos(2);
    }
    // 3. Tab
    else if (key === 'Tab') {
      if (originalEvent) originalEvent.preventDefault();
      this.textBuffer += '    ';
      this.sound.playTab();
      this.setReaction(this.keyReactions.Tab, 'pop');
      this.increaseChaos(1);
    }
    // 4. Space
    else if (key === ' ' || key === 'Space') {
      if (originalEvent) originalEvent.preventDefault();
      this.textBuffer += ' ';
      this.sound.playSpace();
      this.setReaction(this.keyReactions[' '], 'pop');
      this.increaseChaos(2);
      this.checkWordTriggers();
    }
    // 5. Modifiers without text output
    else if (['Shift', 'CapsLock', 'Control', 'Alt', 'Meta', 'Escape'].includes(key)) {
      if (this.keyReactions[key]) {
        this.setReaction(this.keyReactions[key], 'pop');
      }
      if (key === 'Shift') {
        this.sound.playShift();
      } else if (key === 'Escape') {
        this.sound.playEsc();
      } else if (key === 'Control') {
        this.sound.playCtrl();
      } else if (key === 'CapsLock') {
        this.sound.playCaps();
      } else if (key === 'Alt') {
        this.sound.playAlt();
      } else {
        this.sound.playClick();
      }
    }
    // 6. Normal character keys (Length 1)
    else if (key.length === 1) {
      let charToInsert = key;
      const shouldUppercase = (this.isShiftActive && !this.isCapsLocked) ||
                              (!this.isShiftActive && this.isCapsLocked);
      charToInsert = shouldUppercase ? charToInsert.toUpperCase() : charToInsert.toLowerCase();
      this.textBuffer += charToInsert;

      const lowerKey = key.toLowerCase();
      if (lowerKey === 'a') {
        this.sound.playA();
      } else if (lowerKey === 'c') {
        this.sound.playC();
      } else if (lowerKey === 'e') {
        this.sound.playE();
      } else if (lowerKey === 'h') {
        this.sound.playH();
      } else if (lowerKey === 'i') {
        this.sound.playI();
      } else if (lowerKey === 'w') {
        this.sound.playW();
      } else if (['1', '2', '3', '4', '5', 'b', 'd', 'f', 'g', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'].includes(lowerKey)) {
        this.sound.playMappedKey(lowerKey);
      } else {
        this.sound.playClick();
      }

      // Show key reaction
      if (this.keyReactions[lowerKey]) {
        this.setReaction(this.keyReactions[lowerKey], 'pop');
      } else {
        const randomReaction = this.memeReactionsPool[Math.floor(Math.random() * this.memeReactionsPool.length)];
        this.setReaction(randomReaction, 'pop');
      }

      this.increaseChaos(2);
      this.checkWordTriggers();
    }

    this.updateDisplay();
  }

  checkWordTriggers() {
    const textLower = this.textBuffer.toLowerCase();

    for (const [word, trigger] of Object.entries(this.wordTriggers)) {
      // Check if text ends with the word (or word + space/punctuation)
      const regex = new RegExp(`\\b${word}\\s*$`, 'i');
      if (regex.test(textLower)) {
        this.setReaction(trigger.reaction, 'shake');
        trigger.fx();
        this.increaseChaos(trigger.chaos);
        break; // Trigger one special reaction at a time
      }
    }
  }

  simulateWordTyping(word) {
    // Helpful test method: automatically types the word and tests the trigger
    this.textBuffer += (this.textBuffer.length && !this.textBuffer.endsWith(' ') ? ' ' : '') + word + ' ';
    this.updateDisplay();
    this.checkWordTriggers();
    this.typingBox.focus();
  }

  updateDisplay() {
    // Update typing buffer text
    this.typedContent.textContent = this.textBuffer;

    // Update stats
    const charCount = this.textBuffer.length;
    const words = this.textBuffer.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    this.statChars.textContent = `${charCount} char${charCount === 1 ? '' : 's'}`;
    this.statWords.textContent = `${wordCount} word${wordCount === 1 ? '' : 's'}`;

    // Auto-scroll to end of typing box
    this.typingBox.scrollTop = this.typingBox.scrollHeight;
  }

  clearAll() {
    this.textBuffer = '';
    this.chaosLevel = 0;
    this.updateDisplay();
    this.updateChaosMeterUI();
    this.sound.playPop();
    this.setReaction('CLEARED! READY FOR MORE CHAOS 🧹', 'pop');
    this.typingBox.focus();
  }

  copyTypedText() {
    if (!this.textBuffer) {
      this.setReaction('NOTHING TO COPY YET! 🤷', 'shake');
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.textBuffer).then(() => {
        this.btnCopyText.textContent = '✅ Copied!';
        this.setReaction('COPIED TO CLIPBOARD 📋', 'pop');
        this.sound.playCoins();
        setTimeout(() => {
          this.btnCopyText.textContent = '📋 Copy';
        }, 1500);
      }).catch(() => {
        this.fallbackCopy();
      });
    } else {
      this.fallbackCopy();
    }
  }

  fallbackCopy() {
    const tempInput = document.createElement('textarea');
    tempInput.value = this.textBuffer;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    this.setReaction('COPIED TO CLIPBOARD 📋', 'pop');
  }
}

/* ==========================================================================
   4. APPLICATION INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  window.memeboard = new MemeboardApp();
  console.log('😂 Memeboard v1.0 initialized and ready for chaos!');
});
