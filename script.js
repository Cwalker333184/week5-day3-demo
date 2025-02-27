function generateEmail() {
    let email ={};
    email.name= prompt("Enter the recipient's name:");
    email.date= prompt("Enter the appointment date.");
    email.time= prompt("Enter the appointment time.");

    message.innerHTML= `Hello ${email.name}, This is a reminder for your appointment on
        ${email.date} at ${email.time}. Best regards, Your Appointment Service.`;
   
    document.body.style.backgroundColor="#2a9d8f";
        Header.style.color ="#ffffff";
        message.style.color = "#e9c46a";
        }
        
        generateEmailButton.onclick= generateEmail;

  