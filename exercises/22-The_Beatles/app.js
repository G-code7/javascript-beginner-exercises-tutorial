function sing() {
    let repeatedPhrase = "let it be";
    let lyrics = "";

    for (let i = 0; i < 4; i++) {
        lyrics += repeatedPhrase + ", ";
    }
    
    lyrics += "there will be an answer, " + repeatedPhrase + ", ";

    for (let i = 0; i < 4; i++) {
        lyrics += repeatedPhrase + ", ";
    }

    lyrics += "whisper words of wisdom, " + repeatedPhrase;

    return lyrics;
}

console.log(sing());