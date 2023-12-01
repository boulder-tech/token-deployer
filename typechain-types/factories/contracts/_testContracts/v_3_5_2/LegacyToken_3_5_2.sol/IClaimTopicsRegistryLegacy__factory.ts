/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IClaimTopicsRegistryLegacy,
  IClaimTopicsRegistryLegacyInterface,
} from "../../../../../contracts/_testContracts/v_3_5_2/LegacyToken_3_5_2.sol/IClaimTopicsRegistryLegacy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "claimTopic",
        type: "uint256",
      },
    ],
    name: "ClaimTopicAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "claimTopic",
        type: "uint256",
      },
    ],
    name: "ClaimTopicRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_claimTopic",
        type: "uint256",
      },
    ],
    name: "addClaimTopic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getClaimTopics",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_claimTopic",
        type: "uint256",
      },
    ],
    name: "removeClaimTopic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnershipOnClaimTopicsRegistryContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IClaimTopicsRegistryLegacy__factory {
  static readonly abi = _abi;
  static createInterface(): IClaimTopicsRegistryLegacyInterface {
    return new utils.Interface(_abi) as IClaimTopicsRegistryLegacyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClaimTopicsRegistryLegacy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IClaimTopicsRegistryLegacy;
  }
}
