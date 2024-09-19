function getRating() {
    let x = document.forms["rate_form"]["rating"].value;
    if (x == "") {
        alert('Sorry! A response was not given!')
    }
    else {
        alert('THANK YOU! Your response has been recorded!')
    }
}