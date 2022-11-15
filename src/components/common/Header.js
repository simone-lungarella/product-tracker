
function Header(props) {
    return (
        <div className='grid place-content-center h-20 bg-amber-300 w-full'>
            <div className='text-center text-white text-2xl font-bold'>
                <h1 className='md:text-4xl text-2xl font-bold' >{props.title}</h1>
            </div>
        </div>
    );
}

export default Header;
