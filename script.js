document.getElementById('yenerator-btn').addEventListener('click', function() {
    const tweetDisplay = document.getElementById('tweet-display');
    const yeSound = document.getElementById('ye-sound');

    // Play the sound clip
    yeSound.currentTime = 0; // Reset the audio to the beginning
    yeSound.play().catch(error => {
        console.error("Error playing sound:", error);
    });

    // Placeholder for fetching a random tweet
    // Since I can't access https://yzy-twts.com/, you'll need to implement the logic to fetch tweets
    // For now, I'll simulate a random tweet display
    const sampleTweets = [
        "I am the greatest artist of all time. #Yehoova",
        "Imma let you finish, but $Hoova is the best memecoin ever!",
        "Yeezy taught me. Now $Hoova teaches the world.",
        "I feel like Pablo, but with more $Hoova vibes.",
        "Yehoova is the future. Believe that."
    ];

    const randomTweet = sampleTweets[Math.floor(Math.random() * sampleTweets.length)];
    tweetDisplay.innerHTML = `<p>"${randomTweet}"</p>`;
});