import dogWhite from './assets/22222222222222.png' 
import rabbit from './assets/photo_2023-08-05_14-07-12 (3).jpg'
import cat from './assets/photo_2023-08-05_14-07-11 (2).jpg'
import gerouph from './assets/photo_2023-08-05_14-07-11.jpg'
import cow from './assets/photo_2023-08-05_14-07-12 (2).jpg'
import bird from './assets/photo_2023-08-05_14-07-13.jpg'
import chichken from './assets/photo_2023-08-05_14-07-12.jpg'
export const data = { 
    animals: [
        {type: 'Dog', action: 'Standing on paws',picture: dogWhite,color: 'White'},       
        {type: 'Cat', action: 'Standing on paws',picture: cat,color: 'White'},       
        {type: 'Rabbit', action: 'Standing on paws',picture: rabbit,color: 'White'},       
        {type: 'Giraffe', action: 'Standing on paws',picture: gerouph,color: 'yellow and brown'},       
        {type: 'Bull', action: 'Standing on paws',picture: cow,color: 'White'},       
        {type: 'Rooster', action: 'Standing on paws',picture: chichken,color: 'White'},       
        {type: 'Callibrie', action: 'Standing on paws',picture: bird,color: 'White'},       
    ],
    
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