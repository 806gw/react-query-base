import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div>
            <h1>React-Query Base Template</h1>
            <Link to={'/signin'}>로그인</Link> <br />
            <Link to={'/signup'}>회원가입</Link>
        </div>
    )
}
export default Main