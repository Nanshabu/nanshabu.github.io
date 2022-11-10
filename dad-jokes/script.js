// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click', generateJoke)

// // generateJoke()

// // USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   console.log(res);
//   const data = await res.json()
//   console.log(data)
//   jokeEl.innerHTML = data.joke
// }

//获取文本框
const jokeEl = document.querySelector('#joke')
//获取按钮
const btn = document.querySelector('#jokeBtn')

//敲击按钮 发送请求 返回文本
btn.addEventListener('click', generateJoke)

async function generateJoke(){
  // console.log("111");
  let config = {
        headers: {
          Accept: 'application/json',
        },
  }

  let res = await fetch('https://autumnfish.cn/api/joke/list?num=1')
  console.log(res);
  let data = await res.json()
  console.log(data)

  jokeEl.innerHTML = data.data
}




// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
