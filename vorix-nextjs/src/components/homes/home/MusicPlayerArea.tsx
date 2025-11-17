"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
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
        title: "Night of Vibes",
        artist: "SoundHelix",
        cover:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
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
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off");
  const [autoPlayNext, setAutoPlayNext] = useState(false);
  const [liked, setLiked] = useState<Set<number>>(new Set());

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
    const onEnded = () => {
      if (repeatMode === "one") {
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true);
      } else if (repeatMode === "all") {
        handleNext();
      } else {
        setIsPlaying(false);
      }
    };
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
    audio.play().catch(() => {});
    setIsPlaying(true);
    setError("");
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setAutoPlayNext(false);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setAutoPlayNext(true);
    setCurrentTime(0);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % playlist.length);
    setAutoPlayNext(true);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const skipBy = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const v = Math.min(Math.max((audio.currentTime || 0) + delta, 0), duration || 0);
    audio.currentTime = v;
    setCurrentTime(v);
  };
  const skipBackward10 = () => skipBy(-10);
  const skipForward10 = () => skipBy(10);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  useEffect(() => {
    if (!autoPlayNext) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.play();
    setIsPlaying(true);
    setAutoPlayNext(false);
  }, [autoPlayNext, index]);

  const cycleRepeat = () => {
    setRepeatMode((m) => (m === "off" ? "all" : m === "all" ? "one" : "off"));
  };

  const toggleLike = () => {
    setLiked((prev) => {
      const n = new Set(prev);
      if (n.has(index)) n.delete(index); else n.add(index);
      return n;
    });
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
      <div className="container music-player-3d">
        <div className="row g-4 align-items-center">
          <div className="col-12">
            <motion.div className="music-player-cover"
              initial={{ opacity: 0, rotateY: -10, scale: 0.98 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ rotateX: -2, rotateY: 2, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="vinyl"></div>
              <LazyImage src={track.cover} alt={track.title} />
            </motion.div>
          </div>
          <div className="col-12">
            <motion.div className="music-player-card"
              initial={{ opacity: 0, rotateY: 8, translateY: 16 }}
              whileInView={{ opacity: 1, rotateY: 0, translateY: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ rotateX: -1.5, rotateY: 1.5 }}
            >
              <div className="section-heading mb-3">
                <h2 className="mb-0">Sunny Vibes</h2>
                <p className="mb-0">Écoutez vos morceaux favoris avec une interface moderne.</p>
              </div>

              <div className="player-controls">
                <motion.button className="player-btn player-btn--sm" onClick={skipBackward10} aria-label="Reculer de 10s" title="Reculer de 10s"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  <span className="material-symbols-outlined">replay_10</span>
                </motion.button>
                <motion.button className="player-btn player-btn--sm" onClick={handlePrev} aria-label="Piste précédente" title="Piste précédente"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 5h2v14H6zM9 12l9 6V6z" />
                  </svg>
                </motion.button>
                <motion.button className="player-btn player-btn--sm" onClick={toggleLike} aria-label="Aimer" title="Aimer"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill={liked.has(index) ? "#E11D48" : "currentColor"} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.53C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </motion.button>
                <motion.button className={`player-btn player-btn--sm repeat-btn ${repeatMode !== "off" ? "active" : ""}`} onClick={cycleRepeat} aria-label={`Répéter (${repeatMode})`} title={`Répéter (${repeatMode})`}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 7h9v3l4-4-4-4v3H6c-2.21 0-4 1.79-4 4v2h2V9c0-1.1.9-2 2-2zm10 10H8v-3l-4 4 4 4v-3h8c2.21 0 4-1.79 4-4v-2h-2v2c0 1.1-.9 2-2 2z" />
                  </svg>
                  <span className="visually-hidden">{repeatMode}</span>
                </motion.button>
                <motion.button className="player-btn player-btn--primary" onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Lecture"} aria-pressed={isPlaying} title={isPlaying ? "Pause" : "Lecture"}
                  whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 5h5v14H6zM13 5h5v14h-5z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </motion.button>
                <motion.button className="player-btn player-btn--sm" onClick={handleNext} aria-label="Piste suivante" title="Piste suivante"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 5h2v14h-2zM6 6l9 6-9 6z" />
                  </svg>
                </motion.button>
                <motion.button className="player-btn player-btn--sm" onClick={skipForward10} aria-label="Avancer de 10s" title="Avancer de 10s"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                >
                  <span className="material-symbols-outlined">forward_10</span>
                </motion.button>
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
                      setAutoPlayNext(true);
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
            </motion.div>

          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default MusicPlayerArea;