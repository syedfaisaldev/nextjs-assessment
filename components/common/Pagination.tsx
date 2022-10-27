import { IPagination } from "../../interfaces/Planet"

interface IPaginationProps {
  pagination: IPagination,
  handlePagination: (pageNumber: number) => void
}

export default function Pagination({ pagination, handlePagination }: IPaginationProps) {

  const { total, page, totalPages, recordsPerPage } = pagination;
  const recordsFrom = ((page - 1) * recordsPerPage) + 1;
  const recordsTo = (recordsPerPage * page) > total ? total : recordsPerPage * page;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => handlePagination(page - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePagination(page + 1)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{recordsFrom}</span> to <span className="font-medium">{recordsTo}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => handlePagination(page - 1)}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            {Array(totalPages).fill(null).map((item, i) => (
              <button
                key={i}
                onClick={() => handlePagination(i + 1)}
                aria-current="page"
                className={`relative inline-flex items-center border  px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${page === i + 1 ? 'z-10 border-indigo-500 bg-indigo-50 text-indigo-600' : 'border-gray-300 bg-white'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePagination(page + 1)}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}