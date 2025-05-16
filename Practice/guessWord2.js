const languages = ['Python', 'Javascript', 'Swift']
const object = {}
const out1 = document.querySelector('.output1')
const out2 = document.querySelector('.output2')
const message = document.querySelector('.message')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    out1.innerHTML = ''
    out2.innerHTML = ''
    message.innerHTML = ''

    btn.style.display = 'none'

    if(languages.length > 0){
        languages.sort(() => {
            return 0.5 - Math.random()
        })
    
        let toShowWord = languages.shift()
        object.puzzleWord = toShowWord.split('')
        makeStructure()
    }else{
        message.style.color = 'black'
        message.innerHTML = 'No More Words'
        message.style.display = 'block'
    }

})

function makeStructure(){
    object.puzzleWord.forEach((eachLetter) => {
        const div = document.createElement('div')
        div.classList.add('letter2')
        div.innerHTML = '_'
        div.myLetter = eachLetter
        out2.appendChild(div)
    });

    solvedWord = document.querySelectorAll('.letter2')

    for(let i = 0; i < 26; i++){
        const alphabets = String.fromCharCode(65 + i)
        const div = document.createElement('div')
        div.classList.add('letter')
        // div.myLetter = alphabets
        
        
        const handler = function () {
            div.removeEventListener('click', handler)
            div.classList.add('done')
            let guess = 0
            let counter = 0

            solvedWord.forEach((oneWord) => {
                if(oneWord.innerHTML != '_'){
                    counter++
                }
                if(oneWord.myLetter.toUpperCase() === alphabets){
                    oneWord.innerHTML = alphabets
                    guess++
                }
                
                let lettersLeft = solvedWord.length - (counter + guess)
                if(lettersLeft < 1){
                    btn.style.display = 'block'
                }
                
            })

        }
        
        
        div.addEventListener('click', handler)
        div.innerHTML = alphabets
        out1.appendChild(div)

    }

}