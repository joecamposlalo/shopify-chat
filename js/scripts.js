let sendbutton = document.getElementById(sendbutton);

const form = document.getElementById(questions-form);

sendbutton.addEventListener('click',function(e){
    e.preventDefault();

    sendbutton.value = 'Sending...';

    const serviceID = 'service_r0xrjg4';
    const templateID = 'template_rmsn5na';
 
    emailjs.sendForm(serviceID, templateID, form)
     .then(() => {
       sendbutton.value = 'Send Email';
       alert('Sent!');
     }, (err) => {
       sendbutton.value = 'Send Email';
       alert(JSON.stringify(err));
     });
})

