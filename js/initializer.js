function setWords() {
    return ["ABDOMINAL", "AGENDA", "ARTIFICIAL", "COMBUSTIBLE", "FEDERAL", "INFORMAL", "MELON", "NOBLE", "SINGULAR"]
}
let wordSelector = new words.RanWord(setWords());
let vKeyboard = new keyboard.keys();
let currentword = wordSelector.setWord();
//vKeyboard.setKeyboard("bottom");
vKeyboard.setForm("form", currentword);


