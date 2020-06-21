import axios from "axios";
import BasicInfoApi from "../basicInfo";

jest.mock("axios");

describe("BasicInfoApi", () => {
  describe("getUserInfo", () => {
    test("call user api to get user data", async () => {
      axios.get.mockResolvedValue({});
      const url = "http://localhost:3000/users/1";
      await BasicInfoApi.getUserInfo(url);
      expect(axios.get).toHaveBeenCalledWith(url);
    });
  });

  describe("getEduInfo", () => {
    test("call edu api to get edu data", async () => {
      axios.get.mockResolvedValue({});
      const url = "http://localhost:3000/users/1";
      await BasicInfoApi.getEduInfo(url);
      expect(axios.get).toHaveBeenCalledWith(`${url}/educations`);
    });
  });
});
