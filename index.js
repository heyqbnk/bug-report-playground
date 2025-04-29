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
  postEvent('web_app_secure_storage_get_key', { req_id: Math.random().toString(), key: 'test' });
})

on('secure_storage_key_received', res => {
  alert('Received secure_storage_key_received: ' + JSON.stringify(res));
});

postEvent('web_app_ready');