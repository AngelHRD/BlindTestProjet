import LinkBack from '../components/LinkBack';
import { useEffect, useState } from 'react';
import ApiRequest from '../services/api';
import ChoiceButton from '../components/ChoiceButton';

function PlayGamePage() {
    const [songs, setSongs] = useState([]);

    const fetchGame = async () => {
        try {
            const response = await ApiRequest.get('/songs/:genre');
            setSongs(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGame();
    }, []);

    return (
        <div className='container mx-auto px-4 min-h-fit'>
            <LinkBack to='/genres' text='Quitter' />

            <div className='text-center'>
                <h1 className='t-owners'>
                    blin<span className='t-briller '>d </span> test
                </h1>
                <h2 className='t-owners-vide'> rock </h2>
            </div>

            <div></div>

            <div className='rounded-lg flex items-center justify-center'>
                <ChoiceButton />
            </div>

            <div></div>
        </div>
    );
}

export default PlayGamePage;
