import "./styles.css";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <div className="pagination__list">
        <button
          className={`pagination__btn ${currentPage === 1 ? "pagination__btn--disabled" : ""}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ←
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`pagination__btn ${currentPage === page ? "pagination__btn--active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`pagination__btn ${currentPage === totalPages ? "pagination__btn--disabled" : ""}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};
