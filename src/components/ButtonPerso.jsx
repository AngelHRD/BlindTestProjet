import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const ButtonPerso = forwardRef(({ to, text, width, height, onClick, hidden = 'block', disabled }, ref) => {
    const classes = ` ${width} ${height} ${hidden} lg:mt-6 lg:text-xl linear scale-[1.03] animate-rotate-border cursor-pointer rounded-lg bg-conic/[from_var(--border-angle)] from-gray-800 from-70% via-[chartreuse] via-90% to-gray-800 to-100% p-px shadow-lg transition-all duration-500 ease-in-out hover:shadow-[chartreuse]/10 hover:scale-105 ${
        disabled ? 'opacity-50 pointer-events-none' : ''
    }`;

    if (onClick) {
        return (
            <button ref={ref} onClick={onClick} className={classes} aria-label={text} disabled={disabled}>
                <p className='flex h-full w-full items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xl text-[chartreuse] transition-colors duration-500 ease-in-out'>
                    {text}
                </p>
            </button>
        );
    }

    return (
        <Link to={disabled ? '#' : to} className={classes} aria-label={text} ref={ref}>
            <p className='flex h-full w-full items-center justify-center rounded-lg bg-neutral-800 hover:bg-neutral-700 text-center text-xl text-[chartreuse] transition-colors duration-500 ease-in-out'>
                {text}
            </p>
        </Link>
    );
});

ButtonPerso.displayName = 'ButtonPerso';

ButtonPerso.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    onClick: PropTypes.func,
    hidden: PropTypes.string,
    disabled: PropTypes.bool,
};

export default ButtonPerso;
