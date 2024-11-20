let input = document.getElementById("password")
let icon = document.getElementById("icon")

function showHide() {
    if(input.type === "password"){
        input.type = "text"
        icon.classList.add("fa-eye")
        icon.classList.remove("fa-eye-slash")
    }else{
        input.type = "password"
        icon.classList.add("fa-eye-slash")
        icon.classList.remove("fa-eye")
    }
}