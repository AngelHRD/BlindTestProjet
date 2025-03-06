import BoxShadow from '../components/BoxShadow';
import CarouselGenre from '../components/CarouselGenre';
import Footer from '../components/Footer';
import MarqueeText from '../components/MarqueeText';

function Homepage() {
    return (
        <div className='bg-[var(--noir)] relative flex flex-col items-center max-w-screen '>
            {/* Image de fond accueil */}
            <img className='absolute z-0' src='/public/assets/img/accueil/fond-accueil-1.webp'></img>

            {/* Scrolling slogan du blind test */}
            <MarqueeText></MarqueeText>

            {/* div container début */}
            <div className='px-48 w-full'>
                {/* Premiere section*/}
                <div className='h-screen flex flex-col items-end justify-center '>
                    <BoxShadow></BoxShadow>
                </div>

                {/* Deuxieme section*/}
                {/* Container section 2*/}
                <div className='w-full'>
                    {/* Container div 1 et enceinte*/}
                    <div className='flex flex-row justify-center my-24 relative z-0'>
                        <div className='bg-blur w-4/5 h-[400px] px-18 py-10 my-18'>
                            <div className='flex flex-col gap-4 w-3/5'>
                                {/* titre*/}

                                <div className='w-full my-3 flex flex-col'>
                                    <h2 className='t-briller-vide'>Info</h2>
                                    <h2 className='t-owners pl-4'>
                                        Blin<span className='t-briller'>d</span> test
                                    </h2>
                                </div>

                                {/* paragraphes*/}
                                <p className='para'>
                                    Bienvenue dans une expérience ultime pour tous les amateurs de musique et de
                                    challenges.
                                </p>
                                <p className='para'>
                                    Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent
                                    faire la différence.
                                </p>
                                <p className='para'>
                                    Que tu sois un fan inconditionnel de pop, de rock, de rap ou de classiques
                                    indémodables.
                                </p>
                            </div>
                        </div>

                        <div className='absolute right-0 z-10'>
                            <img src='/public/assets/img/accueil/enceinte.png' className='w-[600px] rotate-10 '></img>
                        </div>
                    </div>
                </div>

                {/* troisieme section*/}
                <div className='flex flex-col items-center'>
                    <div className='relative'>
                        <div className='z-10 t-owners whitespace-nowrap'>
                            c&apos;est quoi t<span className='t-briller'>o</span>n genr
                            <span className='t-briller'>e</span>?
                        </div>
                        <div className='absolute left-1 top-1 z-0 t-owners-vide whitespace-nowrap'>
                            c&apos;est quoi t<span className='t-briller-vide'>o</span>n genr
                            <span className='t-briller-vide'>e</span>?
                        </div>
                    </div>
                    <CarouselGenre></CarouselGenre>
                </div>
            </div>
            {/* Footer */}
            <Footer></Footer>

            {/* div container fin */}
        </div>
    );
}

export default Homepage;
