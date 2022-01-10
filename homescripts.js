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
var turncounter = 0;
$(document).ready(function(){

    $(".col").click(function(){
        if(checkForWin() == true){
            alert("The game is over! Refresh the page to play again!");
        }
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
                winnerAlert();
            }
        }

    });

});

function winnerAlert(){
    /*
    horizonal wins are col00, col01, col02
    horizontal wins are col10, col11, col12
    horizontal wins are col20, col21, col22
    vertical wins are col00, col10, col20
    vertical wins are col01, col11, col21
    vertical wins are col02, col12, col22
    diagonal wins are col00, col11, col22
    diagonal wins are col20, col11, col02
    */
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