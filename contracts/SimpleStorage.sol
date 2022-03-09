//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleStorage {

  string public myData;

  function setData(string memory _data) external {
    myData = _data;
  }

  function getData() external view returns(string memory){
    return myData;
  }
    
}
