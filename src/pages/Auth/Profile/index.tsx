import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, useCheckToken } from '~/hooks'
import { useUserStore } from '~/stores'
import type { signUpType } from '~/types'

const Profile = () => {
	const { user, setUser, clearUser } = useUserStore()
	const [userData, setUserData] = useState<signUpType>({
		username: '',
		password: '',
	})

	const navigate = useNavigate()
	const { updateUser } = useAuth()
	const { mutate, isPending } = updateUser
	const { data: userStatus, isLoading, error } = useCheckToken()

	useEffect(() => {
		if (userStatus) {
			setUser(userStatus) // Zustand 스토어에 userStatus를 저장합니다.
			setUserData(prev => ({
				...prev,
				username: userStatus.username,
			}))
		}
	}, [userStatus, setUser])

	useEffect(() => {
		if (error) {
			clearUser() // 사용자 상태를 초기화 시킵니다.
			alert('토큰이 유효하지 않습니다. 다시 로그인해주세요.')
			navigate('/login')
		}
	}, [error, navigate, clearUser])

	const handleSubmit = () => {
		if (!user || !userData.username.trim() || !userData.password.trim()) {
			alert('아이디와 비밀번호를 입력해주세요.')
			return
		}

		mutate(
			{
				id: user.id,
				data: userData,
			},
			{
				onSuccess: () => {
					setUser({ ...user, username: userData.username })
					alert('정보 수정이 완료되었습니다!')
					navigate('/profile')
				},
				onError: error => {
					console.error('업데이트 실패:', error)
					alert('정보 수정에 실패했습니다.')
				},
			}
		)
	}

	if(isLoading) return <h1>사용자 확인 중...</h1>

	return (
		<div>
			<h1>{user?.username}님의 프로필 수정</h1>
			<input
				type="text"
				placeholder="아이디"
				value={userData.username}
				onChange={e => setUserData({ ...userData, username: e.target.value })}
			/>
			<input
				type="password"
				placeholder="비밀번호"
				value={userData.password}
				onChange={e => setUserData({ ...userData, password: e.target.value })}
			/>
			<button onClick={handleSubmit} disabled={isPending}>
				{isPending ? '수정 중...' : '수정하기'}
			</button>
		</div>
	)
}

export default Profile
