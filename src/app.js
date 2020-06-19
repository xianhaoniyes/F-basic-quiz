// import "./style/index.scss";
import axios from "axios";

const a = async () => {
  const value = await axios.get("http://localhost:8080/user/:3");
  document.write(value.data);
};

export default a;
