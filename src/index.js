import './styles/main.scss';

function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById('childMenu');
    
    if (!subMenu.style.display || subMenu.style.display === 'none') {
        subMenu.style.display = 'block';
        subMenu.style.opacity = "1";
    } else {
        subMenu.style.display = 'none';
        subMenu.style.opacity = "0";
    }

    const menuItems = document.querySelectorAll('.navigation-item');
    menuItems.forEach(item => {
        if (item.getAttribute("id") !== subMenuId) {
            item.classList.toggle('deactivated');
        } else {
            item.classList.remove('deactivated');
        }
    });
}

function toggleSearch(isCross = false, isMobile = false) {
    console.log('search clicked');
    const navMenu = document.getElementById('navMenu');
    const navMenuMobile = document.getElementById('navMenuMobile');
    const searchBar = document.getElementById('searchBar');

    if (isCross) {
        navMenu.style.visibility = 'visible';
        navMenuMobile.style.visibility = 'visible';
        searchBar.style.display = 'none';
        // setTimeout(() => {
        //     searchBar.style.opacity = "0";
        // }, 10);
    } else {
        // searchBar.style.opacity = "1";
        // setTimeout(() => {
            navMenu.style.visibility = 'hidden';
            navMenuMobile.style.visibility = 'hidden';
            searchBar.style.display = 'block';
        // }, 500);
    }
}
  
  
  
  
  