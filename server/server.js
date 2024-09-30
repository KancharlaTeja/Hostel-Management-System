const express = require('express')

const { userLogin, dashboard, feePaid } = require('./mongo')
const {sendEmail} = require('./emailService');

const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors(
    {
        methods: ['POST', 'GET'],
        credintials: true
    }
))




app.get('/', (req, res) => {
    res.send('Helo Teja welcome to Amazon')
})

//====================



//======================

app.post('/new-login', async (req, res) => {
    const { name, email,aadhar, phone, dateofjoining, roomShare, roomNo, amount, location } = req.body;


    
const data = {
        name: name,
        email:email,
        aadhar: aadhar,
        phone: phone,
        dateofjoining: dateofjoining,
        roomShare: roomShare,
        roomNo: roomNo,
        amount: amount,
        location: location
    };
    console.log(data);
    const data1 = {
        name: name,
        email:email,
        phone: phone,
        lastpaid: dateofjoining,
        due: dateofjoining,
        paid: false,
        aadhar: aadhar,
        amount:amount
    }
    console.log(data1)
    try {
        const alreadyAadhar = await userLogin.findOne({ aadhar: aadhar });
        if (alreadyAadhar) {
            res.json({ status: 'duplicate' })
        }
        else {
            const checkingUser = await userLogin.find({ roomNo: roomNo });
            const value_check = parseInt(roomShare) - checkingUser.length;

            if (value_check <= 0) {
                res.json({ status: 'alreadyuser', msg: roomNo });
            } else {
                const newuserdashboard = await dashboard.create(data1);
                
                await newuserdashboard.save();
                const newUser = await userLogin.create(data);
                await newUser.save();


                res.json({ status: 'success' });
            }

        }

    } catch (err) {
        res.json({ status: 'error', error: err.message });
    }
});


//======================

app.post('/students-joining', async (req, res) => {
    try {

        const users = await userLogin.find({})

        if (users.length > 0) {
            res.json({ status: 'success', msg: users })
        }
        else {
            res.json({ status: 'nodata' })
        }

    }
    catch (err) {
        res.json({ status: 'error' })
    }
})

//============================



app.post('/Rooms/:roomId', async (req, res) => {
    const user_roomNo = req.params.roomId;

    try {
        const user_deatils = await userLogin.find({ roomNo: user_roomNo })
        if (user_deatils) {
            res.json({ status: 'success', msg: user_deatils })
        }
        else {
            res.json({ status: 'nouser' })
        }
    }
    catch (err) {
        res.json({ status: 'failed' })
    }
})
//=================================================================

app.post('/main-dashboard', async (req, res) => {
    try {
        const dashboardData = await dashboard.find({});
       
        if (dashboardData) {

            res.json({ status: 'success', msg: dashboardData })
        }
        else {
            res.json({ status: 'nodata' })
        }
    }
    catch (err) {
        res.json({ status: 'error' })
    }
}

)



//=================================================================
app.post('/dashboardupdate', async (req, res) => {


    const fetch = req.body;


    const updatedData = {
        name: fetch.name,
        email:fetch.email,
        phone: fetch.phone,
        lastpaid: fetch.PaidMonth,
        due: fetch.dueDate,
        paid: fetch.paid,
        aadhar: fetch.aadhar
    };


    const feedata = {
        name: fetch.name,
        email:fetch.email,
        phone: fetch.phone,
        date: fetch.timec
    }

    try {

        const da = await feePaid.create(feedata);
        await da.save();

        const updateStudent = await dashboard.findOne({ aadhar: updatedData.aadhar });
        if (!updateStudent) {
            res.json({ status: 'sorry' })
        }
        updateStudent.name = updatedData.name;
        updateStudent.email = updatedData.email;
        updateStudent.phone = updatedData.phone;
        updateStudent.lastpaid = updatedData.lastpaid;
        updateStudent.due = updatedData.due;
        updateStudent.paid = updatedData.paid;
        updateStudent.aadhar = updatedData.aadhar;
        
        await updateStudent.save();
        const DataAll = await dashboard.find({});

        res.json({ status: 'success', msg: DataAll });



    } catch (err) {
        res.json({ status: 'error', msg: 'An error occurred' });
    }
});
//=================================================================

// app.post('/email', async (req, res) => {
//     const emailData = req.body;

   
//     try {
//         // Send the email
//         await sendEmail(emailData.email, emailData.name, emailData.dueDate, emailData.amount);

