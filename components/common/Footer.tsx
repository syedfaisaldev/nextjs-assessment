import type { NextPage } from 'next'
const Footer: NextPage = () => {

  return (
    <footer className="flex-shrink-0 p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 <a href="https://escapod.us/" className="hover:underline">Escapod</a>.
        All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
