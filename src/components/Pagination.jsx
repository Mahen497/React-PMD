import React from 'react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
   console.log("Pagination Rendered: ", { currentPage, totalPages });
   return (
      <div className="my-10 flex justify-center gap-3">
         <button
            aria-label="Go to previous page"
            className='card px-4 py-2 border rounded cursor-pointer disabled:opacity-50'
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
         >
            Prev
         </button>
         {
            Array.from({ length: totalPages }, (_, i) => (
               <button
                  key={i}
                  aria-label={`Go to page ${i + 1}`}
                  className={`card px-4 py-2 border rounded cursor-pointer ${currentPage === i + 1 ? 'bg-[#fee6e3] text-white' : ''}`}
                  onClick={() => onPageChange(i + 1)}
               >
                  {i + 1}
               </button>
            ))}

         <button
            className='card px-4 py-2 border rounded cursor-pointer disabled:opacity-50'
            aria-label="Go to next page"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
         >
            Next
         </button>
      </div>
   )
}
