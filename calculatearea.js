function totalArea(hightsWiths) {
    let result = 0;
    for (const i of hightsWiths) {
      let indArea = i[0] * i[1];
      result += indArea;
    }
    return result;
  }