/**
 * @author 由佳奇
 * @date 2020/12/30
 * @Description: 登录
 */
import service from './Http.js'
export function loginCount(captch, phone, password, nickname) {
    return service({
        url: '/register/cellphone',
        params: {
            captcha: captch,
            phone: phone,
            password: password,
            nickname: nickname
        }
    })
}
export function captchaPhone(phone) {
    return service({
        url: '/captcha/sent',
        params: {
            phone: phone
        }
    })
}