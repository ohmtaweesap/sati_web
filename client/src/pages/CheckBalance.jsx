import { useLocation, Link } from "react-router-dom"
import axios from "axios";
import { useState, useMemo } from "react";
import "../elements/custom.css"


function CheckBalance(){

    const location = useLocation();
    const thaiId = location.state.thaiId;
    const telNo = location.state.telNo;
    const [status,setStatusState] =  useState('LOADING')
    const [data, setData] = useState({})

    useMemo(() => {

        axios({
            method: 'get',
            url: import.meta.env.VITE_API_URL+'/getBalance',
            params: {
                thaiId: thaiId,
                telNo: telNo
            }
        }
        )
        .then((response) => {setData(response.data);
        setStatusState('LOADED') 

        })
        .catch((err)=> {console.log(err);
        setStatusState('ERROR')

        })
    }, [])

    const handleReset = ()=>{
        setData("")
    }

    const checkCustomer = (check) => {
        if(status === "LOADING"){
            return <div className="loader"></div>
        }
        else if(status === "LOADED"){
            if(!Object.keys(check).length){
                return <div className='card w-70'>
                            <div className='card-body'>
                                <div>
                                    <h3 className='text-center'>ไม่พบข้อมูล</h3>
                                </div>
                                <div>
                                    <p className ='text-danger text-center'>รบกวนตรวจสอบ เลขบัตรประชาชน และ เบอร์โทรศัพท์ อีกครั้ง</p>
                                </div>
                                <div className="mt-3 text-center">
                                    <Link to=".." relative="path">
                                        <a className="btn btn-primary" onClick={handleReset} role="button">กลับ</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
            }
            else {
                    if (check[0].lastStatus != 'ปกติ'){
                        return <div className='card w-70'>
                                    <div className='card-body'>
                                        <div>
                                            <h3 className='text-center'>สวัสดีค่ะ คุณ{check[0].cus_name}</h3>
                                        </div>
                                        <div>
                                            <p className ='text-danger text-center'>ลูกค้ามีสถานะหรือข้อมูลทางระบบผิดพลาด กรุณาติดต่อเจ้าหน้าที่ เบอร์: 086-463-9507</p>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <Link to=".." relative="path">
                                                <a className="btn btn-primary" onClick={handleReset} role="button">กลับ</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                    }
                    else {
                        return <div className='card w-70'>
                                    <div className='card-body'>
                                        <div>
                                            <h3 className='text-center p-3'>สวัสดีค่ะ คุณ{check[0].cus_name}</h3>
                                        </div>
                                        <div>
                                            <p className= "fs-5 text-center">
                                                ต้นคงเหลือ: <span className="fw-bold fs-4">{check[0].cap_remain.toLocaleString()} บาท</span>
                                            </p>
                                            <p className="fs-6 text-danger text-center">
                                                **ยอดยังไม่รวมดอกเบี้ยและค่าปรับอื่นๆ และ อาจมีการอัปเดตล่าช้า หากคุณลูกค้ามีข้อสงสัยรบกวนติดต่อเจ้าหน้าที่เบอร์โทร: 086-463-9507**
                                            </p>
                                        </div>
                                        <div className="mt-3 text-center">
                                            <Link to=".." relative="path">
                                                <a className="btn btn-primary" onClick={handleReset} role="button">กลับ</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                    }
                }
            }
        else {
            return <div>ERROR from Axios</div>
        }
    }

    return (
        <>
                <div className='d-flex justify-content-center align-items-center vh-100 kanit-regular'>
                    {checkCustomer(data)}
                </div>
        </>
    )
    }

export default CheckBalance