// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <meta name="theme-color" content="#4c1d95" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo2.png" />
        
        {/* Proper font loading with correct preload attributes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet"
          media="print" 
          onLoad="this.media='all'" 
        />
        
        {/* Inline styles for critical CSS */}
        <style>
          {`
          /* Ensure Orbitron is applied everywhere */
          html, body {
            font-family: 'Orbitron', sans-serif !important;
          }
          
          /* Custom cursor styles */
          .cursor-dot,
          .cursor-outline {
            position: fixed;
            z-index: 9999;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease;
          }
          
          .cursor-dot {
            width: 12px;
            height: 12px;
            background-color: rgb(168, 85, 247);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.8),
                        0 0 20px rgba(168, 85, 247, 0.6),
                        0 0 30px rgba(168, 85, 247, 0.4);
            mix-blend-mode: screen;
          }
          
          .cursor-outline {
            width: 32px;
            height: 32px;
            border: 2px solid rgb(59, 130, 246);
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5),
                        0 0 25px rgba(59, 130, 246, 0.3);
            mix-blend-mode: exclusion;
          }
          `}
        </style>
      </Head>
      <body className="font-orbitron">
        <Main />
        <NextScript />
        
        {/* Custom cursor script */}
        <script src="/cursor.js" />
        
        {/* Service worker registration */}
        <script src="/register-sw.js" />
      </body>
    </Html>
  );
}