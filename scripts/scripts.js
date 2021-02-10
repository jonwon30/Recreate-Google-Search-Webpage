$("#btn3").one("mouseenter", function(e){
    $("#btn3").html(wordsRandom)
    }).one("mouseleave", function(e){
        $("#btn3").html("I'm Feeling Lucky")
    });

let words = [
    "I'm Feeling Trendy",
    "I'm Feeling Quirky",
    "I'm Feeling Adventures",
    "I'm Feeling Curious",
    "I'm Feeling Funny"
]

var randomNumber = Math.floor(Math.random() * (words.length));

let wordsRandom = words[randomNumber];

console.log(wordsRandom)