import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '~/hooks'
import type { signUpType } from '~/types'

const SignUp = () => {
	const [signupData, setSignupData] = useState<signUpType>({
		username: '',
		password: '',
	})

	const navigate = useNavigate()
	const { signUp } = useAuth()
	const { mutate, isPending } = signUp

	const handleSubmit = () => {
		if (isPending || !signupData.username.trim() || !signupData.password.trim())
			return

		mutate(signupData, {
			onSuccess: () => {
				alert('회원가입에 성공하셨습니다!')
				navigate('/')
			},
			onError: error => {
				console.log(error)
			},
		})
	}

	return (
		<div>
			<h1>회원가입</h1>
			<input
				type="text"
				placeholder="아이디"
				value={signupData.username}
				onChange={e =>
					setSignupData({ ...signupData, username: e.target.value })
				}
			/>
			<input
				type="password"
				placeholder="비밀번호"
				value={signupData.password}
				onChange={e =>
					setSignupData({ ...signupData, password: e.target.value })
				}
			/>
			<button onClick={handleSubmit} disabled={isPending}>
				{isPending ? '가입중...' : '가입하기'}
			</button>
		</div>
	)
}

export default SignUp
