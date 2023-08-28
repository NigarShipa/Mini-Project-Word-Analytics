'using strict'
const textareaElement=document.querySelector('.textarea');
const charactersNumberElement=document.querySelector('.stat__number--characters');
const twitterNumberElement=document.querySelector('.stat__number--twitter');
const facebookNumberElement=document.querySelector('.stat__number--facebook');
const wordsNumberElement=document.querySelector('.stat__number--words');


const inputHandler = () =>{
//input validation
if(textareaElement.value.includes('<script>'))
{
    alert("please don't use <script>");
    textareaElement.value=textareaElement.value.replace('<script>','');
}
//new numbers
let numberOfWords=textareaElement.value.split(' ').length;
if(textareaElement.value.length===0)
{
    numberOfWords=0;
}
const numberOfCharacters=textareaElement.value.length;
const twitterCharacterLeft=200-numberOfCharacters;
const facebookCharacterLeft=300-numberOfCharacters;             
//if facebook and twitter limit exceeded then show red colour 

twitterCharacterLeft < 0
    ? twitterNumberElement.classList.add('stat__number--limit')
    : twitterNumberElement.classList.remove('stat__number--limit');
/*if(twitterCharacterLeft < 0)
{
 twitterNumberElement.classList.add('stat__number--limit');
}
else
{
    twitterNumberElement.classList.remove('stat__number--limit');
}*/
facebookCharacterLeft < 0
    ? facebookNumberElement.classList.add('stat__number--limit')
    : facebookNumberElement.classList.remove('stat__number--limit');
//set new numbers
wordsNumberElement.textContent=numberOfWords;
charactersNumberElement.textContent=numberOfCharacters;
twitterNumberElement.textContent=twitterCharacterLeft;
facebookNumberElement.textContent=facebookCharacterLeft;
}

textareaElement.addEventListener('input',inputHandler);
