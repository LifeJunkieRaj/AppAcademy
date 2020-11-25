function whisper(str) {
    let whisperString = "..." + str.toLowerCase() + "..."
    return whisperString;
};

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."
