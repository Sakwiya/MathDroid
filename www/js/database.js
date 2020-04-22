var gameArr = new Array();
var score = 0;
var indexquestion = 0;
var countAnswer = 0;
var questionArray = [];
var sSQL = "";
var db = window.openDatabase("quizdb", "1.0", "iQuizIT", 1000000);
var my_media = null;

document.addEventListener("deviceready", onDeviceReady, false);



function onDeviceReady() {
    // if (db != null && db != undefined && db != "") {
    db.transaction(populatedb, errorCB, successCB);
    // }
}

function playAudio(url) {
    // Play the audio file at url
        my_media = new Media(url,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}

function stopAudio() {
    if (my_media) {
        my_media.stop();
    }
}

function pauseAudio() {
    if (my_media) {
        my_media.pause();
    }
}

function playBackgroud(){
   playAudio('/android_asset/www/music/bg.mp3');   
}

function playbutton1(){ 
$.mobile.changePage( "intro.html" );
playAudio('/android_asset/www/music/buttonclick.amr');
}

function playbutton2(){ 
$.mobile.changePage( "lessons.html" );
playAudio('/android_asset/www/music/buttonclick.amr');
}

function playbutton3(){ 
$.mobile.changePage( "authors.html" );
playAudio('/android_asset/www/music/buttonclick.amr');
}

function playbutton4(){ 
$.mobile.changePage( "english.html" );
playAudio('/android_asset/www/music/click.amr');
}

function playbutton5(){ 
$.mobile.changePage( "math.html" );
playAudio('/android_asset/www/music/click.amr');
}

function playbutton6(){ 
$.mobile.changePage( "science.html" );
playAudio('/android_asset/www/music/click.amr');
}



$(document).ready(function() {
    // if (db != null && db != undefined && db != "") {
    db.transaction(populatedb, errorCB, successCB);
    // }
});


function successCB() {
    console.log("success!");
    // db.transaction(queryDB, errorCB);
}

function showinput() {
    $('#popupScore').popup('open');
}

function closeInput(transaction, resultSet) {
    $('#popupScore').popup('close');
    console.log('Query completed: ' + JSON.stringify(resultSet));
    // home();

}

function home() {
    window.location.href = 'index.html#type';
}

function goToHP() {
    window.location.href = 'index.html';
}

function closeApp() {
    console.log('closeApp');
	playAudio('/android_asset/www/music/back.aac');
    navigator.app.exitApp();
}

function leaderboard() {
    window.location.href = 'score.html';
}

function gameload3() {
    window.location.href = 'game2.html';
}

function endgameload() {
    var itemscore = sessionStorage.getItem('yourscore');
    $("#game_score").innerHTML = itemscore;
}

function errorCDB(err) {
    var db = window.openDatabase("quizdb", "1.0", "iQuizIT", 1000000);
    db.transaction(CreateQuestions, errorCB, CreateQuestSuccessFul);
}

function errorCB(err) {
    console.log("Error processing SQL: " + err.code + ' ' + err.message);
}

function CreateQuestSuccessFul() {
    var db = window.openDatabase("quizdb", "1.0", "Quiz Database", 1000000);
    db.transaction(queryDB, errorCB);
}

function gameload(param, slesson) {
     
    //current_view = param;
    localStorage.clear();

    window.localStorage.setItem('lesson', slesson);

    console.log('param: ', param);

    if (param == 'add4to5quiz') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="1";';
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','4 to 5 Years Addition');
        db.transaction(queryDB, errorCB);
        //window.location.href = 'add4to5quiz.html';
    } else if (param == 'sub4to5quiz') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="2";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','4 to 5 Years Subtraction');
        db.transaction(queryDB, errorCB);
        //window.location.href = 'sub4to5quiz.html';
	} else if (param == 'symbol4to5quiz') {
        sSQL = 'SELECT * FROM quiztbl2 WHERE lesson_id="3";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        window.location.href = 'symbol4to5quiz.html';
	} else if (param == 'counting2and5') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="4";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        window.location.href = 'counting2and5.html';
	} else if (param == 'oddeven6to7quiz') {
        sSQL = 'SELECT * FROM quiztbl2 WHERE lesson_id="5";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        window.location.href = 'oddeven6to7quiz.html';
	} else if (param == 'comparing6to7quiz') {
        sSQL = 'SELECT * FROM quiztbl3 WHERE lesson_id="6";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        window.location.href = 'comparing6to7quiz.html';
	} else if (param == 'add6to7quiz') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="7";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','6 to 7 Years Addition');
        db.transaction(queryDB, errorCB);
        //window.location.href = 'add6to7quiz.html';
	} else if (param == 'sub6to7quiz') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="8";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','6 to 7 Years Subtraction');
        db.transaction(queryDB, errorCB);
        //window.location.href = 'sub6to7quiz.html';	
	} else if (param == 'add8quiz') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="9";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','8 Years Addition');
        db.transaction(queryDB, errorCB);
        //window.location.href = 'add8quiz.html';			 queryDB(tx)				
    } else if (param == 'sub8quiz') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="10";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','8 Years Subtraction');
        db.transaction(queryDB, errorCB);
        // window.location.href = 'sub8quiz.html';							
    } else if (param == 'multiplicationquiz8') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="11";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','8 Years Multiplication');
        db.transaction(queryDB, errorCB);
        //window.location.href = 'multiplicationquiz8.html';							
    } else if (param == 'divisionquiz8') {
        sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="12";'
        window.localStorage.setItem("sSQL", sSQL);
        window.localStorage.setItem("param", param);
        changeView('add8quiz_panel','8 Years Division');
        db.transaction(queryDB, errorCB);
        //window.location.href = 'divisionquiz8.html';							
    } else {
        var value = sessionStorage.getItem('param');
        if (value == 'add4to5quiz') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="1";';
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'add4to5quiz.html';
        } else if (param == 'sub4to5quiz') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="2";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'sub4to5quiz.html';
		} else if (param == 'symbol4to5quiz') {
            sSQL = 'SELECT * FROM quiztbl2 WHERE lesson_id="3";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'symbol4to5quiz.html';
		} else if (param == 'counting2and5') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="4";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'counting2and5.html';
		} else if (param == 'oddeven6to7quiz') {
            sSQL = 'SELECT * FROM quiztbl2 WHERE lesson_id="5";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'oddeven6to7quiz.html';
		} else if (param == 'comparing6to7quiz') {
            sSQL = 'SELECT * FROM quiztbl3 WHERE lesson_id="6";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'comparing6to7quiz.html';
		} else if (param == 'add6to7quiz') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="7";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'add6to7quiz.html';
		} else if (param == 'sub6to7quiz') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="8";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'sub6to7quiz.html';	
		} else if (param == 'add8quiz') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="9";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'add8quiz.html';						
		} else if (param == 'sub8quiz') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="10";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'sub8quiz.html';						
		} else if (param == 'multiplicationquiz8') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="11";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'multiplicationquiz8.html';						
		} else if (param == 'divisionquiz8') {
            sSQL = 'SELECT * FROM quiztbl WHERE lesson_id="12";'
            window.localStorage.setItem("sSQL", sSQL);
            window.localStorage.setItem("param", value);
            window.location.href = 'divisionquiz8.html';						
		}
    }
}

