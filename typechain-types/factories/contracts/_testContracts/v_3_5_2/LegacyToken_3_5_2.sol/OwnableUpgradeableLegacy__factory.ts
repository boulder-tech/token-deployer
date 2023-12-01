/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OwnableUpgradeableLegacy,
  OwnableUpgradeableLegacyInterface,
} from "../../../../../contracts/_testContracts/v_3_5_2/LegacyToken_3_5_2.sol/OwnableUpgradeableLegacy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class OwnableUpgradeableLegacy__factory {
  static readonly abi = _abi;
  static createInterface(): OwnableUpgradeableLegacyInterface {
    return new utils.Interface(_abi) as OwnableUpgradeableLegacyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableUpgradeableLegacy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwnableUpgradeableLegacy;
  }
}
