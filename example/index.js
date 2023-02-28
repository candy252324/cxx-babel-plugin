// 没有花括号，加上花括号 和 return
const sum = (a, b) => a + b
// this 提升
const sum1 = (a, b) => {
  console.log(this)
  function abc(){
    console.log(this)
  }
}
// this 提升
function a() {
  const sum = () => console.log(this)
}