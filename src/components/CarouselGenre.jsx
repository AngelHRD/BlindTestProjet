import CardGenre from './CardGenre';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import pour réaliser le carousel avec swiper
import 'swiper/css';
import { Navigation, Grid, Pagination } from 'swiper/modules'; // Import des modules Grid (pour swiper mobile), navigation pour swiper et pagination pour indiquer à quel "page" on est sur mobile
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import './cssComponents/carouselGenre.css'; // Import de la feuille de style liée

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
                breakpoints={{
                    0: { navigation: { enabled: false } }, // Désactive navigation (les flèches) sur mobile
                    1024: { slidesPerView: 3.8, grid: { rows: 1 }, spaceBetween: 20, navigation: { enabled: true } }, // on voit 3.8 cards, c'est sur une ligne, espace de 20, flèches actives.
                }}
                className='w-full rounded-4xl md:rounded-2xl'
            >
                {genres.map((genre, index) => (
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

export default CarouselGenre;
