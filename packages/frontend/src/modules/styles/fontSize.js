// default set: 10~100px
const MIN_SIZE        = 10   // 最小値
const MAX_SIZE        = 100  // 最大値
const INCREMENTS_NUM  = 1    // インクリメント

let fontSize = {}
let i = MIN_SIZE

while(MAX_SIZE >= i) {
  if(i % INCREMENTS_NUM == 0) {
    let key = `${i}px`
    let val = `${i}px`
    fontSize[key] = val;
  } 
  i++
}
module.exports = fontSize