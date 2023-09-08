const toc = document.getElementsByClassName("toc")[0];
const aiml = document.getElementsByClassName("aiml").value;
const ncc = document.getElementsByClassName("ncc").value;
const dbms = document.getElementsByClassName("dbms").value;

const btn = document.getElementsByClassName("btn").value;

btn.addEventListener("click", function clicked() {
  console.log("clicked");
  console.log(toc.value);
});
