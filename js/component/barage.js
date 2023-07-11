/*
 * @Date: 2023-07-11 10:18:29
 * @Author: WaterRec
 */
const barages = document.querySelectorAll(
  ".barage .text"
);
let color = [
  "var(--blackColor)",
  "var(--grayColor)",
  "var(--yellowColor)",
  "var(--redColor)",
  "var(--greenColor)",
  "var(--darkGreenColor)",
  "var(--pinkColor)",
  "var(--blueColor)",
  "var(--darkBlueColor)",
  "var(--redOrangeColor)",
  "var(--deepRedColor)",
];
const changeTop = (entries) => {
  entries.forEach((entry) => {
    // 看不见的时候  注: 回调带的实例可以查看isIntersecting判断是否可视
    if (entry.isIntersecting) {
      console.log("我出现了");
    } else {
      // entry实例中的target为目标dom节点
      const dom = entry.target;
      // 生成一个随机高度
      dom.style.top = Math.random() * 100 + "%";
      // 随机一个颜色
      dom.style.color =
        color[parseInt(Math.random() * 10)];
      console.log("我消失了");
    }
  });
};
const observer = new IntersectionObserver(
  changeTop
);

barages.forEach((item, index) => {
  let s = item.attributes[1].value;
  console.log(s);
  // 顺便添加动画属性 区分一下动画时间(依照字符长度)
  let l =
    item.textContent.length / 1.3 +
    Math.random() * 2;
  item.style.animation = `barageMove ${l}s linear infinite`;
  // 给每个元素添加监听
  observer.observe(item);
});
