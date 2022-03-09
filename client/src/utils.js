import Web3 from 'web3';
import SimpleStorage from './contracts/SimpleStorage.json';

const getWeb3 = async ()=> {
    const provider = new Web3.providers.HttpProvider('http://localhost:9545');
    const web3 = new Web3(provider);
    return web3;
}

const getContract = async (web3) => {
    const currentNetwork = await web3.eth.net.getId(); 
    const deployedNetwork = SimpleStorage.networks[currentNetwork];

    const contract = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork && deployedNetwork.address
    );
    return contract;
}

export {getWeb3,getContract};