function chainToSwitch(val) {

    let answer = "";

    // Altere apenas o código abaixo desta linha

    /*
    
        if (val === "bob") {
            answer = "Marley";
        } else if (val === 42) {
    
            answer = "The Answer";
    
        } else if (val === 1) {
    
            answer = "There is no #1";
    
        } else if (val === 99) {
    
            answer = "Missed me by this much!";
    
        } else if (val === 7) {
    
            answer = "Ate Nine";
    
        }
    
    */


    switch (val) {

        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;

        /* default:
           answer = "c";*/
    }

    // Altere apenas o código acima desta linha
    return answer;
}

chainToSwitch(7);