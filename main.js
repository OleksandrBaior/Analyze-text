// const text = `The Tao gave birth to machine language.  Machine language gave birth to the assembler.  The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"`
const text = '';

const selectedLetters = []
const uniqueLetter = []


function selectUniqueLetters(text) {
    let wordsArr = text.split(' ')
    // console.log(wordsArr);

    for (const word of wordsArr) {
        let wordArr = word.split('')
        // console.log(wordArr);
            let firstNonRepeating = wordArr.find((item) => {
                return wordArr.indexOf(item) === wordArr.lastIndexOf(item);
            });
            selectedLetters.push(firstNonRepeating)
    }
}
       
function getUniqueLetter(letterArr) {
    console.log(letterArr);
    const result = letterArr.find((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
    console.log(result);
   
    return result
}



// selectUniqueLetters(text)
// getUniqueLetter(selectedLetters)



const button = document.querySelector('button');

button.addEventListener('click', () => {
 
    let text = document.getElementById('FormControlTextarea1').value;
   
    selectUniqueLetters(text)
    let uniqueChar = getUniqueLetter(selectedLetters)
        if (uniqueChar == undefined) {
          uniqueChar = selectedLetters[0]
        }
    // button.textContent = `Unique char is : ${uniqueChar}`
  
    var result = document.getElementsByClassName('modal-body'); 
    result[0].innerHTML = uniqueChar
  
    uniqueChar = ''
    selectedLetters.length = 0;
});






