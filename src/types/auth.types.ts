export type signInType = {
	login: string
	password: string
}

export type signUpType = {
	username: string
	password: string
}

export type profileType = {
  id: number
  username: string
  password?: string
  role: string
  lab: any[] // 실습실 대여 시스템 백엔드라 있습니다.
}