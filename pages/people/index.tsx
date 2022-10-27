import Link from 'next/link';
import { IPeople, IPeopleInterface } from "../../interfaces/Peoples"
import Pagination from "../../components/common/Pagination"
import { usePagination } from '../../customHooks/usePagination';
import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext';
import { favoriteItems, getIdFromUrl,  } from '../../utils/utils';
// defines types of the Components Props
interface IPopleProps {
  peoples: IPeopleInterface
  page: number
}

const People = ({ peoples, page }: IPopleProps) => {
  
  const { results, count } = peoples;
  const { favPeople, addFavPeoples } = useContext(GlobalContext)
  //  useCustom Hooks for the pagination
  const { pagination, handlePagination } = usePagination('people', page, count);

  return (
    <>
      <h2 className='text-4xl font-extrabold text-gray-700 mb-8'>Peoples</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {results && results.map((people, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
          >
            <div className='flex items-center justify-between'>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{people.name}</h5>
              <span onClick={() => addFavPeoples && addFavPeoples(people)} className="cursor-pointer">
              <svg  xmlns="http://www.w3.org/2000/svg" fill={`${favoriteItems(people.url,favPeople as IPeople[])?'red':'none'}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </span>
            </div>
            <p className="mb-3 font-normal text-gray-700">
              {people.gender}
            </p>
            <Link href={getIdFromUrl(people.url)}>
              <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </Link>
          </div>
        ))}
      </div>
        {/* Pagination of the Page */}
      <Pagination pagination={pagination} handlePagination={handlePagination} />
    </>
  )
}

export default People

export const getServerSideProps = async (context: any) => {
  let page = context.query.page || 1;
  // fetching data from api.
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  let peoples = await res.json();
  // Sending fetched data to the page component via props.
  return {
    props: {
      peoples,
      page
    }
  }
}