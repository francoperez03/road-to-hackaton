---
title: Cheatsheet Solidity 2025
description: Patrones esenciales, gotchas y micro-diffs para Solidity 0.8.24+
---

# Cheatsheet Solidity 2025

## Patrones esenciales

### Access Control Moderno
```solidity
// OpenZeppelin 5.0+
import "@openzeppelin/contracts/access/AccessControl.sol";

bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
bytes32 public constant USER_ROLE = keccak256("USER_ROLE");
```

### Upgradeable con Storage Gap
```solidity
contract MyContract is Initializable, UUPSUpgradeable {
    uint256[50] private __gap; // Reserva espacio para futuras variables
    
    function _authorizeUpgrade(address) internal override onlyOwner {}
}
```

### Custom Errors (Gas Efficient)
```solidity
error InsufficientBalance(uint256 available, uint256 required);
error Unauthorized(address caller);

// Uso
if (balance < amount) revert InsufficientBalance(balance, amount);
```

## Gotchas críticos

### **Storage Layout**
❌ Cambiar orden de variables en upgrades  
✅ Siempre añadir al final o usar storage gaps

### **Function Visibility** 
❌ `public` para funciones internas  
✅ `internal` o `private` + `external` wrapper si necesario

### **Loop Gas Limits**
❌ Loops sin límite superior  
✅ Pagination o `require(i < MAX_ITERATIONS)`

### **Reentrancy**  
❌ State changes después de external calls  
✅ Checks-Effects-Interactions pattern

## Tests flash (Foundry)

### Setup básico
```solidity
contract MyContractTest is Test {
    MyContract public myContract;
    
    function setUp() public {
        myContract = new MyContract();
    }
    
    function testBasicFunction() public {
        // arrange, act, assert
    }
}
```

### Fuzzing
```solidity
function testFuzz(uint256 amount) public {
    vm.assume(amount > 0 && amount < type(uint128).max);
    // test con valores random
}
```

### Expecting reverts
```solidity
function testRevertCondition() public {
    vm.expectRevert(InsufficientBalance.selector);
    myContract.withdraw(1000 ether);
}
```

## Mini-checklist pre-deploy

- [ ] Custom errors instead of strings
- [ ] All functions have correct visibility  
- [ ] No loops without upper bounds
- [ ] Storage layout compatible if upgradeable
- [ ] Events emitted for state changes
- [ ] Access control implemented
- [ ] Reentrancy protection where needed

## Tabla: Haz / Evitá / Micro-diff

| Situación | ❌ Evitá | ✅ Haz | 🔧 Micro-diff |
|-----------|----------|---------|---------------|
| **Errors** | `require(x, "msg")` | `revert CustomError()` | `if (!x) revert CustomError()` |
| **Loops** | `for(;;)` infinito | `for(i; i < MAX; i++)` | `require(items.length <= MAX)` |
| **Storage** | `public` variables | `private` + getter | `uint private _value;` |
| **Gas** | String literals | Bytes32 constants | `bytes32 constant MSG = "text"` |
| **Access** | `onlyOwner` everywhere | Role-based access | `hasRole(ROLE, msg.sender)` |
| **Upgrades** | Direct storage | Storage gaps | `uint[50] private __gap;` |
| **External** | No validation | Input sanitization | `require(addr != address(0))` |
| **Events** | Missing events | Event on state change | `emit Updated(old, new);` |

## Resources

- [Solidity 0.8.24 docs](https://docs.soliditylang.org)
- [OpenZeppelin 5.0](https://docs.openzeppelin.com/contracts)
- [Foundry Book](https://book.getfoundry.sh)