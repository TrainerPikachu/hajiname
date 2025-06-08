function generate(name) {
  var element_after_generate = document.querySelector(".after_generate");
  name = name + "";
  if (name.length == 0) {
    element_after_generate.innerText = "哈基";
  }else if (name[name.length-1] != "子" || name.length == 1) {
    element_after_generate.innerText = "哈基" + name[name.length-1];
  } else {
    element_after_generate.innerText = "哈基" + name[name.length-2];
  }
  return;
}