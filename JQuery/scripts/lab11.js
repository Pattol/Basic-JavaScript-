$(document).ready(function( ) {

    $("h1").text("lab11")
    $("#header").html("<h3>Working with jQuery</h3>")
    $(":button").each(function() {
        $(this).addClass("btn-background");
    });

    $("buttons").addClass("red-border")
    $("p").each(function() {
        $(this).addClass("blue");
    });

    $("#first").on("click", function() {
      $("#paragraphs p:first").addClass("green-border");
    });

    $("#last").on("click", function() {
      $("#paragraphs p:last").addClass("orange-border");
    });

    $("#prev").on("click", function() {
      $("#para3").prev().addClass("purple-border");
    });

    $("#next").on("click", function() {
      $("#para2").next().addClass("yellow-border");
    });

    $("#remove").on("click", function() {
      $("#footer").remove();
    });
});