function saveScore(category) {
    if ($('#un').val() == '') {
        alert('Please enter you Name');
        return;
    }

    var lesson = window.localStorage['lesson'];

    db.transaction(function(tx) {
        var sSQL = 'INSERT INTO scores(player_name,score,lesson,category) VALUES ("' + $('#un').val() + '","' + $('#game_score').text() + '","' + lesson + '","' + category + '")';

        console.log(sSQL);

        tx.executeSql(sSQL, [], closeInput, errorCB);

        alert('Score successfully saved');

    }, errorCB);

}

function populatedb(tx) {

    // tx.executeSql('DROP TABLE IF EXISTS scores');
    tx.executeSql('DROP TABLE IF EXISTS category');
    tx.executeSql('DROP TABLE IF EXISTS lesson');
    tx.executeSql('DROP TABLE IF EXISTS quiztbl');
    tx.executeSql('DROP TABLE IF EXISTS quiztbl2');
    tx.executeSql('DROP TABLE IF EXISTS quiztbl3');

    tx.executeSql('CREATE TABLE IF NOT EXISTS scores(s_id INTEGER PRIMARY KEY AUTOINCREMENT, player_name VARCHAR(255),score VARCHAR(25),lesson text,category VARCHAR(45))');
    tx.executeSql('CREATE TABLE IF NOT EXISTS category(c_id INTEGER PRIMARY KEY AUTOINCREMENT, c_name VARCHAR(150))');
    tx.executeSql('CREATE TABLE IF NOT EXISTS lesson(lesson_id INTEGER PRIMARY KEY AUTOINCREMENT, c_id INTEGER REFERENCES category (c_id) ON DELETE CASCADE ON UPDATE CASCADE, lesson_detail TEXT)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS quiztbl (ID INTEGER PRIMARY KEY AUTOINCREMENT,lesson_id INTEGER REFERENCES lesson (lesson_id) ON DELETE CASCADE ON UPDATE CASCADE, question text, qanswer1 text, qanswer2 text, qanswer3 text,qanswer4 text, answer text)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS quiztbl2 (ID INTEGER PRIMARY KEY AUTOINCREMENT,lesson_id INTEGER REFERENCES lesson (lesson_id) ON DELETE CASCADE ON UPDATE CASCADE, question text, qanswer1 text, qanswer2 text, answer text)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS quiztbl3 (ID INTEGER PRIMARY KEY AUTOINCREMENT,lesson_id INTEGER REFERENCES lesson (lesson_id) ON DELETE CASCADE ON UPDATE CASCADE, question text, qanswer1 text, qanswer2 text, qanswer3 text, answer text)');

    tx.executeSql('INSERT INTO category(c_name) VALUES("Hardware")');
    tx.executeSql('INSERT INTO category(c_name) VALUES("Software")');

    tx.executeSql('INSERT INTO lesson(c_id,lesson_detail) VALUES ("1","Multiple Choice")');
    tx.executeSql('INSERT INTO lesson(c_id,lesson_detail) VALUES ("1","True or False")');

//add4to5quiz
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 2 + 2?", "2", "4", "6", "8","4")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 5 + 7?", "10", "12", "16", "14","12")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 4 + 7", "11", "12", "13", "14","11")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 33 + 3", "36", "333", "99", "30","36")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 9 + 9?", "18", "19", "20", "21","18")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 25 + 5?", "30", "25", "35", "20","30")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 12 + 12?", "24", "25", "26", "27","24")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 9 + 5?", "14", "15", "13", "12","14")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 5 + 5?", "10", "15", "0", "25","10")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 3 + 2?", "5", "8", "6", "7","5")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 3 + 8?", "11", "12", "13", "14","11")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("1","What is the sum of 4 + 3?", "7", "8", "9", "10","7")');

