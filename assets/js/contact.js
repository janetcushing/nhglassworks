

//----------------------//
// main processing
//----------------------//
$(document).ready(function () {

    $('#submit').on('click', function (event) {
        event.preventDefault();
        const name = $('#nameInput').val();
        const email = $('#emailInput').val();
        const message = $('#comment').val();
        const emailToSend = ('mailto:janet.cushing@gmail.com?subject=Hello from ' + name + ' (' + email + ')' + '&body=' + message);
        $('#nameInput').val("");
        $('#emailInput').val("");
        $('#comment').val("");
        window.location.href = emailToSend;   
    });
});