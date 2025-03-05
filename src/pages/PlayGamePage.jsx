import LinkBack from '../components/LinkBack';
import { useEffect, useState } from 'react';
import ApiRequest from '../services/api';
import SliderMp3 from '../components/SliderMp3';

function PlayGamePage() {
    const [songs, setSongs] = useState([]);

    const fetchGame = async () => {
        try {
            const response = await ApiRequest.get(`/songs/${genre}`);
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
            <div className='rounded-lg flex items-center justify-center'>
                <SliderMp3 />
            </div>
            {/* <p className='text-white text-center'>Rock</p> */}

            <div className='grid grid-cols-2 grid-rows-2 gap-3 container mx-auto place-items-center w-fit mt-14'>
                <div className='w-fit'>
                    <button className='py-3 px-6 bg-[#7ff000] rounded-xl cursor-pointer '>CHAUSSURE</button>
                </div>
                <div className='w-fit'>
                    <button className='py-3 px-6 bg-[#7ff000] rounded-xl cursor-pointer '>CHAUSSURE</button>
                </div>
                <div className='w-fit'>
                    <button className='py-3 px-6 bg-[#7ff000] rounded-xl cursor-pointer '>CHAUSSURE</button>
                </div>
                <div className='w-fit'>
                    <button className='py-3 px-6 bg-[#7ff000] rounded-xl cursor-pointer '>CHAUSSURE</button>
                </div>
            </div>
        </div>
    );
}

export default PlayGamePage;
