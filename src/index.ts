
// Webpack generated the .js from my ts code.

import { formData } from './forms';

const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

console.log('Hello .... kldfkd');
console.log('World!')
