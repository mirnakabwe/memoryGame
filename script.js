




//create my array of cards
let cardsArray = ['denim.jpg', 'denim.jpg', 'orange.jpg' , 'orange.jpg' , 'yellow.jpg', 'yellow.jpg'];
document.getElementsByClassName("myimages").src = cardsArray;





let storeMyValues = []; // empty array that stores all the memory values 
let empty = []; //empty array that stores memory card ids
let picturesFlipped = 0; //keep track of how many cards are flipped




//Shuffle through all the cards
function shuffle(array)
{
   let now = array.length;
   let  changingVal; 
   let  random;
    
    

    while (now !== 0) 
    {
        random = Math.floor(Math.random() * now);
        now = now - 1;
        changingVal = array[now];
        array[now] = array[random];
        array[random] = changingVal;
    }

    return array;
};
//Shuffle through all the cards





////////////delete/////////////
/*

(function shuffle() {
  cardsArray.forEach(card => {
    let randomPos = Math.floor(Math.random() * 6);
    card.style.order = randomPos;
  });
})();
*/

/////////////////////////////




// Cards are shuffled when page is refreshed or when it loads
document.body.onload = startGame();

    
//Function for generating a new board    
function startGame()
{
    //make the picturesFlipped back to 0 each time a new board is generated.
	picturesFlipped = 0; 
	let output = ''; // create an empty varaible for the output
    
    
    
     // shuffle cards - run this line to shuffle the array
    cardsArray = shuffle(cardsArray);
    
    
    ////////////delete////////////
    //cardsArray = shuffle();
    /////////////////////////////
    
    
    

    

    //looping over all of the cards
	for(let i = 0; i < cardsArray.length; i++)
    {
        
        /*we then add  all of the little divs that represent each card to the output variable. So the first div will have an id of i_0 then i_1 and so on then each card/div is given an onlick event and a new function (checkCards) is put in place and that is the function responsible for flipping the cards over. we send in 2 arguments in the function the this(represents the div being accessed) and the other is the cardsArray which represents each of the cards in the array */
        
		output = output + '<div id="card_'+i+'" onclick= "checkCards(this,\'' + cardsArray[i] + '\')"></div>';
	}
    
    //we then put the output in the grid
	document.getElementById("myGrid").innerHTML = output;
}




//Flipping my cards

/*We grab the 2 arguments from the checkcards function and put it in as arguments*/
function checkCards(card,item)
{
    //we check to see if the card is empty and if my array has less than 2 values
	if(card.innerHTML == "" && storeMyValues.length < 2){
        
        //when the card is clicked we change the background
		card.style.background = '#FFF';
        
        
        
        //place the value inside the innerHTML so that when its flipped we also get the value showed
		card.innerHTML ="<img src='../images/"+ item +"' id='denim'  class='myimages'/> "
        
    
        
        
        
        
        //This checks if the storeMyValues array is empty if it is - we push the new value inside
		if(storeMyValues.length == 0)
        {
			storeMyValues.push(item); // we then push item in the array here
			empty.push(card.id);  //empty array represents or takes in the cards that the user clicks 
		}
        
        
        //else if a card is already clicked or in the array it means that the user is clicking the second card
            else if(storeMyValues.length == 1) 
        {
			storeMyValues.push(item); //push the card value of the second card clicked in the array
			empty.push(card.id);
            
            
            //if we have a match then add two to the cards flipped variable and cards must stay flipped over
			if(storeMyValues[0] == storeMyValues[1])
            {
				picturesFlipped += 2;
                
				//then clear both arrays and get them ready for a new matching sequence
				storeMyValues = [];
            	empty = [];
                
                
                
				// Checks to see if all the cards are flipped over
				if(picturesFlipped == cardsArray.length)
                {
                    
					alert("Congratulations!!!! You have matched all the pictures");
                
                    //clear the grids inner html completly and start a brand new game
					document.getElementById('myGrid').innerHTML = "";
					startGame();
				}
			} 
                else 
            {
                
                
                
                //if the match is not made - so if the user flips cards that are don't matched
				function changeCards()
                {
        
				    // both cards are flipped 
				    var card_1 = document.getElementById(empty[0]);
				    var card_2 = document.getElementById(empty[1]);
                    
				    card_1.style.background = 'url(../images/shapes.jpg) no-repeat';
            	    card_1.innerHTML = "";
				    card_2.style.background = 'url(../images/shapes.jpg) no-repeat';
            	    card_2.innerHTML = "";
                    
                    
				    // Clear both arrays after cards are flipped back over
				    storeMyValues = [];
            	    empty = [];
				}
                
				setTimeout(changeCards, 1200); //time before cards flip back - assigned just over 1 second
			}
		}
	}
}















