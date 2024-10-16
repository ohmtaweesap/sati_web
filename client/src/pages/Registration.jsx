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
      <div className='flex flex-col items-center max-h-full'>
        <div className='flex flex-col items-center w-[500px] mb-5 rounded-xl bg-gray-400'>
          <form>
            <h1 className='flex flex-col items-center text-3xl underline pb-4 m-3'>สมัครสินเชื่อ</h1>
            <h2 className='text-xl'>เลือกรูปแบบสินเชื่อ <sup className='text-red-600'>*</sup></h2>
            <div className='flex flex-row'>
              <div className='flex flex-row p-1 m-1'>
                <input className='mr-1' type="radio" id="personalLoan" value={1} checked={value === '1'} onChange={onChange}/>
                <label htmlFor="personalLoan">สินเชื่อส่วนบุคคล (กู้ร่วม)</label>
              </div>
              <div className='flex flex-row p-1 m-1'>
                <input className='mr-1' type="radio" id="landLoan" value={2} checked={value === '2'} onChange={onChange}/>
                <label htmlFor="landLoan">จำนำโฉนดที่ดิน</label>
              </div>
            </div>
          </form>
        </div>
        <div className='w-[500px] rounded-xl bg-gray-400 p-3'>
          {form}
        </div>
      </div>
    </>
  )
}

export default Registration