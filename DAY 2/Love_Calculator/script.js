var yourName = document.getElementById('your_name');
var friendName = document.getElementById('your_friends_name');
var calcBtn = document.querySelector("button");
var friendshipScoreIs = document.getElementById('friendship_score_is');
var friendshipScore = Math.random() * 100;
var frindshipInfo = document.getElementById("friendship_info");
var reload = document.getElementById('reload');
var friendshipForm = document.getElementById('friendship_form');

friendshipScore = Math.floor(friendshipScore) + 1;

function frnd()
{
    function sl(ms)
    {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

(async function()
{
    var i = 0;
    while (i < friendshipScore)
    {
        document.getElementById("friendship_score_is").innerHTML = i + "%";
        await sl(20);
        i++;
    }
}
) ();

friendshipForm.addEventListener("click", function(e){
    friendshipScore = Math.random() * 100;
    e.preventDefault();
    if (yourName.value == "")
    {
        alert("Your mother didn't tell you your name?");
    }
    if (friendName.value == "")
    {
        alert("Thank you for being honest about not having friends: 🙏");
    }
    if (yourName.value == "" || friendName.value == "")
    {
        alert("You can't leave the fields empty!");
    }
})

if (friendshipScore > 80)
{
    alert("YOU ARE BEST FRIENDS!");
}

 else if (friendshipScore > 50)
{
    alert("You are reliable and trustworthy.");
}

else if (friendshipScore > 30)
{
    alert("Just friends (meh..)");
}

else if (friendshipScore > 0)
{
    alert("STAY AWAY! STANGER DANGER!");
}