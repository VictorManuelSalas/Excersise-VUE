//Creacion de la app en Vue
let app = Vue.createApp({
    //Aqui en el data se define variables y entre otras cosas
    data() {
        return {
            //Variable con un valor
            marca: 'VUE',
            product: 'Socks',
            selectedVariant: 0,
            //img: './assets/socks white.jpg'
            //inventory: 10,
            //inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            data: [
                { id: 12, color: 'green', image: './assets/green socks.jpg', quantity: 10 },
                { id: 13, color: 'white', image: './assets/socks white.jpg', quantity: 0 },
            ],
            number: 0,
            name: '',
            review: '',
            rating: null,
            reviews: [],
            local: [],
        }
    },
    created() {
        if (JSON.parse(localStorage.getItem('reviews')) == null) {
            
        }else{
            let registros = JSON.parse(localStorage.getItem('reviews'));
            this.reviews.push(registros);
            console.log('Info obtenida primero', this.reviews);
        }

    },
    methods: {
        addCar() {
            this.number += 1;
            if (this.number >= this.data[this.selectedVariant].quantity) {
                this.inStock = false;
                this.number = this.data[this.selectedVariant].quantity;
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
        updateVariant(index) {
            this.selectedVariant = index;
        },
        onSubmit() {

            let day = Date.now();
            let now = new Date(day);

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                date: now.toDateString(),
            }
            this.local.push(productReview);
            localStorage.setItem('reviews', JSON.stringify(this.local));
            console.log('Info del local arreglo', this.local);

            let registros = JSON.parse(localStorage.getItem('reviews'));
            this.reviews.push(registros);
            console.log('Info del arreglo final', this.reviews);
        }
    },
    computed: {
        title() {
            return this.marca + ' ' + this.product;
        },
        image() {
            return this.data[this.selectedVariant].image;

        },
        inStock() {
            return this.data[this.selectedVariant].quantity;
        }
    }
});



//Montando la app en una etiqutea mediante el id
app.mount('#app');