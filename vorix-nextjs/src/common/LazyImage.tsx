"use client";
import React, { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

const LazyImage: React.FC<Props> = ({ src, alt, className, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`lazy-image ${loaded ? "loaded" : "shimmer"}`} style={style}>
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default LazyImage;