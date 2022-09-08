/* ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। , */

console.log(101)
console.log(102)
console.log(103)
setTimeout(() => {
    console.log('this is inside timeout',104)
}, 3500);
console.log(105)
console.log(106)