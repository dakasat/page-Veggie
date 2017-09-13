function openTab(evt, page)
{
  var i, pages, links;
  //hide all pages
  pages = document.getElementsByClassName("menu-content");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
    console.log(pages);
  }
  //remove active tab
  links = document.getElementsByClassName("menu-item__link");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  //set active page and tab
  document.getElementById(page).style.display = "block";
  evt.currentTarget.className += " active";
}
