
function getAverage(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
                let num = nums[i];
                sum += num
    }
    return sum/nums.length
  }

  

  // TESTS
  // DO NOT MODIFY ANYTHING BELOW THIS LINE

  const arrayA = [1, 2, 3, 4, 5];
  const arrayB = [10000, -9998];
  const arrayC = [2, 100, 55, 19];
  const arrayD = [4, 8, 12];

  let score = 0;

  if (getAverage(arrayA) === 3) score++;
  if (getAverage(arrayB) === 1) score++;
  if (getAverage(arrayC) === 44) score++;
  if (getAverage(arrayD) === 8) score++;

  console.log("You have scored " + score + "/7 points.");
