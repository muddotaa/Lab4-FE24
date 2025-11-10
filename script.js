
document.addEventListener('DOMContentLoaded', () => {

  const element4 = document.getElementById('element-4');
  const element5 = document.querySelector('#element-5');

  if (element4) {
    let element4Clicked = false;
    element4.addEventListener('click', () => {
      if (element4Clicked) {
        element4.style.backgroundColor = '';
        element4.style.color = '';
      } else {
        element4.style.backgroundColor = 'lightblue';
        element4.style.color = 'darkblue';
      }
      element4Clicked = !element4Clicked;
    });
  }

  if (element5) {
    let element5Clicked = false;
    element5.addEventListener('click', () => {
      if (element5Clicked) {
        element5.style.backgroundColor = '';
        element5.style.color = '';
      } else {
        element5.style.backgroundColor = 'lightgreen';
        element5.style.color = 'darkgreen';
      }
      element5Clicked = !element5Clicked;
    });
  }


  const image = document.getElementById('prague-image');
  const addButton = document.getElementById('add-btn');
  const zoomInButton = document.getElementById('zoom-in-btn');
  const zoomOutButton = document.getElementById('zoom-out-btn');
  const removeButton = document.getElementById('remove-btn');

  if (!image || !addButton || !zoomInButton || !zoomOutButton || !removeButton) return;


  let width = 250;


  function ensureShown() {
    image.style.display = 'block';
    image.style.setProperty('display', 'block', 'important'); 
    image.style.height = 'auto';
    image.style.setProperty('max-width', 'none', 'important');
  }


  ensureShown();
  image.style.setProperty('width', width + 'px', 'important');


  addButton.addEventListener('click', () => {
    width = 250;
    ensureShown();
    image.style.setProperty('width', width + 'px', 'important');
  });


  zoomInButton.addEventListener('click', () => {
    ensureShown();
    const next = Math.min(1000, Math.round((image.clientWidth || width) * 1.1));
    width = next;
    image.style.setProperty('width', width + 'px', 'important');
  });


  zoomOutButton.addEventListener('click', () => {
    ensureShown();
    const next = Math.max(100, Math.round((image.clientWidth || width) * 0.9));
    width = next;
    image.style.setProperty('width', width + 'px', 'important');
  });


  removeButton.addEventListener('click', () => {
    image.style.setProperty('display', 'none', 'important'); 
  });
});
