import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/gerb.jpg"
            alt="Traditsia Logo"
            width={50}
            height={50}
            className="h-12 w-12"
          />
          <span className="text-xl font-bold">
            НАЦИОНАЛНО ДРУЖЕСТВО "ТРАДИЦИЯ"
          </span>
        </div>
        <nav className="space-x-6">
          {['Home', 'Gallery', 'Events', 'Contact', 'About'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="hover:text-gray-600"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
} 