import './cssComponents/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='w-full bg-blur-nav mt-10 mb-22 lg:my-12 lg:pt-10 flex flex-col items-center'>
            <div className='flex flex-col items-center lg:justify-center lg:flex-row lg:gap-60 mt-10 w-full lg:w-2/3 justify-center'>
                <div className='w-full flex flex-col items-center justify-center lg:items-center'>
                    <h4 className='titre-footer-owners text-center'>
                        Inf<span className='titre-footer-briller'>o</span>
                    </h4>
                    <Link to='/'>
                        <p className='para-footer mb-1 hover:underline'>Mentions légales</p>
                    </Link>
                    <Link to='/'>
                        <p className='para-footer hover:underline'>Conditions d&apos;utilisation</p>
                    </Link>
                    <hr className='border-0.5 text-[var(--chartreuse)] w-4/6 my-5 lg:hidden'></hr>
                </div>

                <div className='w-full flex flex-col items-center justify-center lg:items-center'>
                    <h4 className='titre-footer-owners text-center'>
                        Caté<span className='titre-footer-briller'>g</span>orie
                    </h4>
                    <Link to='/'>
                        <p className='para-footer mb-1 hover:underline'>Politique de confidentialité</p>
                    </Link>
                    <hr className='border-0.5 text-[var(--chartreuse)] w-4/6 my-5 lg:hidden'></hr>
                </div>

                <div className='w-full flex flex-col items-center justify-center lg:items-center'>
                    <h4 className='titre-footer-owners text-center'>
                        Jsp<span className='titre-footer-briller'>a</span>s
                    </h4>
                    <Link to='/'>
                        <p className='para-footer mb-1 hover:underline'>Lorem Ipsum</p>
                    </Link>
                    <Link to='/'>
                        <p className='para-footer hover:underline'>Lorem Ipsum dolor</p>
                    </Link>
                </div>
            </div>

            <hr className='border-0.5 text-[var(--chartreuse)] w-4/6 my-5 lg:my-8'></hr>

            <div className='flex gap-5'>
                <Link to='/' aria-label='Aller sur notre facebook'>
                    <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='50' height='50' viewBox='0 0 48 48'>
                        <linearGradient
                            id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'
                            x1='9.993'
                            x2='40.615'
                            y1='9.993'
                            y2='40.615'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop offset='0' stop-color='#B0B0B0'></stop>
                            <stop offset='1' stop-color='#808080'></stop>
                        </linearGradient>
                        <path
                            fill='url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'
                            d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
                        ></path>
                        <path
                            fill='#fff'
                            d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'
                        ></path>
                    </svg>
                </Link>

                <Link to='/' aria-label='Aller sur notre instagram'>
                    <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='50' height='50' viewBox='0 0 48 48'>
                        <radialGradient
                            id='greyGradient1'
                            cx='19.38'
                            cy='42.035'
                            r='44.899'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop offset='0' stop-color='#B0B0B0'></stop>
                            <stop offset='1' stop-color='#808080'></stop>
                        </radialGradient>
                        <path
                            fill='url(#greyGradient1)'
                            d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z'
                        ></path>

                        <radialGradient
                            id='greyGradient2'
                            cx='11.786'
                            cy='5.54'
                            r='29.813'
                            gradientTransform='matrix(1 0 0 .6663 0 1.849)'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop offset='0' stop-color='#A0A0A0'></stop>
                            <stop offset='1' stop-color='#808080' stop-opacity='0'></stop>
                        </radialGradient>
                        <path
                            fill='url(#greyGradient2)'
                            d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z'
                        ></path>

                        <path
                            fill='#D0D0D0'
                            d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'
                        ></path>

                        <circle cx='31.5' cy='16.5' r='1.5' fill='#D0D0D0'></circle>

                        <path
                            fill='#D0D0D0'
                            d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18 c0-2.757-2.243-5-5-5H18z'
                        ></path>
                    </svg>
                </Link>
            </div>
            <p className='para-footer mt-2'>Suivez-nous sur facebook et instagram !</p>
        </footer>
    );
}

export default Footer;
