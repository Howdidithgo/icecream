var flavors = ["Cookies and Cream", "Butter Brickle", "Blue Moon"];
$(document).ready(function(){
  $("#show").click(function(event){
    flavors.forEach(function(flavor){
        $("#icelist").prepend("<li>" + flavor + "</li>");
    });
    event.preventDefault();
  });
});
