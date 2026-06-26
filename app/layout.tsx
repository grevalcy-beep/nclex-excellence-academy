import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NCLEX Excellence Academy',
  description: 'Learn. Practice. Master. Succeed. Your pathway to NCLEX success with structured courses, QBank practice, clinical judgment training, and enrollment support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
