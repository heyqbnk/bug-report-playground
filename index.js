var { postEvent, setDebug, targetOrigin, on } = window.tapps.bridge;

targetOrigin.set('*');
setDebug(true);

document.getElementById('call-inline-query').addEventListener('click', () => {
  postEvent('web_app_switch_inline_query', {
    query: 'Test query',
    chat_types: ['users']
  });
});

document.getElementById('call-secure-storage-set').addEventListener('click', () => {
  postEvent('web_app_secure_storage_save_key', {
    req_id: 'abc',
    key: 'AAA',
    value: 'BBB',
  });
  alert('Called web_app_secure_storage_save_key with { key: "AAA", value: "BBB" }');
})

on('secure_storage_key_received', res => {
  alert('Received secure_storage_key_received: ' + JSON.stringify(res));
});

postEvent('web_app_ready');