// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

function OpenSidebar() {
    if (!sideBarOpen)
    {
        sidebar.classList.add(sidebar-responsive);
        sidebarOpen = true;
    }
}

function CloseSidebar() {
    if (sidebarOpen)
    {
        sidebar.classList.remove(sidebar-responsive);
        sidebarOpen = false;
    }
}