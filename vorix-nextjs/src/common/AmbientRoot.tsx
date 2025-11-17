"use client"
import dynamic from "next/dynamic";
const AmbientAudio = dynamic(() => import("@/common/AmbientAudio"), { ssr: false });

export default function AmbientRoot() {
  return <AmbientAudio />;
}