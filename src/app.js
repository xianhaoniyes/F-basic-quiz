import "./style/index.scss";
import ShowInfoApi from "./showInfo";
import Port from "./port";

let url = window.location.href;
url = url.replace("1234", Port);

ShowInfoApi.loadImage(url);
ShowInfoApi.showEduInfo(url);
ShowInfoApi.showUserInfo(url);
