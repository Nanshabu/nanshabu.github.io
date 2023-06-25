const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')    //calssList.toggle方法对class进行切换：有切无，无切有
        // console.log(toggle.parentNode.classList)
    })
})