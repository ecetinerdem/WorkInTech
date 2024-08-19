function myCharacter(answers) {
    let total = 0;
  
    const question1Points = { a: 20, b: 10, c: 5 };
    const question2Points = { a: 10, b: 5, c: 20 };
    const question3Points = { a: 5, b: 20, c: 10 };
    const question4Points = { a: 5, b: 10, c: 20 };
    const question5Points = { a: 10, b: 20, c: 5 };
  
    for (let i = 0; i < answers.length; i++) {
      switch (i) {
        case 0:
          total += question1Points[answers[i]] || 0;
          break;
        case 1:
          total += question2Points[answers[i]] || 0;
          break;
        case 2:
          total += question3Points[answers[i]] || 0;
          break;
        case 3:
          total += question4Points[answers[i]] || 0;
          break;
        case 4:
          total += question5Points[answers[i]] || 0;
          break;
        default:
          break;
      }
    }
  
    if (total >= 80) {
      return 'Cesur';
    } else if (total >= 50) {
      return 'Düşünceli';
    } else {
      return 'Sevimli';
    }
  }