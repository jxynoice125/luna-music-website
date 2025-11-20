export const metadata = {
  title: "Luna Music",
  description: "Luna Music — your Discord companion for playing music with clarity and style.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>{children}</body>
    </html>
  );
}
