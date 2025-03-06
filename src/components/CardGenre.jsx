import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function CardGenre({ data }) {
    return (
        <div className='relative w-full aspect-square rounded-2xl cursor-pointer overflow-hidden group bg-black z-10'>
            <Link to={`/genres/${data.slug}`} className='w-full h-full block'>
                <div className='flex justify-end'>
                    <h3 className='absolute top-0 right-0 text-right t-owners-card break-words z-20 pt-4 pr-4 max-w-[80%]'>
                        {data.title}
                    </h3>
                </div>

                <img
                    className='overflow-hidden object-cover scale-125 w-full h-full blur-sm transition-all duration-500 ease-in-out group-hover:blur-none'
                    src={data.img}
                    alt={data.description}
                />
            </Link>
        </div>
    );
}

export default CardGenre;
