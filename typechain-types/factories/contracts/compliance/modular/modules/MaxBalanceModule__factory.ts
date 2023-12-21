/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  MaxBalanceModule,
  MaxBalanceModuleInterface,
} from "../../../../../contracts/compliance/modular/modules/MaxBalanceModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_id",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_balance",
        type: "uint256[]",
      },
    ],
    name: "InvalidPresetValues",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "MaxBalanceExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "OnlyComplianceOwnerCanCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "TokenAlreadyBound",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "ComplianceBound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "ComplianceUnbound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_id",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "IDBalancePreSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_maxBalance",
        type: "uint256",
      },
    ],
    name: "MaxBalanceSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_id",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_balance",
        type: "uint256[]",
      },
    ],
    name: "batchPreSetModuleState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "bindCompliance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "canComplianceBind",
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
        name: "_compliance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_identity",
        type: "address",
      },
    ],
    name: "getIDBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "isComplianceBound",
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
    name: "isPlugAndPlay",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "moduleBurnAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "moduleCheck",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "moduleMintAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "moduleTransferAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_id",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "preSetModuleState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "presetCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_max",
        type: "uint256",
      },
    ],
    name: "setMaxBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
    ],
    name: "unbindCompliance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061137e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638f27c0eb11610097578063dd50b74c11610066578063dd50b74c14610228578063e6f5e8071461023b578063f104a8c914610242578063f7c4722c1461025557600080fd5b80638f27c0eb146101ce5780639d51d9b7146101e1578063bcc21053146101f4578063cc203f751461020757600080fd5b80632cb7e1ec116100d35780632cb7e1ec14610169578063372491a21461017c5780634a9325441461018f5780634cf4d295146101a257600080fd5b8063013b7ce4146100fa5780630694a5fb1461012257806306fdde0314610137575b600080fd5b61010d610108366004610f34565b610268565b60405190151581526020015b60405180910390f35b610135610130366004610f87565b6102f9565b005b604080518082018252601081526f4d617842616c616e63654d6f64756c6560801b602082015290516101199190610fa4565b610135610177366004610ff2565b6103f8565b61013561018a366004611033565b610512565b61013561019d366004610f87565b61058f565b61010d6101b0366004610f87565b6001600160a01b031660009081526020819052604090205460ff1690565b6101356101dc3660046110ab565b6106c2565b6101356101ef36600461112e565b6108ba565b61010d610202366004610f87565b610926565b61021a610215366004611147565b610a37565b604051908152602001610119565b610135610236366004610f87565b610a64565b600061010d565b610135610250366004611033565b610b29565b610135610263366004610ff2565b610bfb565b6001600160a01b038116600090815260026020526040812054831115610290575060006102f1565b600061029c8386610d35565b6001600160a01b0380851660009081526002602090815260408083205460038352818420948616845293909152902054919250906102db908690611196565b11156102eb5760009150506102f1565b60019150505b949350505050565b3360009081526020819052604090205460ff166103315760405162461bcd60e51b8152600401610328906111a9565b60405180910390fd5b6001600160a01b0381166103875760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f2061646472657373006044820152606401610328565b336001600160a01b038216146103af5760405162461bcd60e51b8152600401610328906111e0565b6001600160a01b038116600081815260208190526040808220805460ff19169055517f408b49d9be1c914c52a0227e18a077e5a892dddf32a26cfa94a5d9708fad77189190a250565b3360009081526020819052604090205460ff166104275760405162461bcd60e51b8152600401610328906111a9565b60006104333385610d35565b905060006104413385610d35565b3360009081526003602090815260408083206001600160a01b0385168452909152812080549293508592909190610479908490611196565b90915550503360009081526003602090815260408083206001600160a01b0386168452909152812080548592906104b1908490611221565b909155505033600090815260026020908152604080832054600383528184206001600160a01b038616855290925290912054111561050b57604051630d9ada5960e21b815233600482015260248101849052604401610328565b5050505050565b3360009081526020819052604090205460ff166105415760405162461bcd60e51b8152600401610328906111a9565b600061054d3384610d35565b3360009081526003602090815260408083206001600160a01b0385168452909152812080549293508492909190610585908490611221565b9091555050505050565b6001600160a01b0381166105e55760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f2061646472657373006044820152606401610328565b6001600160a01b03811660009081526020819052604090205460ff161561064e5760405162461bcd60e51b815260206004820152601860248201527f636f6d706c69616e636520616c726561647920626f756e6400000000000000006044820152606401610328565b336001600160a01b038216146106765760405162461bcd60e51b8152600401610328906111e0565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517f1f7b76c58fb697eb53c6c7c1becb96911516a136e24d7ced386b2355358b75a39190a250565b8215806106cf5750828114155b156106f757848484848460405163355c2bfd60e11b8152600401610328959493929190611234565b336001600160a01b0316856001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561073f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076391906112c1565b6001600160a01b0316146107955760405163e8649dab60e01b81526001600160a01b0386166004820152602401610328565b60405163a446d49f60e01b81523060048201526001600160a01b0386169063a446d49f90602401602060405180830381865afa1580156107d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fd91906112de565b156108265760405163346a0c0160e21b81526001600160a01b0386166004820152602401610328565b60005b8381101561088c5761087a8686868481811061084757610847611300565b905060200201602081019061085c9190610f87565b85858581811061086e5761086e611300565b90506020020135610ebb565b8061088481611316565b915050610829565b5050506001600160a01b039092166000908152600160208190526040909120805460ff191690911790555050565b3360009081526020819052604090205460ff166108e95760405162461bcd60e51b8152600401610328906111a9565b33600081815260026020526040808220849055518392917f8bec153ee727d17f3f63aa27cbb6bd64eb978b88821b30002a4b5517aeb10cec91a350565b6001600160a01b03811660009081526001602052604081205460ff161561094f57506001919050565b6000826001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa15801561098f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b391906112c1565b90506000816001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a19919061132f565b905080600003610a2d575060019392505050565b5060009392505050565b6001600160a01b038083166000908152600360209081526040808320938516835292905220545b92915050565b336001600160a01b0316816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610aac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad091906112c1565b6001600160a01b031614610b025760405163e8649dab60e01b81526001600160a01b0382166004820152602401610328565b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b3360009081526020819052604090205460ff16610b585760405162461bcd60e51b8152600401610328906111a9565b6000610b643384610d35565b3360009081526003602090815260408083206001600160a01b0385168452909152812080549293508492909190610b9c908490611196565b909155505033600090815260026020908152604080832054600383528184206001600160a01b0386168552909252909120541115610bf657604051630d9ada5960e21b815233600482015260248101839052604401610328565b505050565b336001600160a01b0316836001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6791906112c1565b6001600160a01b031614610c995760405163e8649dab60e01b81526001600160a01b0384166004820152602401610328565b60405163a446d49f60e01b81523060048201526001600160a01b0384169063a446d49f90602401602060405180830381865afa158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0191906112de565b15610d2a5760405163346a0c0160e21b81526001600160a01b0384166004820152602401610328565b610bf6838383610ebb565b600080836001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9a91906112c1565b6001600160a01b031663134e18f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610dd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfb91906112c1565b604051633c3ad79560e21b81526001600160a01b038581166004830152919091169063f0eb5e5490602401602060405180830381865afa158015610e43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6791906112c1565b90506001600160a01b038116610eb45760405162461bcd60e51b81526020600482015260126024820152711a59195b9d1a5d1e481b9bdd08199bdd5b9960721b6044820152606401610328565b9392505050565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f0a777417e1c0a4b24c5f556b0c3dd522c37b99b2c3ca4bf9fea2fa1293c660c9910160405180910390a3505050565b6001600160a01b0381168114610f3157600080fd5b50565b60008060008060808587031215610f4a57600080fd5b8435610f5581610f1c565b93506020850135610f6581610f1c565b9250604085013591506060850135610f7c81610f1c565b939692955090935050565b600060208284031215610f9957600080fd5b8135610eb481610f1c565b600060208083528351808285015260005b81811015610fd157858101830151858201604001528201610fb5565b506000604082860101526040601f19601f8301168501019250505092915050565b60008060006060848603121561100757600080fd5b833561101281610f1c565b9250602084013561102281610f1c565b929592945050506040919091013590565b6000806040838503121561104657600080fd5b823561105181610f1c565b946020939093013593505050565b60008083601f84011261107157600080fd5b50813567ffffffffffffffff81111561108957600080fd5b6020830191508360208260051b85010111156110a457600080fd5b9250929050565b6000806000806000606086880312156110c357600080fd5b85356110ce81610f1c565b9450602086013567ffffffffffffffff808211156110eb57600080fd5b6110f789838a0161105f565b9096509450604088013591508082111561111057600080fd5b5061111d8882890161105f565b969995985093965092949392505050565b60006020828403121561114057600080fd5b5035919050565b6000806040838503121561115a57600080fd5b823561116581610f1c565b9150602083013561117581610f1c565b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610a5e57610a5e611180565b6020808252601e908201527f6f6e6c7920626f756e6420636f6d706c69616e63652063616e2063616c6c0000604082015260600190565b60208082526021908201527f6f6e6c7920636f6d706c69616e636520636f6e74726163742063616e2063616c6040820152601b60fa1b606082015260800190565b81810381811115610a5e57610a5e611180565b6001600160a01b03868116825260606020808401829052908301869052600091879160808501845b8981101561128357843561126f81610f1c565b84168252938201939082019060010161125c565b5085810360408701528681526001600160fb1b038711156112a357600080fd5b8660051b935083888383013790920190910198975050505050505050565b6000602082840312156112d357600080fd5b8151610eb481610f1c565b6000602082840312156112f057600080fd5b81518015158114610eb457600080fd5b634e487b7160e01b600052603260045260246000fd5b60006001820161132857611328611180565b5060010190565b60006020828403121561134157600080fd5b505191905056fea26469706673582212209175b28eb110661ee97d70472540479d1a823274c9eb6381773b0ff626a3ed2664736f6c63430008110033";

type MaxBalanceModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaxBalanceModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaxBalanceModule__factory extends ContractFactory {
  constructor(...args: MaxBalanceModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MaxBalanceModule> {
    return super.deploy(overrides || {}) as Promise<MaxBalanceModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MaxBalanceModule {
    return super.attach(address) as MaxBalanceModule;
  }
  override connect(signer: Signer): MaxBalanceModule__factory {
    return super.connect(signer) as MaxBalanceModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaxBalanceModuleInterface {
    return new utils.Interface(_abi) as MaxBalanceModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaxBalanceModule {
    return new Contract(address, _abi, signerOrProvider) as MaxBalanceModule;
  }
}
