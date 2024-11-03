import { useState } from 'react';
import provinceData from "../database/provinces.json";
import umphureData from "../database/umphures.json";
import tambonData from "../database/tambons.json"
import { LandDeedValidation } from '../elements/js/InputValidation';

const LandLoan = () => {

  // useState for personal data
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNo, setTelNo] = useState("");
  const [homeNo, setHomeNo] = useState("");
  const [thaiId, setThaiId] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");


  // useState for current address
  const [provinceCurrent, setProvinceCurrent] = useState("");
  const [umphureCurrent, setUmphureCurrent] = useState("");
  const [umphureListCurrent, setUmphureListCurrent] = useState([]);
  const [tambonListCurrent, setTambonListCurrent] = useState([]);
  const [tambonCurrent, setTambonCurrent] = useState("");




  // useState for landDeed
  const [provinceLanddeed, setProvinceLanddeed] = useState("");
  const [umphureListLanddeed, setUmphureListLanddeed] = useState([]);
  const [umphureLanddeed, setUmphureLanddeed] = useState("");
  const [landNumber, setLandNumber] = useState("");

  // useState for checking if user fill in required fields
  const [values, setValues] = useState({
    title:"",
    firstName:"",
    lastName:"",
    thaiId:"",
    telNo:"",
    birthDay:"",
    birthMonth:"",
    birthYear:"",
    homeNo:"",
    provinceCurrent:"",
    umphureCurrent:"",
    tambonCurrent:"",
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
    resetTambonCurrent();
  };

  const handleUmphureCurrent = (e) => {
    const getUmphureId = e.target.value;
    const getTambonData = tambonData.filter(tambon => tambon.amphure_id === Number(getUmphureId));
    setTambonListCurrent(getTambonData);
    resetTambonCurrent();
  }

  const resetUmphureCurrent = () => {
    const select = document.getElementById('select-provinceCurrent');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, umphureCurrent: ""}));
  };

  const resetTambonCurrent = () => {
    const select = document.getElementById('select-umphureCurrent');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, tambonCurrent: ""}));
  }

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
    <div className='flex rounded-xl bg-slate-300 p-4'>
      <form onSubmit={handleSubmit}>
        <div className='text-xl text-red-700 m-3'>
          <p className='m-2'>* สำหรับผู้จำนำที่ทำงานหรืออาศัยอยู่ในจังหวัดระยอง เท่านั้น</p>
          <p>** ที่ดินที่จำนำไม่จำเป็นต้องอยู่ในจังหวัดระยอง</p>
        </div>
        <div className='flex justify-center'>
          <h3 className='text-2xl underline font-bold'>ผู้จำนำ</h3>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0"></hr>
        </div>
        <div className='mb-3'>
          <div className='flex justify-center text-lg mb-1'>
            <p className='font-medium'>ข้อมูลส่วนตัว</p>
          </div>
          <div className='ml-4'>
            <p className='text-base'>คำนำหน้า <sup className='text-red-700'>*</sup></p>
            <div className='pl-2'>
              <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='title' value={ title } onChange={ (e) => { handleInput(e); setTitle(e.target.value); }}>
                <option value="" selected='selected' disabled>คำนำหน้า</option>
                <option value="Mr">นาย</option>
                <option value="Mrs">นาง</option>
                <option value="Ms">นางสาว</option>
              </select>
            </div>
            {errors.title && <span className='text-red-700'>{errors.title}</span>}
          </div>
        </div>
        <div className='flex flex-row mb-3 ml-4 justify-around'>
          <div>
            <p className='text-base'>
              ชื่อ <sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='firstName' value={ firstName } onChange={ (e) => { handleInput(e); setFirstName(e.target.value); }} placeholder='ชื่อ'></input>
            </div>
            {errors.firstName && <span className='text-red-700'>{errors.firstName}</span>}
          </div>
          <div className='px-3'>
            <p className='text-base'>
              นามสกุล <sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' value={ lastName } onChange={ (e) => { handleInput(e); setLastName(e.target.value); }} placeholder='นามสกุล'></input>
            </div>
            {errors.lastName && <span className='text-red-700'>{errors.lastName}</span>}
          </div>
        </div>
        <div className='flex flex-row justify-around mb-3 ml-4'>
          <div>
            <p className='text-base'>
              เลขบัตรประชาชน<sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='thaiId' value={ thaiId } onChange={ (e) => { handleInput(e); setThaiId(e.target.value); }} placeholder='เลขบัตรประชาชน 13 หลัก'></input>
            </div>
            {errors.thaiId && <span className='text-red-700'>{errors.thaiId}</span>}
          </div>
          <div className='px-3'>
            <p className='text-base'>
              เบอร์โทรศัพท์ <sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='telNo' value={ telNo } onChange={ (e) => { handleInput(e); setTelNo(e.target.value); }} placeholder='เบอร์โทรศัพท์'></input>
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
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthDay" value= { birthDay } onChange={ (e) => { handleInput(e); setBirthDay(e.target.value); }} id="bDay-select">
              {initDay()}
            </select>
            <p className='mx-1 content-center'>/</p>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthMonth" value= { birthMonth } onChange={ (e) => { handleInput(e); setBirthMonth(e.target.value); }} id="bMonth-select">
              {initMonth()}
            </select>
            <p className='mx-1 content-center'>/</p>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthYear" value= { birthYear } onChange={ (e) => { handleInput(e); setBirthYear(e.target.value); }} id="bYear-select">
              {initYear()}
            </select>
          </div>
          {errors.birth && <span className='text-red-700'>{errors.birth}</span>}
        </div>
        <div className='mx-4'>
          <p>ที่อยู่ปัจจุบัน:<sup className='text-red-700'>*</sup></p>
          <div>
            <div className='flex flex-row justify-around px-2 pb-2'>
              <div className='flex flex-row justify-center w-full pr-4'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='homeNo' value={ homeNo } onChange={ (e) => { handleInput(e); setHomeNo(e.target.value); }} placeholder='เลขที่  '></input>
              </div>
              <div className='flex flex-row justify-center w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='provinceCurrent' onChange={(e)=>{ handleProvinceCurrent(e); setProvinceCurrent(e.target.dataset.value); handleInput(e); }}>
                    <option data-value="" value="" selected='selected' disabled>จังหวัด</option>
                    {
                      provinceData.map((getProvince, index)=>(
                      <option data-value={ getProvince.name_th } value={ getProvince.id } key={ index }>{ getProvince.name_th }</option>
                      ))
                    }
                </select>
              </div>
            </div>
            <div className='flex flex-row justify-around px-2'>
              <div className='flex w-full pr-4'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-provinceCurrent' name='umphureCurrent' onChange={ (e) => { handleUmphureCurrent(e); setUmphureCurrent(e.target.dataset.value); handleInput(e)}}>
                    <option data-value="" value="" selected='selected' disabled>อำเภอ</option>
                    {
                      umphureListCurrent.map((getUmphure, index)=>(
                      <option data-value={getUmphure.name_th} value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                      ))
                    }
                </select>
              </div>
              <div className='flex w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-umphureCurrent' name='umphureCurrent' onChange={ (e) => { setTambonCurrent(e.target.dataset.value); handleInput(e)}}>
                      <option  data-value="" value="" selected='selected' disabled>ตำบล</option>
                      {
                        tambonListCurrent.map((getTambon, index)=>(
                        <option data-value={getTambon.name_th} value={getTambon.id} key={index}>{getTambon.name_th}</option>
                        ))
                      }
                </select>
              </div>
            </div>
          </div>
          {errors.addressCurrent && <span className='text-red-700'>{errors.addressCurrent}</span>}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mb-10'>
          <div className='flex justify-center text-lg mb-1'>
            <p className='font-medium'>ข้อมูลที่ดิน</p>
          </div>
          <div className='mb-3 px-4'>
            <p>ที่อยู่ของโฉนด:<sup className='text-red-700'>*</sup></p>
            <div className='flex flex-row justify-around px-2 mb-3'>
              <div className='flex justify-center w-full pr-4'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='provinceLanddeed' onChange={(e)=>{ handleProvinceLanddeed(e); setProvinceLanddeed(e.target.dataset.value); handleInput(e); }}>
                    <option data-value="" value="" selected='selected' disabled>จังหวัด</option>
                    {
                      provinceData.map((getProvince, index)=>(
                      <option data-value={ getProvince.name_th } value={ getProvince.id } key={index}>{getProvince.name_th}</option>
                      ))
                    }
                </select>
              </div>
              <div className='flex justify-center w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-umphureLanddeed' name='umphureLanddeed' onChange={ (e) => { setUmphureLanddeed(e.target.dataset.value); handleInput(e)}}>
                    <option data-value="" value="" selected='selected' disabled>อำเภอ</option>
                    {
                      umphureListLanddeed.map((getUmphure, index)=>(
                      <option data-value={getUmphure.name_th} value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                      ))
                    }
                </select>
              </div>
            </div>
              <div>
                <p>เลขที่โฉนด:<sup className='text-red-700'>*</sup></p>
                <div className='px-2'>
                  <input className='w-50% bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='landNumber' value={ landNumber } onChange={ (e) => { handleInput(e); setLandNumber(e.target.value); }} placeholder='เลขที่โฉนด'></input>
                </div>
              </div>
              {errors.addressLanddeed && <span className='text-red-700'>{errors.addressLanddeed}</span>}
          </div>
        </div>
        <div></div>
        <div className='flex justify-center rounded transition delay-90 bg-blue-500 hover:bg-blue-400 p-2 mx-5 text-white'>
          <button className='w-full'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LandLoan