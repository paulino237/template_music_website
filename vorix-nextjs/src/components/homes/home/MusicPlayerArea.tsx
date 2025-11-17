"use client";
import { useEffect, useMemo, useRef, useState } from "react";

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
      {
        title: "LoFi Focus",
        artist: "SoundHelix",
        cover:
          "https://images.unsplash.com/photo-1513863326356-0a6091e854b2?q=80&w=1200&auto=format&fit=crop",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      },
    ],
    []
  );

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.9);

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
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [index]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play();
    setIsPlaying(true);
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
    <section className="music-player-wrapper">
      <div className="divider"></div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-5">
            <div className="rounded overflow-hidden shadow-sm">
              <img src={track.cover} alt={track.title} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="section-heading mb-3">
              <h2 className="mb-0">Lecteur de musique</h2>
              <p className="mb-0">Écoutez vos morceaux favoris avec une interface moderne.</p>
            </div>

            <div className="d-flex align-items-center gap-3 mb-3">
              <button className="btn btn-outline-primary" onClick={handlePrev} aria-label="Piste précédente">
                ◀
              </button>
              {isPlaying ? (
                <button className="btn btn-primary" onClick={pause} aria-label="Pause">
                  ❚❚
                </button>
              ) : (
                <button className="btn btn-primary" onClick={play} aria-label="Lecture">
                  ▶
                </button>
              )}
              <button className="btn btn-outline-primary" onClick={handleNext} aria-label="Piste suivante">
                ▶▶
              </button>
            </div>

            <div className="mb-2">
              <strong>{track.title}</strong> — {track.artist}
            </div>

            <div className="d-flex align-items-center gap-3">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={isFinite(duration) ? Math.floor(duration) : 0}
                value={Math.floor(currentTime)}
                onChange={handleSeek}
                className="form-range flex-grow-1"
              />
              <span>{formatTime(duration)}</span>
            </div>

            <div className="d-flex align-items-center gap-2 mt-3">
              <span>Volume</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="form-range"
              />
            </div>

            <div className="mt-4">
              <div className="row g-3">
                {playlist.map((t, i) => (
                  <div className="col-12 col-md-6" key={t.title + i}>
                    <button
                      className={`btn w-100 ${i === index ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => {
                        setIndex(i);
                        setIsPlaying(false);
                        setCurrentTime(0);
                      }}
                    >
                      {t.title} — {t.artist}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <audio ref={audioRef} src={track.src} preload="metadata" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default MusicPlayerArea;