export default function TwentyEightShiftPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050510",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      <iframe
        src="/games/28shift/index.html"
        style={{
          width: "430px",
          height: "720px",
          border: "none",
          background: "#050510",
        }}
        allow="fullscreen"
      />
    </main>
  );
}