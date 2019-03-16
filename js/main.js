const req = new XMLHttpRequest();
function getImage(containerId) {
    const container = document.getElementById(containerId);
    const p = document.createElement("p");
    const img = document.createElement("img");
    p.innerText = "Please wait while the Image Loads";
    console.log("Req");
    req.open("GET", "https://dog.ceo/api/breeds/image/random");
    req.setRequestHeader("Accept", "application/json");
    req.send();
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            const parsed = JSON.parse(req.response);
            container.removeChild(container.firstChild);
            img.setAttribute("src", parsed.message);
            container.appendChild(img);
        } else {
            container.removeChild(container.firstChild);
            container.appendChild(p);
        }
    };
}