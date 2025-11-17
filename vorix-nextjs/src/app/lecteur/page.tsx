import HeaderOne from "@/layouts/headers/HeaderOne";
import MusicPlayerArea from "@/components/homes/home/MusicPlayerArea";

export const metadata = {
  title: "Lecteur MPlayer - Écoute immersive",
  description: "Page dédiée au lecteur MPlayer : commandes intuitives, file d’attente et expérience fluide.",
};

export default function LecteurPage() {
  return (
    <>
      <HeaderOne />
      <MusicPlayerArea />
    </>
  );
}