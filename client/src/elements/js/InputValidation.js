import isValidThaiID from 'thai-id-validator';

export const checkBalanceValidation = (values) => {

    let error = {}
    const thaiId_pattern = /^\d{13}$/
    const telNo_pattern = /^\d{10}$/


    if(values.thaiId === ""){
        error.thaiId = "กรุณาใส่เลขบัตรประชาชน"
    }
    else if(!thaiId_pattern.test(values.thaiId)){
        error.thaiId = "เลขบัตรประชาชนไม่ถูกต้อง ต้องเป็นตัวเลข 13 หลักเท่านั้น"
    }
    else{
        error.thaiId = ""
    }


    if(values.telNo === ""){
        error.telNo = "กรุณาใส่หมายเลขโทรศัพย์"
    }
    else if(!telNo_pattern.test(values.telNo)){
        error.telNo = "หมายเลขโทรศัพย์ไม่ถูกต้อง ต้องเป็นตัวเลขเ 10 หลักเท่านั้น"
    }
    else{
        error.telNo = ""
    }

    return error;
}

export const LandDeedValidation = (values) => {

    let error = {}
    const telNo_pattern = /^\d{10}$/

    if(values.title === ""){
        error.title = "กรุณาเลือกคำนำหน้า"
    }
    else{
        error.title = ""
    }

    if(values.firstName === ""){
        error.firstName = "กรุณาใส่ชื่อ"
    }
    else{
        error.firstName = ""
    }

    if(values.lastName === ""){
        error.lastName = "กรุณาใส่นามสกุล"
    }
    else{
        error.lastName = ""
    }

    if(values.thaiId === ""){
        error.thaiId = "กรุณาใส่เลขบัตรประชาชน"
    }
    else if(!isValidThaiID(values.thaiId)){
        error.thaiId = "เลขบัตรประชาชนไม่ถูกต้อง"
    }
    else{
        error.thaiId = ""
    }

    if(values.telNo === ""){
        error.telNo = "กรุณาใส่หมายเลขโทรศัพย์"
    }
    else if(!telNo_pattern.test(values.telNo)){
        error.telNo = "หมายเลขโทรศัพย์ไม่ถูกต้อง ต้องเป็นตัวเลขเ 10 หลักเท่านั้น"
    }
    else{
        error.telNo = ""
    }

    if(values.birthDay === "" || values.birthMonth === "" || values.birthYear === ""){
        error.birth = "กรุณาใส่วันเดือนปีเกิด ให้ถูกต้อง"
    }
    else{
        error.birth = ""
    }

    if(values.provinceCurrent === "" || values.umphureCurrent === "" || values.homeNo === ""){
        error.addressCurrent = "กรุณาใส่ข้อมูลที่อยู่ปัจจุบันให้ครบถ่วน"
    }
    else{
        error.addressCurrent = ""
    }

    if(values.provinceLanddeed === "" || values.umphureLanddeed === "" || values.landNumber === ""){
        error.addressLanddeed = "กรุณาใส่ข้อมูลของโฉนดให้ครบถ่วน"
    }
    else{
        error.addressLanddeed = ""
    }

    console.log(values)

    return error;
}

export const PersonalLoanValidation = (values) => {

    let error = {}
    const telNo_pattern = /^\d{10}$/

    if(values.title1 === ""){
        error.title1 = "กรุณาเลือกคำนำหน้า"
    }
    else{
        error.title1 = ""
    }

    if(values.firstName1 === ""){
        error.firstName1 = "กรุณาใส่ชื่อ"
    }
    else{
        error.firstName1 = ""
    }

    if(values.lastName1 === ""){
        error.lastName1 = "กรุณาใส่นามสกุล"
    }
    else{
        error.lastName1 = ""
    }

    if(values.thaiId1 === ""){
        error.thaiId1 = "กรุณาใส่เลขบัตรประชาชน"
    }
    else if(!isValidThaiID(values.thaiId1)){
        error.thaiId1 = "เลขบัตรประชาชนไม่ถูกต้อง"
    }
    else{
        error.thaiId1 = ""
    }

    if(values.telNo1 === ""){
        error.telNo1 = "กรุณาใส่หมายเลขโทรศัพย์"
    }
    else if(!telNo_pattern.test(values.telNo1)){
        error.telNo1 = "หมายเลขโทรศัพย์ไม่ถูกต้อง ต้องเป็นตัวเลขเ 10 หลักเท่านั้น"
    }
    else{
        error.telNo1 = ""
    }

    if(values.birthDay1 === "" || values.birthMonth1 === "" || values.birthYear1 === ""){
        error.birth1 = "กรุณาใส่วันเดือนปีเกิด ให้ถูกต้อง"
    }
    else{
        error.birth1 = ""
    }

    if(values.provinceCurrent1 === "" || values.umphureCurrent1 === "" || values.homeNo1 === "" || values.tambonCurrent1 === ""){
        error.addressCurrent1 = "กรุณาใส่ข้อมูลที่อยู่ปัจจุบันให้ครบถ่วน"
    }
    else{
        error.addressCurrent1 = ""
    }

    if(values.workYear1 === "" || values.workMonth1 === ""){
        error.workPeriod1 = "กรุณาระบุอายุงาน"
    }
    else{
        error.workPeriod1 = ""
    }

    if(values.workName1 === ""){
        error.workName1 = "กรุณาใส่ชื่อบริษัท"
    }
    else{
        error.workName1 = ""
    }

    if(values.workNo1 === "" || values.provinceWork1 === "" || values.umphureWork1 === "" || values.tambonWork1 === ""){
        error.workAddress1 = "กรุณาใส่ที่อยู่ที่ทำงานให้ครบถ่วน"
    }
    else{
        error.workAddress1 = ""
    }

    console.log(values)

    return error;
}

