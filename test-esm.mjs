// Test ESM imports
import { DhanEnv, DhanHqClient } from "./dist/index.mjs";

console.log("✓ DhanEnv:", DhanEnv);
console.log("✓ DhanHqClient:", DhanHqClient);
console.log("✓ DhanEnv.PROD:", DhanEnv.PROD);
console.log("\nESM imports working correctly!");
