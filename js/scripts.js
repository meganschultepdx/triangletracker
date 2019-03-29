$(document).ready(function() {
  $("#quizform").submit(function(event) {

    var side1 = parseInt($("#side1")).val();
    var side2 = parseInt($("#side2")).val();
    var side3 = parseInt($("#side3")).val();

  if (side1 === side2 && side2 === side3) {
    $("#equilateral").show();
    $("#scalene, #isosceles").hide();

  } else if (side1 === side2 && side2 != side3 || side1 === side3 && side3 != side2 || side2 === side3 && side3 != side1) {
    $("#isosceles").show();
    $("#scalene, #equilateral").hide();
  // } else if (side1 === side3 && side3 != side2) {
  //   $("#isosceles").show();
  //   $("#scalene, #equilateral").hide();
  // } else if (side2 === side3 && side3 != side1) {
  //   $("#isosceles").show();
  //   $("#scalene, #equilateral").hide();
  } else if (side1 != side2 && side2 != side3 || side1 != side3 && side3 != side2) {
    $("#scalene").show();
    $("#isosceles, #equilateral").hide();
  }
  // } else if (side1 != side3 && side3 != side2) {
  //   $("#scalene").show();
  //   $("#isosceles, #equilateral").hide();
  // }

  event.preventDefault();

  });
});
