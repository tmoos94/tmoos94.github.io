//오른쪽 키 표기
new fullpage('#fullpage', {

  //    sectionsColor: ['#ff6347', '#4682b4'],
  navigation: true,
  anchors: ['Main', 'Profile', 'TeamProject', 'Projects', 'Design', 'Oters', 'Contact'],
  navigationTooltips: ['Main', 'Profile', 'Team Project', 'Project', 'Design', 'Other', 'Contact'],
});
/*

*/
//팀프로젝트 그릴 스크롤
const box = document.getElementById("imageBox");

box.addEventListener("mouseenter", () => {
  box.classList.remove("hover-out");
  box.classList.add("hover-in");
});

box.addEventListener("mouseleave", () => {
  box.classList.remove("hover-in");
  box.classList.add("hover-out");
});