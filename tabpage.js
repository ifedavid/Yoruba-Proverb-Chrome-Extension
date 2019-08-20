console.log(data);
	var random = Math.floor(Math.random() * 48);
	 document.getElementById('proverb').innerHTML = data[random].proverb;
	 document.getElementById('translation').innerHTML ="Translation: " + data[random].translation;
	 document.getElementById('meaning').innerHTML = "Meaning: " + data[random].meaning;