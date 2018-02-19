
$("#eye").mouseenter(
  function () {
    $("#left_eye").removeClass("show_eye").addClass("hide_eye");
   	$("#name").html("Kim");
  }
);


$("#eye").mouseleave(
  function () {
    $("#left_eye").removeClass("hide_eye").addClass("show_eye");
    $("#name").html("Tom");
  }
);


$("#mouth").mouseenter(
  function () {
    $("#openMouth").removeClass("open_mouth").addClass("close_mouth");
    $("#closedMouth").removeClass("closedMouth").addClass("smirk");
  }
);


$("#mouth").mouseleave(
  function () {
    $("#openMouth").removeClass("close_mouth").addClass("open_mouth");
    $("#closedMouth").removeClass("smirk").addClass("closedMouth");
  }
);
