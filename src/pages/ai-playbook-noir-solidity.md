---
title: Entrenamiento IA - Hackathons ZK
description: Estrategias y prompts probados para construir proyectos ganadores en hackathons ZK/Noir/Solidity
---

# 🎯 Entrenamiento IA - Hackathons ZK

## ¿Por qué necesitas entrenar con IA para hackathons?

En hackathons **tienes 48-72 horas para ir de idea a demo funcional**. Los equipos ganadores no improvisan: tienen sistemas probados. **87% de los proyectos ZK ganadores utilizaron IA para acelerar development**, pero solo los que sabían cómo comunicarse correctamente.

**Los principales desafíos en hackathons ZK:**

- **Tiempo límite brutal**: 48-72 horas para prototipar, desarrollar y presentar
- **Stack complejo**: Circuits + Smart Contracts + Frontend + Backend
- **Debugging bajo presión**: Error en circuit = horas perdidas sin debugger tradicional
- **Demo que funcione**: Los jueces solo ven lo que realmente corre

Este entrenamiento te da **estrategias probadas en hackathons reales** para maximizar tu velocidad de desarrollo con IA.

## 🏆 Estrategias de Comunicación con IA para Hackathons

### Las 6 reglas de oro para hackathons ZK de alta velocidad

**1. Deadline-driven context**
- **SIEMPRE incluye**: "Hackathon deadline: X horas restantes"
- Especifica stack completo: Noir v1.0.0-beta.11, Solidity 0.8.24, React/Next.js
- Prioridad: "Funciona > Perfecto" (los jueces valoran demos que funcionan)

**2. Código que compila al primer intento**
- **Exige**: "Código completo, ejecutable, que compile desde el primer copy-paste"
- **Nunca aceptes**: "// completá esta parte", "// implementá esto"  
- **Pedí**: Estructura de archivos + imports + todo lo necesario

**3. Tests mínimos pero efectivos**
- **Solo lo esencial**: 1 happy path test + 1 edge case por función
- **Prioridad**: Coverage de user flows principales para la demo
- **Automatiza**: Scripts de testing que se ejecuten rápido

**4. Scripts de deploy automatizados**
- **Todo scripteado**: `npm run deploy`, `nargo prove`, `forge deploy`
- **Zero configuración manual**: No debe requerir setup manual durante hackathon
- **Respaldos incluidos**: Si algo falla, tener plan B listo

**5. Iteraciones rápidas**  
- **Micro-changes**: Para optimizaciones, pedí "diff exacto línea X → línea Y"
- **Feedback loops cortos**: Cambios que se puedan testear en \<5 minutos
- **Rollback fácil**: Siempre mantené versión funcional anterior

**6. Security mínima viable**
- **Enfoque hackathon**: Evitar vulnerabilidades obvias, no auditoría completa
- **Prioridad**: Input validation básica, overflow protection, reentrancy guards
- **Documentar**: Trade-offs de seguridad para explicar a jueces

## 🚀 Plantilla de Prompt para Hackathons

Esta plantilla está optimizada para hackathons ZK y ha sido probada en competencias reales donde los equipos ganaron:

```
🏁 HACKATHON CONTEXT: [Nombre del hackathon] - [X horas restantes] 
Stack: [Noir v1.0.0-beta.11 | Solidity 0.8.24 | React/Next.js | Hardhat/Foundry]
Objetivo: [Feature específico que necesito para la demo]
Demo deadline: [Cuándo necesito que esté funcionando]

🎯 ENTREGABLES CRÍTICOS:
- ✅ Código que compile y ejecute al primer intento  
- ✅ Scripts de deploy automatizados (`npm run deploy`)
- ✅ Test básico que demuestre funcionamiento
- ✅ Instrucciones de 1 minuto para correr local
- ✅ Estimación de gas/constraints para pitch

🚨 RESTRICCIONES HACKATHON:
- Performance: [Ejemplo: \<300K gas, \<10s proof time] 
- Tech stack: [Solo usar librerías ya instaladas]
- Complexity: [MVP funcional > feature completa]

📋 DEMO REQUIREMENTS:
Input/Output: [Qué inputs debe manejar, qué debe mostrar]
User flow: [Pasos exactos que debe seguir user en demo]
Edge cases: [Qué pasa si algo falla durante presentación]

⚡ PRIORIDAD: Funciona > Bonito > Perfecto
```

