const cardArray = 
[
    {name: 'armut', img: 'images/armut.png'},
    {name: 'elma', img: 'images/elma.jpg'},
    {name: 'kiraz', img: 'images/kiraz.jpg'},
    {name: 'muz', img: 'images/muz.png'},
    {name: 'portakal', img: 'images/portakal.jpg'},
    {name: 'uzum', img: 'images/uzum.jpg'},
    {name: 'armut', img: 'images/armut.png'},
    {name: 'elma', img: 'images/elma.jpg'},
    {name: 'kiraz', img: 'images/kiraz.jpg'},
    {name: 'muz', img: 'images/muz.png'},
    {name: 'portakal', img: 'images/portakal.jpg'},
    {name: 'uzum', img: 'images/uzum.jpg'},
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let score = document.getElementById('score')
let cardChosen = []
let cardChosenID = []
const cardWon = []


function createBoard()
{
    for(let i=0;i<cardArray.length;i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src' , 'images/blank.jpg')
        card.setAttribute('data-id' , i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch()
{
    const cards = document.querySelectorAll('#grid img')

    const optionOneID = cardChosenID[0]
    const optionTwoID = cardChosenID[1]

    if(cardChosen[0] === cardChosen[1])
    {
        cards[optionOneID].setAttribute('src', 'images/white.jpg')
        cards[optionTwoID].setAttribute('src', 'images/white.jpg')
        cards[optionOneID].removeEventListener('click', flipCard)
        cards[optionTwoID].removeEventListener('click', flipCard)
        cardWon.push(cardChosen)
    }
    else
    {
        cards[optionOneID].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoID].setAttribute('src', 'images/blank.jpg')
    }

    score.textContent = cardWon.length
    cardChosen = []
    cardChosenID = []
    if(cardWon.length == cardArray.length/2)
    {
        score.innerHTML = 'Tebrikler Kazandınız!'
    }

}

function flipCard()
    {
        const cardID = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardID].name)
        cardChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)

        if(cardChosen.length ==2)
        {
            setTimeout(checkMatch, 500)
        }
    }