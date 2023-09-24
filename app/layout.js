"use client"
import Navigation from '@/Components/Navigation';
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
      <body className={inter.className}>
        <Navigation/>
        {children}
        </body>
      </QueryClientProvider>
    </html>
  )
}
