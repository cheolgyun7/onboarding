import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useAuthStore from "../store/authStore";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuthStore();
  console.log(userInfo?.nickname);
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    console.log(userInfo);
    if (!accessToken) {
      navigate("/auth"); // 로그인 상태가 아닌 경우 로그인 페이지로 리디렉션
    }
  }, [userInfo, navigate]);

  return (
    <div>
      <h1>홈 페이지</h1>
      <div>{userInfo?.nickname}</div>
      <p>???</p>
    </div>
  );
};

export default Home;
