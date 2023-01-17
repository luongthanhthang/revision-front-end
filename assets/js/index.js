// function getCookieOnload() {
//   let check = decodeURIComponent(document.cookie);
//   console.log(check);
//   let ca = check.split("=");
//   console.log(ca[1]);
//   changeSidebar(!ca[1]);
// }

function changeSidebar() {
  // document.cookie = "sidebar=" + check;
  if (document.getElementById("sidebar").className == "sidebar") {
    document.getElementsByClassName("content")[0].style.padding = "0 0 0 60px";
    document.getElementById("sidebar").className = "sidebar-small";
  } else {
    document.getElementById("sidebar").className = "sidebar";
    document.getElementsByClassName("content")[0].style.padding = "0 0 0 200px";
  }
}

function displaySubMenu(titleMenu) {
  switch (titleMenu) {
    case "OKRs":
      if (
        document.getElementsByClassName("OKRs-sub-menu")[0].style.display ==
        "block"
      ) {
        document.getElementsByClassName("OKRs-sub-menu")[0].style.display =
          "none";
      } else {
        document.getElementsByClassName("OKRs-sub-menu")[0].style.display =
          "block";
      }
      break;

    case "course":
      if (
        document.getElementsByClassName("course-sub-menu")[0].style.display ==
        "block"
      ) {
        document.getElementsByClassName("course-sub-menu")[0].style.display =
          "none";
      } else {
        document.getElementsByClassName("course-sub-menu")[0].style.display =
          "block";
      }
      break;

    case "gift":
      if (
        document.getElementsByClassName("gift-sub-menu")[0].style.display ==
        "block"
      ) {
        document.getElementsByClassName("gift-sub-menu")[0].style.display =
          "none";
      } else {
        document.getElementsByClassName("gift-sub-menu")[0].style.display =
          "block";
      }
      break;

    case "CFRs":
      if (
        document.getElementsByClassName("CFRs-sub-menu")[0].style.display ==
        "block"
      ) {
        document.getElementsByClassName("CFRs-sub-menu")[0].style.display =
          "none";
      } else {
        document.getElementsByClassName("CFRs-sub-menu")[0].style.display =
          "block";
      }
      break;
  }
}
