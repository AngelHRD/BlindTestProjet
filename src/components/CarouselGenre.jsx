import { useState, useEffect } from 'react';
import ApiRequest from '../services/api';
import CardGenre from './CardGenre';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function CarouselGenre() {
    const [genres, setGenres] = useState([]);

    const fetchGenres = async () => {
        try {
            const response = await ApiRequest.get(`/cards`);
            setGenres(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <div className='bg-blur h-auto w-full p-12 mt-10 flex flex-col py-5 gap-5'>
            {/* Cards */}
            <Swiper
                slidesPerView={3.8} // Affiche 3,5 cartes
                spaceBetween={20} // Espace entre les cartes
                navigation={true} // Active les flèches de navigation
                modules={[Navigation]} // Charge le module de navigation
                className='w-full'
            >
                {genres.map((genre) => (
                    <SwiperSlide key={genre._id}>
                        <CardGenre data={genre} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link to={`/genres`} className='w-full h-full para hover:underline flex justify-center'>
                Voir tous les genres
            </Link>
        </div>
    );
}

export default CarouselGenre;
