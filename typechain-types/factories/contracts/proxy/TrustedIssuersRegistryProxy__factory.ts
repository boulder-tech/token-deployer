/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TrustedIssuersRegistryProxy,
  TrustedIssuersRegistryProxyInterface,
} from "../../../contracts/proxy/TrustedIssuersRegistryProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationAuthority",
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
  "0x608060405234801561001057600080fd5b506040516108fc3803806108fc83398101604081905261002f9161022a565b6001600160a01b03811661008a5760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064015b60405180910390fd5b6100a0816000805160206108dc83398151915255565b6040516001600160a01b038216907f3b1074392ed8e8424715d0dda2197eede67080b377fc8370e26f3e882207f6b890600090a260006100ec6000805160206108dc8339815191525490565b6001600160a01b031663fedcc0526040518163ffffffff1660e01b8152600401602060405180830381865afa158015610129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014d919061022a565b60408051600481526024810182526020810180516001600160e01b03166370e39c9560e11b17905290519192506000916001600160a01b038416916101919161025a565b600060405180830381855af49150503d80600081146101cc576040519150601f19603f3d011682016040523d82523d6000602084013e6101d1565b606091505b50509050806102225760405162461bcd60e51b815260206004820152601660248201527f496e697469616c697a6174696f6e206661696c65642e000000000000000000006044820152606401610081565b505050610289565b60006020828403121561023c57600080fd5b81516001600160a01b038116811461025357600080fd5b9392505050565b6000825160005b8181101561027b5760208186018101518583015201610261565b506000920191825250919050565b610644806102986000396000f3fe6080604052600436106100295760003560e01c80632d5f1187146100cf57806392dd9d6514610108575b60006100416000805160206105ef8339815191525490565b6001600160a01b031663fedcc0526040518163ffffffff1660e01b8152600401602060405180830381865afa15801561007e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100a291906105ad565b90503660008037600080366000846127105a03f43d806000803e8180156100c857816000f35b816000fd5b005b3480156100db57600080fd5b506000805160206105ef833981519152546040516001600160a01b03909116815260200160405180910390f35b34801561011457600080fd5b506100cd6101233660046105d1565b6000805160206105ef833981519152546001600160a01b0316336001600160a01b0316146101ae5760405162461bcd60e51b815260206004820152602d60248201527f6f6e6c792063757272656e7420696d706c656d656e746174696f6e417574686f60448201526c1c9a5d1e4818d85b8818d85b1b609a1b60648201526084015b60405180910390fd5b6001600160a01b0381166102045760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016101a5565b60006001600160a01b0316816001600160a01b031663709bc7f36040518163ffffffff1660e01b8152600401602060405180830381865afa15801561024d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027191906105ad565b6001600160a01b0316141580156102fc575060006001600160a01b0316816001600160a01b0316636ff6e83f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f091906105ad565b6001600160a01b031614155b801561037c575060006001600160a01b0316816001600160a01b0316631ee9ce8b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561034c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037091906105ad565b6001600160a01b031614155b80156103fc575060006001600160a01b0316816001600160a01b0316639e3e7bb96040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f091906105ad565b6001600160a01b031614155b801561047c575060006001600160a01b0316816001600160a01b03166361f898256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561044c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047091906105ad565b6001600160a01b031614155b80156104fc575060006001600160a01b0316816001600160a01b031663fedcc0526040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f091906105ad565b6001600160a01b031614155b6105485760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420496d706c656d656e746174696f6e20417574686f7269747960448201526064016101a5565b61055e816000805160206105ef83398151915255565b6040516001600160a01b038216907f3b1074392ed8e8424715d0dda2197eede67080b377fc8370e26f3e882207f6b890600090a250565b6001600160a01b03811681146105aa57600080fd5b50565b6000602082840312156105bf57600080fd5b81516105ca81610595565b9392505050565b6000602082840312156105e357600080fd5b81356105ca8161059556fec5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7a2646970667358221220353bf3f9228b7c94568ae19ccf8d8731717bd5f9be040c8ed661bf938acbb69c64736f6c63430008110033c5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7";

type TrustedIssuersRegistryProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrustedIssuersRegistryProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TrustedIssuersRegistryProxy__factory extends ContractFactory {
  constructor(...args: TrustedIssuersRegistryProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    implementationAuthority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TrustedIssuersRegistryProxy> {
    return super.deploy(
      implementationAuthority,
      overrides || {}
    ) as Promise<TrustedIssuersRegistryProxy>;
  }
  override getDeployTransaction(
    implementationAuthority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(implementationAuthority, overrides || {});
  }
  override attach(address: string): TrustedIssuersRegistryProxy {
    return super.attach(address) as TrustedIssuersRegistryProxy;
  }
  override connect(signer: Signer): TrustedIssuersRegistryProxy__factory {
    return super.connect(signer) as TrustedIssuersRegistryProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrustedIssuersRegistryProxyInterface {
    return new utils.Interface(_abi) as TrustedIssuersRegistryProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrustedIssuersRegistryProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TrustedIssuersRegistryProxy;
  }
}
