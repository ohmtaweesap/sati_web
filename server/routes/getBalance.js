const express = require('express')
const router = express.Router()
const mysql = require('mysql')


//create mysql database connection
const db =  mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

router.get('/getBalance', (request, response) => {
    const thaiId = request.query.thaiId
    const telNo = request.query.telNo
    
    const sql = `select * from

    ((select thai_id, sum(if(total_cap = 0, loan_amt, loan_amt-total_cap)) as cap_remain, max(lastRecDate) as lastRecDate from (select t1.*, loan_date,  loan_amt, loan_rate, tranche, pay_pmt1, pay_pmt2, record_by,            loan_type, transfer_time, first_due_date,            ifnull(total_cap,0) as total_cap, ifnull(total_int,0) as total_int, IFNULL(lastRecDate,loan_date)            as lastRecDate, IFNULL(lastRecDate,loan_date)            as lastRecDate1, lastItem, (loan_amt - ifnull(total_cap,0)) as remain, ifnull(remain_int,0) as remain_int from            (select thai_id, loan_no, thai_id as thai_id_loan from loanP        UNION        select thai_id_co as thai_id, loan_no, thai_id_loan from        (select thai_id_co, max(loan_no) as loan_no from loanP_co group by thai_id_co) t1        left join        (select thai_id as thai_id_loan, loan_no, thai_id_co from loanP_co) t2        using (thai_id_co, loan_no)        order by thai_id) t1 left join (select * from loanP) t2 on t1.thai_id_loan = t2.thai_id and t1.loan_no = t2.loan_no            left join (select t1.*, if(t2.rec_cap < 0, -rec_cap,0) as remain_int from (select thai_id,loan_no,sum(if(rec_cap > 0,rec_cap,0)) as total_cap    ,sum(if(rec_cap < 0,rec_cap,0) + cast(rec_int as signed)) as total_int    ,max(rec_date) as lastRecDate    ,max(rec_item) as lastItem    from loanR group by thai_id,loan_no) t1 left join (select * from (select thai_id, loan_no, max(rec_item) as rec_item from        loanR group by thai_id, loan_no) t1 left join (select thai_id, loan_no, rec_item, rec_cap            from loanR) t2 using (thai_id, loan_no, rec_item)) t2 on t1.thai_id = t2.thai_id and        t1.lastItem = t2.rec_item and t1.loan_no = t2.loan_no) t3 on t1.thai_id_loan = t3.thai_id and t1.loan_no = t3.loan_no ) s group by thai_id) t1
    
    left join
    
    (select thai_id, cus_name from customer) t2
    
    using(thai_id)

    left join

    (select thai_id, telType, telNo FROM telNo) t4

    using(thai_id)

    left join
    
    (select thai_id, stt_chg_date as lastStatusDate, status_to as lastStatus from (select thai_id, max(stt_chg_date)
            as stt_chg_date from cus_status_his group by thai_id) t1 left join
            (select thai_id, stt_chg_date, status_to from cus_status_his) t2 using (thai_id, stt_chg_date)) t3
 
    using(thai_id)) WHERE thai_id = ? AND telNo = ?`

    db.query(sql, [thaiId, telNo], (err, result) => {
        if (err) response.json({ message: "Server Error"})
        return response.json(result)
    })
})

module.exports = router
