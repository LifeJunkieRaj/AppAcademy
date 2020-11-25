/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutest = 0
  let cutestIndx = 0
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
debugger
    if (cat.cuteness > cutest) {
      cutest = cat.cuteness;
      cutestIndx = cat
    }
    i++;
  }

  return cutestIndx;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
