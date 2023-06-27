// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// Start Support for contact us .... 

// ================ EMAIL js ================
// get the form by id ... 
const contactSupportForm = document.getElementById("contact-support"),
    // get the Name by id ... 
    contactSupportName = document.getElementById('name-support'),
    // get the E-mail by id ... 
    contactSupportEmail = document.getElementById('email-support'),
    // get the Mess by id ... 
    contactSupportMess = document.getElementById('mess-support'),
    // get the Mess [Error] or [Success] by id ... 
    contSupMess = document.getElementById('contsup-mess'),
    // get the Mess [Error] or [Success] by id ... 
    btnSupport = document.getElementById('sub-mess-supp');

// ------------------------------------------------------------
    const sendEmailSupport = (e) => 
    {
        e.preventDefault()
        // check if the filed has a value 
        if (contactSupportName.value === '' ||  contactSupportEmail.value === ''  || contactSupportMess.value === '')
        {
            // Add and Remove color  ... 
            contSupMess.classList.remove('color-green-support');
            contSupMess.classList.add('color-red-support');

            // show Message ... 
            contSupMess.textContent = 'Please Write All The Input Fields 📩';
        }else
        {
            // serviceID , // TemplateID // #form // publickey ... 
            emailjs.sendForm ('service_nzjr3cf','template_y4cu94m','#contact-support','DOnROrqWXD7Weut94')
            .then(()=> 
            {
                 // show message and add color ....
                 contSupMess.classList.add('color-green-support');
                 contSupMess.textContent = 'Message Sent ☑️';

                 // remove message after 5 seconds ...
                 setTimeout(() =>{
                    contSupMess.textContent = '';
                 },5000)

            },(error)=>{
               alert("OOPS~ SOMETHING HAS FAILED...!" , error)
            })

           //  clear input filed ...
           contactSupportName.value = '';
           contactSupportEmail.value = '';
           contactSupportMess.value = '';

        }
   }
     
    // Start Event .... 
    contactSupportForm.addEventListener('submit',sendEmailSupport);
    // End   Event .... 
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// End   Support for contact us .... 
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------