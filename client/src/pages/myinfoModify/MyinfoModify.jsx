import styles from "./MyinfoModify.module.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import RealVote from "../../components/modals/RealVote";
import NullPage from "../../components/NullPage/Nullpage";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";
// axios.defaults.withCredentials = true;
const MyinfoModify = ({
  info,
  setInfo,
  accessToken,
  setAccessToken,
  isAuthenticated,
  isLogin = { isLogin },
}) => {
  const [userid, setUserId] = useState(info.userid);
  const [nickname, setNickName] = useState(info.nickname);
  const [mobilenum, setMobileNum] = useState(info.mobile);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [modifyYes, setModifyYes] = useState(false);

  const history = useHistory();
  const handleId = (event) => {
    setUserId(event.target.value);
  };
  const handleNickname = (event) => {
    setNickName(event.target.value);
  };
  const handleMobile = (event) => {
    setMobileNum(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handlePassword2 = (event) => {
    setPassword2(event.target.value);
  };

  const doneModify = () => {
    setModifyYes(true);
  };

  const realModify = () => {
    console.log(nickname, "---------------");
    axios
      .post(
        `http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/user/profile/${info.id}`,
        { userName: nickname, mobile: mobilenum, password },
        {
          headers: {
            authorization: accessToken,
          },
          "Content-Type": "application/json",
        }
      )
      .then((result) => {
        //console.log(result.data.message === "profile changed");
        console.log(result.data);
        if (result.data.message === "profile changed") {
          setModifyYes(false);
          setAccessToken(result.data.data);
          history.push("/");
          isAuthenticated(result.data.data); //??? ???????????? @@
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  const realno = () => {
    setModifyYes(false);
    history.push("/");
  };

  return (
    <>
      {isLogin ? (
        <form onSubmit={(e) => e.preventDefault()}>
          {modifyYes ? (
            <section className={styles.backdrop}>
              <div className={styles.realVote}>
                <span className={styles.title}>?????? ?????? ????????????????</span>
                <span className={styles.btns1}>
                  <button className={styles.btn2} onClick={realno}>
                    ?????????
                  </button>
                  <button className={styles.btn2} onClick={realModify}>
                    ???
                  </button>
                </span>
              </div>
            </section>
          ) : null}
          <div className={styles.contain}>
            <div className={styles.infobox}>
              <div className={styles.imgbox}>
                <span className={styles.imgborder}>
                  <img
                    src="../../../images/face.svg"
                    className={styles.faceimg}
                  ></img>
                </span>
                {/* <label for="profileEdit" className={styles.editbox}>
                  ??????????????? ??????
                </label> */}
                {/* <input
                type="file"
                id="profileEdit"
                className={styles.editbtn}
              ></input> */}
              </div>
              <div className={styles.textbox}>
                <div className={styles.ulbox}>
                  <span className={styles.list}>
                    ?????????:
                    <input
                      type="text"
                      // ref={idRef}
                      className={styles.input}
                      value={userid}
                      name="userid"
                      onChange={handleId}
                      autoComplete="off"
                    ></input>
                  </span>
                  <span className={styles.list}>
                    ?????????:
                    <input
                      type="text"
                      // ref={nicknameRef}
                      className={styles.input}
                      value={nickname}
                      name="nickname"
                      onChange={handleNickname}
                      autoComplete="off"
                    ></input>
                  </span>
                  <span className={styles.list}>
                    ?????????:
                    <input
                      type="text"
                      // ref={mobileRef}
                      className={styles.input}
                      value={mobilenum}
                      name="mobile"
                      onChange={handleMobile}
                      autoComplete="off"
                    ></input>
                  </span>
                  <span className={styles.list}>
                    ????????????:
                    <input
                      type="password"
                      // ref={passwordRef}
                      className={styles.input}
                      value={password}
                      name="password"
                      onChange={handlePassword}
                      autoComplete="off"
                    ></input>
                  </span>
                  <span className={styles.list}>
                    ??????????????????:
                    <input
                      type="password"
                      // ref={password2Ref}
                      className={styles.input}
                      value={password2}
                      name="password2"
                      onChange={handlePassword2}
                      autoComplete="off"
                    ></input>
                  </span>
                  {password !== password2 ? (
                    <span className={styles.passcheck}>
                      ??????????????? ??????????????????
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            <div className={styles.btns}>
              <Link to="/mypage">
                <button className={styles.btn}>??????</button>
              </Link>

              <span className={styles.btn} onClick={doneModify}>
                ????????????
              </span>
            </div>
          </div>
        </form>
      ) : (
        <NullPage />
      )}
    </>
  );
};

export default MyinfoModify;
export const browserHistory = createBrowserHistory();
//????????????  ?????? ??????
