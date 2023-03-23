const form = document.querySelector('#meme-form');
const memeContainer = document.querySelector('#meme-container');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting

  // Get values from form inputs
  const imageUrl = document.querySelector('#image-url').value;
  const topText = document.querySelector('#top-text').value;
  const bottomText = document.querySelector('#bottom-text').value;

  // Create new meme element
  const meme = document.createElement('div');
  meme.classList.add('meme');
  meme.innerHTML = `
    <img src="${imageUrl}">
    <div class="top-text">${topText}</div>
    <div class="bottom-text">${bottomText}</div>
    <button class="remove-button">Remove</button>
  `;

  // Add meme element to container
  memeContainer.appendChild(meme);

  // Clear form inputs
  document.querySelector('#image-url').value = '';
  document.querySelector('#top-text').value = '';
  document.querySelector('#bottom-text').value = '';
});

memeContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-button')) {
    e.target.parentNode.remove();
  }
});

