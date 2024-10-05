import { useState, createElement } from 'react';
import provinceData from "../database/provinces.json";
import umphureData from "../database/umphures.json"
import { LandDeedValidation } from '../elements/js/InputValidation';

const LandLoan = () => {

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNo, setTelNo] = useState("");
  const [thaiId, setThaiId] = useState("");
  const [provinceCurrent, setProvinceCurrent] = useState("");
  const [umphureCurrent, setUmphureCurrent] = useState("");
  const [umphureListCurrent, setUmphureListCurrent] = useState([]);
  const [provinceLanddeed, setProvinceLanddeed] = useState("");
  const [umphureLanddeed, setUmphureLanddeed] = useState([]);
  const [umphureListLanddeed, setUmphureListLanddeed] = useState([]);
  const [umphureId, setUmphureId] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [landNumber, setLandNumber] = useState("");


  const [values, setValues] = useState({
    title:"",
    firstName:"",
    lastName:"",
    thaiId:"",
    telNo:"",
    birthDay:"",
    birthMonth:"",
    birthYear:"",
    provinceCurrent:"",
    umphureCurrent:"",
    provinceLanddeed:"",
    umphureLanddeed:"",
    landNumber:""
  });
  const [errors, setErrors] = useState({})




  const initDay = (a) => {
    var html = <option value='' selected='selected' disabled>วัน</option>;
    const item = [html];

    for (let i = 1; i <= 31; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  };

  const initMonth = () => {
    var html = <option value='' selected='selected' disabled>เดือน</option>;
    const item = [html];

    for (let i = 1; i <= 12; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  };

  const initYear = () => {
    let date = new Date();
    var thaiYear = date.getFullYear() + 543;
    var maxAge = thaiYear - 60;
    var minAge = thaiYear - 20;
    var html = <option value='' selected='selected' disabled>ปี</option>;
    const item = [html];

    for (let i = maxAge; i <= minAge; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  };

  const handleProvinceCurrent = (e) => {
    const getProvinceId = e.target.value;
    const getUmphureData = umphureData.filter(umphure => umphure.province_id === Number(getProvinceId));
    setUmphureListCurrent(getUmphureData);
    resetUmphureCurrent();
  };

  const resetUmphureCurrent = () => {
    const select = document.getElementById('select-provinceCurrent');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, umphureCurrent: ""}));
  };

  const handleProvinceLanddeed = (e) => {
    const getProvinceId = e.target.value;
    const getUmphureData = umphureData.filter(umphure => umphure.province_id === Number(getProvinceId));
    setUmphureListLanddeed(getUmphureData);
    resetUmphureLanddeed();
  };

  const resetUmphureLanddeed = () => {
    const select = document.getElementById('select-umphureLanddeed');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, umphureLanddeed: ""}));
  };

  const handleInput = (e) => {
    setValues(prev=> ({...prev, [e.target.name]: [e.target.value]}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LandDeedValidation(values));
  };

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className='Field'>
              <div className='FieldError'>
                <p>* สำหรับผู้จำนำที่ทำงานหรืออาศัยอยู่ในจังหวัดระยอง เท่านั้น</p>
                <p>** ที่ดินที่จำนำไม่จำเป็นต้องอยู่ในจังหวัดระยอง</p>
              </div>
            </div>
            <div className='borrower'>
                <h3>ผู้จำนำ</h3>
            </div>
            <div className='Field'>
              <p>
                คำนำหน้า <sup>*</sup>
              </p>
              <div className='Input-padding'>
                <select name='title' value={ title } onChange={ (e) => { handleInput(e); setTitle(e.target.value); }}>
                  <option value="" selected='selected' disabled>คำนำหน้า</option>
                  <option value="Mr">นาย</option>
                  <option value="Mrs">นาง</option>
                  <option value="Ms">นางสาว</option>
                </select>
              </div>
              {errors.title && <span className='text-danger'>{errors.title}</span>}
            </div>
            <div className='Row'>
              <div className='Field'>
                <p>
                  ชื่อ <sup>*</sup>
                </p>
                <div className='Input-padding flex'>
                  <input name='firstName' value={ firstName } onChange={ (e) => { handleInput(e); setFirstName(e.target.value); }} placeholder='ชื่อ'></input>
                </div>
                {errors.firstName && <span className='text-danger'>{errors.firstName}</span>}
              </div>
              <div className='Field'>
                <p>
                  นามสกุล <sup>*</sup>
                </p>
                <div className='Input-padding flex'>
                  <input value={ lastName } onChange={ (e) => { handleInput(e); setLastName(e.target.value); }} placeholder='นามสกุล'></input>
                </div>
                {errors.lastName && <span className='text-danger'>{errors.lastName}</span>}
              </div>
            </div>
            <div className='Field'>
              <p>
                เลขบัตรประชาชน 13 หลัก <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <input name='thaiId' value={thaiId} onChange={ (e) => { handleInput(e); setThaiId(e.target.value); }} placeholder='เลขบัตรประชาชน 13 หลัก'></input>
              </div>
              {errors.thaiId && <span className='text-danger'>{errors.thaiId}</span>}
            </div>
            <div className='Field'>
              <p>
                เบอร์โทรศัพท์ <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <input name='telNo' value={ telNo } onChange={ (e) => { handleInput(e); setTelNo(e.target.value); }} placeholder='เบอร์โทรศัพท์'></input>
              </div>
              {errors.telNo && <span className='text-danger'>{errors.telNo}</span>}
            </div>
            <div className='Field'>
              <p>
                วัน-เดือน-ปี เกิด <sup>*</sup>
              </p>
              <div className='Input-padding flex'>
                <div className='Row'>
                  <select name="birthDay" value= { birthDay } onChange={ (e) => { handleInput(e); setBirthDay(e.target.value); }} id="bDay-select">
                    {initDay()}
                  </select>
                  <p>/</p>
                  <select name="birthMonth" value= { birthMonth } onChange={ (e) => { handleInput(e); setBirthMonth(e.target.value); }} id="bMonth-select">
                    {initMonth()}
                  </select>
                  <p>/</p>
                  <select name="birthYear" value= { birthYear } onChange={ (e) => { handleInput(e); setBirthYear(e.target.value); }} id="bYear-select">
                    {initYear()}
                  </select>
                </div>
              </div>
              {errors.birth && <span className='text-danger'>{errors.birth}</span>}
            </div>
            <div className='Field'>
              <p>ที่อยู่ปัจจุบัน:<sup>*</sup></p>
              <div className='Input-padding flex'>
                <div className='Row'>
                  <select className='select-province' name='provinceCurrent' onChange={(e)=>{ handleProvinceCurrent(e); setProvinceCurrent(e.target.dataset.value); handleInput(e); }}>
                      <option data-value="" value="" selected='selected' disabled>จังหวัด</option>
                      {
                        provinceData.map((getProvince, index)=>(
                        <option data-value={getProvince.name_th} value={getProvince.id} key={index}>{getProvince.name_th}</option>
                        ))
                      }
                  </select>
                  <select id='select-provinceCurrent' className='select-province' name='umphureCurrent' onChange={ (e) => { setUmphureCurrent(e.target.dataset.value); handleInput(e)}}>
                      <option data-value="" value="" selected='selected' disabled>อำเภอ</option>
                      {
                        umphureListCurrent.map((getUmphure, index)=>(
                        <option data-value={getUmphure.name_th} value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                        ))
                      }
                  </select>
                </div>
              </div>
              {errors.provinceCurrent && <span className='text-danger'>{errors.provinceCurrent}</span>}
            </div>
            <div className='Field'>
              <p>ข้อมูลที่ดินที่นำมาจำนำ:<sup>*</sup></p>
                <div className='Input-padding flex'>
                    <div className='Row'>
                        <select className='select-province' name='provinceLanddeed' onChange={(e)=>{ handleProvinceLanddeed(e); setProvinceLanddeed(e.target.dataset.value); handleInput(e); }}>
                            <option data-value="" value="" selected='selected' disabled>จังหวัด</option>
                            {
                              provinceData.map((getProvince, index)=>(
                              <option data-value={getProvince.name_th} value={getProvince.id} key={index}>{getProvince.name_th}</option>
                              ))
                            }
                        </select>
                        <select id='select-umphureLanddeed' className='select-province' name='umphureLanddeed' onChange={ (e) => { setUmphureLanddeed(e.target.dataset.value); handleInput(e)}}>
                            <option data-value="" value="" selected='selected' disabled>อำเภอ</option>
                            {
                              umphureListLanddeed.map((getUmphure, index)=>(
                              <option data-value={getUmphure.name_th} value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                              ))
                            }
                        </select>
                    </div>
                    <div className='Input-padding flex padding'>
                      <div className='Row'>
                        <p>เลขที่โฉนด:<sup>*</sup></p>
                        <input name='landNumber' value={ landNumber } onChange={ (e) => { handleInput(e); setLandNumber(e.target.value); }} placeholder='เลขที่โฉนด'></input>
                      </div>
                    </div>
                </div>
                {errors.provinceLanddeed && <span className='text-danger'>{errors.provinceLanddeed}</span>}
            </div>
          </fieldset>
          <div className='flex submit-button-div'>
            <button class="submit-button">Submit</button>
          </div>
        </form>
      </div>
  )
}

export default LandLoan