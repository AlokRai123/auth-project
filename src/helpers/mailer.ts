import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer'

export const sendEmail = async({email,emailType,userId} : any) =>{
    try {

      const hashedToken = await bcryptjs.hash(userId.toString(),10)

        if(emailType === "VERIFY"){
          await User.findByIdAndUpdate(userId,{verifyToken : hashedToken,verifyTokenExpiry: Date.now() + 3600000})
        }else if(emailType === "resend"){
          await User.findByIdAndUpdate(userId,{forgetPasswordToken : hashedToken,forgetPasswordTokenExpiry: Date.now() + 3600000})
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 5871,
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });


           const mailOptions = {

                from: 'hitesh@hitesh.ai',
                to: email,
                subject: emailType === 'VERIFY' ? "verify your email" : "Reset your password",

                html: "<b>Hello world?</b>",
           }

           const mailResponse = await transporter.sendMail(mailOptions)

           return mailResponse

    } catch (error:any) {
        throw new Error(error.message)
    }
}