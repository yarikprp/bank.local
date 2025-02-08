const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
    INVALID_PASSWORD: 'Пароль неверный'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES : 'Неизвестная ошибка'
}