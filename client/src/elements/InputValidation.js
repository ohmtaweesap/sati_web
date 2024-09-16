function Validation(values){

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

export default Validation;