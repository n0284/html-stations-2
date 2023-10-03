function changeBackgroundColor(e) {
  const text = document.getElementById("text");
  if (check.checked){
    text.style.backgroundColor = "red";
  } else if(!check.checked){
    text.style.backgroundColor = "transparent";
  }
}
