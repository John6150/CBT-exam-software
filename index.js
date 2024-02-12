let quest = document.getElementById("quest")
let opta = document.getElementsByClassName("opta")
let optb = document.getElementsByClassName("optb")
let optc = document.getElementsByClassName("optc")
let optd = document.getElementsByClassName("optd")
let option = document.getElementsByClassName("option")
let question_ = document.getElementsByClassName("question")
let options = document.getElementsByName("options")
let sn = document.getElementById("number")
let res_details = document.getElementsByClassName("result-details")
let x = 0
let y = 0
// let ans = document.createAttribute("checked")
let result = []
let correct = []
let anss
let toSave = 0

let count = 0


sn.innerHTML = count + 1

let q = [
    {
        Question: "Which of the following is not a programming language?",
        Options: ["HTML", "Python", "JavaScript", "C++"],
        Ans: "HTML"
    },
    {
        Question: "Which of the following is used for iteration in Javascript?",
        Options: ["For loop", "if statement", "Array", "Object"],
        Ans: "For loop"
    },
    {
        Question: "A 'forEach' statement can be used instead of a 'For' loop?",
        Options: ["Yes", "Sometimes", "Most times", "No"],
        Ans: "Yes"
    },
    {
        Question: "What is the meaning of 'Js'?",
        Options: ["JavaScreen", "JointScript", "JavaScript", "JQuery Source"],
        Ans: "JavaScript"
    },
    {
        Question: "Javascript can be used for Styling?",
        Options: ["No", "Sometimes", "Yes", "I don't know"],
        Ans: "Yes"
    }
]

function clear() {
    for (let c = 0; c < 4; ++c) {
        options[c].checked = false;
    }
}


function load() {
    for (let x = 0; x < q[count].Options.length; x++) {
        quest.innerHTML = q[count].Question
        option[x].innerHTML = q[count].Options[x]
    }
}

load()

function next() {
    // styl()
    clear()
    count += 1
    if (count > q.length - 1) {
        count = 0
    }
    for (let i = 0; i < q.length; i++) {
        quest.innerHTML = q[count].Question
        console.log(anss);
        for (let x = 0; x < q[count].Options.length; x++) {
            option[x].innerHTML = q[count].Options[x]
        }
        break
    }
    sn.innerHTML = count + 1
    toSave = 1
}


function prev() {
    count -= 1
    if (count < 0) {
        count = 0
    }

    for (let i = 0; i < q.length; i++) {
        quest.innerHTML = q[count].Question
        for (let x = 0; x < q[count].Options.length; x++) {
            option[x].innerHTML = q[count].Options[x]
        }
        break
    }
    sn.innerHTML = count + 1
    // correct.push(q[count].Options.indexOf(q[count].Ans))
}


function check(ans) {
    anss = ans
    result[count] = anss
    correct.push(q[count].Options.indexOf(q[count].Ans))
}

function submit() {
    // correct.push(q[count].Options.indexOf(q[count].Ans))
    correct.forEach(function (element, index) {
        if (result[index] == element) {
            x += 1
        } else {

            y += 1
        }
    })
    next()
    document.getElementsByClassName("modal")[0].style = "display: none"
    document.getElementsByClassName("result-page")[0].style = "width: 400px; height: 600px; position: absolute; bottom: 20 %; display: flex; flex - direction: column; gap: 50px; border - radius: 20px; display: flex; flex-direction: column; align-items: center; padding: 10px; font-family: Verdana, Geneva, Tahoma, sans - serif; color: white; backdrop-filter: blur(30px); background-color: rgba(255, 255, 255, 0.384); text-underline-offset: 10px;"
    document.getElementsByClassName("result-main")[0].style = " width: 90%; height: 80%; display: flex; flex-direction: column; align-items: left; justify-content: space-around;"
    res_details[0].innerHTML = result.length
    res_details[1].innerHTML = x
    res_details[1].style = "color: rgb(0, 247, 0);"
    res_details[2].innerHTML = y
    res_details[2].style = "color: red;"
    res_details[3].innerHTML = `${(x / q.length) * 100}%`
    res_details[5].style = "left: 20%"

    if (x > q.length/2) {
        res_details[4].innerHTML = "Passed"
        res_details[4].style = "color: rgb(0, 247, 0); text-align: right;"

    } else {
        res_details[4].innerHTML = "Failed"
        res_details[4].style = "color: red; text-align: right;"
    }
    // alert(`Your score is ${(x / q.length) * 100}%`)
    load()
    x = 0
    y = 0
    result = []
    clear()
}

function ref(){
    location.reload()
}

// function styl(){
//     sn.style = "transform: rotate(360deg); transition: all 500ms ease"
// }