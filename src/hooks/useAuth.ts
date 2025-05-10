import { useMutation } from "@tanstack/react-query"
import { postWithToken } from "~/api"
import type { signInType, signUpType } from "~/types"

export const useAuth = () => {
    const signInMutation = useMutation({
      mutationFn: async (data: signInType) => {
        const response = await postWithToken(null, '/auth/login', data)
        return response
      },
    })

    const signUpMutation = useMutation({
	  mutationFn: async (data: signUpType) => {
		const response = await postWithToken(null, '/user/signup', data)
		return response
	  },
	})

    return { signIn: signInMutation, signUp: signUpMutation }
}