function tampikanui(pisanggoreng) {
    const teks = document.getElementById("urnotalone");
    
    teks.classList.remove("hidden");



    setTimeout(() => {
        teks.classList.add("hidden");
    }, 500)
}