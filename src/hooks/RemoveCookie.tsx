import Cookie from 'js-cookie'

const removeCookie = (cookieName: string) => {
    Cookie.remove(cookieName)
}

export default removeCookie
