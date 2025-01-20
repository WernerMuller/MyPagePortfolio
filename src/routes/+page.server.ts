import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server.js';


export const actions = {
	send: async ({ cookies, request }) => {
        
		try {
            
			const data = await request.formData();
			const email = data.get('email');
			const subject = data.get('subject');
			const body = data.get('mensaje');
			
			let html = `<h2>Hi!</h2><pre> soy ${email} ${body}</pre>`;

			const message = {
				from: GOOGLE_EMAIL,
				to: "werner_muller54@hotmail.com",
				bcc: email,
				subject: subject,
				text: body,
				html: html
			};

			const sendEmail = async (message:any) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);

			return {
				success: 'Email is sent'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
