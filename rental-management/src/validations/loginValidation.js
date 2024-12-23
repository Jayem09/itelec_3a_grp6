function validation(values) {
    let error = {};
  
    const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  
    if (values.username === "") {
      error.username = "Username should not be empty";
    } else if (!usernamePattern.test(values.username)) {
      error.username = "Username doesn't match ";
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
      error.password = "Password doesn't match ";
    }
  
    return error;
  }
  
  export default validation;