function Button({ children, onClick, disabled, type }) {
    return (
        <button
            className='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
      hover:bg-amber-200 bg-amber-100 text-amber-700 border duration-200 ease-in-out border-amber-600 transition'
            onClick={onClick}
            disabled={disabled}
            type={type}>
            {children}
        </button>
    );
}

export default Button;
