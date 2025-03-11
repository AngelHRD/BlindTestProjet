import BoxShadow from '../components/BoxShadow';
import CarouselGenre from '../components/CarouselGenre';
import Footer from '../components/Footer';
import MarqueeText from '../components/MarqueeText';
import { useState, useEffect } from 'react';
import ApiRequest from '../services/api';

function Homepage() {
    const [genres, setGenres] = useState([]);

    const fetchGenres = async () => {
        try {
            const response = await ApiRequest.get(`/cards`);
            setGenres(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGenres();
    }, []);
    return (
        <div className='bg-[var(--noir)] relative flex flex-col items-center max-w-screen'>
            {/* Image de fond accueil */}
            <img
                className='absolute z-0 lg:mt-[-72px] '
                src='/public/assets/img/accueil/fond-accueil-mobile-1.png'
                srcSet='/public/assets/img/accueil/fond-accueil-mobile-1.png 640w,
          /public/assets/img/accueil/fond-accueil-1.webp 768w'
                sizes='(max-width: 767px) 100vw, 768px'
            ></img>

            {/* Scrolling slogan du blind test */}
            <MarqueeText></MarqueeText>

            {/* div container début */}
            <div className='lg:px-48 px-2 w-full lg:mt-[-72px] '>
                {/* Premiere section*/}
                <div className='h-screen flex lg:items-center lg:justify-end pt-[30vh] lg:pt-0'>
                    <BoxShadow genres={genres}></BoxShadow>
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
                                    <h2 className='t-briller-vide lg:text-[3.7rem] text-4xl'>Info</h2>
                                    <h2 className='t-owners pl-4 lg:text-[3.7rem] text-4xl'>
                                        Blin<span className='t-briller lg:text-[3.7rem] text-4xl'>d</span> test
                                    </h2>
                                </div>

                                {/* paragraphes*/}
                                <p className='para lg:text-[1.1rem] text-base'>
                                    Bienvenue dans une expérience ultime pour tous les amateurs de musique et de
                                    challenges.
                                </p>
                                <p className='para lg:text-[1.1rem] text-base'>
                                    Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent
                                    faire la différence.
                                </p>
                                <p className='para lg:text-[1.1rem] text-base'>
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
                        <div className='z-10 t-owners whitespace-nowrap lg:text-[3.7rem] text-4xl'>
                            c&apos;est quoi t<span className='t-briller lg:text-[3.7rem] text-4xl'>o</span>n genr
                            <span className='t-briller lg:text-[3.7rem] text-4xl'>e</span>?
                        </div>
                        <div className='absolute left-1 top-1 z-0 t-owners-vide whitespace-nowrap lg:text-[3.7rem] text-4xl'>
                            c&apos;est quoi t<span className='t-briller-vide lg:text-[3.7rem] text-4xl'>o</span>n genr
                            <span className='t-briller-vide lg:text-[3.7rem] text-4xl'>e</span>?
                        </div>
                    </div>
                    <CarouselGenre genres={genres}></CarouselGenre>
                </div>
            </div>
            {/* Footer */}
            <Footer></Footer>

            {/* div container fin */}
        </div>
    );
}

export default Homepage;
