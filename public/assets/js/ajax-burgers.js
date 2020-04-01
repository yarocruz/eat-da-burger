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

$(document).on("click", '#burger-btn', function (event) {
    let newBurger = {
        name: $('.form-control').val().trim()
    }

    //Send the PUT request.
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

