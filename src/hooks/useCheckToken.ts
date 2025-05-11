import { useQuery } from '@tanstack/react-query'
import { authGet } from '~/api'
import { getCookie } from '~/utils'

export const useCheckToken = () => {
	const accessToken = getCookie('accessToken')

	return useQuery({
		queryKey: ['checkToken', accessToken],
		queryFn: async () => {
			if (!accessToken) throw new Error('토큰 없음')
			const res = await authGet(accessToken, '/auth/check_token')
			return res.body.userStatus
		},
		enabled: !!accessToken, // accessToken이 있을 때만 쿼리를 실행합니다.
	})
}