import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardGenre({ data }) {
    return (
        <div className='relative h-30 md:aspect-square rounded-4xl md:rounded-2xl cursor-pointer overflow-hidden group bg-black z-10 md:h-auto md:w-full'>
            <Link to={`/genres/${data.slug}`} className='w-full h-full relative'>
                <div
                    className='absolute inset-0 flex items-center justify-center 
                        md:top-2 md:right-2 md:justify-end md:items-start md:p-2'
                >
                    <h2 className='t-owners-card text-center break-words z-20 md:text-right'>{data.title}</h2>
                </div>

                <img
                    className='w-full h-full object-cover blur-sm transition-all duration-500 ease-in-out group-hover:blur-none'
                    src={data.img_card}
                    alt={data.description}
                />
            </Link>
        </div>
    );
}

CardGenre.propTypes = {
    data: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img_card: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardGenre;
