import { send, init } from "emailjs-com";

const serviceId = "service_tqf6wk6";
const templateId = "template_2fyw1fk";
const userID = "JCJZF4naygv0qN4VN";

const sendEmail = (content) => {
    init(userID);
    const toSend = {
        name: "Allwyn Dsouza",
        email: "allwyn.dsouza80@gmail.com",
        phone: "12345",
        appeal: "mail working",
        ip: '1234567890'
    };
    // send(serviceId, templateId, toSend)
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

};

export default { sendEmail };