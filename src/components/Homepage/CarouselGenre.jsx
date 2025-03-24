import CardGenre from '../ChoiceGenrePage/CardGenre';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Navigation, Grid, Pagination } from 'swiper/modules';
import '../cssComponents/carouselGenre.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';

function CarouselGenre({ genres }) {
    return (
        <div className='bg-blur h-auto w-full lg:px-12 px-6 mt-10 flex flex-col py-5 gap-5'>
            {/* Cards carousel */}
            <Swiper
                slidesPerView={1} // 1 slide visible à la fois
                spaceBetween={20}
                navigation={true} // Active les flèches de navigation par défaut
                modules={[Navigation, Grid, Pagination]}
                pagination={{ clickable: true }} // Pagination activée par défaut
                grid={{ rows: 3, fill: 'row' }} // 3 cartes empilées par slide quand on utilise grid (donc pour mobile)
                loop={true} // Active le swipe infini
                breakpoints={{
                    0: { navigation: { enabled: false } }, // Désactive navigation (les flèches) sur mobile
                    1024: { slidesPerView: 3.8, grid: { rows: 1 }, spaceBetween: 20, navigation: { enabled: true } }, // on voit 3.8 cards, c'est sur une ligne, espace de 20, flèches actives.
                }}
                className='w-full rounded-4xl md:rounded-2xl'
            >
                {genres.map((genre) => (
                    <SwiperSlide key={genre._id}>
                        <CardGenre data={genre} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link
                to={`/genres`}
                className='w-full h-full para lg:text-[1.1rem] text-base hover:underline flex justify-center'
            >
                Voir tous les genres
            </Link>
        </div>
    );
}

CarouselGenre.propTypes = {
    genres: PropTypes.array.isRequired,
};

export default CarouselGenre;
