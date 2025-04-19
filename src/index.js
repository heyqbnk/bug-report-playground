var { postEvent, setDebug, targetOrigin } = window.tapps.bridge;

targetOrigin.set('*');
setDebug(true);

document.getElementById('call-inline-query').addEventListener('click', () => {
  postEvent('web_app_switch_inline_query', {
    query: 'Test query',
    chat_types: ['users']
  });
});

postEvent('web_app_ready');