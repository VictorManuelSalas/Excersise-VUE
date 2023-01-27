//Creacion de la app en Vue
let app = Vue.createApp({
    //Aqui en el data se define variables y entre otras cosas
    data() {
        return {
            //Variable con un valor
            marca: 'VUE',
            product: 'Socks',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
            //img: './assets/socks white.jpg'
            inventory: 10,
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            data: [
                { id: 12, color: 'green', image: './assets/green socks.jpg' },
                { id: 13, color: 'white', image: './assets/socks white.jpg' },
            ],
            number: 0,
        }
    },
    methods: {
        addCar() {
            this.number += 1;
            if (this.number >= this.inventory) {
                this.inStock = false;
                this.number = this.inventory;
            }
        },
        removeCar() {
            if (this.number == 0) {
                this.number = 0;
            } else {
                this.number -= 1;
                this.inStock = true;
            }

        },
        updateImage(imgData) {
            this.image = imgData;
        }
    },
    computed: {
        title() {
            return this.marca + ' ' + this.product;
        }
    }
});


//Montando la app en una etiqutea mediante el id
app.mount('#app');