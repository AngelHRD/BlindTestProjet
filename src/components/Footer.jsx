import './cssComponents/footer.css';

function Footer() {
    return (
        <footer className='w-full bg-blur-nav mt-10 mb-22 lg:my-12 lg:pt-10 flex flex-col items-center'>
            <div className='flex flex-col items-center lg:justify-center lg:flex-row lg:gap-60 mt-10 w-full lg:w-2/3'>
                <div className='w-full flex flex-col items-center lg:items-start'>
                    <h4 className='titre-footer-owners'>
                        Inf<span className='titre-footer-briller'>o</span>
                    </h4>
                    <p className='para-footer'>Mentions légales</p>
                    <p className='para-footer'>Conditions d&apos;utilisation</p>
                    <hr className='border-0.5 text-[var(--chartreuse)] w-4/6 my-5 lg:hidden'></hr>
                </div>
                <div className='w-full flex flex-col items-center lg:items-start'>
                    <h4 className='titre-footer-owners'>
                        Caté<span className='titre-footer-briller'>g</span>orie
                    </h4>
                    <p className='para-footer'>Politique de confidentialité</p>
                    <hr className='border-0.5 text-[var(--chartreuse)] w-4/6 my-5 lg:hidden'></hr>
                </div>
                <div className='w-full flex flex-col items-center lg:items-start'>
                    <h4 className='titre-footer-owners'>
                        Jsp<span className='titre-footer-briller'>a</span>s
                    </h4>
                    <p className='para-footer'>Lorem Ipsum</p>
                    <p className='para-footer'>Lorem Ipsum dolor</p>
                </div>
            </div>
            <hr className='border-0.5 text-[var(--chartreuse)] w-4/6 my-5 lg:my-8'></hr>
            <div className='flex gap-5'>
                <img width='55' height='55' src='https://img.icons8.com/color/55/facebook-new.png' alt='facebook-new' />
                <img
                    width='55'
                    height='55'
                    src='https://img.icons8.com/color/55/instagram-new--v1.png'
                    alt='instagram-new--v1'
                />
            </div>
            <p className='para-footer mt-2'>Suivez-nous sur facebook et instagram !</p>
        </footer>
    );
}

export default Footer;
