import { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import httpApi from "../../helpers/http-api";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

const SignInView = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({})
  const [userAccessToken, setUserAccessToken] = useState('')
  const onSubmit = async (values) => {
    try {
      const loginReponse = await httpApi.userLogin(values)
      if (loginReponse.status === 200) {
        // console.log(loginReponse.data.data)
        const loginRes = loginReponse.data.data
        setUserInfo(loginRes.user)
        setUserAccessToken(loginRes.accessToken)
        if (userInfo && userAccessToken) {
          console.log(userAccessToken)
          console.log(userInfo)
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (userAccessToken) {
      navigate('/account/profile');
    }
  }, [userAccessToken]);

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/Dell.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
          <Link to="/">
            <img
              src="../../images/banner/Laptops.webp"
              alt="..."
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign In</h4>
          <SignInForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignInView;
