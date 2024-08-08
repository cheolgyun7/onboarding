import React, { useState } from "react";
import useAuthStore from "../../store/authStore";
import { UserInfo } from "../../types/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn } from "../../api/auth";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const setChkAuth = useAuthStore((state) => state.setChkAuth);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const onToggle = () => {
    setChkAuth(false);
  };
  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      setChkAuth(true);
      queryClient.setQueryData(["accessToken"], data.accessToken);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as { message: string };
      alert(data.message);
      throw new Error(data.message);
    },
  });
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginInfo: UserInfo = {
      id,
      password,
    };
    mutation.mutate(loginInfo);
  };
  return (
    <section>
      <h2 className="bg-slate-400 text-red-50">로그인</h2>
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

        <button type="submit">로그인</button>
        <br />
        <button type="button" onClick={onToggle}>
          회원가입으로
        </button>
      </form>
    </section>
  );
};

export default Login;
