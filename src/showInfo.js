import $ from "jquery";
import BasicInfoApi from "./basicInfo";

const ShowInfoApi = {
  loadImage: async (url) => {
    const userData = await BasicInfoApi.getUserInfo(url);
    $("img").attr("src", userData.avatar);
  },

  showUserInfo: async (url) => {
    const userData = await BasicInfoApi.getUserInfo(url);
    const name = $("<h2></h2>").text(
      `MY NAME IS ${userData.name} AND THIS MY RESUME/CV`
    );
    const selfIntro = $("<p></p>").text(userData.description);

    $(".basic-info").append(name);
    $(".self-introduction").append(selfIntro);
  },

  showEduInfo: async (url) => {
    const eduData = await BasicInfoApi.getEduInfo(url);
    eduData.forEach((element) => {
      const year = $("<h1></h1").text(element.year).addClass("year");
      const edu = $("<section></section>").addClass("eduDetail");
      const title = $("<h1></h1>").text(element.title);
      const description = $("<p></p>").text(element.description);
      edu.append(title);
      edu.append(description);
      const item = $("<section></section>").addClass("educationItem");
      item.append(year);
      item.append(edu);
      $(".educations").append(item);
    });
  },
};

export default ShowInfoApi;
