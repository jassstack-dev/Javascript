// Q3 – Product Search Engine

const products = [
    { id: 1, name: "iPhone 15", price: 70000, category: "mobile" },
    { id: 2, name: "Samsung Galaxy", price: 50000, category: "mobile" },
    { id: 3, name: "OnePlus 12", price: 60000, category: "mobile" },
    { id: 4, name: "iPhone 14", price: 55000, category: "mobile" },
    { id: 5, name: "Google Pixel", price: 65000, category: "mobile" },
    { id: 6, name: "MacBook Pro", price: 150000, category: "laptop" },
    { id: 7, name: "Dell Laptop", price: 80000, category: "laptop" },
];

// Q1. Search by name

function searchProduct(searchItem){
    const searchByName = products.filter((item)=>{
        return item.name === searchItem
    })

    return {
        searchByName
    }
}
// console.log(searchProduct('MacBook Pro'))

// Q2. Case-insensitive search

function searchProduct(searchItem){
    const searchByName = products.filter((item)=>{
        return (item.name).toLocaleLowerCase() === searchItem
    })

    return {
        searchByName
    }
}

// console.log(searchProduct('macbook pro'))



// Partial matching + empty --> empty pr saare products  

function searchProduct(searchItem){
    const searchByName = products.filter((item)=>{
        return (item.name).toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    })

    if(searchItem === ""){
        return products
    }

    if (searchByName.length === 0) {
    return "No product found";
}


    return {
        searchByName
    }
}

console.log(searchProduct('i'))


