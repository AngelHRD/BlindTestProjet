import { useEffect, useState } from 'react';
import CardGenre from '../components/CardGenre';
import ApiRequest from '../services/api';
import LinkBack from '../components/LinkBack';
import Loader from '../components/Loader';

function ChoiceGenrePage() {
    const [genres, setGenres] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchGenres = async () => {
        try {
            const response = await ApiRequest.get(`/cards`);
            setGenres(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGenres();
    }, []);

    const filteredGenres = genres.filter((genre) => {
        return genre.title.toLowerCase().includes(search.toLowerCase());
    });

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <Loader />
            </div>
        );
    }

    return (
        <>
            <div className='container mx-auto px-4 min-h-fit pt-10'>
                <LinkBack to='/' text='Retour' />

                {/* Title */}
                <div className='relative'>
                    <h1 className='t-owners z-10 relative'>
                        C&apos;EST QUOI T<span className='t-briller'>O</span>N GENR
                        <span className='t-briller'>E</span> ?
                    </h1>
                    <p className='t-owners-vide absolute top-2 left-1 z-0'>
                        C&apos;EST QUOI T<span className='t-briller-vide'>O</span>N GENR
                        <span className='t-briller-vide'>E</span> ?
                    </p>
                </div>

                <p className='para'>
                    Fan de pop, de rap ou de classiques indémodables ? Trouvez des playlists variées qui mettront tes
                    connaissances à l&apos;épreuve !
                </p>

                {/* Search bar */}
                <div className='max-w-2xl mx-auto my-10 rounded-xl bg-search '>
                    <input
                        type='text'
                        placeholder='Rechercher un genre'
                        className='w-full h-12 rounded-lg px-5 search text-center'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>

                {/* Cards */}
                <div
                    className={`${
                        filteredGenres.length > 0
                            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5'
                            : 'flex justify-center items-center py-10'
                    }`}
                >
                    {filteredGenres.length > 0 ? (
                        filteredGenres.map((genre) => <CardGenre key={genre._id} data={genre} />)
                    ) : (
                        <p className='text-center t-owners-card'>Aucun genre trouvé</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ChoiceGenrePage;
