import "./assets/css/index.css";
import Header from "./Component/Header";
import Router from "./Routes";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./ReduxStore";
import Footer from "./Component/Footer";
import axios from "axios";
import { sendNotification } from "./helper/api";

function App() {
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    sendNotification(res.data.IPv4);
    setIP(res.data.IPv4).localStorage.setItem("myip", ip);
  };
  useEffect(() => {
    let isActivePage = true;
    if (isActivePage) {
      getData();
    }

    return () => {
      isActivePage = false;
    };
  }, []);
  return (
    <Provider store={store}>
      <div className="mainPage__Container">
        <Header />
        <Router />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
