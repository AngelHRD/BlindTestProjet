import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

function CountDown({ countdown }) {
    return (
        <>
            {/* fond avec contour  */}
            <div className='aspect-[1/1] lg:h-full w-full lg:w-auto lg:text-xl linear scale-[1.03] animate-rotate-border-countdown rounded-full bg-conic/[from_var(--border-angle-countdown)] from-gray-800 from-70% via-[chartreuse] via-90% to-gray-800 to-100% p-px shadow-[0_0_100px_45px_rgba(127,240,0,0.2)] transition-all duration-500 ease-in-out'>
                <div className=' flex flex-col h-full w-full items-center justify-center rounded-full bg-[#141313] text-center text-xl text-[chartreuse] transition-colors duration-500 ease-in-out'>
                    {/* Texte centré  */}
                    <div className='flex justify-center items-center h-full '>
                        <AnimatePresence mode='popLayout'>
                            <motion.h2
                                key={countdown}
                                className='font-score-countdown text-[40vw] lg:text-[11vw]'
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                            >
                                {countdown}
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <button
                onClick={() => setCountdown(0)}
                className='para lg:text-[1.1rem] text-base hover:underline flex justify-center items-end h-1/5 cursor-pointer mb-10'
            >
                Skip
            </button>
        </>
    );
}

CountDown.propTypes = {
    countdown: PropTypes.number.isRequired,
};

export default CountDown;
