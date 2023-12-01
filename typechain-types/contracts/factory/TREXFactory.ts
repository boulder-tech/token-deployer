/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace ITREXFactory {
  export type TokenDetailsStruct = {
    owner: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    symbol: PromiseOrValue<string>;
    decimals: PromiseOrValue<BigNumberish>;
    irs: PromiseOrValue<string>;
    ONCHAINID: PromiseOrValue<string>;
    irAgents: PromiseOrValue<string>[];
    tokenAgents: PromiseOrValue<string>[];
    complianceModules: PromiseOrValue<string>[];
    complianceSettings: PromiseOrValue<BytesLike>[];
  };

  export type TokenDetailsStructOutput = [
    string,
    string,
    string,
    number,
    string,
    string,
    string[],
    string[],
    string[],
    string[]
  ] & {
    owner: string;
    name: string;
    symbol: string;
    decimals: number;
    irs: string;
    ONCHAINID: string;
    irAgents: string[];
    tokenAgents: string[];
    complianceModules: string[];
    complianceSettings: string[];
  };

  export type ClaimDetailsStruct = {
    claimTopics: PromiseOrValue<BigNumberish>[];
    issuers: PromiseOrValue<string>[];
    issuerClaims: PromiseOrValue<BigNumberish>[][];
  };

  export type ClaimDetailsStructOutput = [
    BigNumber[],
    string[],
    BigNumber[][]
  ] & {
    claimTopics: BigNumber[];
    issuers: string[];
    issuerClaims: BigNumber[][];
  };
}

