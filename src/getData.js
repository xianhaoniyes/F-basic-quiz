import axios from "axios";

const a = async () => {
  const value = await axios.get("localhost:8080/user/:3");
  Document.write(value.data);
};

export default a;
