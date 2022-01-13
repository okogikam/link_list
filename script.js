function saveuser(name, email, password, page) {
  let dataUser = {
    name: name,
    email: email,
    password: password,
    page: page,
  };
  let savedData = JSON.parse(localStorage.getItem("user"));
  let userJSON = [];
  if (savedData != null) {
    for (let x = 0; x < savedData.length; x++) {
      userJSON.push(savedData[x]);
    }
    userJSON.push(dataUser);
    let newData = JSON.stringify(userJSON);
    localStorage.setItem("user", newData);
  } else {
    userJSON.push(dataUser);
    let newData = JSON.stringify(userJSON);
    localStorage.setItem("user", newData);
  }
}
function cekSama(pass1, pass2) {
  if (pass1 == pass2) {
    return true;
  } else {
    return false;
  }
}
function deleteData() {
  localStorage.removeItem("user");
}
