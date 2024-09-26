import { useState, createElement } from 'react';
import { ThaiDatePicker } from "thaidatepicker-react";

const PersonalLoan = () => {

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [thaiIdNumber, setThaiIdNumber] = useState("");


  const initDay = () => {
    var html = <option value='' selected='selected'>โปรดระบุ</option>;
    const item = [html];

    for (let i = 1; i <= 31; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }

  const initMonth = () => {
    var html = <option value='' selected='selected'>โปรดระบุ</option>;
    const item = [html];

    for (let i = 1; i <= 12; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }

  const initYear = () => {
    let date = new Date();
    var thaiYear = date.getFullYear() + 543;
    var maxAge = thaiYear - 60;
    var minAge = thaiYear - 20;
    var html = <option value='' selected='selected'>โปรดระบุ</option>;
    const item = [html];

    for (let i = maxAge; i <= minAge; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  };

  const initWorkYear = () => {
    var html = <option value='' selected='selected'>โปรดระบุ</option>;
    const item = [html];

    for (let i = 1; i <= 40; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }

  const initWorkMonth = () => {
    var html = <option value='' selected='selected'>โปรดระบุ</option>;
    const item = [html];

    for (let i = 0; i <= 11; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }

  const initWorkSalary = () => {
    var html = <option value='' selected='selected'>โปรดระบุ</option>;
    const item = [html];

    for (let i = 0; i <= 11; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }


  return (
      <div className="App">
        <form>
          <fieldset>
            <div className='Field'>
              <div className='FieldError'>
                <p>สำหรับพนักงานบริษัทเอกชนและอาศัยหรือทำงานอยู่ในจังหวัดระยอง เท่านั้น</p>
              </div>
            </div>
            <div className='borrower'>
                <h3>ผู้กู้ 1</h3>
            </div>
            <div className='Field'>
              <p>
                คำนำหน้า <sup>*</sup>
              </p>
              <div className='Input-padding'>
                <select value={title} onChange={ (e) => setTitle(e.target.value)}>
                  <option value="Mr">นาย</option>
                  <option value="Mrs">นาง</option>
                  <option value="Ms">นางสาว</option>
                </select>
              </div>
            </div>
            <div className='Field'>
              <p>
                ชื่อ <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <input value={firstName} onChange={ (e) => setFirstName(e.target.value)} placeholder='ชื่อ'></input>
              </div>
            </div>
            <div className='Field'>
              <p>
                นามสกุล <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <input value={lastName} onChange={ (e) => setLastName(e.target.value)} placeholder='นามสกุล'></input>
              </div>
            </div>
            <div className='Field'>
              <p>
                เลขบัตรประชาชน 13 หลัก <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <input value={thaiIdNumber} onChange={ (e) => setThaiIdNumber(e.target.value)} placeholder='เลขบัตรประชาชน 13 หลัก'></input>
              </div>
            </div>
            <div className='Field'>
              <p>
                เบอร์โทรศัพท์ <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <input value={phoneNumber} onChange={ (e) => setPhoneNumber(e.target.value)} placeholder='เบอร์โทรศัพท์'></input>
              </div>
            </div>
            <div className='Field'>
              <p>
                วัน-เดือน-ปี เกิด <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <div className='Row'>
                  <select name="bDay-select" id="bDay-select">
                    {initDay()}
                  </select>
                  <p>/</p>
                  <select name="bMonth-select" id="bMonth-select">
                    {initMonth()}
                  </select>
                  <p>/</p>
                  <select name="bYear-select" id="bYear-select">
                    {initYear()}
                  </select>
                </div>
              </div>
            </div>
            <div className='Field'>
              <p>
                อายุงาน (งานปัจจุบัน) <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <div className='Row'>
                  <label> ปี: </label>
                  <select name="workYear-select" id="workYear-select">
                    {initWorkYear()}
                  </select>
                  <p>/</p>
                  <p> เดือน: </p>
                  <select name="workMonth-select" id="workMonth-select">
                    {initWorkMonth()}
                  </select>
                </div>
              </div>
            </div>
            <div>
            <p>เงินเดือน (ฐานเงินเดือน+ค่าอื่นๆ) <sup>*</sup></p>
            <div className='Field'>
              <div className='Input-padding flex'>
                <select name="salary-select" id="salary-select">
                    <option value='01' selected='selected'>1-5,999</option>
                    <option value='02' selected='selected'>6,000-6,999</option>
                    <option value='03' selected='selected'>7,000-7,999</option>
                    <option value='04' selected='selected'>8,000-8,999</option>
                    <option value='05' selected='selected'>9,000-9,999</option>
                    <option value='06' selected='selected'>10,000-10,999</option>
                    <option value='07' selected='selected'>11,000-11,999</option>
                    <option value='08' selected='selected'>12,000-12,999</option>
                    <option value='09' selected='selected'>13,000-13,999</option>
                    <option value='10' selected='selected'>14,000-14,999</option>
                    <option value='11' selected='selected'>15,000-15,999</option>
                    <option value='12' selected='selected'>16,000-16,999</option>
                    <option value='13' selected='selected'>17,000-17,999</option>
                    <option value='14' selected='selected'>18,000-18,999</option>
                    <option value='15' selected='selected'>19,000-19,999</option>
                    <option value='16' selected='selected'>20,000-24,999</option>
                    <option value='17' selected='selected'>25,000-29,999</option>
                    <option value='18' selected='selected'>30,000 ขึ้นไป</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
  )
}

export default PersonalLoan