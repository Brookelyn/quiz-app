$(document).ready(function(){

	/* Questions and answers */

	var questions = [{
			question: 'Who was Jerry Thomas?',
			answers: ['An American bartender who, because of his pioneering work in popularising cocktails across the United States, is considered the father of American mixology.',
					  'Publisher of multiple editions of his <em>The World\'s Drinks</em> and <em>How to Mix Them</em>, he presided over San Francisco\'s Palace Hotel bar.',
					  'Known as “Coley”; eventually became head bartender at the Savoy and is known for inventing the now-famous Hanky Panky cocktail for contemporary actor Sir Charles Hawtrey.',
					  'One of the greatest mixologists of the mid-20th century, serving everyone from Ernest Hemingway and Spencer Tracy to everyday tourists.'],
			number: 0,
			correct: 0
		},
		{
			question: 'What American city was the Sazerac invented in?',
			answers: ['San Francisco',
					  'New York',
					  'Chicago',
					  'New Orleans'],
			number: 1,
			correct: 3
		},
		{
			question: 'How did the Aviation get its name?',
			answers: ['Until it gained widespread popularity, it was mainly drunk by pilots in the early days of commercial airlines.',
					  'It was invented just as air travel was taking off, and the cr&#232;me de violette - one of the drink\'s ingredients - gives it a sky blue colour.',
					  'It was originally served to passengers on the first scheduled daily international commercial air service between London to Paris run by Aircraft Transport and Travel.',
					  'It was created in honour of Aviatrix Amelia Earheat to commemorate her solo flight across the Atlantic.'],
			number: 2,
			correct: 1
		},
		{
			question: 'How is a Martinez different from a Martini?',
			answers: ['A Martini is made with dry vermouth and the Martinez with sweet, and the former has no liqueur added but the latter is usually enriched with maraschino.',
					  'There isn\'t a difference - they\'re the same drink, but go by different names in different regions.',
					  'A Martinez is generally made with vodka, a Martini generally with gin.',
					  'A Martinez is always garnished with fruit, while a Martini is never served with fruit.'],
			number: 3,
			correct: 0
		},
		{
			question: 'How do you make an Old Fashioned?',
			answers: ['Pour 60ml rye whiskey, 15ml sweet vermouth and 2-3 dashes Angostura bitters into a mixing glass filled with ice. Stir well, then strain into a chilled cocktail glass and garnish with a maraschino cherry.',
					  'Mix whisky and bitters with a little sugar syrup. Drink neat.',
					  'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with an orange slice and a maraschino cherry.',
					  'Pour 60ml bourbon, 30ml lemon juice, 15ml sugar syrup and half an egg white into a cocktail shaker full of ice. Shake as hard as possible for at least 20 seconds, then strain into a chilled glass with as many ice cubes as desired. Garnish with a maraschino cherry.'],
			number: 4,
			correct: 2
		}
	]



	/* Global */

	var qCor = 0;
	var currentQ = 0;


	/* Fade out landing page and fade in quiz*/

	$('.play').click(function() {
		$('#intro').fadeOut(2000);
		$('#quiz').delay(2000).fadeIn(3000);
		setFunctionality();
	});



	/* Configuring all functionality */

	function setFunctionality() {
		configQuestion();
		configAnswers();
		configNext();
	}



	/* Answers */

	function configAnswers() {
		$('.answer').click(answeringQ);
	}


	function answeringQ() {
		$(this).addClass('selected');
		$(this).siblings('.answer').css("opacity", "0.6");
		$('input:radio', this).prop('checked', true);
		removeA();
		giveFeedback();
		$('.next-box')
		.css('opacity', '0')
		.animate (
			{opacity: '1'},
			1000
		);
	}


	function removeA() {
		$('div.answer').not('.selected').remove();
	}



	/* Questions */

	function configQuestion(){
		$('.question').html('');
		$('.answer').remove();
		
		var newQ = '<h3 class="question">' + questions[currentQ].question + '</h3>';
		var newA = '<div class="answer"><div class="atext"><p>' + questions[currentQ].answers[0] + '<input id="option_0" type="radio" value="0" name="test" /></p></div></div>' +
				   '<div class="answer"><div class="atext"><p>' + questions[currentQ].answers[1] + '<input id="option_1" type="radio" value="1" name="test" /></p></div></div><br />' +
				   '<div class="answer"><div class="atext"><p>' + questions[currentQ].answers[2] + '<input id="option_2" type="radio" value="2" name="test" /></p></div></div>' + 
				   '<div class="answer"><div class="atext"><p>' + questions[currentQ].answers[3] + '<input id="option_3" type="radio" value="3" name="test" /></p></div></div>' +
				   '<div id="nextq"><div class="next-box"><a class="next" href="#">Next</a><img src="img/arrow.jpg" class="arrow" /></div></div>';

		$('.question').html(newQ);
		$('.answer-block').html(newA);
	}


	function configNext() {
		$('.next').click(function() {
			if(currentQ < 4) {
				$('.next-box').css('opacity', '0');
				$('#feedback').html('');
				currentQ++;
				setFunctionality();
			}

			else {
				$('#quiz').fadeOut(1000);
				$('#score').delay(1000).fadeIn(1000);
			}
		});
	}


	/* Answer feedback and correct answer count */

	function giveFeedback(){
		var checking = $('input:checked').val();
		$('#feedback').html('');
		if (checking == questions[currentQ].correct) {
			qCor++;
			$('#feedback').html('Correct!');
		}
		else {
			$('#feedback').html('Incorrect');
		}
		$('.qright').text(qCor);
	}


	/* Play again */

	$('.again').click(function() {
		qCor = 0;
		currentQ = 0;
		$('#feedback').html('')
		$('#score').fadeOut(1000);
		$('#quiz').delay(1000).fadeIn(2000);
		setFunctionality();
	});


});