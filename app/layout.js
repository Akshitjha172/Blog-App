import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'The Blog',
  description: 'A simple blog built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
