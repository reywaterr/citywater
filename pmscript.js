



		$('#@pwcontrol@').password({
		  shortPass: 'Senha muito curta. Use mais que 7 caracteres',
		  badPass: 'senha Fraca; combine Letras e Números',
		  goodPass: 'senha Regular; Inclua caracteres especiais @, #, $, !',
		  strongPass: 'senha Forte',
		  containsUsername: 'senha Inválida. Contém seu ID',
		  enterPass: 'Entre sua Senha',
		  showPercent: false,
		  showText: true, // shows the text tips
		  animate: true, // whether or not to animate the progress bar on input blur/focus
		  animateSpeed: 'fast', // the above animation speed
		  username: false, // select the username field (selector or jQuery instance) for better password checks
		  usernamePartialMatch: true, // whether to check for username partials
		  minimumLength: 8 // minimum password length (below this threshold, the score is 0)
		});

		
		
		
	  $('#@pwcontrol@').password({
		  shortPass: 'The password is too short',
		  badPass: 'Weak; try combining letters & numbers',
		  goodPass: 'Medium; try using special charecters',
		  strongPass: 'Strong password',
		  containsUsername: 'The password contains the username',
		  enterPass: 'Type your password',
		  showPercent: false,
		  showText: true, // shows the text tips
		  animate: true, // whether or not to animate the progress bar on input blur/focus
		  animateSpeed: 'fast', // the above animation speed
		  username: false, // select the username field (selector or jQuery instance) for better password checks
		  usernamePartialMatch: true, // whether to check for username partials
		  minimumLength: 4 // minimum password length (below this threshold, the score is 0)
		});
		
		