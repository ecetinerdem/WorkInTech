function getBelowTheAverage(customerReview) {
    let reviewer = [];
    let totalPoints = 0;
  
    // Calculate total points
    for (let i = 0; i < customerReview.length; i++) {
      totalPoints += customerReview[i].puan;
    }
  
    // Calculate average
    let average = totalPoints / customerReview.length;
  
    // Find reviewers with below-average ratings
    for (let i = 0; i < customerReview.length; i++) {
      if (customerReview[i].puan < average) {
        reviewer.push(customerReview[i].isim);
      }
    }
  
    return reviewer;
  }