//sub4to5quiz
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","5 - 3?", "2", "4", "6", "8","2")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","15 - 3?", "12", "14", "10", "8","12")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","6 - 3?", "3", "4", "9", "2","3")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","12 - 6?", "6", "5", "3", "4","6")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","10 - 8?", "2", "5", "3", "4","2")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","8 - 8?", "2", "0", "3", "1","0")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","13 - 3?", "10", "9", "11", "8","10")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","15 - 4?", "10", "9", "11", "8","11")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","14 - 7?", "7", "9", "10", "8","7")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","19 - 4?", "15", "16", "17", "18","15")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","17 - 2?", "15", "16", "17", "18","15")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","9 - 3?", "6", "7", "8", "9","6")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("2","5 - 0?", "0", "5", "4", "1","5")');


//symbols 4-5
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","5 > 3", "TRUE", "FALSE","TRUE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","7 > 4", "TRUE", "FALSE","TRUE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","6 > 5", "TRUE", "FALSE","TRUE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","8 > 2", "TRUE", "FALSE","TRUE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","9 > 1", "TRUE", "FALSE","TRUE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","11 > 8", "TRUE", "FALSE","TRUE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","8 > 8", "TRUE", "FALSE","FALSE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","9 < 8", "TRUE", "FALSE","FALSE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","5 < 3", "TRUE", "FALSE","FALSE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","12 = 21", "TRUE", "FALSE","FALSE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","1 = 1", "TRUE", "FALSE","TRUE")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("3","13 = 13", "TRUE", "FALSE","TRUE")');
	
