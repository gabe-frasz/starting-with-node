// import url from "url";

const myURL = new URL("https://encestudio.com:3000/about.html?submitted=true");

// *  serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// *  host (root domain with PORT)
console.log(myURL.host);

// *  hostname (without PORT)
console.log(myURL.hostname);

// *  pathname
console.log(myURL.pathname);

// *  serialized query
console.log(myURL.search);

// *  search params object
console.log(myURL.searchParams);

// *  add param
myURL.searchParams.append("test", "testing");
console.log(myURL.searchParams);

// *  loop through params
myURL.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));
