import axios from "axios";
import port from "./port";

const BasicInfoApi = {
  getUserInfo: async () => {
    let url = window.location.href;
    url = url.replace("1234", port);
    const response = await axios.get(url);
    return response.data;
  },

  getEduInfo: async () => {
    let url = window.location.href;
    url = `${url.replace("1234", port)}/educations`;
    const response = await axios.get(url);
    return response.data;
  },
};

export default BasicInfoApi;
