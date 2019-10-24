var showSearchButton = document.querySelector("#search-open-button");
var searchHotelArea = document.querySelector("#hotel-search-area");
var searchForm = searchHotelArea.querySelector("#hotel-search-area");

showSearchButton.addEventListener("click", function(evt){
  evt.preventDefault();
  searchHotelArea.classList.toggle("search-area-hide");
});

//
