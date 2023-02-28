module.exports=()=>{
  return {
    visitor: {
      ArrowFunctionExpression(node) {
        console.log(node.type)
      },
    },
  }
}