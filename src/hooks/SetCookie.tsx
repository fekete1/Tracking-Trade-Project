import Cookie from 'js-cookie'

const SetCookie = (cookieName: string, cookieValue: string) => {
    Cookie.set(cookieName, cookieValue, {
        expires: 1,
        secure: true,
        sameSite: 'none',
        path: '/',
    })
}

export default SetCookie
