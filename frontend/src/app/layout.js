import "./globals.css";

export const metadata = {
  title: "CrediNFT",
  description: "Hackathon Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
