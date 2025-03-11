import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkBack({ to, text = 'Retour' }) {
    return (
        <Link
            to={to}
            className='md:flex hidden items-center gap-1 my-5 cursor-pointer w-fit hover:opacity-80'
            aria-label={text}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-8 text-white'
                aria-hidden='true'
            >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
            </svg>
            <p className='text-white text-sm lg:text-xl md:text-lg'>{text}</p>
        </Link>
    );
}

LinkBack.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default LinkBack;
