function ofAge(ageInput) {
  if (ageInput >= 18) {
    $('.over18').show();
    $('.under18').hide();
  } else {
    $('.under18').show();
    $('.over18').hide();
  }
};

$(document).ready(function() {
  
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const ageInput = parseInt($("input#age").val());
    $("#age").text(ageInput);
    ofAge(ageInput);
  })
});



