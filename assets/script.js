var time9 = parseInt($("#9").attr("data-value"));
var time10 = parseInt($("#10").attr("data-value"));
var time11 = parseInt($("#11").attr("data-value"));
var time12 = parseInt($("#12").attr("data-value"));
var time13 = parseInt($("#13").attr("data-value"));
var time14 = parseInt($("#14").attr("data-value"));
var time15 = parseInt($("#15").attr("data-value"));
var time16 = parseInt($("#16").attr("data-value"));
var time17 = parseInt($("#17").attr("data-value"));

$(".saveBtn").on("click", function () {
    localStorage.setItem("time9", $("#input9").val());
    localStorage.setItem("time10", $("#input10").val());
    localStorage.setItem("time11", $("#input11").val());
    localStorage.setItem("time12", $("#input12").val());
    localStorage.setItem("time13", $("#input13").val());
    localStorage.setItem("time14", $("#input14").val());
    localStorage.setItem("time15", $("#input15").val());
    localStorage.setItem("time16", $("#input16").val());
    localStorage.setItem("time17", $("#input17").val());
  });