import { useEffect, useState } from 'react';
import CardGenre from '../components/ChoiceGenrePage/CardGenre';
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
        return <Loader />;
    }

    return (
        <>
            <section className='container mx-auto px-4 min-h-fit pt-5 lg:pt-5 mb-22'>
                <LinkBack to='/' text='Retour' />

                {/* Title */}
                <div className='relative'>
                    <h2 className='t-owners z-10 relative main-title text-center md:text-left'>
                        C&apos;EST QUOI T<span className='t-briller main-title text-center md:text-left'>O</span>N GENR
                        <span className='t-briller main-title text-center md:text-left'>E</span> ?
                    </h2>
                    <p className='t-owners-vide main-title absolute top-1 left-1 z-0 text-center md:text-left'>
                        C&apos;EST QUOI T<span className='t-briller-vide main-title text-center md:text-left'>O</span>N
                        GENR
                        <span className='t-briller-vide main-title text-center md:text-left'>E</span> ?
                    </p>
                </div>

                <p className='para lg:text-[1.1rem] text-base mt-5 hidden md:block'>
                    Fan de pop, de rap ou de classiques indémodables ? Trouvez des playlists variées qui mettront tes
                    connaissances à l&apos;épreuve !
                </p>

                {/* Search bar */}
                <div className='max-w-2xl mx-auto my-8 rounded-xl md:my-10  bg-[linear-gradient(to_bottom,rgba(255,255,255,0.11)_5.3%,rgba(32,32,32,0.11)_92.12%)] backdrop-blur-[16.88px] shadow-[-2.95px_2.95px_6.33px_0px_rgba(0,0,0,0.15)] '>
                    <input
                        type='text'
                        placeholder='Rechercher un genre'
                        className='w-full h-12 rounded-lg px-5 text-center placeholder:text-[13px] text-[13px] lg:placeholder:text-xl lg:text-xl max-w-full t-briller font-bold text-white uppercase'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = 'Rechercher un genre')}
                    />
                </div>

                {/* Cards */}
                <div
                    className={`${
                        filteredGenres.length > 0
                            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '
                            : 'flex justify-center items-center py-10'
                    }`}
                >
                    {filteredGenres.length > 0 ? (
                        filteredGenres.map((genre) => <CardGenre key={genre._id} data={genre} />)
                    ) : (
                        <p className='text-center t-owners-card'>Aucun genre trouvé</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default ChoiceGenrePage;
