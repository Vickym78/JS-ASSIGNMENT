/* You are building a simple login system+ Implement the login feature that has two variables: username and
password+ You should -he-k if the username is "admin" and the password is "12345"+ If both -onditions are
true, print "Login su--essful"W otherwise, print "Invalid -redentials"+ */

var username ="admin"
var password ="12345"

if(username == 'admin'){
        if(password == "12345") console.log("login successful");
        else console.log('wrong password');
}
else console.log("Invalid Username");