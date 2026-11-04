import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Olive and e-Mart', description: 'Online shopping and showroom management' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}
