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
    const thaiId_pattern = /^\d{13}$/
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

    if(values.birthDay === "" || values.birthMonth === "" || values.birthYear === ""){
        error.birth = "กรุณาใส่วันเดือนปีเกิด ให้ถูกต้อง"
    }
    else{
        error.birth = ""
    }

    if(values.provinceHome === ""){
        error.provinceHome = "กรุณาเลือกจังหวัดทะเบียนบ้าน"
    }
    else{
        error.provinceHome = ""
    }

    if(values.provinceCurrent === "" || values.umphureCurrent === ""){
        error.provinceCurrent = "กรุณาเลือกจังหวัดและอำเภอที่อยู่ปัจจุบัน"
    }
    else{
        error.provinceLanddeed = ""
    }

    if(values.provinceLanddeed === "" || values.umphureLanddeed === "" || values.landNumber === ""){
        error.provinceLanddeed = "กรุณาเลือกจังหวัดและอำเภอและใส่เลขที่โฉนด"
    }
    else{
        error.provinceLanddeed = ""
    }

    console.log(values)

    return error;
}

export const PersonalLoanValidation = (values) => {

    let error = {}
    const thaiId_pattern = /^\d{13}$/
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

    if(values.birthDay === "" || values.birthMonth === "" || values.birthYear === ""){
        error.birth = "กรุณาใส่วันเดือนปีเกิด ให้ถูกต้อง"
    }
    else{
        error.birth = ""
    }

    if(values.provinceCurrent === "" || values.umphureCurrent === ""){
        error.provinceCurrent = "กรุณาเลือกจังหวัดและอำเภอที่อยู่ปัจจุบัน"
    }
    else{
        error.provinceCurrent = ""
    }

    if(values.workYear === "" || values.workMonth === ""){
        error.workYear = "กรุณาระบุอายุงาน"
    }
    else{
        error.workYear = ""
    }

    console.log(values)

    return error;
}