**¿Por qué funciona esta plantilla en hackathons?**
- **Contexto de urgencia**: La IA entiende que no hay tiempo para iteraciones
- **Foco en demo**: Prioriza features que se ven y funcionan en presentación  
- **Completeness hackathon**: Todo lo necesario para que funcione bajo presión
- **Risk management**: Considera qué puede fallar durante la demo

## 🔥 4 Prompts Ganadores - Los Más Relevantes para Hackathons

### Los circuit patterns que realmente ganan hackathons

#### **1. Merkle Tree Membership** - 🟢 BEGINNER | ⭐⭐⭐⭐⭐ ESENCIAL

```
Contexto: Noir v1.0.0-beta.11, PlonK proving system, production deployment
Objetivo: Implementar incremental Merkle tree con membership proofs gas-optimizados
Restricciones de performance: depth ≤17 para performance, \<300K gas verificación on-chain
Restricciones de seguridad: resist timing attacks, zero subtree pre-computation

Entregables requeridos:
- ✅ Circuit completo con depth configurable (8, 10, 17)
- ✅ Poseidon hash con field arithmetic correcto (Fp: p=2^256-2^32-977)  
- ✅ Zero subtree pre-computation para eficiencia
- ✅ Tests con paths válidos/inválidos, edge cases (empty tree, single leaf)
- ✅ Comandos: `nargo test`, `nargo prove`, `nargo codegen-verifier`
- ✅ Gas estimation: verificación \<300K, batch verification savings
- ✅ Análisis: vulnerabilidades en path validation, constraint completeness

Input/Output esperado:
- Input: leaf_value (Field), merkle_path (Array<Field>), path_indices (Array<bool>), root (Field)
- Output: boolean verification result
- Witness file format para testing

Contexto adicional:
Integración con Solidity verifier, soporte para updates incrementales
```

#### **2. Anonymous Voting** - 🟡 INTERMEDIATE | ⭐⭐⭐⭐⭐ CROWD FAVORITE

```
Contexto: Noir v1.0.0-beta.11, anonymous voting system con nullifier prevention
Objetivo: Vote anónimo con proof of eligibility y double-voting prevention
Restricciones de performance: \<500K constraints total, batch verification support
Restricciones de seguridad: nullifier uniqueness, voter privacy, coercion resistance

Entregables requeridos:
- ✅ Voting circuit con nullifier generation
- ✅ Merkle tree membership (eligible voters list)
- ✅ Nullifier hash computation (prevent double voting)
- ✅ Vote commitment scheme
- ✅ Tests: valid votes, double-voting attempts, non-eligible voters
- ✅ Integration pattern con on-chain nullifier registry

Input/Output esperado:
- vote_choice: Field (encrypted vote)
- voter_secret: Field (private voter key)
- eligibility_proof: MerkleProof (voter in eligible list)
- nullifier: Field (public, prevents double voting)
- Output: valid anonymous vote proof

**¿Por qué es clave?**
Governance anónimo = súper popular con jueces. Privacidad + utilidad + demo fácil.

**Demo magic:**
- Setup: "5 voters elegibles"
- Demo: "Alice vota SÍ sin revelar que es Alice"
- Impact: "Resultado público, Alice privada"
- Try hack: "Alice intenta votar otra vez... ¡falla!"
```

#### **3. Range Proof** - 🟡 INTERMEDIATE | ⭐⭐⭐⭐⭐ VERSATILE BEAST

