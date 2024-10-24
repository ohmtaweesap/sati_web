import { useState, createElement } from 'react';
import provinceData from "../database/provinces.json";
import umphureData from "../database/umphures.json"
import { LandDeedValidation } from '../elements/js/InputValidation';

const LandLoan = () => {

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNo, setTelNo] = useState("");
  const [homeNo, setHomeNo] = useState("");
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




  const initDay = () => {
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
      <div className='flex w-[500px] rounded-xl bg-slate-300 p-4'>
        <form onSubmit={handleSubmit}>
          <div className='text-xl text-red-700 m-3'>
            <p className='m-2'>* สำหรับผู้จำนำที่ทำงานหรืออาศัยอยู่ในจังหวัดระยอง เท่านั้น</p>
            <p>** ที่ดินที่จำนำไม่จำเป็นต้องอยู่ในจังหวัดระยอง</p>
          </div>
          <div className='flex justify-center'>
            <h3 className='text-2xl underline'>ผู้จำนำ</h3>
          </div>
          <div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className='mb-3'>
            <div className='flex justify-center text-lg mb-1'>
              <p>ข้อมูลส่วนตัว</p>
            </div>
            <div className='ml-4'>
              <p className='text-base'>คำนำหน้า <sup className='text-red-700'>*</sup></p>
              <div className='pl-2'>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='title' value={ title } onChange={ (e) => { handleInput(e); setTitle(e.target.value); }}>
                  <option value="" selected='selected' disabled>คำนำหน้า</option>
                  <option value="Mr">นาย</option>
                  <option value="Mrs">นาง</option>
                  <option value="Ms">นางสาว</option>
                </select>
              </div>
              {errors.title && <span className='text-red-700'>{errors.title}</span>}
            </div>
          </div>
          <div className='flex flex-row mb-3 justify-around'>
            <div>
              <p className='text-base'>
                ชื่อ <sup className='text-red-700'>*</sup>
              </p>
              <div className='ml-2'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='firstName' value={ firstName } onChange={ (e) => { handleInput(e); setFirstName(e.target.value); }} placeholder='ชื่อ'></input>
              </div>
              {errors.firstName && <span className='text-red-700'>{errors.firstName}</span>}
            </div>
            <div className='px-3'>
              <p className='text-base'>
                นามสกุล <sup className='text-red-700'>*</sup>
              </p>
              <div className='ml-2'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' value={ lastName } onChange={ (e) => { handleInput(e); setLastName(e.target.value); }} placeholder='นามสกุล'></input>
              </div>
              {errors.lastName && <span className='text-red-700'>{errors.lastName}</span>}
            </div>
          </div>
          <div className='flex flex-row justify-around mb-3'>
            <div>
              <p className='text-base'>
                เลขบัตรประชาชน 13 หลัก <sup className='text-red-700'>*</sup>
              </p>
              <div className='ml-2'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='thaiId' value={thaiId} onChange={ (e) => { handleInput(e); setThaiId(e.target.value); }} placeholder='เลขบัตรประชาชน 13 หลัก'></input>
              </div>
              {errors.thaiId && <span className='text-red-700'>{errors.thaiId}</span>}
            </div>
            <div className='px-3'>
              <p className='text-base'>
                เบอร์โทรศัพท์ <sup className='text-red-700'>*</sup>
              </p>
              <div className='ml-2'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='telNo' value={ telNo } onChange={ (e) => { handleInput(e); setTelNo(e.target.value); }} placeholder='เบอร์โทรศัพท์'></input>
              </div>
              {errors.telNo && <span className='text-red-700'>{errors.telNo}</span>}
            </div>
          </div>
          <div className='ml-4 mb-3 justify-around'>
            <div>
              <p className='text-base'>
                วัน-เดือน-ปี เกิด <sup className='text-red-700'>*</sup>
              </p>
            </div>
            <div className='flex flex-row ml-2'>
              <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthDay" value= { birthDay } onChange={ (e) => { handleInput(e); setBirthDay(e.target.value); }} id="bDay-select">
                {initDay()}
              </select>
              <p className='mx-1 content-center'>/</p>
              <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthMonth" value= { birthMonth } onChange={ (e) => { handleInput(e); setBirthMonth(e.target.value); }} id="bMonth-select">
                {initMonth()}
              </select>
              <p className='mx-1 content-center'>/</p>
              <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthYear" value= { birthYear } onChange={ (e) => { handleInput(e); setBirthYear(e.target.value); }} id="bYear-select">
                {initYear()}
              </select>
            </div>
            {errors.birth && <span className='text-red-700'>{errors.birth}</span>}
          </div>
          <div className='ml-4'>
            <div>
              <p>ที่อยู่ปัจจุบัน:<sup>*</sup></p>
            </div>
            <div>
              <div className='flex flex-row justify-start'>
                <div className='flex flex-row ml-3 mr-4'>
                  <p className='flex-nowrap w-11 content-center'>ที่อยู่:</p>
                  <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='homeNo' value={ homeNo } onChange={ (e) => { handleInput(e); setHomeNo(e.target.value); }} placeholder='เลขที่  '></input>
                </div>
                <div>
                  <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-2 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='provinceCurrent' onChange={(e)=>{ handleProvinceCurrent(e); setProvinceCurrent(e.target.dataset.value); handleInput(e); }}>
                      <option data-value="" value="" selected='selected' disabled>จังหวัด</option>
                      {
                        provinceData.map((getProvince, index)=>(
                        <option data-value={getProvince.name_th} value={getProvince.id} key={index}>{getProvince.name_th}</option>
                        ))
                      }
                  </select>
                </div>
              </div>
              <div>
                
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
            {errors.provinceCurrent && <span className='text-red-700'>{errors.provinceCurrent}</span>}
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
              {errors.provinceLanddeed && <span className='text-red-700'>{errors.provinceLanddeed}</span>}
          </div>
        <div className='flex submit-button-div'>
          <button class="submit-button">Submit</button>
        </div>
        </form>
      </div>
  )
}

export default LandLoan