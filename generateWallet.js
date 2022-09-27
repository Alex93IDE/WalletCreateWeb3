const Web3 = require("web3")
require('dotenv').config()

const create = () => {
    const web3 = new Web3(process.env.BSC_RPC)
    const str = web3.utils.sha3(Math.random(0, 1000000).toString(16) + web3.utils.randomHex(32))
    const wallet = web3.eth.accounts.create(str)
    console.log(wallet);

    //Si quieres encriptar la wallet para guardar el objeto que devuelve en la DB
    const privateKeyEncrypt = web3.eth.accounts.encrypt(wallet.privateKey, 'password')
    console.log(privateKeyEncrypt);

    //proceso inverso 
    const privateKeyDencrypt = web3.eth.accounts.decrypt(privateKeyEncrypt, 'password');
    console.log(privateKeyDencrypt);
}

create()