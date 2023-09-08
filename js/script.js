const toc = document.getElementsByClassName("toc").value;
const aiml = document.getElementsByClassName("aiml").value;
const ncc = document.getElementsByClassName("ncc").value;
const dbms = document.getElementsByClassName("dbms").value;

const btn = document.getElementsByClassName("btn");

btn.addEventListener("click", function clicked() {
  console.log("clicked");
  console.log(toc.value);
});
