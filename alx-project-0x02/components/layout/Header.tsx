import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-blue-500 p-4 shadow-md">
            <nav className="flex gap-6">
                <Link href="/home" className="text-white hover:underline">
                    Home
                </Link>
                <Link href="/about" className="text-white hover:underline">
                    About
                </Link>
                <Link href="/posts" className="text-white hover:underline">
                    Posts
                </Link>
                <Link href="/users" className="text-white hover:underline">
                    Users
                </Link>
            </nav>
        </header>
    )
}