const celulares = [
    {
        id:'1',
        name:'Iphone 13',
        price:54,
        category:'celular',
        stock:5,
        descripcion:'Descripcion del Iphone 13',
        img:'https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png'
    },
    {
        id:'2',
        name:'Iphone 12',
        price:54,
        category:'celular',
        stock:2,
        descripcion:'Descripcion del Iphone 12',
        img:'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg'
    },
    {
        id:'3',
        name:'Iphone 10',
        price:322,
        category:'celular',
        stock:10,
        descripcion:'Descripcion del Iphone 10',
        img:'https://tienda.claro.com.ar/wcsstore/Claro/images/catalog/productos/646x1000/70007364_3.jpg'
    },
    {
        id:'4',
        name:'Ipad Pro',
        price:3433,
        category:'tablet',
        stock:4,
        descripcion:'Descripcion del Iphone Pro',
        img:'https://www.macstation.com.ar/img/productos/2699-1.jpg'
    },
    {
        id:'5',
        name:'Ipad Mini',
        price:785,
        category:'tablet',
        stock:2,
        descripcion:'Descripcion del Iphone Mini',
        img:'https://www.macstation.com.ar/img/productos/2896-2.jpg'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(celulares)
        }, 500)
    })
}

export const getProductosById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(celulares.find(cel =>{
                return cel.id === id
            }))
        }, 500)
    })
}

export const getProductosByCategory = (cat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(celulares.filter(cel =>{
                return cel.category === cat
            }))
        }, 500)
    })
}