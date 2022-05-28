require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name recipe noise method hover kiwi army gaze'; 
let testAccounts = [
"0xc39849f263a4e403b3a197f219926c464042a62d6aa0185a8223b96e8dc5a22c",
"0xc563cda53bf90964e6fedd17506335dd61a3bf9b9b13b6d7559f9b1ba87d934e",
"0xbee179b8e8d0ae949cb0b45c03a5578f68851379b24d14c9bf3de3a4371b6e12",
"0xa09d79fb58601fe1f573f32d8547eff7f5439d3a2834b5fdc9508705e425027c",
"0x3919365b04f81990efc2eeee9be770fcd9f4cc580b29499265789625680cfc42",
"0x5de6cf8446e44552bbd56295e4486497443ded185d4235330d713b4aefecb580",
"0x430f89f7e86e7509b89b967d19368c4455978a4c27aaaded342eaee128fb8d2d",
"0x41748dd3f2cb60c638d412b9122af9354e972b9459638aab202ea8e0144c15ff",
"0x9ba02333c01ba5ed5d23717d82f5ef7e6f0619762f5b9372c19dad9c44b0b806",
"0x2afeff91d8479a906961f25ec559904b2862cc699b7ebf5ca30809815e03277a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