```
Contexto: Noir v1.0.0-beta.11, range proofs para privacy-preserving finance
Objetivo: Probar que valor está en rango [min, max] sin revelar valor exacto
Restricciones de performance: \<50K constraints para range [0, 2^32], \<3s proof time
Restricciones de seguridad: prevent overflow attacks, handle edge cases

Entregables requeridos:
- ✅ Range proof circuit con bounds configurables
- ✅ Binary decomposition optimizada (minimal constraint count)
- ✅ Tests con boundary values (min-1, min, max, max+1)
- ✅ Comparison operators efficient implementation
- ✅ Public range parameters validation
- ✅ Constraint analysis vs naive bitwise approach

Input/Output esperado:
- secret_value: Field (value to prove)
- min_value: Field (public range minimum)
- max_value: Field (public range maximum)
- Output: proof of secret_value ∈ [min_value, max_value]

**¿Por qué es poderoso?** 
Súper versátil. Los jueces ven aplicaciones inmediatas en múltiples industrias.

**Hackathon superpowers:**
- Age verification: "I'm 18+ without revealing I'm 19"
- Salary verification: "I earn >$50K without revealing $67K"  
- Auction bidding: "My bid is valid without revealing amount"
- Credit scoring: "My score is 700+ without revealing 750"
```

#### **4. Private Set Membership** - 🔴 ADVANCED | ⭐⭐⭐⭐⭐ ACCESS CONTROL KING

```
Contexto: Noir v1.0.0-beta.11, private set membership para whitelist verification
Objetivo: Prove element belongs to set without revealing which element
Restricciones de performance: sets up to 10K elements, \<500K constraints
Restricciones de seguridad: prevent set enumeration, membership privacy

Entregables requeridos:
- ✅ Set membership circuit con efficient lookup
- ✅ Merkle tree based implementation
- ✅ Polynomial commitment alternative analysis
- ✅ Tests con large sets, non-membership cases
- ✅ Set update mechanism (dynamic membership)
- ✅ Comparison: tree depth vs proof size trade-offs

Input/Output esperado:
- secret_element: Field (element to prove membership)
- set_commitment: Field (public set representation)
- membership_proof: MerkleProof (element in set)
- set_size: u32 (for verification)
- Output: membership proof without revealing element

**¿Por qué es ganador?**
Whitelist verification súper común. KYC, access control, exclusive communities.

**Hackathon classics:**
- "Prove you're on VIP list without saying who you are"
- "KYC verification without revealing personal data"
- "Alumni verification for exclusive access"
- "Stakeholder voting without revealing stake size"
```

---

**¿Por qué estos 4 dominan hackathons?**

1. **🟢 Merkle Tree**: Foundation de todo, start aquí
2. **🟡 Anonymous Voting**: Governance es hot topic con jueces
3. **🟡 Range Proof**: Versátil para 10+ use cases diferentes  
4. **🔴 Set Membership**: Access control everyone understands

**Pro tip**: Combina 2-3 de estos en un proyecto para maximum impact! 🚀

## 🚨 Emergency Protocols - Hackathon Crisis Management

### Protocolo: "6 Horas Restantes - Triage Mode"

**Situación**: Son las 6 AM del domingo, demo a las 12 PM, todo se está rompiendo.

```
CONTEXT: EMERGENCY TRIAGE - 6 HOURS TO DEMO
Current status: [Describe what's broken]
Working components: [List what still functions]
Critical path: [What MUST work for demo]
Team capacity: [Who's available, energy levels]

TRIAGE PRIORITIES:
1. ✅ ONE working user flow (forget edge cases)
2. ✅ Visual proof it works (screenshots/video backup)
3. ✅ 30-second pitch explaining the working part
4. ✅ Fallback demo (if live demo fails)

EMERGENCY CUTS - MAKE THESE SACRIFICES:
- Complex error handling → Basic happy path only
- Beautiful UI → Functional interface only  
- Full feature set → Core functionality only
- Perfect security → Demo-level security
- Comprehensive tests → One integration test

EMERGENCY ESCALATION:
If still broken at 4 hours remaining:
- Pivot to working prototype from earlier version
- Create convincing mockup + explain "how it would work"
- Focus 100% on pitch, not code
```

### Protocolo: "Circuit Compilation Failure at 3 AM"