export interface TREXFactoryInterface extends utils.Interface {
  functions: {
    "deployTREXSuite(string,(address,string,string,uint8,address,address,address[],address[],address[],bytes[]),(uint256[],address[],uint256[][]))": FunctionFragment;
    "getIdFactory()": FunctionFragment;
    "getImplementationAuthority()": FunctionFragment;
    "getToken(string)": FunctionFragment;
    "owner()": FunctionFragment;
    "recoverContractOwnership(address,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setIdFactory(address)": FunctionFragment;
    "setImplementationAuthority(address)": FunctionFragment;
    "tokenDeployed(string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deployTREXSuite"
      | "getIdFactory"
      | "getImplementationAuthority"
      | "getToken"
      | "owner"
      | "recoverContractOwnership"
      | "renounceOwnership"
      | "setIdFactory"
      | "setImplementationAuthority"
      | "tokenDeployed"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployTREXSuite",
    values: [
      PromiseOrValue<string>,
      ITREXFactory.TokenDetailsStruct,
      ITREXFactory.ClaimDetailsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getIdFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementationAuthority",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverContractOwnership",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setIdFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setImplementationAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenDeployed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployTREXSuite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIdFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementationAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverContractOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIdFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setImplementationAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenDeployed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Deployed(address)": EventFragment;
    "IdFactorySet(address)": EventFragment;
    "ImplementationAuthoritySet(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TREXSuiteDeployed(address,address,address,address,address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdFactorySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImplementationAuthoritySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TREXSuiteDeployed"): EventFragment;
}

export interface DeployedEventObject {
  _addr: string;
}
export type DeployedEvent = TypedEvent<[string], DeployedEventObject>;

export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;

export interface IdFactorySetEventObject {
  _idFactory: string;
}
export type IdFactorySetEvent = TypedEvent<[string], IdFactorySetEventObject>;

export type IdFactorySetEventFilter = TypedEventFilter<IdFactorySetEvent>;

export interface ImplementationAuthoritySetEventObject {
  _implementationAuthority: string;
}
export type ImplementationAuthoritySetEvent = TypedEvent<
  [string],
  ImplementationAuthoritySetEventObject
>;

export type ImplementationAuthoritySetEventFilter =
  TypedEventFilter<ImplementationAuthoritySetEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TREXSuiteDeployedEventObject {
  _token: string;
  _ir: string;
  _irs: string;
  _tir: string;
  _ctr: string;
  _mc: string;
  _salt: string;
}
export type TREXSuiteDeployedEvent = TypedEvent<
  [string, string, string, string, string, string, string],
  TREXSuiteDeployedEventObject
>;

export type TREXSuiteDeployedEventFilter =
  TypedEventFilter<TREXSuiteDeployedEvent>;

export interface TREXFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TREXFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deployTREXSuite(
      _salt: PromiseOrValue<string>,
      _tokenDetails: ITREXFactory.TokenDetailsStruct,
      _claimDetails: ITREXFactory.ClaimDetailsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getIdFactory(overrides?: CallOverrides): Promise<[string]>;

    getImplementationAuthority(overrides?: CallOverrides): Promise<[string]>;

    getToken(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recoverContractOwnership(
      _contract: PromiseOrValue<string>,
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIdFactory(
      idFactory_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setImplementationAuthority(
      implementationAuthority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenDeployed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deployTREXSuite(
    _salt: PromiseOrValue<string>,
    _tokenDetails: ITREXFactory.TokenDetailsStruct,
    _claimDetails: ITREXFactory.ClaimDetailsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getIdFactory(overrides?: CallOverrides): Promise<string>;

  getImplementationAuthority(overrides?: CallOverrides): Promise<string>;

  getToken(
    _salt: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recoverContractOwnership(
    _contract: PromiseOrValue<string>,
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIdFactory(
    idFactory_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setImplementationAuthority(
    implementationAuthority_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenDeployed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployTREXSuite(
      _salt: PromiseOrValue<string>,
      _tokenDetails: ITREXFactory.TokenDetailsStruct,
      _claimDetails: ITREXFactory.ClaimDetailsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getIdFactory(overrides?: CallOverrides): Promise<string>;

    getImplementationAuthority(overrides?: CallOverrides): Promise<string>;

    getToken(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recoverContractOwnership(
      _contract: PromiseOrValue<string>,
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setIdFactory(
      idFactory_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setImplementationAuthority(
      implementationAuthority_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenDeployed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deployed(address)"(
      _addr?: PromiseOrValue<string> | null
    ): DeployedEventFilter;
    Deployed(_addr?: PromiseOrValue<string> | null): DeployedEventFilter;

    "IdFactorySet(address)"(_idFactory?: null): IdFactorySetEventFilter;
    IdFactorySet(_idFactory?: null): IdFactorySetEventFilter;

    "ImplementationAuthoritySet(address)"(
      _implementationAuthority?: null
    ): ImplementationAuthoritySetEventFilter;
    ImplementationAuthoritySet(
      _implementationAuthority?: null
    ): ImplementationAuthoritySetEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TREXSuiteDeployed(address,address,address,address,address,address,string)"(
      _token?: PromiseOrValue<string> | null,
      _ir?: null,
      _irs?: null,
      _tir?: null,
      _ctr?: null,
      _mc?: null,
      _salt?: PromiseOrValue<string> | null
    ): TREXSuiteDeployedEventFilter;
    TREXSuiteDeployed(
      _token?: PromiseOrValue<string> | null,
      _ir?: null,
      _irs?: null,
      _tir?: null,
      _ctr?: null,
      _mc?: null,
      _salt?: PromiseOrValue<string> | null
    ): TREXSuiteDeployedEventFilter;
  };

  estimateGas: {
    deployTREXSuite(
      _salt: PromiseOrValue<string>,
      _tokenDetails: ITREXFactory.TokenDetailsStruct,
      _claimDetails: ITREXFactory.ClaimDetailsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getIdFactory(overrides?: CallOverrides): Promise<BigNumber>;

    getImplementationAuthority(overrides?: CallOverrides): Promise<BigNumber>;

    getToken(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recoverContractOwnership(
      _contract: PromiseOrValue<string>,
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIdFactory(
      idFactory_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setImplementationAuthority(
      implementationAuthority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenDeployed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployTREXSuite(
      _salt: PromiseOrValue<string>,
      _tokenDetails: ITREXFactory.TokenDetailsStruct,
      _claimDetails: ITREXFactory.ClaimDetailsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getIdFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getImplementationAuthority(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(
      _salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverContractOwnership(
      _contract: PromiseOrValue<string>,
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIdFactory(
      idFactory_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setImplementationAuthority(
      implementationAuthority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenDeployed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
