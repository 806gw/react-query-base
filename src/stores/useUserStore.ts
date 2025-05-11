import { create } from 'zustand'
import type { profileType } from '~/types'

interface UserState {
	user: profileType | null
	setUser: (user: profileType) => void
	clearUser: () => void
}

export const useUserStore = create<UserState>(set => ({
	user: null,
	setUser: user => set({ user }),
	clearUser: () => set({ user: null }),
}))
