import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito'
});

export const metadata = {
  title: "RLMG 2025",
  description: "New Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${nunitoSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
