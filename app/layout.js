import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Explorador de Países',
  description: 'Una app para explorar información de países del mundo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-purple-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">Explorador de Países</a>
            <div className="space-x-4">
              <a href="/" className="p-4 hover:bg-purple-400 rounded-2xl hover:font-bold">Inicio</a>
              <a href="/favorites" className="p-4 hover:bg-purple-400 rounded-2xl hover:font-bold">Favoritos</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}