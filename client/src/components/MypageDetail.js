// import "../styles/Mypage.scss";
import "../styles/MypageDetail.scss";
// import CocktailItem from "./CocktailItem";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {API_BASE_URL} from "../app-config";
import axios from "axios";

//(1) 찜목록
export const LikeList = ({zzimCocktailInfos}) => {
  console.log("zzimCocktailInfos..", zzimCocktailInfos);
  return (
    <div
      className="LikeList"
      style={
        {
          // backgroundColor: "rgb(18,18,18)",
          // height: "100%",
          // width: "100vh",
          // padding: "0 10%",
          // margin: "0 20%",
          // borderRadius: "6px",
          // boxSizing: "border-box",
          // color: "white",
          // color: "black",
        }
      }
    >
      <h3>찜 목록</h3>

      <div className="container">
        <div className="row row-cols-4" style={{padding: "3%"}}>
          {zzimCocktailInfos[0] ? (
            zzimCocktailInfos.map(item => (
              <div className="col mt-3" style={{padding: "0 0 10px 0"}}>
                <LikeListItem key={item.cocktail_id} item={item} />
              </div>
            ))
          ) : (
            <h5 style={{width: "100%", color: "#fa942e"}}>
              찜한 상품이 없습니다 🥲
            </h5>
          )}
        </div>
      </div>
      <footer className="navbar-fixed-bottom mt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

//(2) 추천목록
export const Recommendation = ({recommends}) => {
  // console.log("Recommendation session", Recommendation);

  return (
    <div
      className="Recommendation"
      // style={{
      //   // backgroundColor: "rgb(18,18,18)",
      //   height: "100%",
      //   width: "100vh",
      //   padding: "0 10%",
      //   margin: "0 20%",
      //   borderRadius: "6px",
      //   boxSizing: "border-box",
      //   // color: "white",
      //   color: "black",
      // }}
    >
      <h3>
        {/* <FontAwesomeIcon icon={faHandHoldingHeart} className="Icon Holding" /> */}
        추천목록
      </h3>
      <div className="row row-cols-4" style={{padding: "3%"}}>
        {recommends ? (
          recommends.map(item => (
            <div className="col mt-3">
              <LikeListItem key={item.cocktail_id} item={item} />
            </div>
          ))
        ) : (
          <h5 style={{width: "100%", color: "#fa942e"}}>
            최소 한 개의 별점이 필요해요 🥲
          </h5>
        )}
      </div>
    </div>
  );
};

//(3) 회원정보 수정
export function InformationModify() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  const validateForm = () => {
    return userId.length > 0 && userPw.length > 0 && userName.length > 0;
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userId);
    console.log(userPw);
    console.log(userName);

    axios({
      method: "post",
      url: `${API_BASE_URL}/result`,
      data: {
        userId: userId,
        userPw: userPw,
        userName: userName,
      },
    }).then(res => console.log(res));
  };

  return (
    <div className="InformationModify">
      <div
        className="InformationModify2"
        style={
          {
            // 회색 박스 가운데 정렬
            // display: "flex",
            // justifyContent: "left",
          }
        }
        //   // backgroundColor: "rgb(18, 18, 18)",
        //   height: "800px",
        //   width: "800px",
        //   padding: "20%",
        //   // margin: "0 5%",
        //   borderRadius: "6px",
        //   // color: "#FCFCFC",
        //   color: "black",
        // }}
      >
        <div
          style={{
            width: "20rem",
            boxShadow: "none",
            outline: "none",
          }}
        >
          <h3>개인정보수정</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="id" className="InformationModify2">
              <Form.Label>아이디</Form.Label>

              <Form.Control
                autoFocus
                type="text"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                // style={{backgroundColor: "#212529"}}
                placeholder="ID"
              />
            </Form.Group>

            <Form.Group
              size="lg"
              controlId="name"
              className="InformationModify2"
            >
              <Form.Label>닉네임</Form.Label>
              {/* <div>닉네임</div> */}
              <Form.Control
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                // style={{backgroundColor: "#212529"}}
                placeholder="name"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              className="InformationModify2"
            >
              <Form.Label>비밀번호</Form.Label>

              <Form.Control
                type="password"
                value={userPw}
                onChange={e => setUserPw(e.target.value)}
                // style={{backgroundColor: "#212529"}}

                placeholder="passwaord"
              />
            </Form.Group>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "30px 0",
              }}
            >
              <Button
                blocksize="xx-lg"
                type="submit"
                disabled={!validateForm()}
                style={{width: "350px"}}
              >
                수정
              </Button>
            </div>
            <br />
          </Form>
        </div>
      </div>
    </div>
  );
}

// LikeList에 들어가는 하위 컴포넌트

const LikeListItem = ({item}) => {
  return (
    <Link to={"/cocktails/" + item.cocktail_id}>
      <div className="CocktailItemCard" style={{width: "20rem"}}>
        <img
          src={item.imagelink}
          className="CocktailItemImage"
          alt="test image"
          style={{padding: "20px"}}
        />
        <div className="card-body">
          <p className="card-title">{item.name}</p>
        </div>
      </div>
    </Link>
  );
};
