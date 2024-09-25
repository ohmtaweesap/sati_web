import { useState, createElement } from 'react';
import { ThaiDatePicker } from "thaidatepicker-react";

const PersonalLoan = () => {

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [thaiIdNumber, setThaiIdNumber] = useState("");



  const initYear = () => {
    let date = new Date();
    var thaiYear = date.getFullYear() + 543;
    var maxAge = thaiYear - 60;
    var minAge = thaiYear - 20;
    var html = "<option value='' selected='selected'>โปรดระบุ</option>";
    let item = [];

    for (let i = maxAge; i <= minAge; i++){
      var opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      item.push(opt);
    }
    return item;
  };

  return (
      <div className="App">
        <form>
          <fieldset>
            <div className='Field'>
              <div>
                <sup>สำหรับพนักงานบริษัทเอกชนและอาศัยหรือทำงานอยู่ในจังหวัดระยอง เท่านั้น</sup>
                <p></p>
              </div>
              <div className='borrower'>
                <h3>ผู้กู้ 1</h3>
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
              <div className='Row'>
                <select>
                  <option value selected="selected">โปรดระบุ</option>
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <p>/</p>
                <select>
                  <option value selected="selected">โปรดระบุ</option>
                  <option value="01">1</option>
                  <option value="02">2</option>
                  <option value="03">3</option>
                  <option value="04">4</option>
                  <option value="05">5</option>
                  <option value="06">6</option>
                  <option value="07">7</option>
                  <option value="08">8</option>
                  <option value="09">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <p>/</p>
                <select>
                  <option value="" selected="selected">โปรดระบุ</option>
                  {initYear()}
                </select>
              </div>
              {/* <div>
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
              </div> */}
            </div>
          </fieldset>
        </form>
      </div>
  )
}

export default PersonalLoan