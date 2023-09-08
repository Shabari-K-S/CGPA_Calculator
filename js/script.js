const tocInput = document.querySelector(".toc");
const aimlInput = document.querySelector(".aiml");
const nccInput = document.querySelector(".ncc");
const dbmsInput = document.querySelector(".dbms");
const algInput = document.querySelector(".alg");
const osInput = document.querySelector(".os");
const essInput = document.querySelector(".ess");
const oslInput = document.querySelector(".osl");
const dbmslInput = document.querySelector(".dbmsl");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    const toc = parseFloat(tocInput.value);
    const aiml = parseFloat(aimlInput.value);
    const ncc = parseFloat(nccInput.value);
    const dbms = parseFloat(dbmsInput.value);
    const alg = parseFloat(algInput.value);
    const os = parseFloat(osInput.value);
    const ess = parseFloat(essInput.value);
    const osl = parseFloat(oslInput.value);
    const dbmsl = parseFloat(dbmslInput.value);

    if (!isNaN(toc) && !isNaN(aiml) && !isNaN(ncc) && !isNaN(dbms) && !isNaN(alg) && !isNaN(os) && !isNaN(ess) && !isNaN(osl) && !isNaN(dbmsl)) {
        const totalCredits = 9; 
        const cgpa = (toc + aiml + ncc + dbms + alg + os + ess + osl + dbmsl) / totalCredits;

        const display = document.querySelector(".display");
        display.textContent = "GPA :" + cgpa.toFixed(2);
    } else {
        alert("Please enter valid inputs");
    }
});
