import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import { CartProvider } from "@/component/CartContext";
import { Toaster } from "react-hot-toast";


<Toaster 
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: '#FF6B6B',
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
    },
    success: {
      icon: '🎉',
      style: {
        background: '#1dd1a1',
        color: '#fff',
      },
    },
    error: {
      icon: '😢',
      style: {
        background: '#ff6b6b',
        color: '#fff',
      },
    },
  }}
/>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pop = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "E-commerce Website",
  description: "Alpha Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={pop.className}
      >
      
      {/* <LoginPage /> */}
        <CartProvider>
          <Navbar />
          <Toaster  position="top-right"/>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}


