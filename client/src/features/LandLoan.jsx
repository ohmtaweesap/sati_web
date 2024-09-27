import { useState, createElement } from 'react';
import provinceData from "../database/provinces.json";
import umphureData from "../database/umphures.json"

const LandLoan = () => {

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [thaiIdNumber, setThaiIdNumber] = useState("");
  const [provinceId, setProvinceId] = useState("");
  const [umphure, setUmphure] = useState([]);
  const [umphureId, setUmphureId] = useState("");


  const initDay = () => {
    var html = <option value='' selected='selected'>วัน</option>;
    const item = [html];

    for (let i = 1; i <= 31; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  }

  const initMonth = () => {
    var html = <option value='' selected='selected'>เดือน</option>;
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
    var html = <option value='' selected='selected'>ปี</option>;
    const item = [html];

    for (let i = maxAge; i <= minAge; i++){
      item.push(<option value={i}>{i}</option>)
    };
    return item;
  };

  const handleProvince = (e) => {
    const getProvinceId = e.target.value;
    const getUmphureData = umphureData.filter(umphure => umphure.province_id === Number(getProvinceId));
    setUmphure(getUmphureData);
    setProvinceId(getProvinceId);
    console.log("prvince id: "+getProvinceId)
    console.log("umphure data: "+getUmphureData);
  };

  return (
      <div className="App">
        <form>
          <fieldset>
            <div className='Field'>
              <div className='FieldError'>
                <p>*สำหรับผู้จำนำที่มีทะเบียนบ้านอยู่ในจังหวัดระยอง เท่านั้น</p>
                <p>**ที่ดินที่จำนำไม่จำเป็นต้องอยู่ในจังหวัดระยอง</p>
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
              <p>จังหวัดที่ตามทะเบียนบ้าน:<sup>*</sup></p>
              <div className='Input-padding flex'>
                <select name='province'>
                  <option value="" selected='selected'>โปรดระบุ</option>
                  {
                    provinceData.map((getProvince, index)=>(
                      <option value={getProvince.id} key={index}>{getProvince.name_th}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className='Field'>
              <p>ข้อมูลที่ดินที่นำมาจำนำ:<sup>*</sup></p>
                <div className='Input-padding flex'>
                    <div className='Row'>
                        <select className='select-province' name='province' onChange={(e)=>handleProvince(e)}>
                            <option value="" selected='selected'>จังหวัด</option>
                            {
                                provinceData.map((getProvince, index)=>(
                                <option value={getProvince.id} key={index}>{getProvince.name_th}</option>
                                ))
                            }
                        </select>
                        <select className='select-province' name='umphure' onChange={ (e) => setUmphureId(e.target.value)}>
                            <option value="" selected='selected'>อำเภอ</option>
                            {
                                umphure.map((getUmphure, index)=>(
                                <option value={getUmphure.id} key={index}>{getUmphure.name_th}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
          </fieldset>
        </form>
      </div>
  )
}

export default LandLoan