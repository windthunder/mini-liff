document.addEventListener('DOMContentLoaded', () => {
  const liff = window.liff;

  const generateBlock = (name, result) => {
    const div = document.createElement('div');
    const title = document.createElement('div');
    title.style.fontWeight = 'bold';
    title.style.fontSize = '1.5em';
    title.style.margin = '10px';
    title.textContent = name;
    const code = document.createElement('code');
    code.style.fontSize = '1em';
    code.style.border = '1px solid #ccc';
    code.textContent = JSON.stringify(result, null, 2);
    div.appendChild(title);
    div.appendChild(code);

    return div;
  }

  const method_names = [
    'getOS',
    'getAppLanguage',
    'getVersion',
    'getLineVersion',
    'getContext',
    'isInClient',
    'isLoggedIn',
    'isApiAvailable',

    'getAccessToken',
    'getIDToken',
    'getDecodedIDToken',

    'getProfile',
    'getFriendship',

    // 'sendMessages' // 這個的行為搞不懂 這是表示我可以使用用戶的身分發送訊息嗎？ 會發給誰？




  ];
  const body = document.body;
  const init = async () => {
    await liff.init({
      liffId: '2007081934-b4W0oD5Q',
      withLoginOnExternalBrowser: true
    });
  }


  // 初始化成功
  liff.ready.then(() => {
    alert('LIFF init succeeded');
    method_names.forEach(async (method_name) => {
      try {
        const method = liff[method_name];
        const result = await method();
        body.appendChild(generateBlock(method_name, result));
      } catch (err) {
        body.appendChild(generateBlock(method_name, err));
      }
    });
  }).catch((err) => {
    alert('LIFF init failed');
  });



  init();


});
