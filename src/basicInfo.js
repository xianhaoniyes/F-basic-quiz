import axios from "axios";

const BasicInfoApi = {
  getUserInfo: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },

  getEduInfo: async (url) => {
    const newurl = `${url}/educations`;
    const response = await axios.get(newurl);
    return response.data;
  },
};

export default BasicInfoApi;
