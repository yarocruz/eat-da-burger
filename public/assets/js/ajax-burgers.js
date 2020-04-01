$(document).on("click", '.devour', function (event) {
    let id = $(this).data("id");
    console.log(event.target);

    // Send the PUT request.
    $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT",
        data: true
    }).then(() => {
        console.log("burger was devoured");
        // Reload the page to get the updated list
        location.reload();
    }
    );
})

$(document).on("submit", '.add-burger', function (event) {

    event.preventDefault();

    let newBurger = {
        burger_name: $('.form-control').val().trim()
    }
    //console.log(newBurger);
    //Send the POST request.
    $.ajax({
        url: "/api/burgers/",
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("burger was added");
        // Reload the page to get the updated list
        location.reload();
    }
    );
})
