const isAdmin = true;
const isStudent = false;
let message;

if (isAdmin === true) {
  message = "Welcome admin";
} else if (isStudent === true) {
    message = "Welcome student";
  }else{
    message = "Access denied";
  }