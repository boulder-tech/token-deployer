/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenProxy,
  TokenProxyInterface,
} from "../../../contracts/proxy/TokenProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationAuthority",
        type: "address",
      },
      {
        internalType: "address",
        name: "_identityRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_compliance",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_onchainID",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_implementationAuthority",
        type: "address",
      },
    ],
    name: "ImplementationAuthoritySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementationAuthority",
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
    inputs: [
      {
        internalType: "address",
        name: "_newImplementationAuthority",
        type: "address",
      },
    ],
    name: "setImplementationAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d0538038062000d058339810160408190526200003491620004dd565b6001600160a01b038716158015906200005557506001600160a01b03861615155b80156200006a57506001600160a01b03851615155b620000bc5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064015b60405180910390fd5b604051602001620000d890602080825260009082015260400190565b6040516020818303038152906040528051906020012084604051602001620001019190620005da565b60405160208183030381529060405280519060200120141580156200017f57506040516020016200013d90602080825260009082015260400190565b6040516020818303038152906040528051906020012083604051602001620001669190620005da565b6040516020818303038152906040528051906020012014155b620001cd5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d20656d70747920737472696e67006044820152606401620000b3565b60128260ff161115620002235760405162461bcd60e51b815260206004820152601960248201527f646563696d616c73206265747765656e203020616e64203138000000000000006044820152606401620000b3565b6200023b8760008051602062000ce583398151915255565b6040516001600160a01b038816907f3b1074392ed8e8424715d0dda2197eede67080b377fc8370e26f3e882207f6b890600090a260006200028960008051602062000ce58339815191525490565b6001600160a01b031663709bc7f36040518163ffffffff1660e01b8152600401602060405180830381865afa158015620002c7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002ed9190620005f6565b90506000816001600160a01b0316888888888888604051602401620003189695949392919062000614565b60408051601f198184030181529181526020820180516001600160e01b0316633e46d86760e21b179052516200034f919062000673565b600060405180830381855af49150503d80600081146200038c576040519150601f19603f3d011682016040523d82523d6000602084013e62000391565b606091505b5050905080620003e45760405162461bcd60e51b815260206004820152601660248201527f496e697469616c697a6174696f6e206661696c65642e000000000000000000006044820152606401620000b3565b50505050505050505062000691565b80516001600160a01b03811681146200040b57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200044357818101518382015260200162000429565b50506000910152565b600082601f8301126200045e57600080fd5b81516001600160401b03808211156200047b576200047b62000410565b604051601f8301601f19908116603f01168101908282118183101715620004a657620004a662000410565b81604052838152866020858801011115620004c057600080fd5b620004d384602083016020890162000426565b9695505050505050565b600080600080600080600060e0888a031215620004f957600080fd5b6200050488620003f3565b96506200051460208901620003f3565b95506200052460408901620003f3565b60608901519095506001600160401b03808211156200054257600080fd5b620005508b838c016200044c565b955060808a01519150808211156200056757600080fd5b50620005768a828b016200044c565b93505060a088015160ff811681146200058e57600080fd5b91506200059e60c08901620003f3565b905092959891949750929550565b60008151808452620005c681602086016020860162000426565b601f01601f19169290920160200192915050565b602081526000620005ef6020830184620005ac565b9392505050565b6000602082840312156200060957600080fd5b620005ef82620003f3565b600060018060a01b038089168352808816602084015260c060408401526200064060c0840188620005ac565b8381036060850152620006548188620005ac565b60ff969096166080850152509290921660a09091015250949350505050565b600082516200068781846020870162000426565b9190910192915050565b61064480620006a16000396000f3fe6080604052600436106100295760003560e01c80632d5f1187146100cf57806392dd9d6514610108575b60006100416000805160206105ef8339815191525490565b6001600160a01b031663709bc7f36040518163ffffffff1660e01b8152600401602060405180830381865afa15801561007e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100a291906105ad565b90503660008037600080366000846127105a03f43d806000803e8180156100c857816000f35b816000fd5b005b3480156100db57600080fd5b506000805160206105ef833981519152546040516001600160a01b03909116815260200160405180910390f35b34801561011457600080fd5b506100cd6101233660046105d1565b6000805160206105ef833981519152546001600160a01b0316336001600160a01b0316146101ae5760405162461bcd60e51b815260206004820152602d60248201527f6f6e6c792063757272656e7420696d706c656d656e746174696f6e417574686f60448201526c1c9a5d1e4818d85b8818d85b1b609a1b60648201526084015b60405180910390fd5b6001600160a01b0381166102045760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016101a5565b60006001600160a01b0316816001600160a01b031663709bc7f36040518163ffffffff1660e01b8152600401602060405180830381865afa15801561024d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027191906105ad565b6001600160a01b0316141580156102fc575060006001600160a01b0316816001600160a01b0316636ff6e83f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f091906105ad565b6001600160a01b031614155b801561037c575060006001600160a01b0316816001600160a01b0316631ee9ce8b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561034c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037091906105ad565b6001600160a01b031614155b80156103fc575060006001600160a01b0316816001600160a01b0316639e3e7bb96040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f091906105ad565b6001600160a01b031614155b801561047c575060006001600160a01b0316816001600160a01b03166361f898256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561044c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047091906105ad565b6001600160a01b031614155b80156104fc575060006001600160a01b0316816001600160a01b031663fedcc0526040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f091906105ad565b6001600160a01b031614155b6105485760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420496d706c656d656e746174696f6e20417574686f7269747960448201526064016101a5565b61055e816000805160206105ef83398151915255565b6040516001600160a01b038216907f3b1074392ed8e8424715d0dda2197eede67080b377fc8370e26f3e882207f6b890600090a250565b6001600160a01b03811681146105aa57600080fd5b50565b6000602082840312156105bf57600080fd5b81516105ca81610595565b9392505050565b6000602082840312156105e357600080fd5b81356105ca8161059556fec5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7a26469706673582212203fe09f4fcbac09ae056a6b4d744e84c3e8b83214cfc40d577cc6d01801cd468864736f6c63430008110033c5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7";

type TokenProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenProxy__factory extends ContractFactory {
  constructor(...args: TokenProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    implementationAuthority: PromiseOrValue<string>,
    _identityRegistry: PromiseOrValue<string>,
    _compliance: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _onchainID: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenProxy> {
    return super.deploy(
      implementationAuthority,
      _identityRegistry,
      _compliance,
      _name,
      _symbol,
      _decimals,
      _onchainID,
      overrides || {}
    ) as Promise<TokenProxy>;
  }
  override getDeployTransaction(
    implementationAuthority: PromiseOrValue<string>,
    _identityRegistry: PromiseOrValue<string>,
    _compliance: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _onchainID: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      implementationAuthority,
      _identityRegistry,
      _compliance,
      _name,
      _symbol,
      _decimals,
      _onchainID,
      overrides || {}
    );
  }
  override attach(address: string): TokenProxy {
    return super.attach(address) as TokenProxy;
  }
  override connect(signer: Signer): TokenProxy__factory {
    return super.connect(signer) as TokenProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenProxyInterface {
    return new utils.Interface(_abi) as TokenProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenProxy {
    return new Contract(address, _abi, signerOrProvider) as TokenProxy;
  }
}
