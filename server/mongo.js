const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/hostel').then(() => {
    console.log("MongoDB connected")
}).catch((error) => {
    console.log("error in connecting mongodb",error)
})

//=======================================

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    aadhar: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    dateofjoining: {
        type: Date,
        required: true
    },
    roomShare: {
        type: Number,
        required: true
    },
    roomNo: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const userLogin = mongoose.model('userLogin', loginSchema, 'userLogin');
//======================================================================


const Dashboard = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone: {
        type: Number,
        required: true
    },
    lastpaid: {
        type: Date,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    paid: {
        type: Boolean,
        required: true
    },
    aadhar: {
        type: Number,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }


})

const dashboard = mongoose.model('userdashboard', Dashboard, "dashboard");
//========================================================================

const feepaid = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }

})

const feePaid = mongoose.model('userfee', feepaid, "feepaidhistory");

//========================================================================
module.exports = {
    userLogin, dashboard, feePaid
};