import Register from "../components/auth/Register";
import useAuthStore from "../store/authStore";
import Login from "../components/auth/Login";

const Auth = () => {
  const chkAuth = useAuthStore((state) => state.chkAuth);

  return <div>{chkAuth ? <Login /> : <Register />}</div>;
};

export default Auth;
