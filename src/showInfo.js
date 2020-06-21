import $ from "jquery";
import BasicInfoApi from "./basicInfo";

const ShowInfoApi = {
  showUserInfo: async () => {
    const userData = await BasicInfoApi.getUserInfo();
    const name = $("<h2></h2>").text(
      `MY NAME IS ${userData.name} AND THIS MY RESUME/CV`
    );
    const selfIntro = $("<p></p>").text(userData.description);

    $(".basic-info").append(name);
    $(".self-introduction").append(selfIntro);
  },

  showEduInfo: async () => {
    const eduData = await BasicInfoApi.getEduInfo();
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

ShowInfoApi.showEduInfo();
ShowInfoApi.showUserInfo();