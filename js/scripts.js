function ofAge(ageInput) {
  if (ageInput >= 18) {
    $('.over18').show();
  } else {
    $('.under18').show();
  }
};

$(document).ready(function() {
  
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const ageInput = parseInt($("input#age").val());
    $("#age").text(ageInput);
    console.log(ofAge(ageInput));
  })
});



