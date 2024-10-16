import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='max-w-screen-* max-h-full p-4'>
                <div className='flex flex-col items-center'>
                    <div>
                        <h1 className='text-3xl underline pb-4'>ยินดีต้อนรับสู่ สติมันนี่</h1>
                    </div>
                    <div className='flex flex-col items-center p-1'>
                        <div>
                            <button className='rounded transition delay-90 bg-blue-500 hover:bg-blue-400 p-2 m-1 text-white' onClick={() => navigate("/Registration")}>สมัครสินเชื่อ</button>
                        </div>
                        <div>
                            <button className='rounded transition delay-90 bg-blue-500 hover:bg-blue-400 p-2 m-1 text-white' onClick={() => navigate("/Balance")}>เช็คยอด</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home