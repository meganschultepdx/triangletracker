s(document).ready(function() {
  $("#formOne").submit(function(event) {
    var side1 = parseInt($("side1")).val();
    var side2 = parseInt($("side2")).val();
    var side3 = ($("side3")).val();

  if (side1 === side2 && side2  === side3 && side3 ==== side1) {
    $("equilateral").show();
    $("#not, #scalene, #isosceles ").hide();
  } else if (side1 === side2 && side2 ! side3) {
    $("isosceles").show();
    $("#not, #scalene, #equilateral").hide();
  } else if (side1 === side3 && side3 ! side2) {
    $("isosceles").show();
    $("#not, #scalene, #equilateral").hide();
  } else if (side2 === side3 && side3 ! side1) {
    $("isosceles").show();
    $("#not, #scalene, #equilateral").hide();
  } else if (side1 ! side2 && side2 ! side3) {
    $("scalene").show();
    $("#not, #isosceles, #equilateral").hide();
  } else if (side1 ! side3 && side3 ! side2) {
    $("scalene").show();
    $("#not, #isosceles, #equilateral").hide();
  }

  event.preventDefault();

  });
});
