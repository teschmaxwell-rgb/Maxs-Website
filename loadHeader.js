document.addEventListener("DOMContentLoaded", () => {
    fetch("/Maxs-Header/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
})