function removeItems(array) {
    const newArray = array.slice(2, -2);
    if (newArray.length % 2 !== 0) {
      let middleIndex = Math.floor(newArray.length / 2);
      newArray.splice(middleIndex, 1);
      return newArray;
    } else if (newArray.length % 2 === 0) {
      return newArray;
    }
  }