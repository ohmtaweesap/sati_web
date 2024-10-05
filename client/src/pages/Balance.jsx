import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkBalanceValidation } from '../elements/js/InputValidation'



function Balance() {


    const navigate = useNavigate()

    const [values, setValues] = useState({
        thaiId: "",
        telNo: ""
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev=> ({...prev, [event.target.name]: [event.target.value]}));
        console.log(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(checkBalanceValidation(values));
        
    }

    useMemo(()=> {
        if (errors.thaiId === "" && errors.telNo === ""){
        navigate('/CheckBalance', {
            state: {
                thaiId: values.thaiId,
                telNo: values.telNo
            }
        });
    }},[errors])

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 kanit-regular'>
                <div className='card w-70'>
                    <div className='m-3'>
                        <h2 className='text-center'>ตรวจสอบยอด</h2>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="thaiId" className="form-label">เลขบัตรประชาชน</label>
                                <input type="text" onChange={handleInput} name="thaiId" className="form-control" id="thaiId"/>
                                {errors.thaiId && <span className='text-danger'>{errors.thaiId}</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telNo" className="form-label">เบอร์โทรศัพท์ ที่ให้ไว้กับทางร้าน</label>
                                <input type="text" onChange={handleInput} name="telNo" className="form-control" id="telNo"/>
                                {errors.telNo && <span className='text-danger'>{errors.telNo}</span>}
                            </div>
                            <div>
                            <button type="submit" className="btn btn-primary m-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Balance;