//时间抽出来公用
export function friendlyDate(dateStr) {
  //传递的date是个对象
  let dateObj = typeof dateStr === 'object' ? dateStr: new Date(dateStr)
  //获取当前时间戳
  let time = dateObj.getTime()
  //获取当前时间
  let now = Date.now()
  let space = now - time
  let str = ''

  switch (true) {
    //一分钟以内
    case space < 1000*60:
      str = '刚刚'
      break
    case space < 1000*3600:
      str = Math.floor(space/(1000*60)) + '分钟前'
      break
    case space < 1000*3600*24:
      str = Math.floor(space/(1000*3600)) + '小时前'
      break
    default:
      str = Math.floor(space/(1000*3600*24)) + '天前'
  }
  return str
}
