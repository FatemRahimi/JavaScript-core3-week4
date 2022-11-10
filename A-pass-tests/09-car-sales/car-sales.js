function sales(carsSold) {
    const totals = {};
    carsSold.forEach(carPrice => {
        if (totals[carPrice.make]) {
            totals[carPrice.make] += carPrice.price;
        } else {
            totals[carPrice.make] = carPrice.price;
        }
    })
    return totals;
      
}

module.exports = sales;
