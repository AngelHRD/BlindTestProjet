import ButtonPerso from '../ButtonPerso';
import PropTypes from 'prop-types';

function QuitConfirmation({ isOpen, onConfirm, onCancel }) {
    if (!isOpen) return null; // Ne rend rien si l'overlay n'est pas actif

    return (
        <div className='absolute inset-0 bg-[var(--noir)] bg-opacity-100 w-full '>
            <div className='blur-color-green h-full w-full flex items-center justify-center'>
                <div className='bg-blur w-4/5 h-2/3 p-6 rounded-lg text-center shadow-lg flex flex-col gap-3 justify-center overflow-hidden'>
                    <div className='relative text-center w-full'>
                        <div className='z-10 t-owners text-[7vw] lg:text-[3.7rem] relative '>
                            T&apos;aband<span className='t-briller '>o</span>nnes&nbsp;?
                        </div>
                        <div
                            className='absolute inset-0 z-0 t-owners-vide text-[7vw] lg:text-[3.7rem]  '
                            style={{ transform: 'translate(4px, 4px)' }}
                        >
                            T&apos;aband<span className='t-briller-vide '>o</span>nnes&nbsp;?
                        </div>
                    </div>

                    <p className='para lg:text-[1.1rem] text-base'>
                        On comprend, tout le monde n&apos;a pas le niveau pour nos blind tests mais bon... tu es sûr de
                        toi ?
                    </p>

                    <div className='flex gap-10 w-full justify-center items-center my-10'>
                        <ButtonPerso
                            onClick={onConfirm}
                            to=''
                            text='Oui'
                            widthlg='w-40'
                            width='w-40'
                            heightlg='h-20'
                            height='h-20'
                        />
                        <ButtonPerso
                            onClick={onCancel}
                            to=''
                            text='Non'
                            widthlg='w-40'
                            width='w-40'
                            heightlg='h-20'
                            height='h-20'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

QuitConfirmation.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default QuitConfirmation;
