import { useState } from 'react';
import { ThaiDatePicker } from "thaidatepicker-react";

const Registration = () => {

  const [selectedDate, setSelectedDate] = useState("");

  const handleDatePickerChange = (christDate, buddhistDate) => {
    console.log(christDate);
    console.log(buddhistDate);
    setSelectedDate(christDate);
    setSelectedThaiDate(buddhistDate);
  };

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [thaiIdNumber, setThaiIdNumber] = useState("");

  return (
    <>
      <div className="App">
        <form>
          <fieldset>
            <h2>สมัครสินเชื่อ</h2>
            <div className='Field'>
              <div>
                <sup>สำหรับพนักงานบริษัทเอกชนและอาศัยหรือทำงานอยู่ในจังหวัดระยอง เท่านั้น</sup>
                <p></p>
              </div>
              <label>
                คำนำหน้า <sup>*</sup>
              </label>
              <select value={title} onChange={ (e) => setTitle(e.target.value)}>
                <option value="Mr">นาย</option>
                <option value="Mrs">นาง</option>
                <option value="Ms">นางสาว</option>
              </select>
            </div>
            <div className='Field'>
              <label>
                ชื่อ <sup>*</sup>
              </label>
              <input value={firstName} onChange={ (e) => setFirstName(e.target.value)} placeholder='ชื่อ'></input>
            </div>
            <div className='Field'>
              <label>
                นามสกุล <sup>*</sup>
              </label>
              <input value={lastName} onChange={ (e) => setLastName(e.target.value)} placeholder='นามสกุล'></input>
            </div>
            <div className='Field'>
              <label>
                เลขบัตรประชาชน 13 หลัก <sup>*</sup>
              </label>
              <input value={thaiIdNumber} onChange={ (e) => setThaiIdNumber(e.target.value)} placeholder='เลขบัตรประชาชน 13 หลัก'></input>
            </div>
            <div className='Field'>
              <label>
                เบอร์โทรศัพท์ <sup>*</sup>
              </label>
              <input value={phoneNumber} onChange={ (e) => setPhoneNumber(e.target.value)} placeholder='เบอร์โทรศัพท์'></input>
            </div>
            <div className='Field'>
              <label>
                วัน-เดือน-ปี เกิด <sup>*</sup>
              </label>
              <div>
                <ThaiDatePicker value={selectedDate} 
                  onChange={handleDatePickerChange} 
                  inputProps={{
                    style: {
                      width: "50%",
                    },
                    readOnly: true,
                  }}
                  reactDatePickerProps={{
                    showIcon: false,
                    openToDate: new Date(),
                  }}>
                </ThaiDatePicker>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default Registration