//counting2and5(6-7)
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","75, 80, 85, 90,____, 100", "95", "105", "115", "120","95")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","30,____, 40, 45, 50, 55", "35", "25", "15", "10","35")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","____, 25, 30, 35, 40, 45", "20", "25", "15", "10","20")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","14 ,____,18, 20, 22, 24", "16", "14", "12", "10","16")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","2, 4, 6,____, 10, 12", "8", "14", "12", "10","8")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","22, 24, 26,____, 30, 32", "28", "34", "12", "10","28")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","30,35 ,____, 45, 50, 55", "35", "25", "15", "40","40")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","5,____, 15, 20, 25, 30", "35", "25", "15", "10","10")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","22,24, 26, 28,____, 32", "30", "34", "36", "40","30")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("4","20, 25, 30, 35,____, 45", "20", "25", "35", "40","40")');

//odd even 6 to 7
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","16", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","11", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","1", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","15", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","27", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","33", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","55", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","69", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","21", "Even", "Odd","Odd")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","2", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","56", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","98", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","72", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","24", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","34", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","8", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","102", "Even", "Odd","Even")');
	tx.executeSql('INSERT INTO quiztbl2(lesson_id,question, qanswer1, qanswer2, answer) VALUES ("5","44", "Even", "Odd","Even")');

//comparing 6 to 7
    tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","59 ______ 60", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","28 ______ 27", "<", ">", "=",">")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","63 ______ 66", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","71 ______ 72", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","93 ______ 95", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","93 ______ 73", "<", ">", "=",">")');	
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","10 ______ 10", "<", ">", "=","=")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","45 ______ 89", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","67 ______ 117", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","43 ______ 48", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","33 ______ 58", "<", ">", "=","<")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","93 ______ 58", "<", ">", "=",">")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","23 ______ 18", "<", ">", "=",">")');
	tx.executeSql('INSERT INTO quiztbl3 (lesson_id,question, qanswer1, qanswer2, qanswer3, answer) VALUES ("6","43 ______ 43", "<", ">", "=","=")');
	
//add6to7quiz
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","45 + 32?", "77", "78", "79", "80","77")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","31 + 26?", "57", "58", "59", "60","57")');	
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","18 + 31?", "49", "50", "51", "52","49")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","28 + 61?", "89", "90", "91", "92","89")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","23 + 46?", "69", "70", "68", "71","69")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","12 + 32?", "44", "45", "46", "47","44")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","31 + 15?", "46", "47", "48", "49","46")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","18 + 12?", "30", "31", "29", "28","30")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","11 + 34?", "45", "46", "47", "48","45")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","23 + 16?", "38", "39", "40", "41","39")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","14 + 41?", "55", "56", "57", "58","55")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","13 + 24?", "37", "38", "39", "40","37")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","18 + 11?", "29", "30", "31", "32","29")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","19 + 12?", "31", "32", "33", "34","31")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("7","23 + 12?", "35", "36", "37", "38","35")');	
	
//sub6to7quiz
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","94 - 72?", "23", "22", "24", "25","22")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","64 - 32?", "34", "33", "32", "35","32")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","89 - 15?", "74", "75", "76", "77","74")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","94 - 80?", "13", "14", "15", "16","14")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","79 - 54?", "22", "23", "24", "25","25")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","12 - 11?", "0", "1", "2", "3","1")');	
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","44 - 32?", "10", "11", "12", "13","12")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","17 - 15?", "2", "1", "0", "3","2")');	
 	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","44 - 10?", "35", "36", "34", "37","34")');	
	 tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","19 - 14?", "2", "3", "4", "5","5")');
	 tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","15 - 11?", "2", "1", "4", "3","4")');	
	 tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","34 - 12?", "22", "21", "20", "23","22")');
	 tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","16 - 15?", "2", "1", "0", "3","1")');
 	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","44 - 15?", "32", "33", "34", "35","34")');		 
 	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("8","18 - 14?", "2", "4", "1", "3","4")');	
	
