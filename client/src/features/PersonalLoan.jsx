import { useState } from 'react';
import provinceData from "../database/provinces.json";
import umphureData from "../database/umphures.json";
import tambonData from "../database/tambons.json"
import { PersonalLoanValidation } from '../elements/js/InputValidation';

const PersonalLoan = () => {

  // useState for personal data
  const [title1, setTitle1] = useState("");
  const [firstName1, setFirstName1] = useState("");
  const [lastName1, setLastName1] = useState("");
  const [telNo1, setTelNo1] = useState("");
  const [homeNo1, setHomeNo1] = useState("");
  const [thaiId1, setThaiId1] = useState("");
  const [birthDay1, setBirthDay1] = useState("");
  const [birthMonth1, setBirthMonth1] = useState("");
  const [birthYear1, setBirthYear1] = useState("");
  const [salary1, setSalary1] = useState("");
  const [workYear1, setWorkYear1] = useState("");
  const [workMonth1, setWorkMonth1] = useState("");

  // useState for current address
  const [provinceCurrent1, setProvinceCurrent1] = useState("");
  const [umphureCurrent1, setUmphureCurrent1] = useState("");
  const [umphureListCurrent1, setUmphureListCurrent1] = useState([]);
  const [tambonListCurrent1, setTambonListCurrent1] = useState([]);
  const [tambonCurrent1, setTambonCurrent1] = useState("");

  // useState for work
  const [workName1, setWorkName1] = useState("");
  const [workNo1, setWorkNo1] = useState("");
  const [provinceWork1, setProvinceWork1] = useState("");
  const [umphureWork1, setUmphureWork1] = useState("");
  const [umphureListWork1, setUmphureListWork1] = useState([]);
  const [tambonListWork1, setTambonListWork1] = useState([]);
  const [tambonWork1, setTambonWork1] = useState("");

  // useState for checking if user fill in required fields
  const [values, setValues] = useState({
    title1:"",
    firstName1:"",
    lastName1:"",
    thaiId1:"",
    telNo1:"",
    birthDay1:"",
    birthMonth1:"",
    birthYear1:"",
    provinceCurrent1:"",
    umphureCurrent1:"",
    tambonCurrent1:"",
    workYear1:"",
    workMonth1:"",
    workName1:"",
    workNo1:"",
    provinceWork1:"",
    umphureWork1:"",
    tambonWork1:"",
    title2:"",
    firstName2:"",
    lastName2:"",
    thaiId2:"",
    telNo2:"",
    birthDay2:"",
    birthMonth2:"",
    birthYear2:"",
    provinceCurrent2:"",
    umphureCurrent2:"",
    tambonCurrent2:"",
    workYear2:"",
    workMonth2:"",
    workName2:"",
    workNo2:"",
    provinceWork2:"",
    umphureWork2:"",
    tambonWork2:"",
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

  const handleProvinceCurrent1 = (e) => {
    const getProvinceId = e.target.value;
    const getUmphureData = umphureData.filter(umphure => umphure.province_id === Number(getProvinceId));
    setUmphureListCurrent1(getUmphureData);
    resetUmphureCurrent1();
    resetTambonCurrent1();
  };

  const handleUmphureCurrent1 = (e) => {
    const getUmphureId = e.target.value;
    const getTambonData = tambonData.filter(tambon => tambon.amphure_id === Number(getUmphureId));
    setTambonListCurrent1(getTambonData);
    resetTambonCurrent1();
  }

  const resetUmphureCurrent1 = () => {
    const select = document.getElementById('select-provinceCurrent1');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, umphureCurrent: ""}));
  };

  const resetTambonCurrent1 = () => {
    const select = document.getElementById('select-umphureCurrent1');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, tambonCurrent: ""}));
  }

  const handleProvinceWork1 = (e) => {
    const getProvinceId = e.target.value;
    const getUmphureData = umphureData.filter(umphure => umphure.province_id === Number(getProvinceId));
    setUmphureListWork1(getUmphureData);
    resetUmphureWork1();
    resetTambonWork1();
  };

  const handleUmphureWork1 = (e) => {
    const getUmphureId = e.target.value;
    const getTambonData = tambonData.filter(tambon => tambon.amphure_id === Number(getUmphureId));
    setTambonListWork1(getTambonData);
    resetTambonWork1();
  }

  const resetUmphureWork1 = () => {
    const select = document.getElementById('select-provinceWork1');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, umphureWork1: ""}));
  };

  const resetTambonWork1 = () => {
    const select = document.getElementById('select-umphureWork1');
    select.selectedIndex = 0;
    setValues(prev=> ({...prev, tambonWork1: ""}));
  }

  const handleInput = (e) => {
    setValues(prev=> ({...prev, [e.target.name]: [e.target.value]}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(PersonalLoanValidation(values));
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
          <p className='m-2'>** เป็นรูปแบบกู้ร่วมเท่านั้น เท่านั้น</p>
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
              <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='title' value={ title1 } onChange={ (e) => { handleInput(e); setTitle1(e.target.value); }}>
                <option value="" selected='selected' disabled>คำนำหน้า</option>
                <option value="Mr">นาย</option>
                <option value="Mrs">นาง</option>
                <option value="Ms">นางสาว</option>
              </select>
              {errors.title1 && <span className='text-red-700'>{errors.title1}</span>}
            </div>
          </div>
        </div>
        <div className='ml-4 flex flex-row mb-3 justify-around'>
          <div>
            <p className='text-base'>
              ชื่อ <sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='firstName' value={ firstName1 } onChange={ (e) => { handleInput(e); setFirstName1(e.target.value); }} placeholder='ชื่อ'></input>
              {errors.firstName1 && <span className='text-red-700'>{errors.firstName1}</span>}
            </div>
          </div>
          <div className='px-3'>
            <p className='text-base'>
              นามสกุล <sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' value={ lastName1 } onChange={ (e) => { handleInput(e); setLastName1(e.target.value); }} placeholder='นามสกุล'></input>
              {errors.lastName1 && <span className='text-red-700'>{errors.lastName1}</span>}
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-around mb-3 ml-4'>
          <div>
            <p className='text-base'>
              เลขบัตรประชาชน<sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='thaiId' value={thaiId1} onChange={ (e) => { handleInput(e); setThaiId1(e.target.value); }} placeholder='เลขบัตรประชาชน 13 หลัก'></input>
              {errors.thaiId1 && <span className='text-red-700'>{errors.thaiId1}</span>}
            </div>
          </div>
          <div className='px-3'>
            <p className='text-base'>
              เบอร์โทรศัพท์ <sup className='text-red-700'>*</sup>
            </p>
            <div className='ml-2'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='telNo' value={ telNo1 } onChange={ (e) => { handleInput(e); setTelNo1(e.target.value); }} placeholder='เบอร์โทรศัพท์'></input>
              {errors.telNo1 && <span className='text-red-700'>{errors.telNo1}</span>}
            </div>
          </div>
        </div>
        <div className='ml-4 mb-3 justify-around'>
          <div>
            <p className='text-base'>
              วัน-เดือน-ปี เกิด <sup className='text-red-700'>*</sup>
            </p>
          </div>
          <div className='flex flex-row ml-2'>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthDay" value= { birthDay1 } onChange={ (e) => { handleInput(e); setBirthDay1(e.target.value); }} id="bDay-select">
              {initDay()}
            </select>
            <p className='mx-1 content-center'>/</p>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthMonth" value= { birthMonth1 } onChange={ (e) => { handleInput(e); setBirthMonth1(e.target.value); }} id="bMonth-select">
              {initMonth()}
            </select>
            <p className='mx-1 content-center'>/</p>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name="birthYear" value= { birthYear1 } onChange={ (e) => { handleInput(e); setBirthYear1(e.target.value); }} id="bYear-select">
              {initYear()}
            </select>
          </div>
          <div className='ml-2'>
            {errors.birth1 && <span className='text-red-700'>{errors.birth1}</span>}
          </div>
        </div>
        <div className='px-4 mb-3'>
          <p>ที่อยู่ปัจจุบัน:<sup className='text-red-700'>*</sup></p>
            <div className='flex flex-row justify-around px-2 pb-2'>
              <div className='flex flex-row justify-center w-full pr-4'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='homeNo' value={ homeNo1 } onChange={ (e) => { handleInput(e); setHomeNo1(e.target.value); }} placeholder='เลขที่  '></input>
              </div>
              <div className='flex flex-row justify-center w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='provinceCurrent1' onChange={(e)=>{ handleProvinceCurrent1(e); setProvinceCurrent1(e.target.dataset.value); handleInput(e); }}>
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
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-provinceCurrent1' name='umphureCurrent1' onChange={ (e) => { handleUmphureCurrent1(e); setUmphureCurrent1(e.target.dataset.value); handleInput(e)}}>
                    <option data-value="" value="" selected='selected' disabled>อำเภอ</option>
                    {
                      umphureListCurrent1.map((getUmphure, index)=>(
                      <option data-value={getUmphure.name_th} value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                      ))
                    }
                </select>
              </div>
              <div className='flex w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-umphureCurrent1' name='umphureCurrent1' onChange={ (e) => { setTambonCurrent1(e.target.dataset.value); handleInput(e)}}>
                      <option  data-value="" value="" selected='selected' disabled>ตำบล</option>
                      {
                        tambonListCurrent1.map((getTambon, index)=>(
                        <option data-value={getTambon.name_th} value={getTambon.id} key={index}>{getTambon.name_th}</option>
                        ))
                      }
                </select>
              </div>
            </div>
            <div className='ml-2'>
              {errors.addressCurrent1 && <span className='text-red-700'>{errors.addressCurrent1}</span>}
            </div>
        </div>
        <div className='px-4 mb-3'>
          <p>เงินเดือน:<sup className='text-red-700'>*</sup></p>
          <div className='mx-2'>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name="salary1" id="salary-select" onChange={(e) => { handleInput(e); setSalary1(e.target.value) }}>
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
        <div className='px-4 mb-3'>
          <p>อายุงาน:<sup className='text-red-700'>*</sup></p>
          <div className='flex flex-row mx-2 content-center'>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-20% p-1.5 placeholder:pl-1' name="workYear1" id="workYear-select" onChange={(e) => { handleInput(e); setWorkYear1(e.target.value) }}>
              {initWorkYear()}
            </select>
            <p className='content-center mx-2'>ปี /</p>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-20% p-1.5 placeholder:pl-1' name="workMonth1" id="workMonth-select" onChange={(e) => { handleInput(e); setWorkMonth1(e.target.value) }}>
              {initWorkMonth()}
            </select>
            <p className='content-center ml-1'> เดือน </p>
          </div>
          <div className='ml-2'>
            {errors.workPeriod1 && <span className='text-red-700'>{errors.workPeriod1}</span>}
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='flex justify-center text-lg mb-1'>
          <p className='font-medium'>ข้อมูลที่ทำงาน</p>
        </div>
        <div className='mx-4'>
          <p>ชื่อบริษัท:<sup className='text-red-700'>*</sup></p>
          <div className='px-2 pb-2'>
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='workName1' value={ workName1 } onChange={ (e) => { handleInput(e); setWorkName1(e.target.value); }} placeholder='ชื่อบริษัท'></input>
            {errors.workName1 && <span className='text-red-700'>{errors.workName1}</span>}
          </div>
        </div>
        <div className='mx-4'>
          <p>ที่อยู่ที่ทำงาน:<sup className='text-red-700'>*</sup></p>
          <div>
            <div className='flex flex-row justify-around px-2 pb-2'>
              <div className='flex flex-row justify-center w-full pr-4'>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder:pl-1' name='workNo1' value={ workNo1 } onChange={ (e) => { handleInput(e); setWorkNo1(e.target.value); }} placeholder='เลขที่'></input>
              </div>
              <div className='flex flex-row justify-center w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' name='provinceWork1' onChange={(e)=>{ handleProvinceWork1(e); setProvinceWork1(e.target.dataset.value); handleInput(e); }}>
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
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-provinceWork1' name='umphureWork1' onChange={ (e) => { handleUmphureWork1(e); setUmphureWork1(e.target.dataset.value); handleInput(e)}}>
                    <option data-value="" value="" selected='selected' disabled>อำเภอ</option>
                    {
                      umphureListWork1.map((getUmphure, index)=>(
                      <option data-value={getUmphure.name_th} value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                      ))
                    }
                </select>
              </div>
              <div className='flex w-full'>
                <select className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-1.5 placeholder:pl-1' id='select-umphureWork1' name='tambonWork1' onChange={ (e) => { setTambonWork1(e.target.dataset.value); handleInput(e)}}>
                      <option  data-value="" value="" selected='selected' disabled>ตำบล</option>
                      {
                        tambonListWork1.map((getTambon, index)=>(
                        <option data-value={getTambon.name_th} value={getTambon.id} key={index}>{getTambon.name_th}</option>
                        ))
                      }
                </select>
              </div>
            </div>
            <div className='ml-2'>
              {errors.workAddress1 && <span className='text-red-700'>{errors.workAddress1}</span>}
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>
        

        <div className='flex justify-center rounded transition delay-90 bg-blue-500 hover:bg-blue-400 h-10 mx-5 text-white'>
          <button className='w-full'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default PersonalLoan