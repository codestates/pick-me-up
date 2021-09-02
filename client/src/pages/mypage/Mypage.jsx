import React, { useState } from "react";
import Mycontent from "../../components/mycontent/Mycontent";
import Myinfo from "../../components/myinfo/Myinfo";
import styles from "./Mypage.module.css";
import axios from "axios";

// const Mypage = ({ info, setInfo, handleContent, accessToken, isLogin }) => {
//   const [infoClicked, setInfoClicked] = useState(true);
//   const [myContent, setMycontent] = useState(null);

const Mypage = ({
  info,
  setInfo,
  handleContent,
  accessToken,
  isLogin,
  handleFeeds,
}) => {
  //console.log(info, "마이페이지");

  /* 카테고리이동 핸들러*/
  const [infoClicked, setInfoClicked] = useState(true);
  const [myContent, setMyContent] = useState([]);

  const handleClickMyinfo = () => {
    setInfoClicked(true);
  };
  const handleClickMycontent = () => {
    setInfoClicked(false); //상단 subnavbar전환시키고

    //여기서 mycontent불러오는 axios GET
    // axios.post('http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/posting', {
    //   }, {
    //     headers: {
    //       authorization: accessToken,
    //     },
    //     "Content-Type": "application/json",
    //   })
    // .then(res => {
    //   const result = res.data.data.sort((a,b)=>{
    //         return new Date(b.created_at) - new Date(a.created_at);
    //   });
    //   setMycontent(result.map(el => {
    //     return {
    //       ...el,
    //       tags: JSON.parse(el.tags)
    //     }
    //   }))
    // })

    //     axios.get("http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/user/auth", {
    //       headers: {
    //         authorization: accessToken,
    //       },
    //       "Content-Type": "application/json",
    //     })
    //     .then((result) => {
    //       const { id } = result.data.data.userInfo;
    //       axios.get(`http://ec2-3-34-191-91.ap-northeast-2.compute.amazonaws.com/user/posting-list/${id}`, {
    //       headers: {
    //         authorization: accessToken,
    //       },
    //       "Content-Type": "application/json",
    //       })
    //       .then(res=> {
    //         const result = res.data.data.sort((a,b)=>{
    //           return new Date(b.created_at) - new Date(a.created_at);
    //         });
    //         setMyContent(result.map(el => {
    //           return {
    //             ...el,
    //             tags: JSON.parse(el.tags)
    //           }
    //         }))
    //       })
    //     });
  };

  const infounderline = infoClicked ? styles.myinfosub : styles.myinfo;
  const contentunderline = infoClicked ? styles.mycontent : styles.mycontentsub;

  return (
    <section className={styles.container}>
      <nav className={styles.category}>
        <div className={`${infounderline}`} onClick={handleClickMyinfo}>
          MY INFO
        </div>
        <div className={`${contentunderline}`} onClick={handleClickMycontent}>
          MY CONTENT
        </div>
      </nav>

      <div className={styles.body}>
        {infoClicked === true ? (
          <Myinfo
            info={info}
            setInfo={setInfo}
            accessToken={accessToken}
            isLogin={isLogin}
          />
        ) : (
          //           <Mycontent handleContent={handleContent} feeds={myContent} />

          <Mycontent
            handleContent={handleContent}
            feeds={myContent}
            accessToken={accessToken}
            handleFeeds={handleFeeds}
          />
        )}
      </div>
    </section>
  );
};

export default Mypage;
