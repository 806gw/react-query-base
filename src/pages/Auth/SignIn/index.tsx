import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import type { signInType } from "~/types"
import { postWithToken } from "~/api"

const SignIn = () => {
  const [signInData, setSignInData] = useState<signInType>({
		login: '',
		password: '',
	})

  const { mutate, isPending } = useMutation({
		mutationFn: async (data: signInType) => {
			const response = await postWithToken(null, '/auth/login', data)
			return response
		},
	})

  const handleSubmit = () => {
    if (isPending || !signInData.login.trim() || !signInData.password.trim()) return

    mutate(signInData, {
      onSuccess: (data) => {
        alert("로그인에 성공하셨습니다!")
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        placeholder="아이디"
        value={signInData.login}
        onChange={(e) => setSignInData({ ...signInData, login: e.target.value })}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={signInData.password}
        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
      />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "로그인중..." : "로그인하기"}
      </button>
    </div>
  )
}

export default SignIn