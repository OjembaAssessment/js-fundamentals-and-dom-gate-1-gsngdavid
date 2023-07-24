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

    console.log(sortedWords.slice(0, 5));

    return sortedWords.slice(0, 5).map(arr => arr[0]);
}
 

const topFive = topFiveWords(text.innerHTML);

text.innerHTML = text.innerHTML.replace(/\w+/g, match => {
    if (topFive.includes(match)) {
        return `<span style='background-color: red'>${match}</span>`
    }
    return match;
});
