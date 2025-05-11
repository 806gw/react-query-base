import { useMutation } from '@tanstack/react-query'
import { authPost, userPatch, userPost } from '~/api'
import type { signInType, signUpType } from '~/types'
import { getCookie } from '~/utils'

export const useAuth = () => {
	const accessToken = getCookie('accessToken')
	const signInMutation = useMutation({
		mutationFn: async (data: signInType) => {
			const response = await authPost(accessToken, '/auth/login', data)
			return response
		},
	})

	const signUpMutation = useMutation({
		mutationFn: async (data: signUpType) => {
			const response = await userPost(null, '/user/signup', data)
			return response
		},
	})

	const updateUserMutation = useMutation({
		mutationFn: async (params: { id: number; data: Record<string, any> }) => {
			const { id, data } = params
			const response = await userPatch(accessToken, `/user/${id}/update`, data)
			return response
		},
	})

	return {
		signIn: signInMutation,
		signUp: signUpMutation,
		updateUser: updateUserMutation,
	}
}
