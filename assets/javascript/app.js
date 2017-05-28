let gamePeriod = 10;
let gameTimer = 0;
let numCorrect = 0;
let numWrong = 0;
let askedCount = 0;
let answer = "";
let newInterval;

$(document).ready(function() {
	askedCount = arrQuestions.length;
	
	$("#pnlQuestions").show();
	$("#pnlScore").hide();

	function startTimer() {
		gameTimer = gamePeriod;

		if (newInterval) {
			clearInterval(newInterval);
		}

		newInterval = setInterval(function() {
			if (gameTimer >= 0) {
				$("#spnTimer").text(gameTimer);
				gameTimer--;
			} else {
				numWrong++;
				stopTimer();
			}
		}, 1000);
	}

	function stopTimer() {
		clearInterval(newInterval);
		$("#spnTimer").text("--");

		if (arrQuestions.length > 0) {
			startTimer();
			setQuestion();
		} else {
			clearInterval(newInterval);
			showScore();
		}
	}

	function setQuestion() {
		let rndQ = Math.floor(Math.random() * (arrQuestions.length ));

		if (arrQuestions.length > 0) {
			$(".question").html(arrQuestions[rndQ].question);

			for (let i = 0; i < 4; i++) {
				let rndA = Math.floor(Math.random() * (i + 1)) + 1;

				switch (rndA) {
					case 0:
						answer = "answer-1";

						$("#answer-1").text(arrQuestions[rndQ].correctAnswer);
						$("#answer-2").text(arrQuestions[rndQ].incorrectAnswer1);
						$("#answer-3").text(arrQuestions[rndQ].incorrectAnswer2);
						$("#answer-4").text(arrQuestions[rndQ].incorrectAnswer3);
						break;
					case 1:
						answer = "answer-2";
						
						$("#answer-1").text(arrQuestions[rndQ].incorrectAnswer1);
						$("#answer-2").text(arrQuestions[rndQ].correctAnswer);
						$("#answer-3").text(arrQuestions[rndQ].incorrectAnswer2);
						$("#answer-4").text(arrQuestions[rndQ].incorrectAnswer3);
						break;
					case 2:
						answer = "answer-3";
						
						$("#answer-1").text(arrQuestions[rndQ].incorrectAnswer1);
						$("#answer-2").text(arrQuestions[rndQ].incorrectAnswer2);
						$("#answer-3").text(arrQuestions[rndQ].correctAnswer);
						$("#answer-4").text(arrQuestions[rndQ].incorrectAnswer3);
						break;
					case 3:
						answer = "answer-4";
						
						$("#answer-1").text(arrQuestions[rndQ].incorrectAnswer1);
						$("#answer-2").text(arrQuestions[rndQ].incorrectAnswer2);
						$("#answer-3").text(arrQuestions[rndQ].incorrectAnswer3);
						$("#answer-4").text(arrQuestions[rndQ].correctAnswer);
						break;
					default:
						break;
				}
			}

			arrQuestions.splice(rndQ, 1);
		}
	}

	startTimer();
	setQuestion();

	$(".list-group-item").on("click", function (e) {
		let result = checkAnswer(e.target.id);

		if (result) {
			numCorrect++;

		} else {
			numWrong++;
		}

		setTimeout(function() {
			if (arrQuestions.length > 0) {
				stopTimer();
				setQuestion();
				startTimer();
			} else {
				showScore();
			}
		}, 250);
	});

});

function checkAnswer(obj) {
	if (obj === answer) {
		clearInterval(newInterval);
		return true;
	} else {
		return false;
	}
}

function showScore() {
	$("#correct").text(numCorrect);
	$("#wrong").text(numWrong);
	$("#asked").text(askedCount);
	$("#pnlQuestions").hide();
	$("#pnlScore").show();
}