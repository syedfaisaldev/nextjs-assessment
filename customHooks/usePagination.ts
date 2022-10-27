
import { useRouter } from 'next/router';
import { useState } from 'react';

const RECORDS_PER_PAGE = 10;

export function usePagination(routeKey: string, page = 1, count = 0) {

  const router = useRouter()
  const [pagination, setPagination] = useState({
    page: page,
    recordsPerPage: RECORDS_PER_PAGE,
    total: count,
    totalPages: Math.ceil(count / RECORDS_PER_PAGE)
  });

  const handlePagination = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > pagination.totalPages) return
    setPagination({
      ...pagination,
      page: pageNumber
    })
    router.push(`/${routeKey}?page=${pageNumber}`);
  };

  return { pagination, handlePagination };
}