import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Эко Транс',
  description: 'main'
};

export interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru">
      <body className={manrope.className}>
       {children}
      </body>
    </html>
  );
}