**Situación**: Noir circuit no compila, deadline en horas, equipo agotado.

```
EMERGENCY: CIRCUIT COMPILATION FAILURE
Error message: [Exact nargo error]
Last working version: [Git commit or backup]
Time remaining: [Hours until demo]
Alternative approaches available: [Y/N]

SYSTEMATIC DEBUG PROTOCOL:
1. ✅ Rollback to last working commit IMMEDIATELY
2. ✅ Identify exact line causing failure (binary search approach)
3. ✅ Minimal reproducible example (isolate the problem)
4. ✅ Check Noir v1.0.0-beta.11 breaking changes
5. ✅ Simplify circuit logic (remove optimizations)
6. ✅ Fallback to manual proof generation if needed

EMERGENCY ALTERNATIVES (in order):
- Replace complex logic with simplified version
- Use mock proof values for demo (admit this to judges)
- Switch to different circuit pattern entirely
- Demo architecture only, explain implementation plan
```

### Protocolo: "Solidity Integration Hell"

**Situación**: Circuit funciona, Solidity no puede verificar, tiempo crítico.

```
EMERGENCY: SOLIDITY VERIFICATION FAILURE
Circuit: [Working/Broken]
Proof generation: [Working/Broken] 
Solidity deployment: [Working/Broken]
Verification call: [Failing with error: X]

RAPID INTEGRATION FIX:
1. ✅ Copy-paste working example from official docs
2. ✅ Match EXACT public input ordering
3. ✅ Verify proof format matches verifier expectations
4. ✅ Test with manual proof values first
5. ✅ Gas limit investigation (increase to 10M for testing)

EMERGENCY WORKAROUNDS:
- Emit events on verification failure for debugging
- Create off-chain verification demo first
- Use trusted setup from working examples
- Mock verification for demo, show proof structure
```

### Protocolo: "Demo Day Disaster Recovery"

**Situación**: 30 minutos antes del pitch, todo está funcionando mal.

```
DEMO CRISIS MANAGEMENT - 30 MINUTES TO PITCH
Status: [Everything broken/Partially working/Different issue]
Audience: [Technical judges/Business judges/Mixed]
Backup materials: [Available/Not prepared]

IMMEDIATE ACTIONS (next 10 minutes):
1. ✅ Stop trying to fix code - STOP
2. ✅ Prepare convincing explanation of the problem
3. ✅ Screenshots/video of when it was working
4. ✅ Architectural diagram showing the solution
5. ✅ Focus on problem solved, not implementation details

PITCH PIVOT STRATEGY:
"Due to [specific technical issue], I'll demo the architecture and 
show you how we solved [core problem]. This represents X hours of 
development and here's the impact..."

WHAT TO EMPHASIZE:
- Problem identification (shows understanding)
- Solution architecture (shows technical skill)  
- Implementation challenges overcome (shows expertise)
- Next steps to completion (shows viability)

NEVER SAY:
- "We ran out of time" (sounds like poor planning)
- "It was working before" (sounds unreliable)
- "We'll figure it out later" (sounds unfinished)
```


## ⛽ Gas Optimization Bible - Constraint & Gas Hacks

### Noir Constraint Optimization (Battle-Tested Techniques)

#### **Constraint Reduction Hacks**

**1. Field Arithmetic Optimization**
```rust
// ❌ EXPENSIVE (Multiple constraints)
fn expensive_comparison(a: Field, b: Field) -> bool {
    let diff = a - b;
    let abs_diff = if diff > 0 { diff } else { 0 - diff };
    abs_diff < 10
}

// ✅ CHEAP (Single constraint)
fn cheap_comparison(a: Field, b: Field) -> bool {
    let diff_squared = (a - b) * (a - b);
    diff_squared < 100  // Equivalent to |a-b| < 10
}
```

**2. Poseidon Hash Tricks**
```rust
// ❌ EXPENSIVE (N hash operations)
fn hash_array_naive(arr: [Field; N]) -> Field {
    let mut result = 0;
    for i in 0..N {
        result = poseidon::hash_2([result, arr[i]]);
    }
    result
}

// ✅ OPTIMIZED (Single hash operation)  
fn hash_array_batch(arr: [Field; N]) -> Field {
    poseidon::hash_n(arr)  // Batch hashing reduces constraints
}
```

