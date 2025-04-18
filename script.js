let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#newBtn");
let msgCon = document.querySelector(".msgCon");

let turnO = true;

const winPatterns =
[   [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]   ]

const resetGame = () =>
    {
        turnO = true;
        enableBoxes();
        winner.style.visibility = "hidden";
        newBtn.style.visibility = "hidden";
    }    

boxes.forEach((box) =>
    box.addEventListener("click",
        () =>
        {
            if(turnO == true)
            {
                box.innerText = 'O';
                turnO = false;
            }
            else{
                box.innerText = 'X';
                turnO = true;
            }

            box.disabled = true;

            checkWinner();
            
        }
    )
)

const disableBoxes = () =>
{
    for( let box of boxes)
    {
        box.disabled = true;
    }
}

const enableBoxes = () =>
    {
        for( let box of boxes)
        {
            box.disabled = false;
            box.innerText = '';
            msgCon.classList.add("hide");
        }

    }

const showWinner = (winner) =>
{
    msg.innerText = `Congratulations! , Winner is ${winner}`;
    msgCon.classList.remove("hide");
}

const checkWinner = () =>
{
    for( let pattern of winPatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != '')
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                showWinner(pos1);
        }
    }
}
}

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

