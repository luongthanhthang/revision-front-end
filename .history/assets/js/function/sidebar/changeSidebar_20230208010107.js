export default function changeSidebar() {
    document.getElementById("sidebar").classList.toggle("sidebar-small");
    setCookie("sidebarChange", document.getElementById("sidebar").className);
  }
  
