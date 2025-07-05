function tampikanui(pisanggoreng) {
    const teks = document.getElementById("urnotalone");
    const gambar = document.getElementsByClassName("bg4");
    if (teks.style.display == "none") {
        teks.style.display = "block";
        gambar.style.display = "block"
    } else {
         teks.style.display = "none";
         gambar.style.display = "none"
    }

}