import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardGenre({ data }) {
    return (
        <div className='relative aspect-square rounded-2xl cursor-pointer overflow-hidden group bg-black z-10'>
            <Link to={`/genres/${data.slug}`}>
                <h3 className='absolute top-0 right-0 text-right t-owners-card break-words z-20 pt-4 pr-4'>
                    {data.title}
                </h3>

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
