let quest = document.getElementById("quest")
let opta = document.getElementById("opta")
let optb = document.getElementById("optb")
let optc = document.getElementById("optc")
let optd = document.getElementById("optd")
let question_ = document.getElementsByClassName("question")
// let bef = question_.querySelector("::before")
let count = 0


let q = [
    { Question: "Who was the President of Nigeria in 1?" },
    { Question: "Who was the President of Nigeria in 2?" },
    { Question: "Who was the President of Nigeria in 3?" },
    { Question: "Who was the President of Nigeria in 4?" },
    { Question: "Who was the President of Nigeria in 5?" }
]

// document.getElementsByClassName("question").style.setProperty('::before') = "background-color: yellow;"

let op = [
    { Option1: "Opt1Q1", Option2: "Opt2Q1", option3: "Opt3Q1", Option4: "Opt4Q1" },
    { Option1: "Opt1Q2", Option2: "Opt2Q2", option3: "Opt3Q2", Option4: "Opt4Q2" },
    { Option1: "Opt1Q3", Option2: "Opt2Q3", option3: "Opt3Q3", Option4: "Opt4Q3" },
    { Option1: "Opt1Q4", Option2: "Opt2Q4", option3: "Opt3Q4", Option4: "Opt4Q4" },
    { Option1: "Opt1Q5", Option2: "Opt2Q5", option3: "Opt3Q5", Option4: "Opt4Q5" }
]

quest.innerHTML = q[0].Question
opta.innerHTML = op[0].Option1
optb.innerHTML = op[0].Option2
optc.innerHTML = op[0].option3
optd.innerHTML = op[0].Option4

var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText = typeof css === "string" ? css : Object.keys(css).map(function (question_) {
            return question_ + ":" + (question_ === "content" ? "'" + css[question_] + "'" : css[question_]);
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
})(document.createElement("style"));

addRule("question_::before", {
    
    background: "yellow",
    "border-radius": "50%",
    content: "''"
});

function next() {
    count += 1
    if (count > q.length - 1) {
        count = 0
    }
    for (let i = 0; i < q.length; i++) {
        quest.innerHTML = q[count].Question
        opta.innerHTML = op[count].Option1
        optb.innerHTML = op[count].Option2
        optc.innerHTML = op[count].option3
        optd.innerHTML = op[count].Option4
        break
    }
    console.log(count);
}
function prev() {
    count -= 1

    if (count < 0) {
        count = 0
    }

    for (let i = 0; i < q.length; i++) {
        quest.innerHTML = q[count].Question
        opta.innerHTML = op[count].Option1
        optb.innerHTML = op[count].Option2
        optc.innerHTML = op[count].option3
        optd.innerHTML = op[count].Option4
        break
    }
    console.log(count);
}