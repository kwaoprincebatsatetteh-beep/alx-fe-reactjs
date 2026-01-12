
function Footer() {
  const footerHeight = 60;

  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height: footerHeight,
        background: "#333",
        color: "white",
        padding: "10px 20px",
        textAlign: "center",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.2)",
        zIndex: 1000
      }}
    >
      <p style={{ margin: 0 }}>© 2025 My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
