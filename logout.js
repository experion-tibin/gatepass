function logout() {

    //console.log(token);
    //console.log(usertype);

    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('usertype');
    localStorage.clear();
    window.location = "l.html";
}