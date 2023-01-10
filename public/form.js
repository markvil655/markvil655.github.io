
function function1() {
  // Get the form element
  var form = document.getElementById('form');
  // Get the username element
  var Name = form.elements.Name;
  // Check if the username is empty
  if (Name.value === '') {
    // If the username is empty, prevent form submission
    event.preventDefault();
    // Optionally, you can display an error message or highlight the empty field  
    Name.style.borderColor = 'red';
    return false;
  }
  event.preventDefault();
  console.log("Name field is empty. Form submission prevented.");
  window.location.href = 'hicrush.html'
  // If all form fields are filled in, allow form submission
  return true;
}
function Mail() {
  if (document.getElementById("Name", "Email").value == "") {
    event.preventDefault();
    Name.style.borderColor = 'red';
    Email.style.borderColor = 'red';
    document.getElementById("id").style.color = "red";
    
  } else {
    event.preventDefault();
    button2.style.display = "block";
    // event listener for button 1 click
    button1.addEventListener("click", Mail);
    button1.style.display = 'none';
  }
  
  if (document.getElementById("Name", "Email").value == "") {
    event.preventDefault();
  }
  else {
    var params = {
      from_name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,

    };
    const serviceID = "service_2w5savg";
    const templateID = "template_gb5cnmq";

    emailjs.send(serviceID, templateID, params).then((res) => {
      document.getElementById("Name").value = "";
      document.getElementById("Email").value = "";

      event.preventDefault();
      
      console.log(res);
      
    })
  }
} 
        
 
        
    
