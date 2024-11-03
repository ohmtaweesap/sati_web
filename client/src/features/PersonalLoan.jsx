import { useState } from 'react';
import provinceData from "../database/provinces.json";
import umphureData from "../database/umphures.json";
import tambonData from "../database/tambons.json"
import { LandDeedValidation } from '../elements/js/InputValidation';

const PersonalLoan = () => {

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


  // useState for work address
  const [workNo, setWorkNo] = useState("");
  const [provinceWork, setProvinceWork] = useState("");
  const [umphureWork, setUmphureWork] = useState("");
  const [umphureListWork, setUmphureListWork] = useState([]);
  const [tambonListWork, setTambonListWork] = useState([]);
  const [tambonWork, setTambonWork] = useState("");


  // useState for landDeed
  const [provinceLanddeed, setProvinceLanddeed] = useState("");
  const [umphureListLanddeed, setUmphureListLanddeed] = useState([]);
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
    provinceCurrent:"",
    umphureCurrent:"",
    tambonCurrent:"",
    provinceWork:"",
    umphureWork:"",
    tambonWork:"",
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

  const handleProvinceWork = (e) => {
    const getProvinceId = e.target.value;
    const getUmphureData = umphureData.filter(umphure => umphure.province_id === Number(getProvinceId));
    setUmphureListWork(getUmphureData);
    resetUmphureWork();
    resetTambonWork();
  };

  const handleUmphureWork = (e) => {
    const getUmphureId = e.target.value;
    const getTambonData = tambonData.filter(tambon => tambon.amphure_id === Number(getUmphureId));
    setTambonListWork(getTambonData);
    resetTambonWork();
  }

  const resetUmphureWork = () => {
    const select = document.getElementById('select-provinceWork');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, umphureWork: ""}));
  };

  const resetTambonWork = () => {
    const select = document.getElementById('select-umphureWork');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, tambonWork: ""}));
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

  const initWorkYear = () => {
    var html = <option value='' disabled selected='selected'>ปี</option>;
    const item = [html];

    for (let i = 1; i <= 40; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }

  const initWorkMonth = () => {
    var html = <option value='' disabled selected='selected'>เดือน</option>;
    const item = [html];

    for (let i = 0; i <= 11; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }

  return (
    <div className='flex rounded-xl bg-slate-300 p-4'>
      <form onSubmit={handleSubmit}>
        <div className='text-xl text-red-700 m-3'>
          <p className='m-2'>* สำหรับผู้กู้ที่ทำงานหรืออาศัยอยู่ในจังหวัดระยอง เท่านั้น</p>
        </div>
        <div className='flex justify-center'>
          <h3 className='text-2xl underline font-bold'>ผู้กู้ 1</h3>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
        <div className='ml-4 flex flex-row mb-3 justify-around'>
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
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='thaiId' value={thaiId} onChange={ (e) => { handleInput(e); setThaiId(e.target.value); }} placeholder='เลขบัตรประชาชน 13 หลัก'></input>
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
        <div className='mx-4 mb-3'>
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
                      <option data-value={getProvince.name_th} value={getProvince.id} key={index}>{getProvince.name_th}</option>
                      ))
                    }
                </select>
              </div>
            </div>
            <div className='flex flex-row justify-around px-2 pb-3'>
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
            <div className='mb-2'>
              <p>เงินเดือน:</p>
              <div className='mx-2'>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name="salary" id="salary-select" onChange={(e) => { handleInput(e) }}>
                  <option value='6000' selected='selected'>1-5,999</option>
                  <option value='7000'>6,000-6,999</option>
                  <option value='8000'>7,000-7,999</option>
                  <option value='9000'>8,000-8,999</option>
                  <option value='10000'>9,000-9,999</option>
                  <option value='11000'>10,000-10,999</option>
                  <option value='12000'>11,000-11,999</option>
                  <option value='13000'>12,000-12,999</option>
                  <option value='14000'>13,000-13,999</option>
                  <option value='15000'>14,000-14,999</option>
                  <option value='16000'>15,000-15,999</option>
                  <option value='17000'>16,000-16,999</option>
                  <option value='18000'>17,000-17,999</option>
                  <option value='19000'>18,000-18,999</option>
                  <option value='20000'>19,000-19,999</option>
                  <option value='25000'>20,000-24,999</option>
                  <option value='30000'>25,000-29,999</option>
                  <option value='30001'>30,000 ขึ้นไป</option>
                </select>
              </div>
            </div>
            <div>
              <p>อายุงาน:</p>
              <div className='flex flex-row mx-2 content-center'>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-20% p-1.5 placeholder:pl-1' name="workYear" id="workYear-select" onChange={(e) => { handleInput(e) }}>
                  {initWorkYear()}
                </select>
                <p className='content-center mx-2'>ปี /</p>
                <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-20% p-1.5 placeholder:pl-1' name="workMonth" id="workMonth-select" onChange={(e) => { handleInput(e) }}>
                  {initWorkMonth()}
                </select>
                <p className='content-center ml-1'> เดือน </p>
              </div>
            </div>
          </div>
          {errors.provinceCurrent && <span className='text-red-700'>{errors.provinceCurrent}</span>}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='flex justify-center text-lg mb-1'>
          <p className='font-medium'>ข้อมูลที่ทำงาน</p>
        </div>
        <div className='mx-4'>
          <p>ชื่อบริษัท:</p>
          <div className='px-2 pb-2'>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='workNo' value={ workNo } onChange={ (e) => { handleInput(e); setWorkNo(e.target.value); }} placeholder='เลขที่  '></input>
          </div>
        </div>
        <div className='mx-4'>
          <p>ที่อยู่ที่ทำงาน:<sup className='text-red-700'>*</sup></p>
          <div>
            <div className='flex flex-row justify-around px-2 pb-2'>
              <div className='flex flex-row justify-center w-full pr-4'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='workNo' value={ workNo } onChange={ (e) => { handleInput(e); setWorkNo(e.target.value); }} placeholder='เลขที่  '></input>
              </div>
              <div className='flex flex-row justify-center w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='provinceWork' onChange={(e)=>{ handleProvinceWork(e); setProvinceWork(e.target.dataset.value); handleInput(e); }}>
                    <option data-value="" value="" selected='selected' disabled>จังหวัด</option>
                    {
                      provinceData.map((getProvince, index)=>(
                      <option data-value={getProvince.name_th} value={getProvince.id} key={index}>{getProvince.name_th}</option>
                      ))
                    }
                </select>
              </div>
            </div>
            <div className='flex flex-row justify-around px-2'>
              <div className='flex w-full pr-4'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-provinceWork' name='umphureWork' onChange={ (e) => { handleUmphureWork(e); setUmphureWork(e.target.dataset.value); handleInput(e)}}>
                    <option data-value="" value="" selected='selected' disabled>อำเภอ</option>
                    {
                      umphureListWork.map((getUmphure, index)=>(
                      <option data-value={getUmphure.name_th} value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                      ))
                    }
                </select>
              </div>
              <div className='flex w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-umphureWork' name='umphureWork' onChange={ (e) => { setTambonWork(e.target.dataset.value); handleInput(e)}}>
                      <option  data-value="" value="" selected='selected' disabled>ตำบล</option>
                      {
                        tambonListWork.map((getTambon, index)=>(
                        <option data-value={getTambon.name_th} value={getTambon.id} key={index}>{getTambon.name_th}</option>
                        ))
                      }
                </select>
              </div>
            </div>
          </div>
          {errors.provinceCurrent && <span className='text-red-700'>{errors.provinceCurrent}</span>}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='mb-10'>
          <div className='flex justify-center text-lg mb-1'>
            <p className='font-medium'>ข้อมูลที่ดิน</p>
          </div>
          <div className='mb-3 px-4'>
            <p>ข้อมูลที่ดินที่นำมาจำนำ:<sup className='text-red-700'>*</sup></p>
            <div className='flex flex-row justify-around px-2 mb-3'>
              <div className='flex justify-center w-full pr-4'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='provinceLanddeed' onChange={(e)=>{ handleProvinceLanddeed(e); setProvinceLanddeed(e.target.dataset.value); handleInput(e); }}>
                    <option data-value="" value="" selected='selected' disabled>จังหวัด</option>
                    {
                      provinceData.map((getProvince, index)=>(
                      <option data-value={getProvince.name_th} value={getProvince.id} key={index}>{getProvince.name_th}</option>
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
              {errors.provinceLanddeed && <span className='text-red-700'>{errors.provinceLanddeed}</span>}
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

export default PersonalLoan