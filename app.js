
// let words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit.', 'Nullam', 'lectus', 'quam'];

// let result = words.reduce((acc, current, index) => {
//     let word = current;
//     if (index % 2 === 0) {
//         word = current.toUpperCase();
//     }
    // let word = index % 2 === 0 ? current.toUpperCase() : current
//     acc.push(word);
//     return acc;
// }, []).join(' ');

// console.log(result);

// დავალება 2
// let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']
//     let result = words.filter(function(word) 
//     {
//          if(word.indexOf('m') > -1 || word.indexOf('M') > -1) {
//              return true;
//          }
//          false
//      } 
//      )
// console.log(result)

// დავალება 3 

// let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi'];

// let result = words.filter(word => word.toLocaleLowerCase().includes('m'))
// console.log(result)

// დავალება 4

// let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing']

//   let result = items.map(item => {
//       if(typeof item === 'number'){
//           return item * item;
//       }
//       else if (typeof item === 'string') {
//           return item.toUpperCase();
//       }
//       return item
//   }
// )
// console.log(result)

// დავალება 5 

// let users = [
//     {name: 'giorgi', age: 16},
//     {name: 'levani', age: 90},
//     {name: 'nino', age: 30},
//     {name: 'otari', age: 11},
//     {name: 'mari', age: 28}
//   ]
// let result = users
// .filter(item => item.age > 18)
// .map(item => item.name)

// console.log(result)

