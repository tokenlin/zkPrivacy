import { defineChain } from "viem"


// mantle chain
export const mantle = defineChain({
  id: 5003,
  name: "Mantle",
  nativeCurrency: { name: "Mantle", symbol: "MNT", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["rpc.sepolia.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mantle Explorer",
      url: "",
    },
  },
})