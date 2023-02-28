const types=require("@babel/types")

module.exports=()=>{
  return {
    visitor: {
      ArrowFunctionExpression(path) {
        const { node } = path // 我们要操作的是节点，先取到节点
        node.type = 'FunctionExpression'
        // 如果没有花括号，加上花括号
        const body = node.body
        // 如果没有花括号，加上花括号
        if (!types.isBlockStatement(body)) {
          node.body = types.blockStatement([types.returnStatement(body)])
        } 
        hoistFunctionEnv(path)
      },
    },
  }
}

// this 提升
function hoistFunctionEnv(path){
  const bindingThis="_this"
  // 查找this作用域
  const thisEnv = path.findParent(
    // 是函数且不是箭头函数 ，或是顶级作用域
    parent => (parent.isFunction() && !parent.isArrowFunctionExpression()) || parent.isProgram()
  )
  // 往 this 作用域中添加  var _this = this
  thisEnv.scope.push({
    id: types.identifier(bindingThis),
    init: types.thisExpression(),
  })
  // 查找当前 path 下所有的 this
  const thisPaths = findThisPaths(path)
  // 将这些 path 中的 this 替换为 _this
  thisPaths.forEach(p => {
    p.replaceWith(types.identifier(bindingThis))
  })
}

// 查找当前 path 下所有的 this
function findThisPaths(path){
  var arr=[]
  path.traverse({
    ThisExpression(p){
      arr.push(p)
    }
  })
  return arr
}