//         // Respond with success
//         res.json({ status: 'success', message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error in sending email:', error);
//         res.status(500).json({ status: 'error', message: 'Failed to send email' });
//     }
// });
//=================================================================
app.post('/firstfloor', async (req, res) => {
    const data = await userLogin.find({});
    const finaldta = data.filter((stu) => stu.roomShare === 1);
    const result101 = []
    finaldta.map((stu, ind) => {
        if (stu.roomNo === 101) {
            result101.push(stu.roomNo);
        }
    }
    )
    const result102 = []
    finaldta.map((stu, ind) => {
        if (stu.roomNo === 102) {
            result102.push(stu.roomNo);
        }
    }
    )

    const result103 = []
    finaldta.map((stu, ind) => {
        if (stu.roomNo === 103) {
            result103.push(stu.roomNo);
        }
    }
    )

    const result104 = []
    finaldta.map((stu, ind) => {
        if (stu.roomNo === 104) {
            result104.push(stu.roomNo);
        }
    }
    )
    const result105 = []
    finaldta.map((stu, ind) => {
        if (stu.roomNo === 105) {
            result105.push(stu.roomNo);
        }
    }
    )
    finalresult1st = []

    if (result101.length < 1) {
        finalresult1st.push(101);
    }
    if (result102.length < 1) {
        finalresult1st.push(102);
    }
    if (result103.length < 1) {
        finalresult1st.push(103);
    }
    if (result104.length < 1) {
        finalresult1st.push(104);
    }
    if (result105.length < 1) {
        finalresult1st.push(105);
    }

    res.json({ status: 'success', msg: finalresult1st })

})


//=================================================================
app.post('/secondfloor', async (req, res) => {
    try {
        const data = await userLogin.find({});
        const finaldta = data.filter((stu) => stu.roomShare === 2);

        const result201 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 201) {
                result201.push(stu.roomNo);
            }
        }
        )

        const result202 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 202) {
                result202.push(stu.roomNo);
            }
        }
        )

        const result203 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 203) {
                result203.push(stu.roomNo);
            }
        }
        )

        const result204 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 204) {
                result204.push(stu.roomNo);
            }
        }
        )

        finalresult2nd = []
        if (result201.length < 2) {
            finalresult2nd.push(201);
        }
        if (result202.length < 2) {
            finalresult2nd.push(202);
        }
        if (result203.length < 2) {
            finalresult2nd.push(203);
        }
        if (result204.length < 2) {
            finalresult2nd.push(204);
        }

        res.json({ status: 'success', msg: finalresult2nd })

    } catch (err) {
        res.json({ status: 'error' })
    }

})
//================================================================

app.post('/thirdfloor', async (req, res) => {

    try {
        const data = await userLogin.find({});
        const finaldta = data.filter((stu) => stu.roomShare === 3);

        const result301 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 301) {
                result301.push(stu.roomNo);
            }
        })

        const result302 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 302) {
                result301.push(stu.roomNo);
            }
        })

        const result303 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 303) {
                result303.push(stu.roomNo);
            }
        })

        const result304 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 304) {
                result304.push(stu.roomNo);
            }
        })

        const result305 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 305) {
                result305.push(stu.roomNo);
            }
        })

        finalresult3rd = []

        if (result301.length < 3) {
            finalresult3rd.push(301);
        }
        if (result302.length < 3) {
            finalresult3rd.push(302);
        }

        if (result303.length < 3) {
            finalresult3rd.push(303);
        }
        if (result304.length < 3) {
            finalresult3rd.push(304)
        }
        if (result305.length < 3) {
            finalresult3rd.push(305)
        }

        res.json({ status: 'success', msg: finalresult3rd })
    } catch (err) {
        res.json({ status: 'error' })
    }

})
//================================================================

app.post('/fourthfloor', async (req, res) => {

    try {
        const data = await userLogin.find({});
        const finaldta = data.filter((stu) => stu.roomShare === 4);

        const result401 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 401) {
                result401.push(stu.roomNo);
            }

        }
        )

        const result402 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 402) {
                result402.push(stu.roomNo);
            }
        })

        const result403 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo === 403) {
                result403.push(stu.roomNo);
            }
        })

        finalresult4th = []
        if (result401.length < 4) {
            finalresult4th.push(401);
        }

        if (result402.length < 4) {
            finalresult4th.push(402);
        }
        if (result403.length < 4) {
            finalresult4th.push(403);
        }


        res.json({ status: 'success', msg: finalresult4th })

    } catch (err) {
        res.json({ status: 'error' })
    }

})
//================================================================

app.post('/fifthfloor', async (req, res) => {

    try {
        const data = await userLogin.find({});
        const finaldta = data.filter((stu) => stu.roomShare === 5);

        result501 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo == 501) {
                result501.push(501);
            }
        })
        result502 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo == 502) {
                result502.push(502);
            }
        })
        result503 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo == 503) {
                result503.push(503);
            }
        })

        result504 = []
        finaldta.map((stu, ind) => {
            if (stu.roomNo == 504) {
                result504.push(504);
            }
        })

        finalresult5th = []
        if (result501.length < 5) {
            finalresult5th.push(501)
        }
        if (result502.length < 5) {
            finalresult5th.push(502);
        }
        if (result503.length < 5) {
            finalresult5th.push(503);
        }
        if (result504.length < 5) {
            finalresult5th.push(504);
        }

        res.json({ status: 'success', msg: finalresult5th })



    } catch (err) {
        res.json({ status: 'error' })
    }

})
//=================================================================

app.post('/fee-history', async (req, res) => {
    try {
        const feeAlldata = await feePaid.find({})
        if (feeAlldata) {
            res.json({ status: 'success', msg: feeAlldata })
        }

    }
    catch (err) {
        res.json({ status: 'error', msg: err })
    }
})

//=================================================================
app.listen(1324, () => {
    console.log('server listening on port 1324');
});