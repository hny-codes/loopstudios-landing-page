import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';

// Fonts
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
});

const alata = localFont({
  src: './fonts/Alata-Regular.ttf',
  display: 'swap',
  variable: '--font-alata',
});

// Metadata
export const metadata: Metadata = {
  title: 'Loopstudios',
  description: 'Loopstudios - Your New VR Studio. Turn your idea into virtual reality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${josefin.variable} ${alata.variable}`}>
        {children}
      </body>
    </html>
  );
}
