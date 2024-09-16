import { Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <Flex gap="middle" vertical align={'center'}>
                    <div>
                        <h1>Welcome to SatiMoney Home</h1>
                    </div>
                    <div>
                        <Flex gap="small" vertical wrap>
                            <Button onClick={() => navigate("/Registration")}>สมัครสินเชื่อ</Button>
                            <Button onClick={() => navigate("/Balance")}>เช็คยอด</Button>
                        </Flex>
                    </div>
                </Flex>
            </div>

        </>
    )
}

export default Home