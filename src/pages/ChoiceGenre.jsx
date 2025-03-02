import { useEffect, useState } from 'react';
import CardGenre from '../components/CardGenre';
import ApiRequest from '../services/api';

function ChoiceGenre() {
    const [genres, setGenres] = useState([]);

    const fetchGenres = async () => {
        try {
            const response = await ApiRequest.get('./../../db.json');
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
        <>
            <main className='h-fit bg'>
                <div className='container mx-auto px-4'>
                    <a href='#' className='flex items-center py-5 cursor-pointer'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-8 text-white'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                        </svg>

                        <p className='para'>Retour</p>
                    </a>

                    {/* Title */}
                    <div className='relative'>
                        <h1 className='t-owners'>
                            C&apos;EST QUOI T<span className='t-briller'>O</span>N GENR
                            <span className='t-briller'>E</span> ?
                        </h1>
                        <h1 className='t-owners-outline absolute top-0 left-0'>
                            C&apos;EST QUOI T<span className='t-briller-outline'>O</span>N GENR
                            <span className='t-briller-outline'>E</span> ?
                        </h1>
                    </div>

                    <p className='para'>
                        Fan de pop, de rap ou de classiques indémodables ? Trouvez des playlists variées qui mettront
                        tes connaissances à l&apos;épreuve !
                    </p>

                    {/* Search bar */}
                    <div className='max-w-2xl mx-auto my-10 bg-amber-400 rounded-xl bg-search '>
                        <input
                            type='text'
                            placeholder='Rechercher un genre'
                            className='w-full h-10 rounded-lg px-5 search text-center'
                        />
                    </div>

                    {/* Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5'>
                        {genres.map((genre) => {
                            return <CardGenre key={genre.id} genre={genre.genre} img={genre.img} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default ChoiceGenre;
