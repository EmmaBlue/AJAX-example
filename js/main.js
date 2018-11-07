(() => {

    //grab the car buttons
    //const cars = document.querySelectorAll('.data-ref');

    const vm = new Vue({

        el : "#app",
        data : {

        },
        methods: {

            getData(e) {
                debugger;
                //this.id gives you id of car that you've clicked on 
                let targetURL = `./includes/connect.php?modelNo=${e.currentTarget.id}`;
                fetch(targetURL)
                 //convert it into object
                .then (res => res.json())
                //pass it to start of the dataset
                .then (data => {
                    
                    console.log(data);
                    //parseCarData(data[0]);
                })
                //show error message in case of error
                .catch(function(error) {

                    console.log(error);
                });
        
            }

        }

    });



    function parseCarData(data) {
        //destructure the database info and grab just what we need 
        const {modelName, pricing, modelDetails} = car
        //take the database data and put it on the page 
        document.querySelector(".modelName").textContent = modelName;
        document.querySelector(".priceInfo").textContent = pricing;
        document.querySelector(".modelDetails").textContent = modelDetails;


    };
    //cars.forEach(carX => carX.addEventListener("click", fetchData))
    
    //fetchData();

})();