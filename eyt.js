function eytDetaylari(employeeList) {
    const eligibleForRetirement = [];
    const remainingEmployees = [];
    let totalRemainingSalary = 0;
  
    for (const [
      name,
      gender,
      entryDate,
      insuredYears,
      premiumDays,
      currentSalary,
    ] of employeeList) {
      const currentYear = new Date().getFullYear();
      const isEligible =
        entryDate <= 1999 &&
        premiumDays >= 5000 &&
        ((gender === 'Man' && insuredYears >= 25) ||
          (gender === 'Woman' && insuredYears >= 20));
  
      if (isEligible) {
        eligibleForRetirement.push(name);
      } else {
        remainingEmployees.push(name);
        totalRemainingSalary += currentSalary;
      }
    }
  
    return [eligibleForRetirement, remainingEmployees, totalRemainingSalary];
  }