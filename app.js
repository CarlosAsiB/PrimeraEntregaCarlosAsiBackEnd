class ProductManager {
    constructor() {
        this.products = [];
        this.lastId = 0;
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        if (this.products.some(product => product.code === code)) {
            throw new Error("El código del producto ya existe.");
        }

        const newProduct = {
            id: ++this.lastId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error("Producto no encontrado.");
        }
        return product;
    }
}

// Uso de la clase
const manager = new ProductManager();

console.log(manager.getProducts()); // Debe devolver []

manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
});

console.log(manager.getProducts()); // Debe mostrar el producto agregado

// Este debería lanzar un error porque el código del producto ya existe
try {
    manager.addProduct({
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    });
} catch (error) {
    console.error(error.message);
}

// Prueba de getProductById
try {
    console.log(manager.getProductById(1)); // Debe devolver el producto
    console.log(manager.getProductById(999)); // Debe lanzar un error
} catch (error) {
    console.error(error.message);
}
