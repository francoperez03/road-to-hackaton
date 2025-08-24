---
title: ZK-Lite (5Q) - Decisiones Rápidas
description: 5 preguntas para decidir entre Merkle Trees, Set Membership o RLN
---

# ZK-Lite (5Q) - Decisiones Rápidas

## Las 5 preguntas clave

### 1. **¿Qué necesitás probar?**

**A)** Soy miembro de un grupo → **Set Membership**  
**B)** Tengo un valor sin revelarlo → **Range/Commitment Proofs**  
**C)** Datos están en estructura válida → **Merkle Trees**  
**D)** No soy spam/bot → **Rate Limiting Nullifier (RLN)**

### 2. **¿Los datos cambian frecuentemente?**

**A)** Datos estáticos (whitelist, snapshot) → **Merkle Tree simple**  
**B)** Updates frecuentes → **Incremental Merkle Tree**  
**C)** Append-only (logs, events) → **Append-only Merkle**  
**D)** Need deletes → **Sparse Merkle Tree**

### 3. **¿Cuántos elementos?**

**A)** < 1000 elementos → **Direct Set Membership**  
**B)** 1K - 100K elementos → **Merkle Tree (depth 10-17)**  
**C)** 100K+ elementos → **Accumulator schemes**  
**D)** Millones → **Considera alternatives (no ZK)**

### 4. **¿Privacy vs Performance?**

**A)** Máxima privacy → **Full ZK proofs + nullifiers**  
**B)** Performance critical → **Merkle + minimal ZK**  
**C)** Balanced → **Set membership + public commitments**  
**D)** Demo rápida → **Simple Merkle tree**

### 5. **¿Spam/DoS protection?**

**A)** No es concern → **Skip RLN**  
**B)** Rate limiting basic → **Simple nonce schemes**  
**C)** Anonymous rate limiting → **RLN (Rate Limiting Nullifier)**  
**D)** Complex reputation → **RLN + scoring**

## Mapeo: Respuestas → Solución

### Merkle Trees

**Casos**: 1C, 2A/B/C, 3B  
**Ejemplo**: Whitelist de addresses para airdrop  
**Riesgo**: Tree depth muy grande (>20) afecta performance

```rust
// Noir circuit básico
fn verify_membership(
    leaf: Field,
    path: [Field; DEPTH],
    path_indices: [Field; DEPTH],
    root: Field
) -> bool
```

### Set Membership

**Casos**: 1A, 2A, 3A  
**Ejemplo**: Verificar que address está en set de validators  
**Riesgo**: No escala bien, O(n) constraints

```rust
// Noir circuit básico  
fn verify_set_membership(
    element: Field,
    set: [Field; SET_SIZE]
) -> bool
```

### RLN (Rate Limiting Nullifier)

**Casos**: 1D, 5C/D  
**Ejemplo**: 1 vote anónimo por persona por día  
**Riesgo**: Complejidad alta, necesita nullifier management

```rust
// RLN esquema básico
fn generate_proof(
    secret: Field,
    external_nullifier: Field, // epoch/voting_id
    signal: Field,             // vote/message
    rate_limit: Field          // max per epoch
) -> (Field, Field, Field)     // proof components
```

## Ejemplos mini por caso

### **Voting anónimo**
- **Setup**: Set of eligible voters (Merkle tree)
- **Proof**: "I'm in tree + this is my vote"  
- **Nullifier**: Prevent double voting
- **Solución**: Merkle + nullifier simple

### **Anonymous feedback**  
- **Setup**: Employee set (company directory)
- **Proof**: "I work here + this is my rating"
- **Rate limit**: 1 feedback per quarter per person
- **Solución**: RLN con epoch = quarter

### **Private airdrop**
- **Setup**: Snapshot de holders
- **Proof**: "I held X tokens at block Y"  
- **Claim**: One-time claim per address
- **Solución**: Merkle tree + nullifier mapping

### **Reputation without identity**
- **Setup**: Historical interactions
- **Proof**: "I have reputation score > threshold"
- **Privacy**: Score range, not exact value  
- **Solución**: Range proof + accumulator

## Riesgos típicos por approach

### **Merkle Trees**
- Tree depth explosion con datasets grandes
- Root updates necesitan coordination  
- Path generation puede ser costoso

### **Set Membership**
- Circuit constraints crecen linealmente O(n)
- No practical para sets grandes
- Updates require circuit recompilation  

### **RLN**
- Complex nullifier management
- Key management para secrets
- Slashing logic si rate limit se viola

## Quick decision tree

```
¿Necesitás anonimato? 
├─ No → Simple Merkle tree
└─ Sí → ¿Necesitás rate limiting?
    ├─ No → Set membership + nullifiers
    └─ Sí → RLN scheme
```

## Tools y librerías

- **Merkle**: `incremental-merkle-tree` npm package
- **Set**: Native Noir constraints
- **RLN**: `rln-js` library, Semaphore protocol
- **Testing**: Local circuits antes de deploy

---

::: tip Start simple
**Para hackathones: empezá con Merkle tree simple.** Podés optimizar después si funciona.
:::