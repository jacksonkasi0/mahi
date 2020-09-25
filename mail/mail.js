    function send(event) {
        event.preventDefault();           
        Email.send({
          name:document.getElementById('name').value,  

          SecureToken :"186a794f-bae5-4561-ab7d-006c87045bb7",  
          


          Host : "smtp.gmail.com",
          Username : "mahebuddy952@gmail.com",
          Password : "Mahe@123",
          To : "mahebuddy952@gmail.com",
          From : document.getElementById('email').value,
          Subject : document.getElementById('subject').value,
          Body : document.getElementById('message').value
          }).then(function(response){ 
           if (response == 'OK') {              
               alert("𝑀𝒶𝒾𝓁 𝓈𝑒𝓃𝓉 𝓈𝓊𝒸𝒸𝑒𝑒𝓈𝓈𝒻𝓊𝓁𝓁𝓎 ")
               ;
            } else {
                throw new Error("Error: " + response.statusText);
            } 
         });
 



    }    
