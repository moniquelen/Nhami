var products = [
        {
            "photo": "img/tacos.png",
            "name": "Tacos",
            "price": 5.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/hotdog.png",
            "name": "Cachorro Quente",
            "price": 4.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/sandwich.png",
            "name": "Sanduíche",
            "price": 2.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/chocolate-cake.png",
            "name": "Bolo de Chocolate",
            "price": 2.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/strawberry-cake.png",
            "name": "Bolo de Morango",
            "price": 3.49,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/chocolate-pie.png",
            "name": "Torta de Chocolate",
            "price": 2.79,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/bubble-tea.png",
            "name": "Bubble Tea",
            "price": 1.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/soda.png",
            "name": "Refrigerante",
            "price": 1.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/coffee.png",
            "name": "Café",
            "price": 1.49,
            "active": false,
            "quantity": 1
        }
];

const SelfServiceMachine = {
    data() {
        return {
            products: window.products,
            orderTotal: 0
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
            alert("Pedido finalizado com sucesso!");
            this.products.forEach(product => {
                product.active = false;
                product.quantity = 1;
            });
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');
