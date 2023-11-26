import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

const PaginationFooter = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mt={4}>
      <Button variant="contained" disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
        Previous
      </Button>
      <Pagination count={totalPages} page={currentPage} onChange={(event, value) => paginate(value)} />
      <Button variant="contained" disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)}>
        Next
      </Button>
    </Stack>
  );
};

export default PaginationFooter;