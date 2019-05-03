//not all callback functions are asynchronous

setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

//geoCode() does not return anything, JS implicitly returns unde
// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = { lat: 0, long: 0 };
//     return data;
//   }, 2000);
// };

// const data = geoCode("Home");
// console.log(data);

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = { lat: 0, long: 0 };
    callback(data);
  }, 2000);
};

geoCode("Home", data => {
  console.log(data);
});

const add = (a, b, c) => {
  const sum = a + b;
  c(sum);
};

add(1, 4, sum => {
  console.log(sum); // Should print: 5
});
