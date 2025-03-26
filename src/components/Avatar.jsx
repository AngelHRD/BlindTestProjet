import PropTypes from 'prop-types';
import { forwardRef, useState, useEffect } from 'react';

const Avatar = forwardRef(({ textSize, textSizeMobile, margin }, ref) => {
    const [fontSize, setFontSize] = useState(textSize);

    useEffect(() => {
        const handleResize = () => {
            setFontSize(window.innerWidth < 768 ? textSizeMobile : textSize);
        };

        handleResize(); // Appliquer la bonne taille au chargement
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [textSize, textSizeMobile]);

    const userInfo = JSON.parse(localStorage.getItem('user'));
    const username = userInfo?.username || '?';
    const initial = username.charAt(0).toUpperCase();

    return (
        <div
            ref={ref}
            className={` ${margin} w-full h-full flex items-center justify-center t-owners leading-none text-white font-bold `}
            style={{ fontSize }}
        >
            {initial}
        </div>
    );
});

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
    textSize: PropTypes.string.isRequired,
    textSizeMobile: PropTypes.string.isRequired,
    margin: PropTypes.string,
};

export default Avatar;
