import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Agasthya Productions',
  description: 'Stories. Crafted with Heart.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
