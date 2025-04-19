document.getElementById('call-inline-query').addEventListener('click', () => {
  window.Telegram.WebApp.switchInlineQuery('Test query', ['users']);
});

window.Telegram.WebApp.ready();