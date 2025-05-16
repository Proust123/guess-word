const words = ['Python', 'Javascript', 'Swift']
const object = {}
const message = document.querySelector('.message')
const out1 = document.querySelector('.output1')
const out2 = document.querySelector('.output2')
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    message.innerHTML = ''
    out1.innerHTML = ''
    out2.innerHTML = ''

    if(words.length > 0){
        btn.style.display = 'none'

        words.sort(() => {
            return 0.5 - Math.random()
        })

        let toshow = words.shift()
        object.word = toshow.split('')
        makeStructure()

    }else{
        message.style.color = 'black'
        message.innerHTML = 'No More Words'
        btn.style.display = 'none'
    }
    })

    function makeStructure() {
        object.word.forEach((eachLetter) => {
            const div = document.createElement('div')
            div.classList.add('letter2')
            div.innerHTML = '_'
            div.myLetter = eachLetter
            out2.appendChild(div)        
        });
        fullWord = document.querySelectorAll('.letter2')

        for(let i = 0; i < 26; i++){
            const alphabets = String.fromCharCode(65 + i)
            const div = document.createElement('div')
            div.classList.add('letter')
            div.myLetter = alphabets
            
            let handler = function (e) {
                div.removeEventListener('click', handler)
                div.classList.add('done')
                let counter = 0
                let guess = 0
    
                fullWord.forEach((alph) => {
                    if(alph.innerHTML != '_'){
                        counter++ // ye _ jo fill hotay hain unn ko count kr rha hai e.g JAVASCRIPT KA COUNTER 9 HO KYU K 0 SY START HOA COUNTER
                    }
                    if(alph.myLetter.toUpperCase() === alphabets){  //yahan output1 ko compare kiya hai hai output2 sy
                        alph.innerHTML = alphabets
                        guess++ //ye poura word jb guess ho jata hai tou 1 hota hai
                    }
    
                    let letterLeft = fullWord.length - (guess + counter);  //agar letters baqi 0 ya zero sy kam mtlb negative bhi tou button display ho jye


                    if(letterLeft.length < 1){
                        btn.style.display = 'block'
                    }
    
                })
    
            }
            div.innerHTML = alphabets
            div.addEventListener('click', handler)
            out1.appendChild(div)
        }


    }


