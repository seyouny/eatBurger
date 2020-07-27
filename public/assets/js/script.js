// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat_burger").on("click", function(event) {
      var id = $(this).data("id");
      var eat = $(this).data("eat");
  
      var burgerState = {
        devoured: eat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerState
      }).then(
        function() {
          console.log("ate burger", eat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        sleepy: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: eat
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  