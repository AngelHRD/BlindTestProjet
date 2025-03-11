import './cssComponents/marqueeText.css';

function MarqueeText() {
    return (
        <div className='absolute top-[95vh] w-full overflow-hidden mt-[-72px]'>
            <div className='scrolling-container relative flex overflow-x-hidden'>
                <div className='marquee1'>
                    <div className='relative z-10 t-owners w-full'>
                        - Blin<span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan - Blin
                        <span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan - Blin
                        <span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan - Blin
                        <span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan
                    </div>
                    <div className='absolute top-1 left-1 z-0 t-owners-vide w-full'>
                        - Blin<span className='t-briller-vide'>d</span> test sl
                        <span className='t-briller-vide'>o</span>gan - Blin<span className='t-briller-vide'>d</span>{' '}
                        test sl<span className='t-briller-vide'>o</span>gan - Blin
                        <span className='t-briller-vide'>d</span> test sl<span className='t-briller-vide'>o</span>
                        gan - Blin<span className='t-briller-vide'>d</span> test sl
                        <span className='t-briller-vide'>o</span>gan
                    </div>
                </div>

                <div className='marquee2 absolute'>
                    <div className='relative z-10 t-owners w-full'>
                        - Blin<span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan - Blin
                        <span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan - Blin
                        <span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan - Blin
                        <span className='t-briller'>d</span> test sl<span className='t-briller'>o</span>gan
                    </div>
                    <div className='absolute top-1 left-1 z-0 t-owners-vide w-full'>
                        - Blin<span className='t-briller-vide'>d</span> test sl
                        <span className='t-briller-vide'>o</span>gan - Blin<span className='t-briller-vide'>d</span>{' '}
                        test sl<span className='t-briller-vide'>o</span>gan - Blin
                        <span className='t-briller-vide'>d</span> test sl<span className='t-briller-vide'>o</span>
                        gan - Blin<span className='t-briller-vide'>d</span> test sl
                        <span className='t-briller-vide'>o</span>gan
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarqueeText;
