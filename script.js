
$("#to-do-form").on("submit", function (e) {
  e.preventDefault();
  var task = $("#to-do-input").val()
  if (task.trim() !== "") {
    $("#to-dos").append(`<li>${task}</li>`)
  }
})
$("#to-dos").on("click", "li", function () {
  if ($(this).hasClass("line-through")) {
    $(this).removeClass("line-through")
  } else {
    $(this).addClass("line-through")
  }
})
