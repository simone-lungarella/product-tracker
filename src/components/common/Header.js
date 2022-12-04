
function Header(props) {
    return (
        <div className='grid place-content-center h-20 bg-amber-200 w-full'>
            <div 
                className='prose'>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}

export default Header;
