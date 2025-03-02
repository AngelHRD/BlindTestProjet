import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function CardGenre({ genre, img }) {
    return (
        <div className='relative w-90 h-90 rounded-2xl cursor-pointer overflow-hidden group bg-black z-10'>
            <Link to='' className='w-full h-full'>
                <div className='flex justify-end'>
                    <h3 className='absolute top-0 right-0 text-right t-owners-card break-words z-20 pt-4 pr-4  max-w-[258px]'>
                        {genre}
                        {/* R<span className='t-briller-card'>o</span>ck */}
                    </h3>
                </div>

                <img
                    className='object-cover scale-125 w-full h-full blur-sm transition-all duration-500 ease-in-out group-hover:blur-none'
                    src={img}
                    alt={genre}
                />
            </Link>
        </div>
    );
}

export default CardGenre;
