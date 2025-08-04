console.log("Loading header script...");
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded. Fetching header....");

    fetch("/Maxs-Website/header.html")
    .then(response => response.text())
    .then(data => {
        console.log("Header fetched:", data);
        document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("Header fetch failed:",err ));
});