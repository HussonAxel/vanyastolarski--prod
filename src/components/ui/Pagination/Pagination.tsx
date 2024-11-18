interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const PastilleButton = ({
  page,
  isActive,
  onClick,
}: {
  page: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
      isActive ? "bg-green scale-125" : "bg-green/30 hover:bg-green/50"
    }`}
    aria-label={`Page ${page}`}
  />
);

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-white opacity-70 hover:opacity-100 disabled:opacity-30 transition-opacity"
        aria-label="Previous page"
      >
      </button>

      <div className="flex items-center mx-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PastilleButton
            key={page}
            page={page}
            isActive={currentPage === page}
            onClick={() => onPageChange(page)}
          />
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 text-white opacity-70 hover:opacity-100 disabled:opacity-30 transition-opacity"
        aria-label="Next page"
      >
      </button>
    </div>
  );
};

export default Pagination;
