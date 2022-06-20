const sales = {
    Jio: 1142,
    Airtel: 1002,
    Vi: 910,
    Bsnl: 630,
    Vodafone: 500
};

console.log(Object.entries(sales));
function sumSales(obj) {
    let sum=0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    return sum;
}
function telecomSales(obj) {
    for (let [key, value] of Object.entries(obj)) {
        console.log('${key} had ${value} users');
    }
}

console.log(telecomSales(sales));
