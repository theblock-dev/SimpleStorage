const Storage = artifacts.require('SimpleStorage.sol');

contract('SimpleStorage', () => {
    let contractInstance;

    it('should set the correct value from the function', async () => {
        contractInstance = await Storage.deployed();
        await contractInstance.setData("Hi Sam");
        const result = await contractInstance.getData();
        assert(result === "Hi Sam");
    })

})