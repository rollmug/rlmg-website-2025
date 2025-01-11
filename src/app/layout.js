import { Nunito_Sans } from "next/font/google";
import { ApolloWrapper } from "@/lib/apollo-provider";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito'
});

export const metadata = {
  title: "RLMG 2025",
  description: "New Website",
  authors: [{ name: 'Dave Kobrenski' }, { name: 'RLMG', url: 'https://rlmg.com' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${nunitoSans.className} antialiased`}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
