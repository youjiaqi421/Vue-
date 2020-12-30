/**
 * @author 由佳奇
 * @date 2020/12/29
 * @Description: 校验公共方法
 */

// 账号
let codeReg = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/
    // 电话
let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

// 必须为数字
let numberReg = /^\d+$|^\d+[.]?\d+$/
    // 用户名称
var Username = /^\w\w{7,11}$/;
// 密码
let passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/

// 联系人
let contactsReg = /^[\u0391-\uFFE5A-Za-z]+$/

// let Id = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
    // 账号的验证规则

export function validateCode(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入账号'))
    }
    if (!codeReg.test(value)) {
        callback(new Error('账号必须为6-20位字母和数字组合'))
    } else {
        callback()
    }
}

// 只能数字的验证

export function validateNumber(rule, value, callback) {
    if (value !== '') {
        if (!numberReg.test(value)) {
            callback(new Error('员工数量必须为数字'))
        } else {
            callback()
        }
    } else {
        callback()
    }
}
// 用户名称
export function validateUserName(rule, value, callback) {
    if (!value) {
        return callback(new Error('用户名未填写'))
    }
    if (!Username.test(value)) {
        callback(new Error('命名不合法'))
    } else {
        callback()
    }

}

// 密码的验证

export function validatePsdReg(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入密码'))
    }
    if (!passwordReg.test(value)) {
        callback(new Error('请输入6-20位英文字母、数字或者符号,至少含有俩种'))
    } else {
        callback()
    }
}

// 联系人

export function validateContacts(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入联系人'))
    }
    if (!contactsReg.test(value)) {
        callback(new Error('联系人不可输入特殊字符'))
    } else {
        callback()
    }
}

// 邮箱的验证规则

export function validateEmail(rule, value, callback) {
    if (value !== '') {
        if (!emailReg.test(value)) {
            callback(new Error('邮箱格式不正确'))
        } else {
            callback()
        }
        // if (!regId.test(value)) {
        //     callback(new Error('请输入正确的二代身份证号码'))
        // } else {
        //     callback()
        // }
    } else {
        callback()
    }
}

// 电话号码的验证

export function validatePhone(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入手机号码'))
    }
    if (!phoneReg.test(value)) {
        callback(new Error('手机格式不正确'))
    } else {
        callback()
    }
}

// 身份证的验证规则

export function ID(rule, value, callback) {
    if (!value) {
        return callback(new Error('验证码不能为空'))
    }
}


export function validatePhonetw(rule, value, callback) {
    const reg = /^[1][3-9][0-9]{9}$/;
    if (value == '' || value == undefined || value == null) {
        callback(new Error('输入为空'));
    } else {
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的电话号码'));
        } else {
            callback();
        }
    }
}