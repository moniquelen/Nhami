var products = [
    { "photo": "media/img/products/tacos.png", "name": "Tacos", "price": 16.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/hotdog.png", "name": "Cachorro Quente", "price": 15.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/sandwich.png", "name": "Sanduíche", "price": 9.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/chocolate-cake.png", "name": "Bolo de Chocolate", "price": 7.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/strawberry-cake.png", "name": "Bolo de Morango", "price": 7.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/chocolate-pie.png", "name": "Torta de Chocolate", "price": 9.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/bubble-tea.png", "name": "Bubble Tea", "price": 12.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/soda.png", "name": "Refrigerante", "price": 7.99, "active": false, "quantity": 1 },
    { "photo": "media/img/products/coffee.png", "name": "Café", "price": 14.99, "active": false, "quantity": 1 }
];

const SelfServiceMachine = {
    data() {
        return {
            products: products.map(p => ({ ...p })),
            showSummary: false,
            showPopup: false
        }
    },
    methods: {
        toggleActive(item) {
            item.active = !item.active;
            this.showSummary = this.products.some(p => p.active);
        },
        total() {
            let total = 0;
            this.products.forEach(item => {
                if (item.active) {
                    total += item.price * item.quantity;
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
        },
        closePopup() {
            this.showPopup = false;
            this.products.forEach(product => {
                product.active = false;
                product.quantity = 1;
            });

            this.showSummary = false;
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');
