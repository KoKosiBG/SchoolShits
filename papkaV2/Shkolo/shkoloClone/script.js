document.getElementById("eye").addEventListener("click", function(){
    if (document.getElementById("passwordField").type === "password") {
        document.getElementById("passwordField").type = "text";
    }
    else{
        document.getElementById("passwordField").type = "password";
    }
});
