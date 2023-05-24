import nodemailer from 'nodemailer';
import MailerLite from '@mailerlite/mailerlite-nodejs';
import moment from 'moment-jalaali';
export default async function handler(req, res) {
	const {name, lastName, email, phone, message, subject} = req.body?.data;
	const mailerlite = new MailerLite({
		api_key: process.env.MAILERLITE_API_KEY,
	});
	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		service: process.env.MAIL_SERVICE,
		tls: true,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD,
		},
	});
	const html = ` 
  <main style="background-color: #f4f4f4; font-family: Arial, sans-serif;">
  <table style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px;">
    <tr>
      <td style="padding: 20px;">
        <h1 style="font-size: 24px; margin-bottom: 10px;">name : ${name} ${lastName}</h1>
        <h2 style="font-size: 20px; margin-bottom: 10px;">subject : ${subject}</h2>
        <p style="font-size: 16px; line-height: 1.5;">message : ${message}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
      
        <p style="font-size: 16px; line-height: 1.5;">phone : ${phone}</p>
        <a href="#" style="display: inline-block; background-color: #0099ff; color: #fff; text-decoration: none; font-size: 16px; padding: 10px 20px; border-radius: 5px; margin-top: 20px;">email : ${email}</a>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; background-color: #f0f0f0; padding: 20px;">
        <p style="font-size: 12px; color: #888;">You are receiving this email because you subscribed to our newsletter. To unsubscribe, please click <a href="#" style="color: #888; text-decoration: underline;">here</a>.</p>
      </td>
    </tr>
  </table>
</main>
  `;
	try {
		// const persianDate = moment(new Date()).format('jYYYY/jM/jD HH:mm');
		mailerlite.subscribers
			.createOrUpdate({
				email: email,
				fields: {
					name: name,
					last_name: lastName,
					phone: phone,
					subject: subject,
				},
				status: 'active',
			})
			.then((response) => {
				return res.status(200).json({text: 'OK'});
			})
			.catch((error) => {
				throw new Error(error);
			});

		const transportMail = await transporter.sendMail({
			from: 'OmidHeidari info@heidariomid.com',
			to: email,
			subject: subject,
			html,
		});
		transporter.verify(function (error, success) {
			if (error) {
				return res.status(400).json({text: 'Not OK'});
			} else {
				console.log('Server is ready to take our messages', success);
				return res.status(200).json({text: 'OK'});
			}
		});
		return res.status(200).json({text: 'OK'});
	} catch (error) {
		console.log(error);
		return res.status(400).json({text: 'Not OK'});
	}
	res.status(200).json({name: 'form send'});
}
