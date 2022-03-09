import React from "react";

function SubmitForm({contract, accounts}) {

    const getData = async () => {
        let result = await contract.methods.getData().call();
        document.getElementById('data').innerHTML = result;
    }
    const setData = async(e) => {
        e.preventDefault();
        let data = document.getElementById('setDataInput').value;
        console.log(data);
        await contract.methods.setData(data).send({from:accounts[0]});
        getData();
    }

    return(
        <form> 
            <div className="form-group">
                <label htmlFor="setDataInput" className="form-label">Set Data:</label>
                <input type="string" className="form-control" id="setDataInput"/>                
            </div>
            <button type="submit" className="btn btn-primary" onClick={e=> setData(e)}>Submit</button>
            <div>
                <span> Stored Data:
                <p id="data"></p>
                </span>
            </div>
        </form>
    )
}

export default SubmitForm;