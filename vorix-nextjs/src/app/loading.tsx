export default function Loading() {
  return (
    <div className="mplayer-loader" role="status" aria-live="polite" aria-label="Chargement MPlayer">
      <div className="loader-inner">
        <div className="vinyl">
          <span className="dot" />
        </div>
        <h2 className="brand">MPlayer</h2>
        <p className="tagline">Voyage musical en cours…</p>
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