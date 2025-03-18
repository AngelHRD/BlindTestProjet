import ButtonPerso from './ButtonPerso';

export default function QuitConfirmation({ isOpen, onConfirm, onCancel }) {
    if (!isOpen) return null; // Ne rend rien si l'overlay n'est pas actif

    return (
        <div className='absolute inset-0 bg-[var(--noir)] bg-opacity-100 w-full '>
            <div className='blur-color-green h-full w-full flex items-center justify-center'>
                <div className='bg-blur w-4/5 h-2/3 p-6 rounded-lg text-center shadow-lg flex flex-col gap-3 justify-center'>
                    <div className='relative text-center'>
                        <div className='z-10 t-owners whitespace-nowrap main-title'>
                            T&apos;aband<span className='t-briller main-title'>o</span>nnes ?
                        </div>
                        <div className='ml-1 absolute left-1/2 transform -translate-x-1/2 top-1 z-0 t-owners-vide whitespace-nowrap main-title'>
                            T&apos;aband<span className='t-briller-vide main-title'>o</span>nnes ?
                        </div>
                    </div>
                    <p className='para'>
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
