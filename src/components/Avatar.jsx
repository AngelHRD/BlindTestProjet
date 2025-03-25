import React from 'react';

const Avatar = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const username = userInfo?.username || '?';
    const initial = username.charAt(0).toUpperCase();

    return (
        <div className='w-full h-full flex items-center justify-center text-[10vw] t-owners mt-2 leading-none text-white font-bold'>
            {initial}
        </div>
    );
};

export default Avatar;