**3. Range Check Optimization**
```rust
// ❌ EXPENSIVE (Bitwise decomposition)
fn range_check_bits(x: Field, max_bits: u32) -> bool {
    let bits = x.to_le_bits(max_bits);
    // Each bit costs constraints
    true
}

// ✅ CHEAP (Mathematical constraint)
fn range_check_math(x: Field, max_value: Field) -> bool {
    x * (max_value + 1 - x) != 0  // Single constraint
}
```

#### **Merkle Tree Constraint Hacks**

**Pre-compute Zero Subtrees**
```rust
// Save 30-50% constraints on sparse trees
const ZERO_HASHES: [Field; 20] = [
    // Pre-computed hash values for empty subtrees
    0, hash(0,0), hash(hash(0,0), hash(0,0)), ...
];

fn efficient_merkle_proof(
    leaf: Field,
    path: [Field; DEPTH],  
    indices: [bool; DEPTH]
) -> Field {
    let mut current = leaf;
    for i in 0..DEPTH {
        let (left, right) = if indices[i] {
            (path[i], current)
        } else {
            (current, path[i])
        };
        current = poseidon::hash_2([left, right]);
    }
    current
}
```

### Solidity Gas Optimization (Hackathon-Specific)

#### **Verification Gas Hacks**

**1. Batch Verification Pattern**
```solidity
// ✅ SAVE ~60% gas for multiple proofs
contract BatchVerifier {
    function verifyBatch(
        uint256[] calldata proofs,
        uint256[][] calldata publicInputs
    ) external view returns (bool[] memory results) {
        // Batch pairing operations instead of individual
        // Use assembly for gas optimization
        assembly {
            // Custom batch verification logic
        }
    }
}
```

**2. Precompiled Contract Optimization**
```solidity
// Use precompiles for expensive operations
contract OptimizedVerifier {
    // Use ecrecover precompile (gas cost: 3000)
    function cheapECDSA(bytes32 hash, bytes calldata sig) 
        external pure returns (address) {
        // Costs ~3K gas vs 50K+ for manual implementation
        return ecrecover(hash, v, r, s);
    }
    
    // Use bn256 precompiles for pairing
    function cheapPairing(bytes calldata input)
        external view returns (bool) {
        (bool success, bytes memory result) = 
            address(0x08).staticcall(input);  // bn256Pairing precompile
        return success && abi.decode(result, (bool));
    }
}
```

**3. Storage vs Memory Optimization**
```solidity
// ✅ SAVE ~15K gas per storage read avoided
contract GasOptimized {
    uint256 private cachedValue;
    
    function batchOperations(uint256[] calldata inputs) external {
        uint256 cached = cachedValue;  // Single SLOAD
        
        for (uint i = 0; i < inputs.length; i++) {
            // Use cached value instead of storage reads
            processWithCached(inputs[i], cached);
        }
    }
}
```

#### **Emergency Gas Reduction Tricks**

**When Verification Costs Too Much Gas:**

```solidity
// Pattern 1: Lazy Verification
contract LazyVerifier {
    mapping(bytes32 => bool) public pendingProofs;
    
    function submitProof(bytes calldata proof) external {
        bytes32 proofHash = keccak256(proof);
        pendingProofs[proofHash] = true;  // ~20K gas
        // Verify later or off-chain
    }
}

// Pattern 2: Probabilistic Verification  
contract ProbabilisticVerifier {
    uint256 private nonce;
    
    function shouldVerify() internal returns (bool) {
        // Verify only 10% of proofs for demo purposes
        return (uint256(keccak256(abi.encode(nonce++))) % 10) == 0;
    }
}

// Pattern 3: Trusted Relayer Pattern
contract TrustedDemo {
    address public trustedRelayer;
    
    modifier onlyTrusted() {
        require(msg.sender == trustedRelayer, "Demo mode");
        _;
    }
    
    function verifyProofTrusted(bytes calldata proof) 
        external onlyTrusted {
        // Skip verification in demo, trust relayer
        emit ProofVerified(keccak256(proof));
    }
}
```

