export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Luna Music</h1>
      <p>
        Luna Music is a powerful Discord music bot offering high-quality audio, playlist control, 
        and seamless streaming — ideal for server communities and music lovers.
      </p>

      <h2>Features</h2>
      <ul>
        <li>High-quality audio playback</li>
        <li>YouTube / Spotify search support</li>
        <li>Queue system & skip controls</li>
        <li>Fast and reliable performance</li>
      </ul>

      <a href="#" style={{
        display: "inline-block",
        padding: "12px 20px",
        background: "black",
        color: "white",
        borderRadius: "8px",
        marginTop: "20px",
        textDecoration: "none"
      }}>
        Invite Luna Music
      </a>

      <h2 style={{ marginTop: "40px" }}>Legal</h2>
      <ul>
        <li><a href="/tos">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </main>
  );
}
