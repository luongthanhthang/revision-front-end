function changeSidebar() {
  document.getElementById("sidebar").classList.toggle("sidebar-small");
  if (document.getElementById("sidebar").className === "sidebar-small") {
    document.getElementsByClassName("content")[0].style.paddingLeft = "60px";
  } else {
    document.getElementsByClassName("content")[0].style.paddingLeft = "200px";
  }
  console.log(document.getElementById("sidebar").className)
  setCookie('sidebarChange', document.getElementById("sidebar").className);
}
let subMenu = document.querySelectorAll(".nav-links li");
subMenu.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle("is-active");
  };
});

function getCookieSidebar(sidebarChange) {
  document.getElementById("sidebar").className = getCookie(sidebarChange);
  if (document.getElementById("sidebar").className === "sidebar-small") {
    document.getElementsByClassName("content")[0].style.paddingLeft = "60px";
  } else {
    document.getElementsByClassName("content")[0].style.paddingLeft = "200px";
  }
}

function setCookie(cname, cvalue) {
  console.log(cvalue);
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie); // lấy cookie
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1); // xoá hết khoảng trống đứng đầu
    }
    if (c.indexOf(name) == 0) {
      // keyName đứng đầu
      return c.substring(name.length, c.length); // lấy giá trị cookie string.substring(start, end)
    }
  }
  return "";
}
