/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TransferFeesModule,
  TransferFeesModuleInterface,
} from "../../../../../contracts/compliance/modular/modules/TransferFeesModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "compliance",
        type: "address",
      },
      {
        internalType: "address",
        name: "collector",
        type: "address",
      },
    ],
    name: "CollectorAddressIsNotVerified",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "compliance",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "FeeRateIsOutOfRange",
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
        name: "compliance",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_collector",
        type: "address",
      },
    ],
    name: "FeeUpdated",
    type: "event",
  },
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
    ],
    name: "getFee",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "collector",
            type: "address",
          },
        ],
        internalType: "struct TransferFeesModule.Fee",
        name: "",
        type: "tuple",
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
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_collector",
        type: "address",
      },
    ],
    name: "setFee",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610071565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610f98806100806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063bcc2105311610066578063bcc2105314610284578063e6f5e80714610297578063f104a8c914610183578063f2fde38b1461029e57600080fd5b8063715018a6146101d55780638da5cb5b146101dd578063b4f2e8b8146101f8578063b88c91481461020b57600080fd5b80632cb7e1ec116100d35780632cb7e1ec14610170578063372491a2146101835780634a932544146101965780634cf4d295146101a957600080fd5b8063013b7ce4146100fa5780630694a5fb1461012757806306fdde031461013c575b600080fd5b610112610108366004610d09565b6001949350505050565b60405190151581526020015b60405180910390f35b61013a610135366004610d5c565b6102b1565b005b60408051808201825260128152715472616e73666572466565734d6f64756c6560701b6020820152905161011e9190610d79565b61013a61017e366004610dc7565b6103b0565b61013a610191366004610e08565b610614565b61013a6101a4366004610d5c565b610647565b6101126101b7366004610d5c565b6001600160a01b031660009081526020819052604090205460ff1690565b61013a61077a565b6001546040516001600160a01b03909116815260200161011e565b61013a610206366004610e34565b61078e565b610260610219366004610d5c565b604080518082018252600080825260209182018190526001600160a01b03938416815260028252829020825180840190935280548352600101549092169181019190915290565b60408051825181526020928301516001600160a01b0316928101929092520161011e565b610112610292366004610d5c565b6109be565b6000610112565b61013a6102ac366004610d5c565b610a95565b3360009081526020819052604090205460ff166102e95760405162461bcd60e51b81526004016102e090610e64565b60405180910390fd5b6001600160a01b03811661033f5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016102e0565b336001600160a01b038216146103675760405162461bcd60e51b81526004016102e090610e9b565b6001600160a01b038116600081815260208190526040808220805460ff19169055517f408b49d9be1c914c52a0227e18a077e5a892dddf32a26cfa94a5d9708fad77189190a250565b3360009081526020819052604090205460ff166103df5760405162461bcd60e51b81526004016102e090610e64565b60006103eb3385610b0e565b905060006103f93385610b0e565b9050806001600160a01b0316826001600160a01b03160361041b575050505050565b33600090815260026020908152604091829020825180840190935280548084526001909101546001600160a01b0316918301919091521580610472575080602001516001600160a01b0316866001600160a01b0316145b80610492575080602001516001600160a01b0316856001600160a01b0316145b1561049f57505050505050565b8051600090612710906104b29087610edc565b6104bc9190610f01565b9050806000036104cf5750505050505050565b6000336001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa15801561050f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105339190610f23565b6020840151604051639fc1d0e760e01b81526001600160a01b038a8116600483015291821660248201526044810185905291925060009190831690639fc1d0e7906064016020604051808303816000875af1158015610596573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190610f40565b9050806106095760405162461bcd60e51b815260206004820152601e60248201527f7472616e736665722066656520636f6c6c656374696f6e206661696c6564000060448201526064016102e0565b505050505050505050565b3360009081526020819052604090205460ff166106435760405162461bcd60e51b81526004016102e090610e64565b5050565b6001600160a01b03811661069d5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016102e0565b6001600160a01b03811660009081526020819052604090205460ff16156107065760405162461bcd60e51b815260206004820152601860248201527f636f6d706c69616e636520616c726561647920626f756e64000000000000000060448201526064016102e0565b336001600160a01b0382161461072e5760405162461bcd60e51b81526004016102e090610e9b565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517f1f7b76c58fb697eb53c6c7c1becb96911516a136e24d7ced386b2355358b75a39190a250565b610782610c48565b61078c6000610ca2565b565b3360009081526020819052604090205460ff166107bd5760405162461bcd60e51b81526004016102e090610e64565b6000336001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108219190610f23565b905061271083111561084f57604051630e33b43d60e01b8152336004820152602481018490526044016102e0565b6000816001600160a01b031663134e18f46040518163ffffffff1660e01b8152600401602060405180830381865afa15801561088f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b39190610f23565b60405163b9209e3360e01b81526001600160a01b0385811660048301529192509082169063b9209e3390602401602060405180830381865afa1580156108fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109219190610f40565b61094f57604051639bca970d60e01b81523360048201526001600160a01b03841660248201526044016102e0565b3360008181526002602090815260409182902087815560010180546001600160a01b0319166001600160a01b0388169081179091558251888152918201527f47b231849a3ba3af6f4ec32a2da80e3106ab81fb5eca9ffde8b33ed2901af2b6910160405180910390a250505050565b600080826001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a239190610f23565b6040516307feec1960e21b81523060048201529091506001600160a01b03821690631ffbb06490602401602060405180830381865afa158015610a6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8e9190610f40565b9392505050565b610a9d610c48565b6001600160a01b038116610b025760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102e0565b610b0b81610ca2565b50565b6000826001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b729190610f23565b6001600160a01b031663134e18f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610baf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd39190610f23565b604051633c3ad79560e21b81526001600160a01b038481166004830152919091169063f0eb5e5490602401602060405180830381865afa158015610c1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3f9190610f23565b90505b92915050565b6001546001600160a01b0316331461078c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102e0565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381168114610b0b57600080fd5b60008060008060808587031215610d1f57600080fd5b8435610d2a81610cf4565b93506020850135610d3a81610cf4565b9250604085013591506060850135610d5181610cf4565b939692955090935050565b600060208284031215610d6e57600080fd5b8135610a8e81610cf4565b600060208083528351808285015260005b81811015610da657858101830151858201604001528201610d8a565b506000604082860101526040601f19601f8301168501019250505092915050565b600080600060608486031215610ddc57600080fd5b8335610de781610cf4565b92506020840135610df781610cf4565b929592945050506040919091013590565b60008060408385031215610e1b57600080fd5b8235610e2681610cf4565b946020939093013593505050565b60008060408385031215610e4757600080fd5b823591506020830135610e5981610cf4565b809150509250929050565b6020808252601e908201527f6f6e6c7920626f756e6420636f6d706c69616e63652063616e2063616c6c0000604082015260600190565b60208082526021908201527f6f6e6c7920636f6d706c69616e636520636f6e74726163742063616e2063616c6040820152601b60fa1b606082015260800190565b8082028115828204841417610c4257634e487b7160e01b600052601160045260246000fd5b600082610f1e57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610f3557600080fd5b8151610a8e81610cf4565b600060208284031215610f5257600080fd5b81518015158114610a8e57600080fdfea2646970667358221220001fbcdb03fef4c9d8378b251ef6560dd2aca8fa2ab616076ebdb5c716b85e5264736f6c63430008110033";

type TransferFeesModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransferFeesModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransferFeesModule__factory extends ContractFactory {
  constructor(...args: TransferFeesModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TransferFeesModule> {
    return super.deploy(overrides || {}) as Promise<TransferFeesModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TransferFeesModule {
    return super.attach(address) as TransferFeesModule;
  }
  override connect(signer: Signer): TransferFeesModule__factory {
    return super.connect(signer) as TransferFeesModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransferFeesModuleInterface {
    return new utils.Interface(_abi) as TransferFeesModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferFeesModule {
    return new Contract(address, _abi, signerOrProvider) as TransferFeesModule;
  }
}
