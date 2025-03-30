document.getElementById('yenerator-btn').addEventListener('click', function() {
    const tweetDisplay = document.getElementById('tweet-display');
    const yeSound = document.getElementById('ye-sound');

    // Play the sound clip
    yeSound.currentTime = 0; // Reset the audio to the beginning
    yeSound.play().catch(error => {
        console.error("Error playing sound:", error);
    });

    // Predefined tweets
    const sampleTweets = [
        "I feel like I'm too busy writing history to read it.",
        "I am the number one human being in music. That means any person in the world who listens to my music or writes about me is just a total idiot.",
        "I still think I am the greatest.",
        "I love sleep; it's my favorite.",
        "My greatest pain in life is that I will never be able to see myself perform live."
    ];

    const randomTweet = sampleTweets[Math.floor(Math.random() * sampleTweets.length)];
    tweetDisplay.innerHTML = `<p>"${randomTweet}"</p>`;
});
