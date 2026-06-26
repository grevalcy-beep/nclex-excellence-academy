import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCLEX Excellence Academy',
  description: 'Original NCLEX prep platform with QBank, exam simulator, analytics, admin management, and medical shop.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
