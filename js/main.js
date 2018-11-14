(() => {

    //grab the car buttons
    //const cars = document.querySelectorAll('.data-ref');

    const vm = new Vue({

        el : "#app",
        data : {
            modelName: '', 
            modelPrice: '', 
            modelDetails: '', 
        },

        mounted : function() {
            // listen for when Vue is done building itself 
            console.log('mounted');

            //debugger

            this.addPreloader(document.querySelector('.modelInfo'));

             //get the data for the first car
             document.querySelector("F55").click();

    
        },
    
        updated : function() {
            // listen for when Vue icompletes its render cycle
            console.log('updated');

            //remove the proloader after the page updates

            let preloader = document.querySelector('.preloader-wrapper');

            setTimeout(function(){

                preloader.classList.add('hidden');
                document.body.appendChild('.preloader');

            }, 3000)

    
        },
        methods: {

            addPreloader(parentEl) {

                parentEl.appendChild(document.querySelector('.preloader-wrapper'));

                bodymovin.loadAnimation({
                    wrapper: document.querySelector('.preloader'),
                    animType: 'svg', 
                    loop: true,
                    path: './data/search.json'


                });
            },

            getData(e) {
                //this.id gives you id of car that you've clicked on 
                let targetURL = `./includes/connect.php?modelNo=${e.currentTarget.id}`;
                fetch(targetURL)
                 //convert it into object
                .then (res => res.json())
                //pass it to start of the dataset
                .then (data => {
                    
                    console.log(data);
                    this.showCarData(data[0]);
                })
                //show error message in case of error
                .catch(function(error) {

                    console.log(error);
                });
        
            },

            showCarData(data) {

                this.carModel = data.modelName;
                this.carDescription = data.modelDetails;
                this.carPricing = data.pricing;
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