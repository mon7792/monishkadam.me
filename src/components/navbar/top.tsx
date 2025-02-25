import Link from 'next/link'

const NavbarTop = () => {
  return (
    <nav className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="inline-block w-8 h-8 rounded-full bg-black"></div>
      </Link>
      
    </nav>
  )
}

export { NavbarTop }
