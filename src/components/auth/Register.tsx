import React, { useState } from "react";
import { UserInfo } from "../../types/type";
import { signUp } from "../../api/auth";
import useAuthStore from "../../store/authStore";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const setChkAuth = useAuthStore((state) => state.setChkAuth);

  const onToggle = () => {
    setChkAuth(true);
  };
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInfo: UserInfo = {
      id,
      password,
      nickname,
    };

    const res = await signUp(userInfo);
    if (res.message === "회원가입 완료") {
      alert(res.message);
      setId("");
      setPassword("");
      setNickname("");
      setChkAuth(true);
    } else {
      alert(res.response.data.message);
    }
  };
  return (
    <section>
      <h2 className="bg-slate-400 text-red-50">회원가입</h2>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            placeholder="유저 아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">PWD</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <button type="submit">회원가입</button>
        <br />
        <button type="button" onClick={onToggle}>
          로그인으로
        </button>
      </form>
    </section>
  );
};

export default Register;
