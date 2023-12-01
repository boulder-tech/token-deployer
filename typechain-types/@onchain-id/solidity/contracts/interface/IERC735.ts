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

export interface IERC735Interface extends utils.Interface {
  functions: {
    "addClaim(uint256,uint256,address,bytes,bytes,string)": FunctionFragment;
    "getClaim(bytes32)": FunctionFragment;
    "getClaimIdsByTopic(uint256)": FunctionFragment;
    "removeClaim(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addClaim"
      | "getClaim"
      | "getClaimIdsByTopic"
      | "removeClaim"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addClaim",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaim",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimIdsByTopic",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeClaim",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "addClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimIdsByTopic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeClaim",
    data: BytesLike
  ): Result;

  events: {
    "ClaimAdded(bytes32,uint256,uint256,address,bytes,bytes,string)": EventFragment;
    "ClaimChanged(bytes32,uint256,uint256,address,bytes,bytes,string)": EventFragment;
    "ClaimRemoved(bytes32,uint256,uint256,address,bytes,bytes,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimRemoved"): EventFragment;
}

export interface ClaimAddedEventObject {
  claimId: string;
  topic: BigNumber;
  scheme: BigNumber;
  issuer: string;
  signature: string;
  data: string;
  uri: string;
}
export type ClaimAddedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, string, string, string],
  ClaimAddedEventObject
>;

export type ClaimAddedEventFilter = TypedEventFilter<ClaimAddedEvent>;

export interface ClaimChangedEventObject {
  claimId: string;
  topic: BigNumber;
  scheme: BigNumber;
  issuer: string;
  signature: string;
  data: string;
  uri: string;
}
export type ClaimChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, string, string, string],
  ClaimChangedEventObject
>;

export type ClaimChangedEventFilter = TypedEventFilter<ClaimChangedEvent>;

export interface ClaimRemovedEventObject {
  claimId: string;
  topic: BigNumber;
  scheme: BigNumber;
  issuer: string;
  signature: string;
  data: string;
  uri: string;
}
export type ClaimRemovedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, string, string, string],
  ClaimRemovedEventObject
>;

export type ClaimRemovedEventFilter = TypedEventFilter<ClaimRemovedEvent>;

export interface IERC735 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC735Interface;

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
    addClaim(
      _topic: PromiseOrValue<BigNumberish>,
      _scheme: PromiseOrValue<BigNumberish>,
      issuer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string, string] & {
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    getClaimIdsByTopic(
      _topic: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { claimIds: string[] }>;

    removeClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addClaim(
    _topic: PromiseOrValue<BigNumberish>,
    _scheme: PromiseOrValue<BigNumberish>,
    issuer: PromiseOrValue<string>,
    _signature: PromiseOrValue<BytesLike>,
    _data: PromiseOrValue<BytesLike>,
    _uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getClaim(
    _claimId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, string, string, string] & {
      topic: BigNumber;
      scheme: BigNumber;
      issuer: string;
      signature: string;
      data: string;
      uri: string;
    }
  >;

  getClaimIdsByTopic(
    _topic: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  removeClaim(
    _claimId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addClaim(
      _topic: PromiseOrValue<BigNumberish>,
      _scheme: PromiseOrValue<BigNumberish>,
      issuer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _uri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, string, string, string] & {
        topic: BigNumber;
        scheme: BigNumber;
        issuer: string;
        signature: string;
        data: string;
        uri: string;
      }
    >;

    getClaimIdsByTopic(
      _topic: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    removeClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ClaimAdded(bytes32,uint256,uint256,address,bytes,bytes,string)"(
      claimId?: PromiseOrValue<BytesLike> | null,
      topic?: PromiseOrValue<BigNumberish> | null,
      scheme?: null,
      issuer?: PromiseOrValue<string> | null,
      signature?: null,
      data?: null,
      uri?: null
    ): ClaimAddedEventFilter;
    ClaimAdded(
      claimId?: PromiseOrValue<BytesLike> | null,
      topic?: PromiseOrValue<BigNumberish> | null,
      scheme?: null,
      issuer?: PromiseOrValue<string> | null,
      signature?: null,
      data?: null,
      uri?: null
    ): ClaimAddedEventFilter;

    "ClaimChanged(bytes32,uint256,uint256,address,bytes,bytes,string)"(
      claimId?: PromiseOrValue<BytesLike> | null,
      topic?: PromiseOrValue<BigNumberish> | null,
      scheme?: null,
      issuer?: PromiseOrValue<string> | null,
      signature?: null,
      data?: null,
      uri?: null
    ): ClaimChangedEventFilter;
    ClaimChanged(
      claimId?: PromiseOrValue<BytesLike> | null,
      topic?: PromiseOrValue<BigNumberish> | null,
      scheme?: null,
      issuer?: PromiseOrValue<string> | null,
      signature?: null,
      data?: null,
      uri?: null
    ): ClaimChangedEventFilter;

    "ClaimRemoved(bytes32,uint256,uint256,address,bytes,bytes,string)"(
      claimId?: PromiseOrValue<BytesLike> | null,
      topic?: PromiseOrValue<BigNumberish> | null,
      scheme?: null,
      issuer?: PromiseOrValue<string> | null,
      signature?: null,
      data?: null,
      uri?: null
    ): ClaimRemovedEventFilter;
    ClaimRemoved(
      claimId?: PromiseOrValue<BytesLike> | null,
      topic?: PromiseOrValue<BigNumberish> | null,
      scheme?: null,
      issuer?: PromiseOrValue<string> | null,
      signature?: null,
      data?: null,
      uri?: null
    ): ClaimRemovedEventFilter;
  };

  estimateGas: {
    addClaim(
      _topic: PromiseOrValue<BigNumberish>,
      _scheme: PromiseOrValue<BigNumberish>,
      issuer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimIdsByTopic(
      _topic: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addClaim(
      _topic: PromiseOrValue<BigNumberish>,
      _scheme: PromiseOrValue<BigNumberish>,
      issuer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimIdsByTopic(
      _topic: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeClaim(
      _claimId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