### Hackathon-Specific Performance Targets

#### **Benchmarks That Impress Judges**

**ZK Circuit Benchmarks:**
- **Merkle Tree (depth 20)**: \<500K constraints
- **ECDSA Verification**: \<1.2M constraints  
- **Range Proof (32-bit)**: \<50K constraints
- **Hash Chain (1000 elements)**: \<200K total constraints

**Gas Cost Benchmarks:**
- **Proof Verification**: \<300K gas
- **Batch Verification (10 proofs)**: \<800K gas total
- **Storage Update**: \<50K gas per update
- **Event Emission**: \<1K gas per event

**Performance Benchmarks:**
- **Proof Generation**: \<10 seconds on standard laptop
- **Circuit Compilation**: \<30 seconds
- **Contract Deployment**: \<2M gas total
- **End-to-end User Flow**: \<1 minute total

#### **Last-Resort Optimization Hacks**

**When Everything is Too Slow:**

1. **Reduce Circuit Complexity**: Cut features, not performance
2. **Mock Complex Parts**: Use placeholder values, document approach
3. **Off-chain Optimization**: Move computation off-chain, verify on-chain
4. **Precomputed Values**: Hard-code common cases
5. **Demo-specific Shortcuts**: Optimize for demo flow only

**Emergency Gas Reduction:**
- Use CREATE2 for deterministic addresses (save deployment gas)
- Pack multiple values into single storage slots
- Use events instead of storage for non-critical data
- Implement view functions for complex reads
- Cache frequently accessed values

## 🚀 Quick Start Templates - Copy-Paste & Win

### Project Structure Template (Working in 5 minutes)

```
hackathon-project/
├── circuits/
│   ├── src/
│   │   └── main.nr              # Main circuit
│   ├── Prover.toml              # Witness input
│   └── Nargo.toml               # Circuit config
├── contracts/
│   ├── src/
│   │   ├── Verifier.sol         # Generated verifier
│   │   └── Application.sol      # Your app logic
│   ├── test/
│   │   └── Integration.t.sol    # Basic tests
│   ├── script/
│   │   └── Deploy.s.sol         # Deployment script
│   └── foundry.toml             # Foundry config
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProofGenerator.tsx
│   │   ├── utils/
│   │   │   └── noir.ts          # Noir integration
│   │   └── App.tsx
│   └── package.json
├── scripts/
│   ├── setup.sh                 # Environment setup
│   ├── build.sh                 # Full build pipeline
│   └── demo.sh                  # Demo preparation
└── README.md                    # Clear instructions
```

### Circuit Template (Merkle Tree Membership)

```rust
// circuits/src/main.nr
use dep::poseidon;

fn main(
    // Private inputs
    secret_leaf: Field,
    path_elements: [Field; TREE_DEPTH],
    path_indices: [bool; TREE_DEPTH],
    
    // Public inputs  
    public root: Field
) {
    let computed_root = compute_merkle_root(
        secret_leaf,
        path_elements,
        path_indices
    );
    
    assert(computed_root == root);
}

fn compute_merkle_root(
    leaf: Field,
    path: [Field; TREE_DEPTH], 
    indices: [bool; TREE_DEPTH]
) -> Field {
    let mut current = leaf;
    
    for i in 0..TREE_DEPTH {
        let path_element = path[i];
        let (left, right) = if indices[i] {
            (path_element, current)
        } else {
            (current, path_element)
        };
        current = poseidon::poseidon_hash([left, right]);
    }
    
    current
}

global TREE_DEPTH: u32 = 20;
```

### Solidity Integration Template

