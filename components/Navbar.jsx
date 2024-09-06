import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-background/50 p-4 sticky top-0 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center border-b pb-6">
        <Link href="/">
          <div className="text-lg font-bold">
            HamzaBlog
          </div>  
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
