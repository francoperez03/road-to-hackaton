---
title: Checklist Pre-Demo
description: Lista verificable para audit rápido antes de demo o deploy
---

# Checklist Pre-Demo

## Autorización y Access Control

- [ ] Funciones críticas tienen modificadores de acceso (`onlyOwner`, `hasRole`)
- [ ] No hay funciones `public` que deberían ser `external` o `internal`  
- [ ] Owner/admin puede ser renunciado solo cuando sea seguro
- [ ] Time-locks implementados para cambios críticos
- [ ] Multi-sig para operaciones importantes

## Transferencias y Balances

- [ ] Checks-Effects-Interactions pattern en transferencias
- [ ] Validación de `amount > 0` donde aplique
- [ ] Validación de `address(0)` en transfers
- [ ] Balance sufficient checks antes de transferir
- [ ] Allowance checks para ERC20 transfers
- [ ] No hay integer overflow/underflow (usar SafeMath o 0.8+)

## Fallback y Receive

- [ ] `fallback()` y `receive()` definidos si aceptan ETH
- [ ] Gas limit considerado en funciones payable
- [ ] No operaciones complejas en `receive()`
- [ ] ETH que entra tiene caso de uso claro

## Eventos y Logging

- [ ] Eventos emitidos para cambios de estado críticos
- [ ] Eventos incluyen información suficiente para indexing
- [ ] No información sensible en eventos (solo references/hashes)
- [ ] Events siguen convención de naming

## Reverts y Error Handling  

- [ ] Custom errors en lugar de strings (gas efficiency)
- [ ] Mensajes de error claros y específicos
- [ ] No hay `assert()` en código de producción
- [ ] Failure modes manejados gracefully

## Gas y Optimización

- [ ] No loops sin upper bound
- [ ] Arrays grandes tienen pagination
- [ ] Variables packed correctamente (uint256 → uint128 si es suficiente)
- [ ] Constants y immutables donde aplique
- [ ] View functions no modifican state

## Calldata y External Calls

- [ ] External calls al final (Checks-Effects-Interactions)
- [ ] Reentrancy protection donde se necesite
- [ ] Call data validated antes de procesar
- [ ] Return values de external calls checked

## Tests y Coverage

- [ ] Happy path cases covered
- [ ] Edge cases y boundary conditions
- [ ] Revert conditions tested
- [ ] Gas usage reasonable (< 30M por tx compleja)
- [ ] Fuzzing en funciones críticas

## Deployment y Upgrades

- [ ] Constructor parameters validados
- [ ] Initializer solo callable una vez (upgradeable contracts)
- [ ] Storage layout compatible en upgrades
- [ ] Migration scripts tested en testnet

## Final Security

- [ ] No hardcoded private keys o secrets
- [ ] Timeouts y deadlines donde apliquen
- [ ] Circuit breakers para emergency stops
- [ ] External dependencies (oracles, etc) tienen fallbacks

---

::: tip Quick test
**Si dudás de algún item**, creá un test que falle cuando esa condición no se cumple.
:::