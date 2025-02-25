let body = document.querySelector("body");
let box = document.querySelectorAll(".box")
let resetgame = document.querySelector("#reset")
let newgame = document.querySelector("#new")
let msgcontainer = document.querySelector(".msgwinner")
let msg = document.querySelector("#msg")


//player X and player O 
let turn0 = true;

const possibles = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const reset = () =>
{
    turn0 = true;
    enable();
    msgcontainer.classList.add("msgwinner")

}

const disable = () =>
{
    for(val of box )
    {
        val.disabled = true;
    }
}


const enable = () =>
{
    for(val of box )
    {
        val.disabled = false;
        val.innerText = "";
    }
}

const showwinner = (winner) =>
{
    msg.innerText = `Winner ${winner}`;
    disable();
    msgcontainer.classList.remove("msgwinner"); 
}

const winner = () => 
{
    for(let pos of possibles)
    {
        let pos1 = box[pos[0]].innerText
        let pos2 = box[pos[1]].innerText
        let pos3 = box[pos[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != "" )
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                console.log("Winner",pos1);
                
                showwinner(pos1);
            }
            
        }
    }
}
box.forEach((val) => 
{
    val.addEventListener("click",() =>
    {
        // console.log("Working");
        if(turn0 == true)
        {
            val.innerText = "O"
            turn0 = false;
            
        }
        else
        {
            val.innerText = "X"
            turn0 = true;
        }
        val.disabled = true;

        winner();
    });
});

resetgame.addEventListener("click",() => reset())
newgame.addEventListener("click",() => reset())