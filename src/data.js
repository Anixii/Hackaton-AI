import dogWhite from './assets/22222222222222.png' 
export const data = { 
    animals: [
        {type: 'Dog', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
        {type: 'Cat', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
        {type: 'LO', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
        {type: 'AS', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
        {type: 'Dogasd', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
        {type: 'asdDog', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
        {type: 'AAAADosadg', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
    ]
} 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to get 4 random objects from an array 
export function getRandomObjectsFromArray(arr, count = 4) {
    if (count >= arr.length) {
      // If the requested count is greater than or equal to the array length, return the shuffled array
      return shuffleArray(arr);
    } else {
      // Shuffle the array and return the first 'count' elements
      const shuffledArray = shuffleArray(arr);
      return shuffledArray.slice(0, count);
    }
  }