/**
 * @author 由佳奇
 * @date 2020/12/30
 * @Description: API
 */
import App from './Http.js'
import { Message } from 'element-ui';
// 验证码
export function captchaPhone(phone) {
    return App({
            method: 'get',
            url: '/captcha/sent',
            params: {
                phone
            }
        }).then((resolve) => {
            console.log(resolve, "2")
        })
        .catch((err) => {
            if (err.response.data.code === 400) {
                Message({
                    message: "手机号码不符合规范",
                    center: true,
                })
            }

        })
}

//校验验证码 

export function captchaVerify(phone, captcha) {
    return App({
            method: 'get',
            url: '/captcha/verify',
            params: {
                phone,
                captcha
            }
        })
        .catch((err) => {
            if (err.response.data.code === 400) {
                Message({
                    message: "验证码错误",
                    center: true,
                })
            }

        })
}
// 注册

export function LoginUser(phone, captcha, password, nickname) {
    return App({
            method: 'post',
            url: '/register/cellphone',
            params: {
                captcha,
                phone,
                password,
                nickname
            }
        })
        .catch((err) => {
            if (err.response.data.code === 400) {
                Message({
                    message: "验证码错误",
                    center: true,
                })
            }

        })
}

//登录
export function LoginUp(phone, password) {
    return App({
        method: 'post',
        url: '/login/cellphone',
        data: {
            phone,
            password
        }
    })
}