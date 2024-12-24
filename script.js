
document.getElementById("showMore").addEventListener("click", function() {
    const extraDoramas = document.getElementById("extraDoramas");
    if (extraDoramas.style.display === "none" || extraDoramas.style.display === "") {
        extraDoramas.style.display = "block";
        this.textContent = "Ocultar K-dramas 🫣";
    } else {
        extraDoramas.style.display = "none";
        this.textContent = "Mostrar mas K-dramas 😳";
    }
});

document.getElementById("showMoreCdramas").addEventListener("click", function () {
    const extraCdramas = document.getElementById("extraCdramas");
    if (extraCdramas.style.display === "none" || extraCdramas.style.display === "") {
        extraCdramas.style.display = "block";
        this.textContent = "Ocultar C-dramas 🫣";
    } else {
        extraCdramas.style.display = "none";
        this.textContent = "Mostrar más C-dramas 😳";
    }
});

document.getElementById("showMoreDoramas").addEventListener("click", function () {
    const extraJdoramas = document.getElementById("extraJdoramas");
    if (extraJdoramas.style.display === "none" || extraJdoramas.style.display === "") {
        extraJdoramas.style.display = "block";
        this.textContent = "Ocultar Doramas 🫣";
    } else {
        extraJdoramas.style.display = "none";
        this.textContent = "Mostrar más Doramas 😳";
    }
});



document.getElementById("logoutButton").addEventListener("click", function() {
    // Redirigir a la página de login
    window.location.href = "login.html";
});


document.getElementById("show-doramas-btn").addEventListener("click", function() {
    let doramasList = document.getElementById("doramas-list");

    // Limitar la cantidad de doramas para agregar cada vez
    for (let i = doramasList.children.length; i < doramas.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = doramas[i];
        doramasList.appendChild(listItem);
    }
});