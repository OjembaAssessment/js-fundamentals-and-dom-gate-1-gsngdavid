console.log("Exercise 2 - Word Cloud");

const paragraph = document.getElementById('myParagraph');
const wordCloud = document.getElementById('myWordCloud');

function topTwelveWords(text) {
    const newText = text.toLowerCase().replace(/[^\w ']/g, '').replace(/ +/g, ' ').trim();
    const wordArray = newText.split(' ');
    const wordCount = wordArray.reduce((obj, cur) => {
        obj[cur] = obj[cur] >= 1 ? obj[cur] + 1 : 1;
        return obj;
    }, {});
    
    const wordCountArray = Object.entries(wordCount);
    const sortedWords = wordCountArray.sort((a, b) => b[1] - a[1]);

    return sortedWords.slice(0, 12).map(arr => arr[0]);
}

const topTwelve = topTwelveWords(paragraph.textContent);

const fragment = document.createDocumentFragment();

topTwelve.forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.classList.add(`word${index + 1}`)
    fragment.appendChild(span);
});

wordCloud.appendChild(fragment);