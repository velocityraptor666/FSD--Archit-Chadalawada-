var yourName = document.getElementById('your_name');
var friendName = document.getElementById('your_friends_name');
var calcBtn = document.querySelector("button");
var friendshipScoreIs = document.getElementById('friendship_score_is');
var friendshipInfo = document.getElementById("friendship_info");
var reload = document.getElementById('reload');
var friendshipForm = document.getElementById('friendship_form');

calcBtn.addEventListener("click", async function() {
    var friendshipScore = Math.floor(Math.random() * 100) + 1;

    var i = 0;
    while (i <= friendshipScore) {
        friendshipScoreIs.innerHTML = i + "%";
        await sleep(20);
        i++;
    }

    // Display additional information about the friendship score.
    if (friendshipScore > 80) {
        friendshipInfo.innerHTML = "YOU ARE BEST FRIENDS!";
    } else if (friendshipScore > 50) {
        friendshipInfo.innerHTML = "You are reliable and trustworthy.";
    } else if (friendshipScore > 30) {
        friendshipInfo.innerHTML = "Just friends (meh..)";
    } else {
        friendshipInfo.innerHTML = "STAY AWAY! STRANGER DANGER!";
    }

    // Display the re-calculate link after the animation is done.
    reload.style.display = "block";
});

friendshipForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (yourName.value === "" || friendName.value === "") {
        alert("You can't leave the fields empty!");
    } else {
        // Reset displayed info
        friendshipScoreIs.innerHTML = "";
        friendshipInfo.innerHTML = "";
        reload.style.display = "none";

        // Trigger the animation and result display
        calcBtn.click();
    }
});

// Utility function to introduce a delay using Promises.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}