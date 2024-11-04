import { useState, useEffect } from 'react';
import PersonalLoan from '../features/PersonalLoan'
import LandLoan from '../features/LandLoan'
import '../App.css';

const Registration = () => {


  const [value, setValue] = useState(0);
  const [form, setForm] = useState(null);


  const onChange = (e) => {
    console.log(value)
    setValue(e.target.value);
  };


  useEffect(() => {
    if (value === 0){
      setForm(null);
    }
    else if (value === '1'){
      setForm(<PersonalLoan/>)
    }
    else if (value === '2'){
      setForm(<LandLoan/>);
    }
  }, [value]);

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex w-full max-w-md flex-col m-3 items-center'>
          <div className='mb-5 w-full rounded-xl bg-slate-300'>
            <h1 className='flex justify-center text-3xl underline p-5'>สมัครสินเชื่อ</h1>
            <h2 className='flex justify-center items-center text-xl'>เลือกรูปแบบสินเชื่อ <sup className='text-red-600'>*</sup></h2>
            <div className='flex flex-row justify-center'>
              <div className='flex flex-row p-1 m-1'>
                <input className='mr-1' type="radio" id="personalLoan" value={1} checked={value === '1'} onChange={onChange}/>
                <label htmlFor="personalLoan">สินเชื่อส่วนบุคคล (กู้ร่วม)</label>
              </div>
              <div className='flex flex-row p-1 m-1'>
                <input className='mr-1' type="radio" id="landLoan" value={2} checked={value === '2'} onChange={onChange}/>
                <label htmlFor="landLoan">จำนำโฉนดที่ดิน</label>
              </div>
            </div>
          </div>
          <div className='w-full max-w-full'>
            {form}
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration