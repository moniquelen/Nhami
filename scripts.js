var products = [
        {
            "photo": "img/tacos.png",
            "name": "Tacos",
            "price": 16.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/hotdog.png",
            "name": "Cachorro Quente",
            "price": 15.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/sandwich.png",
            "name": "Sanduíche",
            "price": 9.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/chocolate-cake.png",
            "name": "Bolo de Chocolate",
            "price": 7.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/strawberry-cake.png",
            "name": "Bolo de Morango",
            "price": 7.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/chocolate-pie.png",
            "name": "Torta de Chocolate",
            "price": 9.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/bubble-tea.png",
            "name": "Bubble Tea",
            "price": 12.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/soda.png",
            "name": "Refrigerante",
            "price": 7.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/coffee.png",
            "name": "Café",
            "price": 14.99,
            "active": false,
            "quantity": 1
        }
];

const SelfServiceMachine = {
    data() {
        return {
            products: window.products,
            orderTotal: 0,
            showPopup: false
        }
    },
    methods: {
        toggleActive: function(item){
            item.active = !item.active;
        },
        total: function(){
            var total = 0;
            this.products.forEach(function(item){
                if (item.active){
                    total+= item.price * item.quantity;
                }
            });
           return total.toFixed(2);
        },
        finishOrder() {
            const selectedProducts = this.products.filter(p => p.active);
            const order = {
                items: selectedProducts.map(p => ({
                    name: p.name,
                    quantity: p.quantity,
                    total: (p.quantity * p.price).toFixed(2)
                })),
                total: this.total()
            };
            
            localStorage.setItem('lastOrder', JSON.stringify(order));
            
            this.showPopup = true;

            this.products.forEach(product => {
                product.active = false;
                product.quantity = 1;
            });
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');
