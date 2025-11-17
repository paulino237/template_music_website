"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import LazyImage from "@/common/LazyImage";

type Track = {
  title: string;
  artist: string;
  cover: string;
  src: string;
};

const MusicPlayerArea: React.FC = () => {
  const playlist: Track[] = useMemo(
    () => [
      {
        title: "Night Drive",
        artist: "SoundHelix",
        cover:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        title: "Sunny Vibes",
        artist: "SoundHelix",
        cover:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      },
    //   {
    //     title: "LoFi Focus",
    //     artist: "SoundHelix",
    //     cover:
    //       "https://images.unsplash.com/photo-1513863326356-0a6091e854b2?q=80&w=1200&auto=format&fit=crop",
    //     src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    //   },
    ],
    []
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.9);
  const [error, setError] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onEnded = () => handleNext();
    const onError = () => setError("Impossible de lire la piste");
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [index]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play();
    setIsPlaying(true);
    setError("");
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        handlePlayPause();
      }
      if (e.code === "ArrowRight") {
        const audio = audioRef.current;
        if (!audio) return;
        const v = Math.min((audio.currentTime || 0) + 5, duration);
        audio.currentTime = v;
        setCurrentTime(v);
      }
      if (e.code === "ArrowLeft") {
        const audio = audioRef.current;
        if (!audio) return;
        const v = Math.max((audio.currentTime || 0) - 5, 0);
        audio.currentTime = v;
        setCurrentTime(v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPlaying, duration]);

  const formatTime = (t: number) => {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const track = playlist[index];

  return (
    <section id="lecteur" className="music-player-wrapper">
      <div className="divider"></div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-5">
            <div className="music-player-cover">
              <LazyImage src={track.cover} alt={track.title} />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="music-player-card">
              <div className="section-heading mb-3">
                <h2 className="mb-0">Sunny Vibes</h2>
                <p className="mb-0">Écoutez vos morceaux favoris avec une interface moderne.</p>
              </div>

              <div className="player-controls">
                <button className="player-btn player-btn--sm" onClick={handlePrev} aria-label="Piste précédente" title="Piste précédente">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 5h2v14H6zM9 12l9 6V6z" />
                  </svg>
                </button>
                <button className="player-btn player-btn--primary" onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Lecture"} aria-pressed={isPlaying} title={isPlaying ? "Pause" : "Lecture"}>
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 5h5v14H6zM13 5h5v14h-5z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <button className="player-btn player-btn--sm" onClick={handleNext} aria-label="Piste suivante" title="Piste suivante">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 5h2v14h-2zM6 6l9 6-9 6z" />
                  </svg>
                </button>
              </div>

              <div className="player-track mb-2">
                <strong>{track.title}</strong> — {track.artist}
              </div>

              <div className="player-seek">
                <span className="time">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min={0}
                  max={isFinite(duration) ? Math.floor(duration) : 0}
                  value={Math.floor(currentTime)}
                  onChange={handleSeek}
                  className="player-range"
                  style={{ ['--progress' as any]: `${duration ? Math.floor((currentTime / duration) * 100) : 0}%` }}
                />
                <span className="time">{formatTime(duration)}</span>
              </div>

              <div className="player-volume">
                <span className="material-symbols-outlined">volume_up</span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="player-range"
                />
              </div>

              <div className="player-queue">
                {playlist.map((t, i) => (
                  <button
                    key={t.title + i}
                    className={`queue-item ${i === index ? "active" : ""}`}
                    onClick={() => {
                      setIndex(i);
                      setIsPlaying(false);
                      setCurrentTime(0);
                    }}
                  >
                    <span className="title">{t.title}</span>
                    <span className="artist">{t.artist}</span>
                  </button>
                ))}
              </div>
              {error && <p className="text-primary mt-2">{error}</p>}
              <audio ref={audioRef} src={track.src} preload="metadata" />
            </div>

          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default MusicPlayerArea;