```solidity
// contracts/src/Application.sol
pragma solidity ^0.8.24;

import "./Verifier.sol";  // Generated by nargo

contract HackathonApp {
    UltraVerifier public immutable verifier;
    
    mapping(uint256 => bool) public usedNullifiers;
    uint256 public merkleRoot;
    
    event ProofVerified(address indexed user, uint256 nullifier);
    
    constructor(address _verifier, uint256 _merkleRoot) {
        verifier = UltraVerifier(_verifier);
        merkleRoot = _merkleRoot;
    }
    
    function submitProof(
        bytes calldata proof,
        uint256 nullifier
    ) external {
        require(!usedNullifiers[nullifier], "Nullifier used");
        
        uint256[] memory publicInputs = new uint256[](2);
        publicInputs[0] = merkleRoot;
        publicInputs[1] = nullifier;
        
        require(
            verifier.verify(proof, publicInputs),
            "Invalid proof"
        );
        
        usedNullifiers[nullifier] = true;
        emit ProofVerified(msg.sender, nullifier);
    }
}
```

### Frontend Integration Template

```typescript
// frontend/src/utils/noir.ts
import { Noir } from '@noir-lang/noir_js';
import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import circuit from '../circuits/target/main.json';

export class ProofGenerator {
    private noir: Noir;
    private backend: BarretenbergBackend;
    
    constructor() {
        this.backend = new BarretenbergBackend(circuit);
        this.noir = new Noir(circuit, this.backend);
    }
    
    async generateProof(inputs: {
        secret_leaf: string;
        path_elements: string[];
        path_indices: boolean[];
        root: string;
    }) {
        try {
            const witness = await this.noir.execute(inputs);
            const proof = await this.backend.generateProof(witness);
            
            return {
                proof: proof.proof,
                publicInputs: proof.publicInputs
            };
        } catch (error) {
            console.error('Proof generation failed:', error);
            throw error;
        }
    }
    
    async verifyProof(proof: Uint8Array, publicInputs: Uint8Array) {
        return await this.backend.verifyProof({
            proof,
            publicInputs
        });
    }
}
```

### Build Scripts Template

```bash
#!/bin/bash
# scripts/build.sh - Complete build pipeline

set -e

echo "🏗️  Building hackathon project..."

# 1. Build circuit
echo "📐 Compiling Noir circuit..."
cd circuits
nargo compile
nargo codegen-verifier

# 2. Setup contracts
echo "📄 Setting up contracts..."
cd ../contracts
cp ../circuits/contract/main/plonk_vk.sol src/Verifier.sol

# 3. Test everything
echo "🧪 Running tests..."
forge test -vvv

# 4. Build frontend
echo "🎨 Building frontend..."
cd ../frontend  
npm install
npm run build

echo "✅ Build complete! Ready for demo."
```

### Demo Script Template

```bash
#!/bin/bash
# scripts/demo.sh - Prepare for demo

echo "🎬 Demo preparation checklist..."

# Start local blockchain
anvil --port 8545 &
ANVIL_PID=$!

sleep 2

# Deploy contracts
cd contracts
forge script script/Deploy.s.sol --broadcast --rpc-url http://localhost:8545

# Start frontend
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo "🚀 Demo ready!"
echo "Frontend: http://localhost:3000"
echo "Blockchain: http://localhost:8545"
echo ""
echo "To stop demo: kill $ANVIL_PID $FRONTEND_PID"
```

### Emergency Troubleshooting Checklist

**Pre-Demo 1-Hour Checklist:**
```
□ Circuit compiles: `nargo compile`
□ Proof generates: `nargo prove`  
□ Verifier compiles: `nargo codegen-verifier`
□ Contracts deploy: `forge script Deploy.s.sol`
□ Tests pass: `forge test`
□ Frontend builds: `npm run build`
□ Integration works: End-to-end test
□ Backup slides ready
□ Team knows pitch order
□ Laptop charged + backup power
```

**5-Minute Demo Reset:**
```bash
# Emergency reset if everything breaks
git checkout main
./scripts/setup.sh
./scripts/build.sh
./scripts/demo.sh
```

---

:::tip Estrategias probadas
Métodos utilizados en hackathons ganadores. Entrená, Competí, Ganá.
:::