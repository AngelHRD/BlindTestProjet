import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonPerso({ to, text, width, height, onClick, hidden = 'block' }) {
    const classes = ` ${width} ${height} ${hidden} lg:mt-6 lg:text-xl linear scale-[1.03] animate-rotate-border cursor-pointer rounded-lg bg-conic/[from_var(--border-angle)] from-gray-800 from-70% via-[chartreuse] via-90% to-gray-800 to-100% p-px shadow-lg transition-all duration-500 ease-in-out hover:shadow-[chartreuse]/10 hover:scale-105`;

    if (onClick) {
        return (
            <button onClick={onClick} className={classes} aria-label={text}>
                <p className='flex h-full w-full items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xl text-[chartreuse] transition-colors duration-500 ease-in-out'>
                    {text}
                </p>
            </button>
        );
    }

    return (
        <Link to={to} className={classes} aria-label={text}>
            <p className='flex h-full w-full items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xl text-[chartreuse] transition-colors duration-500 ease-in-out'>
                {text}
            </p>
        </Link>
    );
}

ButtonPerso.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    onClick: PropTypes.func, // Ajout de onClick dans les PropTypes
    hidden: PropTypes.string,
};

export default ButtonPerso;

// premier style :
{
    /* <Link
                    to={`/genres`}
                    className='bg-[chartreuse] lg:w-3/4 w-full lg:h-14 h-10 rounded-xl lg:mt-6 btn-text flex justify-center items-center lg:text-[1.2rem] text-base'
                >
                    Let&apos;s go !
                </Link> */
}
