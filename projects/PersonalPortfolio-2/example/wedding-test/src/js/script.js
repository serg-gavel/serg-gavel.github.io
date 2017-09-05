(function() {

  function dropDown(event) {
    var target = event.target;

    if (!target.classList.contains('drop-down--toggle')) return;
    target.nextElementSibling.classList.toggle('hidden');
    event.preventDefault();
  }

  function showImg(event) {
    var target = event.target;

    if (!target.classList.contains('drop-down--toggle_img')) return;
    target.nextElementSibling.classList.toggle('hidden');
  }

  function hideImg(event) {
    var target = event.target;
    if (!target.classList.contains('drop-down--toggle_img')) return;
    target.nextElementSibling.classList.toggle('hidden');
  }



  var nav = document.querySelector('nav.header-nav');

  nav.addEventListener('click', dropDown);
  nav.addEventListener('mouseover', showImg);
  nav.addEventListener('mouseout', hideImg);
})();