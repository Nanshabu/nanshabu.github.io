// const insert = document.getElementById('insert')

// window.addEventListener('keydown', (event) => {
//   insert.innerHTML = `
//   <div class="key">
//   ${event.key === ' ' ? 'Space' : event.key} 
//   <small>event.key</small>
// </div>

// <div class="key">
//   ${event.keyCode}
//   <small>event.keyCode</small>
// </div>

// <div class="key">
//   ${event.code}
//   <small>event.code</small>
// </div>
//   `
// })

let insert = document.querySelector('#insert')
console.log(insert)

// key  按键名
// keyCode  按键的编号
// code 按键名复杂
window.addEventListener('keydown', function (event) {
  insert.innerHTML = `
  <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  `

})