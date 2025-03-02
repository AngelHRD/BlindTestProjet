// eslint-disable-next-line react/prop-types
function CardGenre({ genre, img }) {
    return (
        <div className='relative w-90 h-90 rounded-2xl cursor-pointer overflow-hidden group bg-black z-10'>
            <a href='' className=' w-full h-full'>
                <h3 className='absolute top-8 left-53 t-owners-card font-bold z-20 '>
                    {genre}
                    {/* R<span className='t-briller-card'>o</span>ck */}
                </h3>

                <img
                    className='object-cover scale-125  w-full h-full blur-sm transition-all duration-500 ease-in-out group-hover:blur-none'
                    src={img}
                    alt={genre}
                />
            </a>
        </div>
    );
}

export default CardGenre;
