		let arrQuestions = [
			{
				"question": "Inside which HTML element is the <code>&lt;link rel='stylesheet' href'assets/css/style.css'&gt;</code> tag directly placed?",
				"correctAnswer": "<head>",
				"incorrectAnswer1": "<footer>",
				"incorrectAnswer2": "<javascript>",
				"incorrectAnswer3": "<html>",
				"difficulty": 2
			},
			{
				"question": "Which is the correct code to get the source (src) of the following image tag: <code>&lt;img src='assets/images/flyinggoat.jpg' id='goatImg' alt='flying goat pic' /&gt;</code>?",
				"correctAnswer": "$('#goatImg').attr('src');",
				"incorrectAnswer1": "document.getElementsByName('goatImg').src();",
				"incorrectAnswer2": "$('.goatImg').src();",
				"incorrectAnswer3": "$(getImageSource).('goatImg').val();",
				"difficulty": 3
			},
			{
				"question": "The console.log command is used to communicate with whom?",
				"correctAnswer": "Developers",
				"incorrectAnswer1": "The Open Standards Body",
				"incorrectAnswer2": "Users",
				"incorrectAnswer3": "Microsoft",
				"difficulty": 1
			},
			{
				"question": "How many <strong>text</strong> parameters does this function have: <code>var myGrades = getGrades('Billy Mays', 'Sophmore', 17, false);</code>?",
				"correctAnswer": "2",
				"incorrectAnswer1": "5",
				"incorrectAnswer2": "3",
				"incorrectAnswer3": "1",
				"difficulty": 3
			},
			{
				"question": "Which of these is NOT a benefit of including 'use strict' at the beginning of a JavaScript source file?",
				"correctAnswer": "Doesn’t allow the developer to create empty variables",
				"incorrectAnswer1": "Makes debugging easier",
				"incorrectAnswer2": "Prevents accidental globals",
				"incorrectAnswer3": "Throws error on invalid usage of delete",
				"difficulty": 4
			},
			{
				"question": "Are semicolons required at the end of a line of code?",
				"correctAnswer": "No, but you may encounter unusual, hard to troubleshoot bugs if you don’t use them",
				"incorrectAnswer1": "No, nothing will break if you don’t use semicolons",
				"incorrectAnswer2": "Yes, the International Standards Board for Coding dictates they be used",
				"incorrectAnswer3": "Yes, the code won’t run without them",
				"difficulty": 2
			},
			{
				"question": "In What order will the numbers 1 - 4 be logged in the following function? <br /><code>(function() { <br />&nbsp;&nbsp;console.log(1); <br />&nbsp;&nbsp;setTimeout(function(){<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(2)<br />&nbsp;&nbsp;}, 1000);<br />&nbsp;&nbsp;setTimeout(function(){<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(3)<br />&nbsp;&nbsp;}, 0);<br />&nbsp;&nbsp;console.log(4);<br /> });</code>",
				"correctAnswer": "1, 4, 3, 2",
				"incorrectAnswer1": "1, 2, 3, 4",
				"incorrectAnswer2": "1, 3, 4, 2",
				"incorrectAnswer3": "2, 4, 1, 3",
				"difficulty": 4
			},
			{
				"question": "Which of the following will log true?",
				"correctAnswer": "console.log(false === ‘0’);",
				"incorrectAnswer1": "console.log(false == ‘0’);",
				"incorrectAnswer2": "console.log(false == ‘false’);",
				"incorrectAnswer3": "console.log(false === ‘false’);",
				"difficulty": 3
			},
			{
				"question": "What will the following function log? <br /><code>(function(x) {<br />&nbsp;&nbsp;return (function(y) {<br />&nbsp;&nbsp;&nbsp;&nbsp;console.log(x);<br /> &nbsp;&nbsp;})(2)<br />})(1);</code>",
				"correctAnswer": "1",
				"incorrectAnswer1": "3",
				"incorrectAnswer2": "undefined",
				"incorrectAnswer3": "2",
				"difficulty": 4
			},
			{
				"question": "What does the setInterval function do?",
				"correctAnswer": "Tells a function to execute every n seconds",
				"incorrectAnswer1": "Tells a function to pause for a specific number of milliseconds",
				"incorrectAnswer2": "Tells a function to run at a certain time of day",
				"incorrectAnswer3": "Modifies the styling of text to make the spacing between letters consistent",
				"difficulty": 2
			},
			{
				"question": "Which book is Douglas Crawford famous for writing?",
				"correctAnswer": "JavaScript: The Good Parts",
				"incorrectAnswer1": "Data Structures &amp; Algorithms with JavaScript",
				"incorrectAnswer2": "Functional JavaScript",
				"incorrectAnswer3": "JavaScript For Dummmies",
				"difficulty": 1
			},
			{
				"question": "Who wrote the &quot;You Don't Know JS&quot; series of books?",
				"correctAnswer": "Kyle Simpson",
				"incorrectAnswer1": "Douglas Crawford",
				"incorrectAnswer2": "Randy Savage",
				"incorrectAnswer3": "Lee Morgan",
				"difficulty": 2
			}
		];