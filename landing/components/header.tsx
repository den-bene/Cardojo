import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/cardojo_logo.png"
              alt="Cardojo Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Cardojo
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
