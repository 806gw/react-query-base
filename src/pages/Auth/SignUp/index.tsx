import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import type { signUpType } from "~/types"
import { postWithToken } from "~/api"

const SignUp = () => {
  const [signupData, setSignupData] = useState<signUpType>({
		username: '',
		password: '',
	})

  const { mutate, isPending } = useMutation({
		mutationFn: async (data: signUpType) => {
			const response = await postWithToken(null, '/user/signup', data)
			return response
		},
	})

  const handleSubmit = () => {
    if (isPending || !signupData.username.trim() || !signupData.password.trim()) return

    mutate(signupData, {
      onSuccess: (data) => {
        alert("회원가입에 성공하셨습니다!")
        console.log(data)
      },
      onError: (error) => {
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
        onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={signupData.password}
        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
      />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "가입중..." : "가입하기"}
      </button>
    </div>
  )
}

export default SignUp