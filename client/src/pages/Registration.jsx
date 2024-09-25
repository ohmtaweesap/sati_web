import { useState, useEffect } from 'react';
import { Radio, Flex } from 'antd';
import PersonalLoan from '../features/PersonalLoan'
import '../App.css';

const Registration = () => {


  const [value, setValue] = useState(0);
  const [form, setForm] = useState(null);


  const onChange = (e) => {
    setValue(e.target.value);
  };


  useEffect(() => {
    if (value === 0){
      setForm(null);
    }
    else if (value === 1){
      setForm(<PersonalLoan/>)
    }
    else {
      setForm(null);
    }
  }, [value]);

  return (
    <>
      <section id="header">
        <div className='header-padding'>
          <Flex gap="middle" vertical align={'center'}>
            <fieldset>
              <Flex gap="middle" vertical align={'center'}>
                <h1 pa>สมัครสินเชื่อ</h1>
                <div>
                  <legend>เลือกรูปแบบสินเชื่อ <sup>*</sup></legend>
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>สินเชื่อส่วนบุคคล (กู้ร่วม)</Radio>
                      <Radio value={2}>จำนำโฉนดที่ดิน</Radio>
                    </Radio.Group>
                </div>
              </Flex>
            </fieldset>
          </Flex>
        </div>
      </section>
      <section id="body">
        <div className='header-padding'>
          {form}
        </div>
      </section>
    </>
  )
}

export default Registration