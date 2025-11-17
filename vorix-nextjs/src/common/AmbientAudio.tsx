"use client"
import { useEffect, useRef, useState } from "react";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPrompt, setShowPrompt] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    if (!audioRef.current) {
      const a = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3");
      a.loop = true;
      a.volume = 0.2;
      audioRef.current = a;
    }
    audioRef.current?.play().catch(() => {});
    return () => audioRef.current?.pause();
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "m") {
        const a = audioRef.current;
        if (!a) return;
        if (a.paused) a.play().catch(() => {}); else a.pause();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {showPrompt && (
        <div className="ambient-overlay">
          <div className="ambient-inner">
            <h4 className="mb-2">Immersion musicale</h4>
            <p className="mb-1">Un son d’ambiance peut se jouer en arrière‑plan pour une meilleure immersion.</p>
            <p className="mb-3 hint">Sur ordinateur : appuyez sur <strong>M</strong> pour mettre en pause / reprendre.</p>
            <p className="mb-3 hint">Sur mobile : utilisez le bouton flottant en bas à droite.</p>
            <div className="d-flex gap-2 justify-content-center">
              <button className="btn btn-primary" onClick={() => { setActive(true); setShowPrompt(false); }}>Activer</button>
              <button className="btn btn-outline-primary" onClick={() => setShowPrompt(false)}>Ignorer</button>
            </div>
          </div>
        </div>
      )}
      <button
        className="ambient-fab"
        aria-label="Pause/Reprendre le son d’ambiance"
        onClick={() => {
          const a = audioRef.current;
          if (!active) {
            setActive(true);
            setShowPrompt(false);
            return;
          }
          if (!a) return;
          if (a.paused) a.play().catch(() => {}); else a.pause();
        }}
      >
        ♬
      </button>
    </>
  );
}