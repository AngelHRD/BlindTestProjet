import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const Avatar = forwardRef(({ textSize, margin }, ref) => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const username = userInfo?.username || '?';
    const initial = username.charAt(0).toUpperCase();

    return (
        <div
            ref={ref}
            className={` ${margin} w-full h-full flex items-center justify-center  t-owners leading-none text-white font-bold `}
            style={{ fontSize: textSize }}
        >
            {initial}
        </div>
    );
});

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
    textSize: PropTypes.string,
    margin: PropTypes.string,
};

export default Avatar;
