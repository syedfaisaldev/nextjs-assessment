;
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Headers() {
  const { pathname } = useRouter();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/"><a  className="flex items-center">
            <img
              className="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <img
              className="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-700 ml-2">Escapod</span>
          </a>
          </Link>
          <button
            onClick={handleMenu}
            type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`w-full md:block md:w-auto ${menu ? 'block' : "hidden"}`}>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
              <Link href="/">
                <a  className={`${pathname==="/"?'text-blue-700':'text-gray-700'} block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent  md:p-0`} aria-current="page">Home</a>
              </Link>
              </li>
              <li>
              <Link href="/planets">
                <a  className={`${pathname==="/planets"?'text-blue-700 ':'text-gray-700'} block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>Planets</a>
                </Link>
              </li>
              <li>
              <Link href="/people">
                <a  className={`${pathname==="/people"?'text-blue-700':'text-gray-700'} block py-2 pr-4 pl-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0`}>People</a>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* )} */}
    </header>
  )
}