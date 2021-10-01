fetch("https://icanhazdadjoke.com/slack")

.then(data=> data.json()) //converting the data into json
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement=document.getElementById('joke-element')
    jokeElement.innerHTML=jokeText;
})