/// components/Navbar.js

import Link from 'next/link';
Zxx
function Navbar() {
    return (
        <nav className="flex justify-between p-4 bg-gray-800">
            <Link href="/" className="text-white hover:text-gray-300 ml-4">
                Home
            </Link>
            <Link href="/products" className="text-white hover:text-gray-300 ml-4">
                Products
            </Link>
            <Link href="/cart" className="text-white hover:text-gray-300 ml-4">
                Cart
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 ml-4">
                About
            </Link>
            <h1 className='text-pink-400'>haris
            </h1>
        </nav>
    );
}

export default Navbar;
