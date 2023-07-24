console.log("Exercise 1 - Word Highlighter");

const text = document.getElementById('myParagraph');


function topFiveWords(text) {
    const newText = text.toLowerCase().replace(/[^\w ']/g, '').replace(/ +/g, ' ').trim();
    const wordArray = newText.split(' ');
    const wordCount = wordArray.reduce((obj, cur) => {
        obj[cur] = obj[cur] >= 1 ? obj[cur] + 1 : 1;
        return obj;
    }, {});
    
    const wordCountArray = Object.entries(wordCount);
    const sortedWords = wordCountArray.sort((a, b) => b[1] - a[1]);

    return sortedWords.slice(0, 5).map(arr => arr[0]);
}
 

const topFive = topFiveWords(text.innerHTML);

text.innerHTML = text.innerHTML.replace(/\w+/ig, match => {
    if (topFive.includes(match.toLowerCase())) {
        return `<span style='background-color: rgba(0, 0, 0, 0.2)'>${match}</span>`
    }
    return match;
});

const highlighted = document.querySelectorAll('[style]');

highlighted.forEach(el => {
    const firstChar = el.textContent[0];
    if(firstChar === firstChar.toUpperCase()) {
        el.style.textDecoration = 'underline';
    }
});
