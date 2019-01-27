const msg =
  'lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae';

const chat = document.querySelector('.chat');

for (var i = 0; i < 10; i += 1) {
  let message = document.createElement('div');
  message.classList.add('message');

  let text = document.createElement('div');
  text.classList.add('message-text');
  text.innerText = msg;

  let pic = document.createElement('div');
  pic.classList.add('message-pic');

  message.appendChild(pic);
  message.appendChild(text);
  chat.appendChild(message);
}
