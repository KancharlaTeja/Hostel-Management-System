const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kancharlateja1324@gmail.com',
        pass: 'lijzmlxicscvnwls',
    },
});

//=====================================================
const sendEmail = async (to, name, DueDate,amount) => {
    const subject = 'Payment Reminder.....!';
    const html = `
        <p>Dear <strong>${name}</strong>,</p>
        <p>This is a friendly reminder that your payment due date for the hostel fee has arrived.</p>
        <p><strong>Due Date:</strong> ${DueDate}</p>
        <p><strong>Amount Due:</strong> ${amount}</p>
        <p>Please make the payment at your earliest convenience to avoid any late fees or interruptions in your hostel services.</p>
        <p><strong>Payment Instructions:</strong></p>
        <ul>
            <li><strong>Bank Transfer(Ph pay/G pay) :</strong>  9182879089</li>
            <li><strong>UPI Payment:</strong>  1234567890@yxl</li>
        </ul>
        <p>If you have already made the payment, please disregard this message. For any questions or concerns, feel free to contact us.</p>
        <p>Thank you for your prompt attention to this matter.</p>
        <p><strong>Best regards</strong>,<br>
        Kancharla Vinay,<br>
        Hotel Manager,<br>
        Sri Venkateswara Mens PG Hostel,<br>
        9182896039.</p>
    `;

    try {
        await transporter.sendMail({
            from: '"Hostel Rent" <kancharlavinay1240@gmail.com>',
            to: to,
            subject: subject,
            html: html,
        });
        console.log('Email Sent Successfully');
    } catch (err) {
        console.log('Error sending mail', err);
    }
};
//======================================================
module.exports = { sendEmail };
