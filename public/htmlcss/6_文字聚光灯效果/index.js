console.log("??");
document.querySelectorAll("h1").forEach(a => {
    // 初始化的时候把背景图片移动到很远的左上角
    a.style.setProperty("--offsetX", `-100px`);
    a.style.setProperty("--offsetY", `-100px`);
    a.addEventListener("mousemove", e => {
        // 鼠标移入时候获取鼠标在元素上的位置(inline-block上获取相对位置)
        e.target.style.setProperty("--offsetX", `${e.offsetX}px`);
        e.target.style.setProperty("--offsetY", `${e.offsetY}px`);
        // console.log(e.target.style);
        console.log(a.style.offsetX);
    });
    a.addEventListener("mouseleave", e => {
        // 移出元素放回左上角
        e.target.style.setProperty("--offsetX", `-100px`);
        e.target.style.setProperty("--offsetY", `-100px`);
    });
});
