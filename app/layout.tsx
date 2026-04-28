import "./globals.css";

export const metadata = {
  title: "Accredian Clone",
  description: "Enterprise Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
