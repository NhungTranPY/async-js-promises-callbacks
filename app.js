const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, duration)
  })
  return promise
}

function trackUserHandler() {
  // console.log('Clicked!');
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log(posData);
      }, 2000)
    }, 
    error => {
      console.log(error);
  })
  setTimeout(() => {
    console.log('Timer done!');
  }, 0)
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0

// for (let i = 0; i < 100000000; i++) {
//   result += i
// }

// console.log(result);