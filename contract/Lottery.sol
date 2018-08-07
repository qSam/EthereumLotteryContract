pragma solidity ^0.4.17 ;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        // Get address of sender
        manager = msg.sender;
    }
}
