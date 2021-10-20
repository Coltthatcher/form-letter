$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#your-name").val();

    $(".your-name").text(nameInput);

    $("#story").show();  
    
  });
});