//add8quiz
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","222 + 213?", "436", "435", "437", "438","435")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","118 + 113?", "234", "233", "231", "232","231")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","128 + 100?", "228", "229", "230", "231","228")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","135 + 220?", "362", "363", "364", "355","355")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","380 + 150?", "530", "531", "532", "533","530")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","400 + 100?", "600", "500", "700", "800","500")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","320 + 150?", "670", "570", "470", "370","470")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","420 + 350?", "770", "760", "750", "740","770")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","250 + 300?", "530", "540", "560", "550","550")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("9","250 + 250?", "490", "500", "510", "520","500")');	
	
	
//sub8quiz
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","100 - 150?", "250", "200", "150", "100","250")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","500 - 250?", "200", "250", "300", "150","250")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","483 - 184?", "309", "279", "299", "289","299")');
 	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","621 - 421?", "170", "180", "190", "200","200")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","536 - 242?", "294", "284", "304", "314","294")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","682 - 164?", "517", "518", "519", "516","518")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","585 - 245?", "350", "330", "340", "360","340")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","274 - 100?", "154", "184", "164", "174","174")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","392 - 211?", "181", "182", "183", "184","181")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("10","368 - 176?", "191", "192", "193", "194","192")');
	
//multiplicationquiz8
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","8 x 2?", "16", "18", "14", "22","16")');	
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","3 x 3?", "6", "9", "8", "7","9")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","3 x 4?", "16", "8", "12", "14","12")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","5 x 3?", "16", "17", "14", "15","15")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","4 x 5?", "20", "25", "15", "30","20")');	
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","4 x 4?", "18", "12", "14", "16","16")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","7 x 3?", "20", "22", "21", "23","21")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","5 x 5?", "35", "25", "45", "55","25")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","5 x 6?", "60", "50", "40", "30","30")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","8 x 8?", "16", "64", "36", "32","64")');	
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","8 x 4?", "16", "18", "32", "22","32")');	
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","4 x 9?", "13", "28", "36", "22","36")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","9 x 2?", "16", "18", "14", "22","18")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","2 x 7?", "16", "18", "14", "22","14")');	
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("11","2 x 9?", "16", "12", "14", "18","18")');	

//divisionquiz8
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","20 ÷ 4?", "5", "4", "6", "16","5")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","14 ÷ 2?", "5", "7", "6", "8","7")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","18 ÷ 6?", "5", "4", "6", "3","3")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","16 ÷ 8?", "5", "4", "2", "3","2")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","12 ÷ 12?", "1", "2", "3", "4","1")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","9 ÷ 3?", "5", "4", "6", "3","3")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","15 ÷ 3?", "4", "5", "6", "3","5")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","18 ÷ 3?", "5", "4", "3", "6","6")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","18 ÷ 9?", "5", "4", "3", "2","2")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","24 ÷ 8?", "5", "3", "6", "4","3")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","30 ÷ 5?", "5", "4", "6", "7","6")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","50 ÷ 25?", "2", "3", "4", "5","2")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","42 ÷ 7?", "5", "4", "6", "7","6")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","50 ÷ 2?", "24", "25", "26", "27","25")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("12","75 ÷ 25?", "5", "4", "6", "3","3")');



//average math
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","5 to the power of 0 equals what?", "2", "4", "6", "1","1")');
  tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","The perimeter of a circle is also known as what?", "radius", "area", "angle", "circumference","circumference")');
   	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","How many sides does a nonagon have?", "6", "8", "9", "12","9")');
    tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","65 – 33?", "33", "31", "32", "35","32")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","16,000/2000", "2", "4", "6", "8","8")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES("41","9999-9989?", "999", "89", "6", "10","10")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","What does 3 squared equal?", "8", "1", "6", "9","9")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","What does the square root of 44 equal?", "14", "12", "18", "16","12")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","What is bigger number?", "trillion", "million", "billion", "googol","googol")');
	tx.executeSql('INSERT INTO quiztbl (lesson_id,question, qanswer1, qanswer2, qanswer3,qanswer4, answer) VALUES ("41","What comes after a million?", "A quadrillion", "A trillion", "A billion", " A thousand","A quadrillion")');
	


	
   

}
