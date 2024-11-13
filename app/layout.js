import './globals.css';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Micro SaaS Creater',
  description: '',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
