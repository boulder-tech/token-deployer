/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TimeExchangeLimitsModule,
  TimeExchangeLimitsModuleInterface,
} from "../../../../../contracts/compliance/modular/modules/TimeExchangeLimitsModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "compliance",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "arraySize",
        type: "uint256",
      },
    ],
    name: "LimitsArraySizeExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
    ],
    name: "ONCHAINIDAlreadyTaggedAsExchange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
    ],
    name: "ONCHAINIDNotTaggedAsExchange",
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
        indexed: false,
        internalType: "address",
        name: "_newExchangeID",
        type: "address",
      },
    ],
    name: "ExchangeIDAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
    ],
    name: "ExchangeIDRemoved",
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
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_limitValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "_limitTime",
        type: "uint32",
      },
    ],
    name: "ExchangeLimitUpdated",
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
        name: "_exchangeID",
        type: "address",
      },
    ],
    name: "addExchangeID",
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
        name: "",
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
        name: "compliance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
      {
        internalType: "address",
        name: "_investorID",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_limitTime",
        type: "uint32",
      },
    ],
    name: "getExchangeCounter",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timer",
            type: "uint256",
          },
        ],
        internalType: "struct TimeExchangeLimitsModule.ExchangeTransferCounter",
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
        name: "compliance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
    ],
    name: "getExchangeLimits",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "limitTime",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "limitValue",
            type: "uint256",
          },
        ],
        internalType: "struct TimeExchangeLimitsModule.Limit[]",
        name: "",
        type: "tuple[]",
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
    inputs: [
      {
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
    ],
    name: "isExchangeID",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
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
    inputs: [
      {
        internalType: "address",
        name: "_exchangeID",
        type: "address",
      },
    ],
    name: "removeExchangeID",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_exchangeID",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "limitTime",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "limitValue",
            type: "uint256",
          },
        ],
        internalType: "struct TimeExchangeLimitsModule.Limit",
        name: "_limit",
        type: "tuple",
      },
    ],
    name: "setExchangeLimit",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610071565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6115bc806100806000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806374436d97116100ad578063c9d9769a11610071578063c9d9769a14610319578063d22579fb1461032c578063e6f5e8071461033f578063f104a8c9146101c8578063f2fde38b1461034657600080fd5b806374436d97146102225780638da5cb5b14610235578063ac0dde7014610250578063b19761a814610270578063bcc210531461030557600080fd5b80632cb7e1ec116100f45780632cb7e1ec146101b5578063372491a2146101c85780634a932544146101db5780634cf4d295146101ee578063715018a61461021a57600080fd5b8063013b7ce4146101265780630694a5fb1461014e57806306fdde03146101635780632bb5e721146101a2575b600080fd5b6101396101343660046111c2565b610359565b60405190151581526020015b60405180910390f35b61016161015c366004611215565b61058b565b005b604080518082018252601881527f54696d6545786368616e67654c696d6974734d6f64756c650000000000000000602082015290516101459190611232565b6101616101b0366004611215565b61068a565b6101616101c3366004611280565b61071f565b6101616101d63660046112c1565b61079e565b6101616101e9366004611215565b6107d1565b6101396101fc366004611215565b6001600160a01b031660009081526020819052604090205460ff1690565b610161610904565b610161610230366004611215565b610918565b6001546040516001600160a01b039091168152602001610145565b61026361025e3660046112ed565b6109a2565b6040516101459190611326565b6102ea61027e366004611394565b604080518082018252600080825260209182018190526001600160a01b03968716815260048252828120958716815294815281852093909516845291845281832063ffffffff919091168352835290819020815180830190925280548252600101549181019190915290565b60408051825181526020928301519281019290925201610145565b610139610313366004611215565b50600190565b6101616103273660046113ee565b610a38565b61013961033a366004611215565b610cb3565b6001610139565b610161610354366004611215565b610cd1565b60006001600160a01b038516158061037657506103768286610d4a565b1561038357506001610583565b600061038f8387610e21565b905061039a81610cb3565b156103a9576001915050610583565b60006103b58487610e21565b90506103c081610cb3565b6103cf57600192505050610583565b60005b6001600160a01b0380861660009081526003602090815260408083209386168352929052205481101561057b576001600160a01b03808616600090815260036020908152604080832093861683529290522080548290811061043657610436611477565b90600052602060002090600202016001015486111561045b5760009350505050610583565b6001600160a01b038086166000908152600360209081526040808320938616835292905290812080548390811061049457610494611477565b600091825260209091206002909102015463ffffffff1690506104b986848684610f52565b15801561055657506001600160a01b0380871660009081526003602090815260408083209387168352929052208054839081106104f8576104f8611477565b60009182526020808320600160029093020191909101546001600160a01b03808a16845260048352604080852088831686528452808520918916855290835280842063ffffffff861685529092529120546105549089906114a3565b115b15610568576000945050505050610583565b5080610573816114b6565b9150506103d2565b506001925050505b949350505050565b3360009081526020819052604090205460ff166105c35760405162461bcd60e51b81526004016105ba906114cf565b60405180910390fd5b6001600160a01b0381166106195760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016105ba565b336001600160a01b038216146106415760405162461bcd60e51b81526004016105ba90611506565b6001600160a01b038116600081815260208190526040808220805460ff19169055517f408b49d9be1c914c52a0227e18a077e5a892dddf32a26cfa94a5d9708fad77189190a250565b610692610f9e565b61069b81610cb3565b156106c4576040516345d1498b60e01b81526001600160a01b03821660048201526024016105ba565b6001600160a01b038116600081815260056020908152604091829020805460ff1916600117905590519182527fca661533a567195376b79f20fcbcca20e62ceea1d43efacba5f8028329da8e6b91015b60405180910390a150565b3360009081526020819052604090205460ff1661074e5760405162461bcd60e51b81526004016105ba906114cf565b600061075a3385610e21565b905060006107683385610e21565b905061077381610cb3565b801561078657506107843386610d4a565b155b156107975761079733828486610ff8565b5050505050565b3360009081526020819052604090205460ff166107cd5760405162461bcd60e51b81526004016105ba906114cf565b5050565b6001600160a01b0381166108275760405162461bcd60e51b815260206004820152601f60248201527f696e76616c696420617267756d656e74202d207a65726f20616464726573730060448201526064016105ba565b6001600160a01b03811660009081526020819052604090205460ff16156108905760405162461bcd60e51b815260206004820152601860248201527f636f6d706c69616e636520616c726561647920626f756e64000000000000000060448201526064016105ba565b336001600160a01b038216146108b85760405162461bcd60e51b81526004016105ba90611506565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517f1f7b76c58fb697eb53c6c7c1becb96911516a136e24d7ced386b2355358b75a39190a250565b61090c610f9e565b61091660006110ef565b565b610920610f9e565b61092981610cb3565b61095157604051630120783160e61b81526001600160a01b03821660048201526024016105ba565b6001600160a01b038116600081815260056020908152604091829020805460ff1916905590519182527fc59743ca46d36b7cf42c36211a2fbef12e10aec1bfc9d39eccf91b6976a260f59101610714565b6001600160a01b0380831660009081526003602090815260408083209385168352928152828220805484518184028101840190955280855260609493919290919084015b82821015610a2b5760008481526020908190206040805180820190915260028502909101805463ffffffff1682526001908101548284015290835290920191016109e6565b5050505090505b92915050565b3360009081526020819052604090205460ff16610a675760405162461bcd60e51b81526004016105ba906114cf565b3360008181526002602090815260408083206001600160a01b038716808552908352818420865163ffffffff1685528352818420549484526003835281842090845290915290205460ff9091169081158015610ac7575060048160ff1610155b15610af0576040516382f520a960e01b815233600482015260ff821660248201526044016105ba565b81158015610b01575060048160ff16105b15610bbd573360008181526003602090815260408083206001600160a01b0389168085529083528184208054600180820183559186528486208a516002928302909101805463ffffffff191663ffffffff9283161781558b870151908401558451808601865292835260ff8981168488019081529888529186528487209387529285528386208a51909316865291909352922090518154935161ffff1990941690151561ff001916176101009390921692909202179055610c55565b3360008181526003602090815260408083206001600160a01b038916808552908352818420948452600283528184209084528252808320875163ffffffff1684529091529020548154859291610100900460ff16908110610c2057610c20611477565b6000918252602091829020835160029290920201805463ffffffff191663ffffffff9092169190911781559101516001909101555b6020838101518451604080516001600160a01b03891681529384019290925263ffffffff169082015233907fbdaa98f5444de6f9849a851f2c112d373c67c253895b3ca2c57204c0f6e1b58c9060600160405180910390a250505050565b6001600160a01b031660009081526005602052604090205460ff1690565b610cd9610f9e565b6001600160a01b038116610d3e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105ba565b610d47816110ef565b50565b6000826001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dae9190611547565b6040516307feec1960e21b81526001600160a01b0384811660048301529190911690631ffbb06490602401602060405180830381865afa158015610df6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1a9190611564565b9392505050565b6000826001600160a01b0316636a3edf286040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e859190611547565b6001600160a01b031663134e18f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ec2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee69190611547565b604051633c3ad79560e21b81526001600160a01b038481166004830152919091169063f0eb5e5490602401602060405180830381865afa158015610f2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1a9190611547565b6001600160a01b03808516600090815260046020908152604080832087851684528252808320938616835292815282822063ffffffff8516835290522060010154421015949350505050565b6001546001600160a01b031633146109165760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105ba565b60005b6001600160a01b03808616600090815260036020908152604080832093881683529290522054811015610797576001600160a01b038086166000908152600360209081526040808320938816835292905290812080548390811061106157611061611477565b600091825260209091206002909102015463ffffffff16905061108686868684611141565b6001600160a01b03808716600090815260046020908152604080832089851684528252808320938816835292815282822063ffffffff85168352905290812080548592906110d59084906114a3565b909155508291506110e79050816114b6565b915050610ffb565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61114d84848484610f52565b156111a7576001600160a01b03808516600090815260046020908152604080832087851684528252808320938616835292815282822063ffffffff851680845291529190209061119d90426114a3565b6001820155600090555b50505050565b6001600160a01b0381168114610d4757600080fd5b600080600080608085870312156111d857600080fd5b84356111e3816111ad565b935060208501356111f3816111ad565b925060408501359150606085013561120a816111ad565b939692955090935050565b60006020828403121561122757600080fd5b8135610e1a816111ad565b600060208083528351808285015260005b8181101561125f57858101830151858201604001528201611243565b506000604082860101526040601f19601f8301168501019250505092915050565b60008060006060848603121561129557600080fd5b83356112a0816111ad565b925060208401356112b0816111ad565b929592945050506040919091013590565b600080604083850312156112d457600080fd5b82356112df816111ad565b946020939093013593505050565b6000806040838503121561130057600080fd5b823561130b816111ad565b9150602083013561131b816111ad565b809150509250929050565b602080825282518282018190526000919060409081850190868401855b8281101561136e578151805163ffffffff168552860151868501529284019290850190600101611343565b5091979650505050505050565b803563ffffffff8116811461138f57600080fd5b919050565b600080600080608085870312156113aa57600080fd5b84356113b5816111ad565b935060208501356113c5816111ad565b925060408501356113d5816111ad565b91506113e36060860161137b565b905092959194509250565b600080828403606081121561140257600080fd5b833561140d816111ad565b92506040601f198201121561142157600080fd5b506040516040810181811067ffffffffffffffff8211171561145357634e487b7160e01b600052604160045260246000fd5b6040526114626020850161137b565b81526040939093013560208401525092909150565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610a3257610a3261148d565b6000600182016114c8576114c861148d565b5060010190565b6020808252601e908201527f6f6e6c7920626f756e6420636f6d706c69616e63652063616e2063616c6c0000604082015260600190565b60208082526021908201527f6f6e6c7920636f6d706c69616e636520636f6e74726163742063616e2063616c6040820152601b60fa1b606082015260800190565b60006020828403121561155957600080fd5b8151610e1a816111ad565b60006020828403121561157657600080fd5b81518015158114610e1a57600080fdfea2646970667358221220a9befb38b1b2bf7f65cc38621daed55ef602baafaef4b83b718c5e7fddab8a6864736f6c63430008110033";

type TimeExchangeLimitsModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeExchangeLimitsModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeExchangeLimitsModule__factory extends ContractFactory {
  constructor(...args: TimeExchangeLimitsModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimeExchangeLimitsModule> {
    return super.deploy(overrides || {}) as Promise<TimeExchangeLimitsModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TimeExchangeLimitsModule {
    return super.attach(address) as TimeExchangeLimitsModule;
  }
  override connect(signer: Signer): TimeExchangeLimitsModule__factory {
    return super.connect(signer) as TimeExchangeLimitsModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeExchangeLimitsModuleInterface {
    return new utils.Interface(_abi) as TimeExchangeLimitsModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeExchangeLimitsModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TimeExchangeLimitsModule;
  }
}
