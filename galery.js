const pictures = document.querySelectorAll('img');

pictures.forEach(picture => {

  picture.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    picture.style.position = 'absolute';
    picture.style.zIndex = 1000;
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(picture);
  
    // centers the picture at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
      picture.style.left = pageX - picture.offsetWidth / 2 + 'px';
      picture.style.top = pageY - picture.offsetHeight / 2 + 'px';
    }
  
    // move our absolutely positioned picture under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the picture on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the picture, remove unneeded handlers
    picture.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      picture.onmouseup = null;
    };
  
  };
  
  picture.ondragstart = function() {
    return false;
  };
  
});
