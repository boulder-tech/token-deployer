/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IIdentityRegistry,
  IIdentityRegistryInterface,
} from "../../../../contracts/registry/interface/IIdentityRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimTopicsRegistry",
        type: "address",
      },
    ],
    name: "ClaimTopicsRegistrySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "investorAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "country",
        type: "uint16",
      },
    ],
    name: "CountryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "investorAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IIdentity",
        name: "identity",
        type: "address",
      },
    ],
    name: "IdentityRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "investorAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IIdentity",
        name: "identity",
        type: "address",
      },
    ],
    name: "IdentityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "identityStorage",
        type: "address",
      },
    ],
    name: "IdentityStorageSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IIdentity",
        name: "oldIdentity",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IIdentity",
        name: "newIdentity",
        type: "address",
      },
    ],
    name: "IdentityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trustedIssuersRegistry",
        type: "address",
      },
    ],
    name: "TrustedIssuersRegistrySet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_userAddresses",
        type: "address[]",
      },
      {
        internalType: "contract IIdentity[]",
        name: "_identities",
        type: "address[]",
      },
      {
        internalType: "uint16[]",
        name: "_countries",
        type: "uint16[]",
      },
    ],
    name: "batchRegisterIdentity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "contains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "deleteIdentity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "identity",
    outputs: [
      {
        internalType: "contract IIdentity",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "identityStorage",
    outputs: [
      {
        internalType: "contract IIdentityRegistryStorage",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "investorCountry",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "isVerified",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "issuersRegistry",
    outputs: [
      {
        internalType: "contract ITrustedIssuersRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "contract IIdentity",
        name: "_identity",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_country",
        type: "uint16",
      },
    ],
    name: "registerIdentity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_claimTopicsRegistry",
        type: "address",
      },
    ],
    name: "setClaimTopicsRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_identityRegistryStorage",
        type: "address",
      },
    ],
    name: "setIdentityRegistryStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_trustedIssuersRegistry",
        type: "address",
      },
    ],
    name: "setTrustedIssuersRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "topicsRegistry",
    outputs: [
      {
        internalType: "contract IClaimTopicsRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_country",
        type: "uint16",
      },
    ],
    name: "updateCountry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "contract IIdentity",
        name: "_identity",
        type: "address",
      },
    ],
    name: "updateIdentity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IIdentityRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IIdentityRegistryInterface {
    return new utils.Interface(_abi) as IIdentityRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIdentityRegistry {
    return new Contract(address, _abi, signerOrProvider) as IIdentityRegistry;
  }
}
