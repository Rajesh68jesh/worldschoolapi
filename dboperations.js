
const { Client } = require('pg')


const config ={
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'jesh',
    database:'school'    
};

async function executeQuerry(sql){ 
    var res;
    const client = new Client(config);
    client.connect();
    await client.query(sql).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
    return res;
  };


async function getOrders(){
    try{
        //await executeQuerry("CREATE TABLE IF NOT EXISTS OREDR(ID INTEGER,TITLE TEXT,MESSAGE TEXT,PRIMARY KEY(ID));")
        //await executeQuerry("INSERT INTO ORDERS VALUES(3,'VIKRAM','done','8','tvl');");
        let sql = "SELECT * FROM ORDERS;";
        let result = await executeQuerry(sql);
        return result;
        //console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

async function getLogins(){
  try{
      //await executeQuerry("CREATE TABLE IF NOT EXISTS OREDR(ID INTEGER,TITLE TEXT,MESSAGE TEXT,PRIMARY KEY(ID));")
      //await executeQuerry("INSERT INTO ORDERS VALUES(3,'VIKRAM','done','8','tvl');");
      let sql = "SELECT * FROM LOGIN;";
      let result = await executeQuerry(sql);
      return result;
      //console.log(result);
  }
  catch(error){
      console.log(error);
  }
}


async function getLogin(user_name,password){
  const text = 'select * from login where login_user_name = $1 and login_password = $2;'
    const values = [user_name,password]
    var res;
    const client = new Client(config);
    client.connect();
    try {
         await client.query(text, values).then(result => res =  result.rows)
        .catch(e => console.error(e.stack))
        .then(() => client.end());
      return res;
      
      //console.log(result);
  }
  catch(error){
      console.log(error);
  }
}

async function getStudent_Details(registerNumber){
    const text = 'select * from student_personal_details where register_number = $1'
    const values = [registerNumber]
    var res;
    const client = new Client(config);
    client.connect();
    try {
         await client.query(text, values).then(result => res =  result.rows)
        .catch(e => console.error(e.stack))
        .then(() => client.end());
      return res;
        
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      } catch (err) {
        console.log(err.stack)
      }
}

async function getStaff_Details(registerNumber){
  const text = 'select * from staff_profile where staff_code = $1'
  const values = [registerNumber]
  var res;
  const client = new Client(config);
  client.connect();
  try {
       await client.query(text, values).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
    return res;
      
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack)
    }
}

async function getAdmin_Details(admin_code){
  const text = 'select * from admin_profile where admin_code = $1'
  const values = [admin_code]
  var res;
  const client = new Client(config); 
  client.connect();
  try {
       await client.query(text, values).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
      
    console.log(res);
    return res;
      
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack)
    }
}


async function addapplication_form(application_name,application_age,application_phonenumber,application_dob,application_email,father_occuption,mother_occuption,annual_income,address,pin_code,admission_class,gender,father_name,mother_name,father_phonenumber,mother_phonenumber){
  try{

      var res;
      const query = 'INSERT INTO application_form (application_name,application_age,application_phonenumber,application_dob,application_email,father_occuption,mother_occuption,annual_income,address,pin_code,admission_class,gender,father_name,mother_name,father_phonenumber,mother_phonenumber) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,$14,$15,$16) RETURNING *'
      const values = [application_name,application_age,application_phonenumber,application_dob,application_email,father_occuption,mother_occuption,annual_income,address,pin_code,admission_class,gender,father_name,mother_name,father_phonenumber,mother_phonenumber]
      const client = new Client(config);
       client.connect();
       await client.query(query,values).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
      return res;


  }catch(err){
      console.log(err);
  }
}

async function add_student_feedback(feedback_id,feedback_sender,feedback_reciever,feedback_content,created_on_date,created_on_time,feedback_category,){
  try{
    

      var res;
      const query = 'INSERT INTO feedback (feedback_id,feedback_sender,feedback_reciever,feedback_content,created_on_date,created_on_time,feedback_category) VALUES ($1, $2, $3, $4, $5, $6, $7 ) RETURNING *'
      const values = [feedback_id,feedback_sender,feedback_reciever,feedback_content,created_on_date,created_on_time,feedback_category,   ]
      const client = new Client(config);
       client.connect();
       await client.query(query,values).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
      return res;


  }catch(err){
      console.log(err);
  }
}

async function getFeedback_Details(feedback_Sender){
  const text = 'select * from feedback where feedback_sender = $1'
  const values = [feedback_Sender]
  var res;
  const client = new Client(config);
  client.connect();
  try {
       await client.query(text, values).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
    return res;
      
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack)
    }
}

async function addOrder(id, title, message, quantity, city){
    try{

        var res;
        const query = 'INSERT INTO orders (id, title, message, quantity, city) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [id, title, message, quantity, city]
        const client = new Client(config);
         client.connect();
         await client.query(query,values).then(result => res =  result.rows)
        .catch(e => console.error(e.stack))
        .then(() => client.end());
        return res;


    }catch(err){
        console.log(err);
    }
}



module.exports= {
    getLogin: getLogin,
    getStudent_Details: getStudent_Details,
    add_student_feedback: add_student_feedback,
   // addOrder: addOrder,
   addapplication_form: addapplication_form,
   getFeedback_Details: getFeedback_Details,
    getStaff_Details: getStaff_Details,
    getLogins: getLogins,
    getAdmin_Details: getAdmin_Details,
}