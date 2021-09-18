// set Player Name and start game
document.querySelector('.splash-screen span').onclick=function(){
    let name = prompt("Enter Your Name");
    if(name == '' || name == null){
        document.querySelector('.name span').innerHTML='Unknown';
    }else{
        document.querySelector('.name span').innerHTML=name;
   
    }
    document.querySelector('.splash-screen').remove();

}

///////////////// Main Variables////////////////////////////

let duration =1000;

let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...blocks.keys()];
// OR
//let orderRange = [...Array(blocks.length).keys()];
console.log(orderRange);
shuffle(orderRange)
console.log(orderRange);
////////// Add order Property ////////////////////

blocks.forEach((block,index)=>{
    block.style.order=orderRange[index];
    block.addEventListener('click',function(){
        flipCards(block);
    })
});




// Flip Function 

function flipCards (card){
    card.classList.add('is-flipped');
    let AllfilppedCards = blocks.filter(filppedCard => filppedCard.classList.contains('is-flipped'));
    if(AllfilppedCards.length === 2){
        stopClicking()
        checkMatchedBlocks(AllfilppedCards[0],AllfilppedCards[1])
        console.log('2 Flipped Cards');
    }
}

// Stop Clicking 

function stopClicking(){
    // add Class No clicking
    blocksContainer.classList.add('no-clicking');

    // remove class no clicking
    setTimeout(()=>{

        blocksContainer.classList.remove('no-clicking');
    },duration)
}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {

    let triesElement = document.querySelector('.tries span');
  
    if (firstBlock.dataset.name === secondBlock.dataset.name) {
  
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
  
    //   document.getElementById('success').play();
  
    } else {
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
  
      setTimeout(() => {
  
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, duration);
  
    //   document.getElementById('fail').play();
  
    }
  
  }
// Shuffle Elements

function shuffle(array){
    let current  = array.length;
    let temp;
    let random;


    while(current > 0){
        //get random Number 
        random = Math.floor(Math.random()*current);
        current--; 
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;

    }
    // console.log(array);
    return array;
}