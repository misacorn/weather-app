//not all callback functions are asynchronous

setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

//geoCode() does not return anything, JS implicitly returns undefined
const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = { lat: 0, long: 0 };
    return data;
  }, 2000);
};

const data = geoCode("Home");
console.log(data);
