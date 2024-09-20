document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const carsContainer = document.getElementById("carsContainer");

    searchBar.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const carItems = carsContainer.getElementsByClassName("car-item");

        Array.from(carItems).forEach(car => {

            console.log("1", searchTerm);

            const carName = car.getAttribute("data-car-name").toLowerCase();
            if(searchTerm?.length){
                if(carName.includes(searchTerm)){
                    car.style.display = "block";
                }else{
                    car.style.display = "none";
                }
            }else{
                car.style.display = "block"
            }
        })
    })
});