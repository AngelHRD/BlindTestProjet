import './cssComponents/marqueeText.css';

function MarqueeText() {
    return (
        <div className='absolute lg:top-[95vh] top-[95dvh] w-full overflow-hidden lg:mt-[-72px]'>
            <div className='scrolling-container relative flex overflow-x-hidden'>
                <div className='marquee1'>
                    <div className='relative z-10 t-owners w-full lg:text-[3.7rem] text-4xl'>
                        - Blin<span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan
                    </div>
                    <div className='absolute top-1 left-1 z-0 t-owners-vide w-full lg:text-[3.7rem] text-4xl'>
                        - Blin<span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>
                        gan - Blin<span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>gan
                    </div>
                </div>

                <div className='marquee2 absolute'>
                    <div className='relative z-10 t-owners w-full lg:text-[3.7rem] text-4xl'>
                        - Blin<span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>gan
                    </div>
                    <div className='absolute top-1 left-1 z-0 t-owners-vide w-full lg:text-[3.7rem] text-4xl'>
                        - Blin<span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>gan - Blin
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>
                        gan - Blin<span className='t-briller-vide lg:text-[3.7rem] text-4xl'>d</span> test sl
                        <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>gan
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarqueeText;
