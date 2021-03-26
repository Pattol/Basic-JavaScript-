//form element events
document.getElementById("firstName").addEventListener("blur", function(){
    if(this.value !== ""){
        firstNameWarning.innerHTML = "";
    }
});

document.getElementById("lastName").addEventListener("blur", function(){
    if(this.value !== ""){
        lastNameWarning.innerHTML = "";
    }
});

document.getElementById("address1").addEventListener("blur", function(){
    if(this.value !== ""){
        address1Warning.innerHTML = "";
    }
});

document.getElementById("address2").addEventListener("blur", function(){
    if(this.value !== ""){
        address2Warning.innerHTML = "";
    }
});

document.getElementById("city").addEventListener("blur", function(){
    if(this.value !== ""){
        cityWarning.innerHTML = "";
    }
});

document.getElementById("province").addEventListener("click", function(){
    if(profile.value !== ""){
        provinceWarning.innerHTML = "";
    }
});

document.getElementById("country").addEventListener("click", function(){
    if(profile.value !== ""){
        countryWarning.innerHTML = "";
    }
});

document.profile.addEventListener("submit", validate.validating);
