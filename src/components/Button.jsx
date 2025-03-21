function Button({ type, onClick, className, children }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center gap-2 py-3 px-5 rounded-lg transition ${className}`}
      >
        {children}
      </button>
    );
  }
export default Button; 