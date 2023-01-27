
var dboperations = require('./dboperations');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { request, response } = require('express');
var app  = express();
var router = express.Router();

   
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);


router.use((request,response,next) =>{
console.log('middleware');
next();
})

//http://localhost:8090/api/logins
router.route("/logins").get((request,response)=>{
    dboperations.getLogins().then(result =>{
        response.json(result);
    })
})


//http://localhost:8090/api/login/rajesh/rajesh
router.route("/login/:user_name/:password").get((request,response)=>{
    dboperations.getLogin(request.params.user_name,request.params.password).then(result =>{
        response.json(result);
    })
})

//http://localhost:8090/api/student/2015032
router.route("/student/:registerNumber").get((request,response)=>{
    dboperations.getStudent_Details(request.params.registerNumber).then(result =>{
        response.json(result);
    })
})

//http://10.0.2.2:8090/api/staff/2015004
//http://localhost:8090/api/staff/2015004
router.route("/staff/:staffCode").get((request,response)=>{
    dboperations.getStaff_Details(request.params.staffCode).then(result =>{
        response.json(result);
    })
})

//http://localhost:8090/api/application_form
router.route("/application_form").post((request,response)=>{
    let {application_name,application_age,application_phonenumber,application_dob,application_email,father_occuption,mother_occuption,annual_income,address,pin_code,admission_class,gender,father_name,mother_name,father_phonenumber,mother_phonenumber} = request.body
    dboperations.addapplication_form(application_name,application_age,application_phonenumber,application_dob,application_email,father_occuption,mother_occuption,annual_income,address,pin_code,admission_class,gender,father_name,mother_name,father_phonenumber,mother_phonenumber).then(result =>{
        response.status(201).json(result);
    })
   // console.log(application_name);
  //  console.log(application_age)
})

router.route("/feedback").post((request,response)=>{
    let {feedback_id,feedback_sender,feedback_reciever,feedback_content,created_on_date,created_on_time,feedback_category} = request.body
    dboperations.add_student_feedback(feedback_id,feedback_sender,feedback_reciever,feedback_content,created_on_date,created_on_time,feedback_category).then(result =>{
        response.status(201).json(result);
    })
    console.log(feedback_sender);
})

// http://localhost:8090/api/feedbackrecieve/2015032
router.route("/feedbackrecieve/:feedback_Sender").get((request,response)=>{
    dboperations.getFeedback_Details(request.params.feedback_Sender).then(result =>{
        response.json(result);
    })
})

router.route("/orders").post((request,response)=>{

    let {id, title, message,quantity, city} = request.body
    dboperations.addOrder(id, title, message, quantity, city).then(result =>{
        response.status(201).json(result);
    })
})




var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is running ' + port);



