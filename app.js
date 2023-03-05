const cardArray = [
    {
    name: 'guy1',
    img: 'https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/guy-fieri/FN-TalentAvatar-Guy-Fieri-colorblock.jpg.rend.hgtvcom.616.616.suffix/1531174403377.jpeg'
    },
    {
    name: 'guy2',
    img: 'https://media.gq.com/photos/59dfc6d9d61cb80476584e18/3:4/w_507,h_676,c_limit/guy-fieiri-flame.jpg'
    },
    {
    name: 'guy3',
    img: 'https://media.cntraveler.com/photos/606f552c2b709df096e50a3e/16:9/w_2560%2Cc_limit/2BH50GM-2.jpg'
    },
    {
    name: 'guy4',
    img: 'https://www.foodandwine.com/thmb/VnRj5XPozwXYFluAceqpvS4Kv_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guy-Fieri-Super-Bowl-Menu-XL-BLOG0123-2612ce2f05904d4c8e153cd24d8b79bd.jpg'
    },
    {
    name: 'guy5',
    img: 'https://www.mashed.com/img/gallery/guy-fieris-transformation-is-seriously-turning-heads/intro-1623266516.jpg'
    },
    {
    name: 'guy6',
    img: 'https://brobible.com/wp-content/uploads/2022/07/guy-fieri-smokes-cigar.jpg'
    },
    {
    name: 'guy1',
    img: 'https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/guy-fieri/FN-TalentAvatar-Guy-Fieri-colorblock.jpg.rend.hgtvcom.616.616.suffix/1531174403377.jpeg'
    },
    {
    name: 'guy2',
    img: 'https://media.gq.com/photos/59dfc6d9d61cb80476584e18/3:4/w_507,h_676,c_limit/guy-fieiri-flame.jpg'
    },
    {
    name: 'guy3',
     img: 'https://media.cntraveler.com/photos/606f552c2b709df096e50a3e/16:9/w_2560%2Cc_limit/2BH50GM-2.jpg'
    },
    {
    name: 'guy4',
    img: 'https://www.foodandwine.com/thmb/VnRj5XPozwXYFluAceqpvS4Kv_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Guy-Fieri-Super-Bowl-Menu-XL-BLOG0123-2612ce2f05904d4c8e153cd24d8b79bd.jpg'
    },
    {
    name: 'guy5',
    img: 'https://www.mashed.com/img/gallery/guy-fieris-transformation-is-seriously-turning-heads/intro-1623266516.jpg'
    },
    {
    name: 'guy6',
    img: 'https://brobible.com/wp-content/uploads/2022/07/guy-fieri-smokes-cigar.jpg'
    } 
    
]


const game = document.querySelector('.game')
const cardsPicked = []
const cardsPickedId = []
const winner = []


function gameBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'https://www.sweasy26.com/emojis/geometry/blue-square.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        game.appendChild(card)
    }
}

function flipCard() {
    const pickId = this.getAttribute('data-id')
    cardsPicked.push(cardArray[pickId].name)
    cardsPickedId.push(pickId)
    this.setAttribute('src', cardArray[pickId].img)
    if (cardsPicked.length === 2){
        setTimeout(checkForMatch, 500)
    }

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsPickedId[0]
    const optionTwoId = cardsPickedId[1]
    if (cardsPicked[0] === cardsPicked[1]) {
        alert("It's a match!")
        cards[optionOneId].setAttribute('src', 'https://media.npr.org/assets/img/2011/05/21/ap110520018042_custom-8fbb1ec5b25461f081f09a9464d46e66962126a4.jpg')
        cards[optionTwoId].setAttribute('src', 'https://media.npr.org/assets/img/2011/05/21/ap110520018042_custom-8fbb1ec5b25461f081f09a9464d46e66962126a4.jpg')
    winner.push(cardsPicked)
    }
    else {
        cards[optionOneId].setAttribute('src', 'https://www.sweasy26.com/emojis/geometry/blue-square.png')
        cards[optionTwoId].setAttribute('src', 'https://www.sweasy26.com/emojis/geometry/blue-square.png')
        alert ('Try again')
    }
    }
}

cardArray.sort(() => 0.5 - Math.random())

gameBoard()

