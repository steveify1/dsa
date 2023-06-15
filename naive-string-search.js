const countSubstring = (mainString, substring) => {
    if ((substring.length == 0 || mainString.length == 0) && substring.length != mainString.length) {
      return 0;
    }

    let mainLeftPointer = 0;
    let mainRightPoint = 0;
    let substringPointer = 0;
    let currentSequence = "";
    let matches = 0;

    while(mainRightPoint < mainString.length) {
        if (mainString[mainRightPoint] === substring[substringPointer]) {
            currentSequence = currentSequence + substring[substringPointer];
            mainRightPoint++;
            substringPointer++;
        } else {
            currentSequence = "";
            substringPointer = 0;
            mainLeftPointer++;
            mainRightPoint = mainLeftPointer;
        }

        if (currentSequence == substring) {
            matches++;
        }
    }


    return matches;
}

const numSubstrings = countSubstring('I am odogwuakataka one of Anambra state', '');
console.log({ numSubstrings });