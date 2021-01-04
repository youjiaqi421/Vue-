/**
 * @author 由佳奇
 * @date 2020/1/2
 * @Description: 优化函数
 */

/**
 * 防抖函数
 * @method delay
 * @param {time,function} 时间,函数
 * @return {Function} 
 */

export function delay(fn, time) {
    let timer = null
    return function() {
        if (timer) {
            clearTimeout(timer)
            console.log("执行了")
        }
        timer = setTimeout(fn, time)
    }
}