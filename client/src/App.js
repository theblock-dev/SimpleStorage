import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import SubmitForm from './SubmitData.js';
import {getWeb3, getContract} from './utils.js';




function App() {
  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [accounts, setAccounts] = useState([]);


  const saveData = async(e) => {
    e.preventDefault();
    alert('save');
    let data = document.getElementById('idString').innerHTML.value;
    console.log(data);
  }
  useEffect(()=>{

    const init = async () => {
      const web3 = await getWeb3();
      const contract = await getContract(web3);
      const accounts  = await web3.eth.getAccounts();

      setWeb3(web3);
      setContract(contract);
      setAccounts(accounts);
    }
    init();

  },[]);

  if(web3 === undefined && contract === undefined) {
    return(
      <div>Loading....</div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Simple Smart Contract - Simple Storage
        </h2>  
        <p>
          This contract will take a user input and save it on the blockchain
        </p>
        <SubmitForm contract={contract} accounts={accounts}>

        </SubmitForm>
      </header>
    </div>
  );
}

export default App;
