(function () {
document.querySelector('body').addEventListener('click', function (e) {
    e.target.matches = e.target.matches || e.target.msMatchesSelector;
    if (e.target.matches('#chatBot')||e.target.matches('#chatBotIcon')||e.target.matches('#chatMin')) {
      var botDiv = document.querySelector('#botDiv');
      var btnChatbot = document.querySelector('#chatBot');
      btnChatbot.classList.toggle('hide');
      botDiv.classList.toggle('hide');
      botDiv.style.height = botDiv.style.height == '600px' ? '0px' : '600px';
    };
  });
}());
