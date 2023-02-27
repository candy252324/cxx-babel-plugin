module.exports=()=>{
  return {
    visitor: {
      ArrowFunctionExpression(path) {
        console.log(path)
      },
    },
  }
}