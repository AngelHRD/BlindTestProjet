import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function CardGenre({ data }) {
    // eslint-disable-next-line react/prop-types
    const { title, img, description } = data;

    return (
        <div className='relative w-full aspect-square rounded-2xl cursor-pointer overflow-hidden group bg-black z-10'>
            <Link to={`/genres/${title}`} className='w-full h-full block'>
                <div className='flex justify-end'>
                    <h3 className='absolute top-0 right-0 text-right t-owners-card break-words z-20 pt-4 pr-4 max-w-[80%]'>
                        {title.replaceAll('-', ' ')}
                    </h3>
                </div>

                <img
                    className='overflow-hidden object-cover scale-125 w-full h-full blur-sm transition-all duration-500 ease-in-out group-hover:blur-none'
                    src={img}
                    alt={description}
                />
            </Link>
        </div>
    );
}

export default CardGenre;
