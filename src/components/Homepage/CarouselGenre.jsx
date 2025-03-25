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
            {genres && genres.length > 0 ? (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation, Grid, Pagination]}
                    pagination={{ clickable: true }}
                    grid={{ rows: 3, fill: 'row' }}
                    loop={true}
                    breakpoints={{
                        0: { navigation: { enabled: false } },
                        1024: {
                            slidesPerView: 3.8,
                            grid: { rows: 1 },
                            spaceBetween: 20,
                            navigation: { enabled: true },
                        },
                    }}
                    className='w-full rounded-4xl md:rounded-2xl'
                >
                    {genres.map((genre) => (
                        <SwiperSlide key={genre._id}>
                            <CardGenre data={genre} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className='w-full text-center py-10'>
                    <p className='text-white text-xl'>Aucun genre disponible pour le moment</p>
                </div>
            )}

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
