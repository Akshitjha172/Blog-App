export default function Pagination({ totalPosts, postsPerPage, currentPage, setCurrentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center mt-8 space-x-2">
        {pageNumbers.map(num => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 border rounded-md ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-700 text-black dark:text-white'}`}
          >
            {num}
          </button>
        ))}
      </div>
    );
  }
  