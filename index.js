var { postEvent, setDebug, targetOrigin, on } = window.tapps.bridge;

targetOrigin.set('*');
setDebug(true);

document.getElementById('call-inline-query').addEventListener('click', () => {
  postEvent('web_app_switch_inline_query', {
    query: 'Test query',
    chat_types: ['users']
  });
});

document.getElementById('call-show-storage').addEventListener('click', () => {
  postEvent('web_app_secure_storage_get_key', { key: 'TEST' });
})

on('secure_storage_key_received', res => {
  alert('Received storage key' + JSON.stringify(res));
});

postEvent('web_app_ready');