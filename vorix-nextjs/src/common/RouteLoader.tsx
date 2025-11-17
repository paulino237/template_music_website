"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;
  return (
    <div className="mplayer-loader" role="status" aria-live="polite" aria-label="Chargement MPlayer">
      <div className="loader-inner">
        <div className="vinyl">
          <span className="dot" />
        </div>
        <h2 className="brand">MPlayer</h2>
        <p className="tagline">Chargement…</p>
        <div className="bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}