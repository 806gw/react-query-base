import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (
	name: string,
	value: string,
	options?: any
) => {
	return cookies.set(name, value, {
		...options,
		httpOnly: false, // XSS 방지를 위해 실제로는 true로 해야 함. (서버 측에서 처리하는 게 가장 좋음)
		path: '/',
		sameSite: 'strict', // CSRF 방지
		maxAge: 60 * 40,
	})
}

export const getCookie = (name: string) => {
	return cookies.get(name)
}

export const deleteCookie = (name: string, options?: any) => {
	return cookies.remove(name, { ...options })
}
