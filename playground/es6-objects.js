const product = {
  label: "Red notebook",
  price: "€30",
  stock: 30
};

// const { label: productLabel, price, rating = "4/5" } = product;
// console.log(productLabel);
// console.log(price);
// console.log(rating);

const transaction = (type, { label = "anonymous", price = 0 } = {}) => {
  console.log(type + " " + label + " at the price of " + price);
};

transaction("Order", product);
transaction("Order");
