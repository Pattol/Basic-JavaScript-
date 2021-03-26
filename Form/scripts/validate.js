//validate module
var validate = (function(){

  //create private and public functions/objects/variables to validate the form
  return{

    validating : function(e){
  
        e.preventDefault();
    
        var valid = true;
    
        if(profile.firstName.value === ""){
        document.getElementById('firstNameWarning').innerHTML="*Please enter a First Name*";
            valid = false;
        }
    
        if(profile.lastName.value == ""){
            document.getElementById('lastNameWarning').innerHTML="*Please enter a Last Name*";
            valid = false;
        }
    
        if(profile.address1.value == ""){
            document.getElementById('address1Warning').innerHTML="*Please enter your address*";
            valid = false;
        }
    
        if(profile.address2.value == ""){
            document.getElementById('address2Warning').innerHTML="*Please enter your address*";
            valid = false;
        }
    
        if(profile.city.value == ""){
            document.getElementById('cityWarning').innerHTML="*Please enter your City*";
            valid = false;
        }
    
        if(profile.province.value == ""){
            document.getElementById('provinceWarning').innerHTML="*Please choose your province*";
            valid = false;
        }
    
        if(profile.country.value == ""){
            document.getElementById('countryWarning').innerHTML="*Please choose your country*";
            valid = false;
        }
    
        if(valid){
            alert("THANK YOU !");
        }
    
        return valid;
    
        }
    }
  })();
