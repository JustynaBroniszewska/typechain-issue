// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity =0.7.0;

contract Example {
  uint a = 1;
  uint b = 2;

  function getNumbers() public view returns(uint, uint) {
    return (a, b);
  }
}