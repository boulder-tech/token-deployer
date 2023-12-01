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
} from "../../../../common";

export interface MaxBalanceInterface extends utils.Interface {
  functions: {
    "IDBalance(address)": FunctionFragment;
    "addAgent(address)": FunctionFragment;
    "addTokenAgent(address)": FunctionFragment;
    "bindToken(address)": FunctionFragment;
    "canTransfer(address,address,uint256)": FunctionFragment;
    "complianceCheckOnMaxBalance(address,address,uint256)": FunctionFragment;
    "created(address,uint256)": FunctionFragment;
    "destroyed(address,uint256)": FunctionFragment;
    "isAgent(address)": FunctionFragment;
    "isTokenAgent(address)": FunctionFragment;
    "isTokenBound(address)": FunctionFragment;
    "maxBalance()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeAgent(address)": FunctionFragment;
    "removeTokenAgent(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMaxBalance(uint256)": FunctionFragment;
    "tokenBound()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferred(address,address,uint256)": FunctionFragment;
    "unbindToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IDBalance"
      | "addAgent"
      | "addTokenAgent"
      | "bindToken"
      | "canTransfer"
      | "complianceCheckOnMaxBalance"
      | "created"
      | "destroyed"
      | "isAgent"
      | "isTokenAgent"
      | "isTokenBound"
      | "maxBalance"
      | "owner"
      | "removeAgent"
      | "removeTokenAgent"
      | "renounceOwnership"
      | "setMaxBalance"
      | "tokenBound"
      | "transferOwnership"
      | "transferred"
      | "unbindToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "IDBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addAgent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addTokenAgent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "bindToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "canTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "complianceCheckOnMaxBalance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "created",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyed",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAgent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenAgent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenBound",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "maxBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAgent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeTokenAgent",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxBalance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferred",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unbindToken",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "IDBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addAgent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bindToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "complianceCheckOnMaxBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroyed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAgent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTokenBound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenBound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferred",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unbindToken",
    data: BytesLike
  ): Result;

  events: {
    "AgentAdded(address)": EventFragment;
    "AgentRemoved(address)": EventFragment;
    "MaxBalanceSet(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenAgentAdded(address)": EventFragment;
    "TokenAgentRemoved(address)": EventFragment;
    "TokenBound(address)": EventFragment;
    "TokenUnbound(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AgentAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AgentRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MaxBalanceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAgentAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAgentRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUnbound"): EventFragment;
}

export interface AgentAddedEventObject {
  _agent: string;
}
export type AgentAddedEvent = TypedEvent<[string], AgentAddedEventObject>;

export type AgentAddedEventFilter = TypedEventFilter<AgentAddedEvent>;

export interface AgentRemovedEventObject {
  _agent: string;
}
export type AgentRemovedEvent = TypedEvent<[string], AgentRemovedEventObject>;

export type AgentRemovedEventFilter = TypedEventFilter<AgentRemovedEvent>;

export interface MaxBalanceSetEventObject {
  _maxBalance: BigNumber;
}
export type MaxBalanceSetEvent = TypedEvent<
  [BigNumber],
  MaxBalanceSetEventObject
>;

export type MaxBalanceSetEventFilter = TypedEventFilter<MaxBalanceSetEvent>;

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

export interface TokenAgentAddedEventObject {
  _agentAddress: string;
}
export type TokenAgentAddedEvent = TypedEvent<
  [string],
  TokenAgentAddedEventObject
>;

export type TokenAgentAddedEventFilter = TypedEventFilter<TokenAgentAddedEvent>;

export interface TokenAgentRemovedEventObject {
  _agentAddress: string;
}
export type TokenAgentRemovedEvent = TypedEvent<
  [string],
  TokenAgentRemovedEventObject
>;

export type TokenAgentRemovedEventFilter =
  TypedEventFilter<TokenAgentRemovedEvent>;

export interface TokenBoundEventObject {
  _token: string;
}
export type TokenBoundEvent = TypedEvent<[string], TokenBoundEventObject>;

export type TokenBoundEventFilter = TypedEventFilter<TokenBoundEvent>;

export interface TokenUnboundEventObject {
  _token: string;
}
export type TokenUnboundEvent = TypedEvent<[string], TokenUnboundEventObject>;

export type TokenUnboundEventFilter = TypedEventFilter<TokenUnboundEvent>;

export interface MaxBalance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MaxBalanceInterface;

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
    IDBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addAgent(
      _agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bindToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    canTransfer(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    complianceCheckOnMaxBalance(
      arg0: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    created(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    destroyed(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isAgent(
      _agent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeAgent(
      _agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxBalance(
      _max: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenBound(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferred(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unbindToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  IDBalance(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addAgent(
    _agent: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addTokenAgent(
    _agentAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bindToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  canTransfer(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  complianceCheckOnMaxBalance(
    arg0: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  created(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  destroyed(
    _from: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isAgent(
    _agent: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTokenAgent(
    _agentAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTokenBound(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxBalance(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeAgent(
    _agent: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeTokenAgent(
    _agentAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxBalance(
    _max: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenBound(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferred(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unbindToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    IDBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addAgent(
      _agent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    bindToken(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    canTransfer(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    complianceCheckOnMaxBalance(
      arg0: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    created(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    destroyed(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isAgent(
      _agent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxBalance(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeAgent(
      _agent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMaxBalance(
      _max: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenBound(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferred(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    unbindToken(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AgentAdded(address)"(
      _agent?: PromiseOrValue<string> | null
    ): AgentAddedEventFilter;
    AgentAdded(_agent?: PromiseOrValue<string> | null): AgentAddedEventFilter;

    "AgentRemoved(address)"(
      _agent?: PromiseOrValue<string> | null
    ): AgentRemovedEventFilter;
    AgentRemoved(
      _agent?: PromiseOrValue<string> | null
    ): AgentRemovedEventFilter;

    "MaxBalanceSet(uint256)"(_maxBalance?: null): MaxBalanceSetEventFilter;
    MaxBalanceSet(_maxBalance?: null): MaxBalanceSetEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokenAgentAdded(address)"(
      _agentAddress?: null
    ): TokenAgentAddedEventFilter;
    TokenAgentAdded(_agentAddress?: null): TokenAgentAddedEventFilter;

    "TokenAgentRemoved(address)"(
      _agentAddress?: null
    ): TokenAgentRemovedEventFilter;
    TokenAgentRemoved(_agentAddress?: null): TokenAgentRemovedEventFilter;

    "TokenBound(address)"(_token?: null): TokenBoundEventFilter;
    TokenBound(_token?: null): TokenBoundEventFilter;

    "TokenUnbound(address)"(_token?: null): TokenUnboundEventFilter;
    TokenUnbound(_token?: null): TokenUnboundEventFilter;
  };

  estimateGas: {
    IDBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addAgent(
      _agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bindToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    canTransfer(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    complianceCheckOnMaxBalance(
      arg0: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    created(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    destroyed(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isAgent(
      _agent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxBalance(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeAgent(
      _agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxBalance(
      _max: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenBound(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferred(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unbindToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IDBalance(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addAgent(
      _agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bindToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    canTransfer(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    complianceCheckOnMaxBalance(
      arg0: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    created(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    destroyed(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isAgent(
      _agent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAgent(
      _agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxBalance(
      _max: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferred(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unbindToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
