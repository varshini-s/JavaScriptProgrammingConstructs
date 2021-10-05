
const player1=0
const player2=1
var player1TossWins=0;
var player2TossWins=0;

while(player1TossWins!=11 && player2TossWins!=11)
{
    let result =  Math.floor(Math.random() * 10)%2;
    if(result==player1)
    {
        player1TossWins++;
    }
    else
    {
        player2TossWins++;

    }
}

if(player1TossWins==11)
{
    console.log("Player 1 wins the game")

}
else
{
    console.log("Player 2 wins the game")

}

