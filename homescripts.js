let container = document.getElementById("container");
// create a 3 rows within the container
for(let i = 0; i < 3; i++){
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
    // create 3 columns in each row 
    for(let j = 0; j < 3; j++){
        let col = document.createElement("div");
        col.className = `col col${i}${j}`;
        row.appendChild(col);
    }
}
// create turn counter to keep track of X and O
var turncounter = 0;

// wait until document is ready
$(document).ready(function(){

    //On a click, run tick tac toe game
    $(".col").click(function(){

        // if the game is over, alert the user and prevent clicks
        if(checkForWin() == true){
            alert("The game is over! Refresh the page to play again!");
        }

        // if the game is still running, place symbols and check for wins
        else{
            if($(this).hasClass("x") || $(this).hasClass("o")){
                alert("This box is already taken");
            }
            else{
                if(turncounter % 2 === 0){
                    $(this).addClass("x");
                    turncounter++;
                }
                else{
                    $(this).addClass("o");
                    turncounter++;
                }
                // Alert user if a win or tie occurs
                winnerAlert();
            }
        }

    });

});

function winnerAlert(){
    //Return an Alert ibased on the win
   // check for horizontal wins of x
    if($(".col00").hasClass("x") && $(".col01").hasClass("x") && $(".col02").hasClass("x")){
        alert("X wins!");
    }
    else if($(".col10").hasClass("x") && $(".col11").hasClass("x") && $(".col12").hasClass("x")){
        alert("X wins!");
    }
    else if($(".col20").hasClass("x") && $(".col21").hasClass("x") && $(".col22").hasClass("x")){
        alert("X wins!");
    }
    // check for vertical wins of x
    else if($(".col00").hasClass("x") && $(".col10").hasClass("x") && $(".col20").hasClass("x")){
        alert("X wins!");
    }
    else if($(".col01").hasClass("x") && $(".col11").hasClass("x") && $(".col21").hasClass("x")){
        alert("X wins!");
    }
    else if($(".col02").hasClass("x") && $(".col12").hasClass("x") && $(".col22").hasClass("x")){
        alert("X wins!");
    }
    // check for diagonal wins of x
    else if($(".col00").hasClass("x") && $(".col11").hasClass("x") && $(".col22").hasClass("x")){
        alert("X wins!");
    }
    else if($(".col20").hasClass("x") && $(".col11").hasClass("x") && $(".col02").hasClass("x")){
        alert("X wins!");
    }
    // check for horizontal wins of o
    else if($(".col00").hasClass("o") && $(".col01").hasClass("o") && $(".col02").hasClass("o")){
        alert("O wins!");
    }
    else if($(".col10").hasClass("o") && $(".col11").hasClass("o") && $(".col12").hasClass("o")){
        alert("O wins!");
    }
    else if($(".col20").hasClass("o") && $(".col21").hasClass("o") && $(".col22").hasClass("o")){
        alert("O wins!");
    }
    // check for vertical wins of o
    else if($(".col00").hasClass("o") && $(".col10").hasClass("o") && $(".col20").hasClass("o")){
        alert("O wins!");
    }
    else if($(".col01").hasClass("o") && $(".col11").hasClass("o") && $(".col21").hasClass("o")){
        alert("O wins!");
    }
    else if($(".col02").hasClass("o") && $(".col12").hasClass("o") && $(".col22").hasClass("o")){
        alert("O wins!");
    }
    // check for diagonal wins of o
    else if($(".col00").hasClass("o") && $(".col11").hasClass("o") && $(".col22").hasClass("o")){
        alert("O wins!");
    }
    else if($(".col20").hasClass("o") && $(".col11").hasClass("o") && $(".col02").hasClass("o")){
        alert("O wins!");
    }
    else if(turncounter === 9){
        alert("It's a tie!");
    }

};

function checkForWin(){
    //Return a Boolean based on the user win
    // check for horizontal wins of x
    if($(".col00").hasClass("x") && $(".col01").hasClass("x") && $(".col02").hasClass("x")){
        return true;
    }
    else if($(".col10").hasClass("x") && $(".col11").hasClass("x") && $(".col12").hasClass("x")){
        return true;
    }
    else if($(".col20").hasClass("x") && $(".col21").hasClass("x") && $(".col22").hasClass("x")){
        return true;
    }
    // check for vertical wins of x
    else if($(".col00").hasClass("x") && $(".col10").hasClass("x") && $(".col20").hasClass("x")){
        return true;
    }
    else if($(".col01").hasClass("x") && $(".col11").hasClass("x") && $(".col21").hasClass("x")){
        return true;
    }
    else if($(".col02").hasClass("x") && $(".col12").hasClass("x") && $(".col22").hasClass("x")){
        return true;
    }
    // check for diagonal wins of x
    else if($(".col00").hasClass("x") && $(".col11").hasClass("x") && $(".col22").hasClass("x")){
        return true;
    }
    else if($(".col20").hasClass("x") && $(".col11").hasClass("x") && $(".col02").hasClass("x")){
        return true;
    }
    // check for horizontal wins of o
    else if($(".col00").hasClass("o") && $(".col01").hasClass("o") && $(".col02").hasClass("o")){
        return true;
    }
    else if($(".col10").hasClass("o") && $(".col11").hasClass("o") && $(".col12").hasClass("o")){
        return true;
    }}