import BoxShadow from '../components/BoxShadow';
import CarouselGenre from '../components/CarouselGenre';
import Footer from '../components/Footer';
import MarqueeText from '../components/MarqueeText';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import ApiRequest from '../services/api';

function Homepage() {
    const [genres, setGenres] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0); // State pour la position du scroll

    const fetchData = async () => {
        try {
            const responsecards = await ApiRequest.get(`/cards`);
            setGenres(responsecards.data);
            const responseimg = await ApiRequest.get(`/img`);
            setImages(responseimg.data);
            console.log('card', responsecards.data);
            console.log('image', responseimg.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth <= 1024) {
                setCurrentImage(images[0]?.img_phone);
            } else {
                setCurrentImage(images[0]?.img_desktop);
            }
        };

        updateImage(); // Appel initial
        window.addEventListener('resize', updateImage);

        return () => {
            window.removeEventListener('resize', updateImage);
        };
    }, [images]);
    // Écouter l'événement de scroll pour appliquer le parallax et la rotation
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Met à jour la position du scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if (loading) {
        return <Loader />;
    }
    // Calcul des transformations (parallax et rotation) basées sur la position du scroll
    const translateY = Math.min(scrollPosition * 0.1, 100); // Limite la translation verticale à 200px maximum
    const rotate = Math.min(scrollPosition * 0.02, 18); // Limite la rotation à 20° maximum

    return (
        <div className='bg-[var(--noir)] relative flex flex-col items-center max-w-screen overflow-x-hidden'>
            {/* Image de fond accueil */}
            <img className='absolute z-0 lg:mt-[-72px] ' draggable='false' src={currentImage} alt='background' />

            {/* Scrolling slogan du blind test */}
            <MarqueeText></MarqueeText>

            {/* div container début */}
            <div className='lg:px-48 px-2 w-full lg:mt-[-72px] '>
                {/* Premiere section*/}
                <section className='h-screen flex flex-col  lg:flex-row lg:items-center lg:justify-end lg: lg:pt-0'>
                    <BoxShadow genres={genres}></BoxShadow>
                </section>

                {/* Deuxieme section*/}
                <section className='w-full relative'>
                    <div className='flex flex-row justify-center lg:my-24 my-10 z-0'>
                        <div className='bg-blur lg:w-4/5 w-full h-auto lg:px-18 px-[11vw] py-10 lg:my-18'>
                            <div className='flex flex-col gap-4'>
                                {/* titre*/}

                                <div className='w-full my-3 flex flex-col '>
                                    <h2 className='t-briller-vide main-title leading-[0.7] '>Info</h2>
                                    <h2 className='t-owners pl-4 main-title leading-[0.7]'>
                                        Blin<span className='t-briller main-title'>d</span> test
                                    </h2>
                                </div>

                                {/* paragraphes*/}
                                <div className='flex flex-col gap-4 w-3/5'>
                                    <p className='para lg:text-[1.1rem] text-base'>
                                        Bienvenue dans une expérience ultime pour tous les amateurs de musique et de
                                        challenges.
                                    </p>
                                    <p className='para lg:text-[1.1rem] text-base'>
                                        Plonge dans un univers où chaque chanson, chaque note et chaque artiste peuvent
                                        faire la différence.
                                    </p>
                                    <p className='para lg:text-[1.1rem] text-base hidden lg:block'>
                                        Que tu sois un fan inconditionnel de pop, de rock, de rap ou de classiques
                                        indémodables.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                transform: `translateY(${translateY}px) rotate(${rotate}deg)`, // Transformation basée sur le scroll
                            }}
                            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-2/6 lg:top-[-90px] lg:translate-y-0 lg:translate-x-0 lg:w-auto z-0 blur-color-green-center'
                        >
                            <img
                                src={images[3]?.img}
                                className='lg:w-[600px]'
                                alt={images[3]?.description}
                                draggable='false'
                            ></img>
                        </div>
                    </div>
                </section>

                {/* troisieme section*/}
                <section className='flex flex-col items-center mt-30 lg:mt-0'>
                    <div className='relative text-center'>
                        <div className='z-10 t-owners whitespace-nowrap main-title'>
                            c&apos;est quoi <br className='block lg:hidden' /> t
                            <span className='t-briller main-title'>o</span>n genr
                            <span className='t-briller main-title'>e</span>?
                        </div>
                        <div className='absolute left-1 top-1 z-0 t-owners-vide whitespace-nowrap main-title'>
                            c&apos;est quoi <br className='block lg:hidden' /> t
                            <span className='t-briller-vide main-title'>o</span>n genr
                            <span className='t-briller-vide main-title'>e</span>?
                        </div>
                    </div>

                    <CarouselGenre genres={genres} />
                </section>
            </div>
            {/* Footer */}
            <Footer />

            {/* div container fin */}
        </div>
    );
}

export default Homepage;
