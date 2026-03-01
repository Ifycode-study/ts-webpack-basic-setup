
// Webpack generated the .js from my ts code.

import { formData } from './forms';

const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

// Uncomment this code below when you want to practice debugging with eval source map as shown in video #6 at: https://www.youtube.com/watch?v=Gb9_yBWql24&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=7
// const person: any = {};
// console.log(person.speak());

// console.log('Hello World!');
