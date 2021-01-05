var content = document.getElementById("content")
var creator = document.getElementById("creator")
var myRoute, qusIndex = 0

// TODO: לשים את שם היוצר למטה: fixed, static

var routes = [
    [6, 3, 8, 5, 7, 2, 9, 1, 4, 10],
    [3, 6, 2, 7, 4, 8, 1, 9, 5, 10],
    [6, 8, 3, 2, 9, 4, 7, 5, 1, 10],
    [3, 2, 6, 4, 8, 9, 1, 7, 5, 10],
    [3, 6, 7, 5, 8, 1, 9, 4, 2, 10],
    [6, 3, 2, 9, 4, 7, 1, 8, 5, 10],
    [7, 4, 6, 3, 2, 8, 5, 9, 1, 10],
    [5, 6, 9, 3, 4, 7, 1, 8, 2, 10],
    [3, 7, 4, 8, 1, 9, 6, 5, 2, 10],
    [6, 9, 4, 8, 3, 1, 2, 7, 5, 10]
]

var qusetionsText = [
    "מה צריכים להיות ערכיו של הקלט לקבלת הפלט הנתון?",
    "מה הפלט עבור זימון הפעולה\nMy_func(-5) / 3",
    "מצא את הסיבוכיות של הפעולה",
    "מצא את זמן הריצה של הפעולה",
    "מצא את זמן הריצה של הפעולה",
    "מה התגית החסרה",
    "מה שמו של האובייקט שמשמש לשמירה של נתוני גלישה של משתמש בצד השרת",
    "מה הפלט של זימון הפעולה\nfunc1(13)",
    "מה הערך המצוי באוגר ax בשורה 16",
    "מה ערכו של bx לאחר הרצת התכנית"
]

var answers = [
    "1,4,5,4,9,8,10", // ans for qus 1
    "24",             // ans for qus 2
    "O(n)",           // ans for qus 3
    "13",             // ans for qus 4
    "12n+11",         // ans for qus 5
    "tr",             // ans for qus 6
    "session",        // ans for qus 7
    "7",              // ans for qus 8
    "011ch",          // ans for qus 9
    "ffc2h"           // ans for qus 10
]

var phoneNumbers = [
    "054-239-9369",
    "052-613-3313",
    "050-700-7455",
    "052-651-1449",
    "050-244-1015"
]

var codes = [
    "jszff3",
    "atw6gj",
    "fhtsoj",
    "fn3s65",
    "6soxs7",
    "tg25oq",
    "e03gh1",
    "51znq3",
    "5rf1tj"
]

let startGame = () => {
    let value = document.getElementById("team").value
    if(value == 'בחר קבוצה') 
        alert('בחר קבוצה כדי להתחיל לשחק')
    else {
        myRoute = parseInt(value.split(' ')[1])

        document.getElementById("logo").style.display = "none"

        showQustion()
    }
}

let showQustion = () => {
    let qusNum = routes[myRoute - 1][qusIndex]
    
    content.innerHTML = ""
    content.innerHTML += `<h1 class='qusText'>${qusetionsText[qusNum - 1]}</h1>`
    content.innerHTML += `<img class='img' src='images/qustions/Qus${qusNum}.PNG' /><br /><br />`
    content.innerHTML += "<p class='exp1forImg'>הקלד/י את תשובתך:</p>"
    content.innerHTML += "<input type='text' id='answer' dir='ltr' /><br /><button onclick='checkAnswer()'>בדוק את תשובתך</button>"
    content.innerHTML += "<bt /><img class='img' src='images/qustions/check.PNG' /><br/><br/><br/>"
}

let checkAnswer = () => {
    let ans = document.getElementById("answer").value
    let cAns = answers[routes[myRoute - 1][qusIndex] - 1]

    if(ans == cAns){
        alert("כל הכבוד! תשובה נכונה!")
        qusIndex++
        if(qusIndex < routes[0].length)
            showPlace(false)
        else 
            showPlace(true)
    }
    else alert("תשובה לא נכונה\nבדקו את התשובה, וזכרו לכתוב ללא רווחים!")
}

let showPlace = (doneAll) => {
    if(doneAll) // done all qustions
        goToSchool()
    else{
        let place = routes[myRoute - 1][qusIndex - 1]

        content.innerHTML = ""
        content.innerHTML += "<h1 class='title'>עברתם לשאלה הבאה!</h1>"
        content.innerHTML += "<h2 class='title' style='color:blue'>עליכם להגיע למקום שבתמונה:</h2>"
        content.innerHTML += `<img class='img' src='images/places/place${place}.jpeg' /><br />`
        content.innerHTML += `<p class='exp1forImg'>לאחר שהגעתם למקום צלמו סלפי עם חברי הקבוצה ושלחו למספר<br />${phoneNumbers[Math.floor(myRoute / 2 + 0.5) - 1]}<br />את התמונה בווטסאפ.<br /><u>לאחר אישור התמונה, ישלח לכם קוד לשאלה הבאה! בהצלחה ♥</u><br /><br />הכנס את הקוד:</p>`
        content.innerHTML += "<input type='text' id='code' dir='ltr' /><br /><button onclick='checkQustionCode()'>עבור לשאלה הבאה</button>"
    }
}

let checkQustionCode = () => {
    let code = document.getElementById("code").value
    let cCode = codes[routes[myRoute - 1][qusIndex - 1] - 1]
    console.log(code, cCode)

    if(code == cCode){
        alert("קוד נכון! לשאלה הבאה")
        showQustion()
    }
    else alert("קוד שגוי!\nבדקו את הקוד שרשמתם, וזכרו לכתוב ללא רווחים!")
}

let goToSchool = () => {
    content.innerHTML = ""
    content.innerHTML += "<h1 class='title' style='font-size: 500%; font-family: system-ui'>כל הכבוד!</h1>"
    content.innerHTML += "<p class='title' style='color:#8d2d9e'>הגעתם לסוף המרוץ, עליכם להגיע לבית הספר כמה שיותר מהר!<br />בהצלחה ♥</p>"
    content.innerHTML += "<img class='img' src='images/well_done.jpg' />"
    content.innerHTML += "<br /><img style='width:90%' src='images/good_luck.gif' />"
}

// Created By: Ziv Refaeli