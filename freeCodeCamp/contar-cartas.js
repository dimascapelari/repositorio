let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  if (card <= 6) {
    count++;
  }
  else if (card >= 7 && card <= 9) {
  }
  else {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  }
  else {
    return count + " Hold";
  }

  return "Change Me";
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');