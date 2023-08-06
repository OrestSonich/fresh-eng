import emailjs from '@emailjs/browser'


export function sendFeedback(senderName, senderEmail, subject, message) {

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const FEEDBACK_RECEIVE_TEMPLATE = process.env.REACT_APP_EMAILJS_FEEDBACK_RECIVE_TEMPLATE
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    const THANKS_FOR_FEEDBACK_TEMPLATE = process.env.REACT_APP_EMAILJS_THANKS_FOR_FEEDBACK_TEMPLATE

    emailjs.send(SERVICE_ID,
                 FEEDBACK_RECEIVE_TEMPLATE,
                 {
                     sender_name: senderName,
                     sender_email: senderEmail,
                     subject: subject,
                     message: message
                 },
                 PUBLIC_KEY)

    emailjs.send(SERVICE_ID,
                 THANKS_FOR_FEEDBACK_TEMPLATE,
                 {
                     sender_name: senderName,
                     sender_email: senderEmail,
                 },
                 PUBLIC_KEY)
}