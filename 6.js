/* 1/ You are developin2 a form validation system. Write a pro2ram that takes user information(such as name,
email, a2e) and uses the typeof operator to check the data type of each input. Print appropriate messa2es
like "Name should be a strin2," "Email should be a strin2," or "02e should be a number." if any field is not
proper. */

function validation(name, email, age) {
    if (typeof name != 'string') console.log("Name should be a string");
    if (typeof email != 'string') console.log("Email should be a string");
    if (typeof age != 'number') console.log("Age should be a number");
}

let name = "Mithun";
let email = "mithun.@pw.live";
let age = 21;

validation(name, email, age);
