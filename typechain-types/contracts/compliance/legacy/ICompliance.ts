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
} from "../../../common";

export interface IComplianceInterface extends utils.Interface {
  functions: {
    "addTokenAgent(address)": FunctionFragment;
    "bindToken(address)": FunctionFragment;
    "canTransfer(address,address,uint256)": FunctionFragment;
    "created(address,uint256)": FunctionFragment;
    "destroyed(address,uint256)": FunctionFragment;
    "isTokenAgent(address)": FunctionFragment;
    "isTokenBound(address)": FunctionFragment;
    "removeTokenAgent(address)": FunctionFragment;
    "transferred(address,address,uint256)": FunctionFragment;
    "unbindToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addTokenAgent"
      | "bindToken"
      | "canTransfer"
      | "created"
      | "destroyed"
      | "isTokenAgent"
      | "isTokenBound"
      | "removeTokenAgent"
      | "transferred"
      | "unbindToken"
  ): FunctionFragment;

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
    functionFragment: "created",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyed",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
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
    functionFragment: "removeTokenAgent",
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

  decodeFunctionResult(
    functionFragment: "addTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bindToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroyed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTokenAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTokenBound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeTokenAgent",
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
    "TokenAgentAdded(address)": EventFragment;
    "TokenAgentRemoved(address)": EventFragment;
    "TokenBound(address)": EventFragment;
    "TokenUnbound(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokenAgentAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAgentRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUnbound"): EventFragment;
}

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

export interface ICompliance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IComplianceInterface;

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

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
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

  isTokenAgent(
    _agentAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTokenBound(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeTokenAgent(
    _agentAddress: PromiseOrValue<string>,
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

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
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

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
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

    isTokenAgent(
      _agentAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTokenBound(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeTokenAgent(
      _agentAddress: PromiseOrValue<string>,
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
