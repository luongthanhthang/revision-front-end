function changeSidebar() {
    document.getElementById("sidebar").classList.toggle("sidebar-small");
    setCookie("sidebarChange", document.getElementById("sidebar").className);
  }
  
  let subMenu = document.querySelectorAll(".nav-links li");
  subMenu.forEach((item) => {
    item.onclick = () => {
      item.classList.toggle("is-active");
    };
  });

  export 