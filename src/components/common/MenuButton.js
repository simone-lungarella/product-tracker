function MenuButton({ children, onClick, disabled, type }) {
    return (
        <button
            className='text-base hover:scale-110 focus:outline-none flex justify-center rounded font-bold cursor-pointer 
                hover:bg-amber-300 bg-amber-200 text-amber-800 border duration-200 ease-in-out border-amber-700 transition py-4 w-16'
                
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
}

export default MenuButton;