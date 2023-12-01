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

export declare namespace DVDTransferManager {
  export type TxFeesStruct = {
    txFee1: PromiseOrValue<BigNumberish>;
    txFee2: PromiseOrValue<BigNumberish>;
    fee1Wallet: PromiseOrValue<string>;
    fee2Wallet: PromiseOrValue<string>;
  };

  export type TxFeesStructOutput = [BigNumber, BigNumber, string, string] & {
    txFee1: BigNumber;
    txFee2: BigNumber;
    fee1Wallet: string;
    fee2Wallet: string;
  };
}

export interface DVDTransferManagerInterface extends utils.Interface {
  functions: {
    "calculateFee(bytes32)": FunctionFragment;
    "calculateParity(address,address)": FunctionFragment;
    "calculateTransferID(uint256,address,address,uint256,address,address,uint256)": FunctionFragment;
    "cancelDVDTransfer(bytes32)": FunctionFragment;
    "fee(bytes32)": FunctionFragment;
    "initiateDVDTransfer(address,uint256,address,address,uint256)": FunctionFragment;
    "isTREX(address)": FunctionFragment;
    "isTREXAgent(address,address)": FunctionFragment;
    "isTREXOwner(address,address)": FunctionFragment;
    "modifyFee(address,address,uint256,uint256,uint256,address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "takeDVDTransfer(bytes32)": FunctionFragment;
    "token1ToDeliver(bytes32)": FunctionFragment;
    "token2ToDeliver(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "txNonce()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calculateFee"
      | "calculateParity"
      | "calculateTransferID"
      | "cancelDVDTransfer"
      | "fee"
      | "initiateDVDTransfer"
      | "isTREX"
      | "isTREXAgent"
      | "isTREXOwner"
      | "modifyFee"
      | "owner"
      | "renounceOwnership"
      | "takeDVDTransfer"
      | "token1ToDeliver"
      | "token2ToDeliver"
      | "transferOwnership"
      | "txNonce"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateFee",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateParity",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTransferID",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDVDTransfer",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "fee",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateDVDTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isTREX",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTREXAgent",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTREXOwner",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyFee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "takeDVDTransfer",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "token1ToDeliver",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "token2ToDeliver",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "txNonce", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "calculateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateParity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTransferID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDVDTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateDVDTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isTREX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTREXAgent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTREXOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "modifyFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takeDVDTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "token1ToDeliver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "token2ToDeliver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "txNonce", data: BytesLike): Result;

  events: {
    "DVDTransferCancelled(bytes32)": EventFragment;
    "DVDTransferExecuted(bytes32)": EventFragment;
    "DVDTransferInitiated(bytes32,address,address,uint256,address,address,uint256)": EventFragment;
    "FeeModified(bytes32,address,address,uint256,uint256,uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DVDTransferCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DVDTransferExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DVDTransferInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface DVDTransferCancelledEventObject {
  transferID: string;
}
export type DVDTransferCancelledEvent = TypedEvent<
  [string],
  DVDTransferCancelledEventObject
>;

export type DVDTransferCancelledEventFilter =
  TypedEventFilter<DVDTransferCancelledEvent>;

export interface DVDTransferExecutedEventObject {
  transferID: string;
}
export type DVDTransferExecutedEvent = TypedEvent<
  [string],
  DVDTransferExecutedEventObject
>;

export type DVDTransferExecutedEventFilter =
  TypedEventFilter<DVDTransferExecutedEvent>;

export interface DVDTransferInitiatedEventObject {
  transferID: string;
  maker: string;
  token1: string;
  token1Amount: BigNumber;
  taker: string;
  token2: string;
  token2Amount: BigNumber;
}
export type DVDTransferInitiatedEvent = TypedEvent<
  [string, string, string, BigNumber, string, string, BigNumber],
  DVDTransferInitiatedEventObject
>;

export type DVDTransferInitiatedEventFilter =
  TypedEventFilter<DVDTransferInitiatedEvent>;

export interface FeeModifiedEventObject {
  parity: string;
  token1: string;
  token2: string;
  fee1: BigNumber;
  fee2: BigNumber;
  feeBase: BigNumber;
  fee1Wallet: string;
  fee2Wallet: string;
}
export type FeeModifiedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, string, string],
  FeeModifiedEventObject
>;

export type FeeModifiedEventFilter = TypedEventFilter<FeeModifiedEvent>;

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

export interface DVDTransferManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DVDTransferManagerInterface;

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
    calculateFee(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[DVDTransferManager.TxFeesStructOutput]>;

    calculateParity(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    calculateTransferID(
      _nonce: PromiseOrValue<BigNumberish>,
      _maker: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _taker: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    cancelDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fee(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        token1Fee: BigNumber;
        token2Fee: BigNumber;
        feeBase: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    initiateDVDTransfer(
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _counterpart: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isTREX(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTREXAgent(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTREXOwner(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    modifyFee(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _fee1: PromiseOrValue<BigNumberish>,
      _fee2: PromiseOrValue<BigNumberish>,
      _feeBase: PromiseOrValue<BigNumberish>,
      _fee1Wallet: PromiseOrValue<string>,
      _fee2Wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    takeDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token1ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    token2ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    txNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  calculateFee(
    _transferID: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<DVDTransferManager.TxFeesStructOutput>;

  calculateParity(
    _token1: PromiseOrValue<string>,
    _token2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  calculateTransferID(
    _nonce: PromiseOrValue<BigNumberish>,
    _maker: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    _token1Amount: PromiseOrValue<BigNumberish>,
    _taker: PromiseOrValue<string>,
    _token2: PromiseOrValue<string>,
    _token2Amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  cancelDVDTransfer(
    _transferID: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fee(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, string] & {
      token1Fee: BigNumber;
      token2Fee: BigNumber;
      feeBase: BigNumber;
      fee1Wallet: string;
      fee2Wallet: string;
    }
  >;

  initiateDVDTransfer(
    _token1: PromiseOrValue<string>,
    _token1Amount: PromiseOrValue<BigNumberish>,
    _counterpart: PromiseOrValue<string>,
    _token2: PromiseOrValue<string>,
    _token2Amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isTREX(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTREXAgent(
    _token: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTREXOwner(
    _token: PromiseOrValue<string>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  modifyFee(
    _token1: PromiseOrValue<string>,
    _token2: PromiseOrValue<string>,
    _fee1: PromiseOrValue<BigNumberish>,
    _fee2: PromiseOrValue<BigNumberish>,
    _feeBase: PromiseOrValue<BigNumberish>,
    _fee1Wallet: PromiseOrValue<string>,
    _fee2Wallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  takeDVDTransfer(
    _transferID: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token1ToDeliver(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      counterpart: string;
      token: string;
      amount: BigNumber;
    }
  >;

  token2ToDeliver(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      counterpart: string;
      token: string;
      amount: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  txNonce(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    calculateFee(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<DVDTransferManager.TxFeesStructOutput>;

    calculateParity(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    calculateTransferID(
      _nonce: PromiseOrValue<BigNumberish>,
      _maker: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _taker: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    cancelDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    fee(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, string] & {
        token1Fee: BigNumber;
        token2Fee: BigNumber;
        feeBase: BigNumber;
        fee1Wallet: string;
        fee2Wallet: string;
      }
    >;

    initiateDVDTransfer(
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _counterpart: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isTREX(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTREXAgent(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTREXOwner(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    modifyFee(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _fee1: PromiseOrValue<BigNumberish>,
      _fee2: PromiseOrValue<BigNumberish>,
      _feeBase: PromiseOrValue<BigNumberish>,
      _fee1Wallet: PromiseOrValue<string>,
      _fee2Wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    takeDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    token1ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    token2ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        counterpart: string;
        token: string;
        amount: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    txNonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "DVDTransferCancelled(bytes32)"(
      transferID?: PromiseOrValue<BytesLike> | null
    ): DVDTransferCancelledEventFilter;
    DVDTransferCancelled(
      transferID?: PromiseOrValue<BytesLike> | null
    ): DVDTransferCancelledEventFilter;

    "DVDTransferExecuted(bytes32)"(
      transferID?: PromiseOrValue<BytesLike> | null
    ): DVDTransferExecutedEventFilter;
    DVDTransferExecuted(
      transferID?: PromiseOrValue<BytesLike> | null
    ): DVDTransferExecutedEventFilter;

    "DVDTransferInitiated(bytes32,address,address,uint256,address,address,uint256)"(
      transferID?: PromiseOrValue<BytesLike> | null,
      maker?: null,
      token1?: PromiseOrValue<string> | null,
      token1Amount?: null,
      taker?: null,
      token2?: PromiseOrValue<string> | null,
      token2Amount?: null
    ): DVDTransferInitiatedEventFilter;
    DVDTransferInitiated(
      transferID?: PromiseOrValue<BytesLike> | null,
      maker?: null,
      token1?: PromiseOrValue<string> | null,
      token1Amount?: null,
      taker?: null,
      token2?: PromiseOrValue<string> | null,
      token2Amount?: null
    ): DVDTransferInitiatedEventFilter;

    "FeeModified(bytes32,address,address,uint256,uint256,uint256,address,address)"(
      parity?: PromiseOrValue<BytesLike> | null,
      token1?: null,
      token2?: null,
      fee1?: null,
      fee2?: null,
      feeBase?: null,
      fee1Wallet?: null,
      fee2Wallet?: null
    ): FeeModifiedEventFilter;
    FeeModified(
      parity?: PromiseOrValue<BytesLike> | null,
      token1?: null,
      token2?: null,
      fee1?: null,
      fee2?: null,
      feeBase?: null,
      fee1Wallet?: null,
      fee2Wallet?: null
    ): FeeModifiedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    calculateFee(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateParity(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTransferID(
      _nonce: PromiseOrValue<BigNumberish>,
      _maker: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _taker: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fee(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initiateDVDTransfer(
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _counterpart: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isTREX(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTREXAgent(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTREXOwner(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modifyFee(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _fee1: PromiseOrValue<BigNumberish>,
      _fee2: PromiseOrValue<BigNumberish>,
      _feeBase: PromiseOrValue<BigNumberish>,
      _fee1Wallet: PromiseOrValue<string>,
      _fee2Wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    takeDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token1ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token2ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    txNonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateFee(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateParity(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTransferID(
      _nonce: PromiseOrValue<BigNumberish>,
      _maker: PromiseOrValue<string>,
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _taker: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fee(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initiateDVDTransfer(
      _token1: PromiseOrValue<string>,
      _token1Amount: PromiseOrValue<BigNumberish>,
      _counterpart: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _token2Amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isTREX(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTREXAgent(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTREXOwner(
      _token: PromiseOrValue<string>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modifyFee(
      _token1: PromiseOrValue<string>,
      _token2: PromiseOrValue<string>,
      _fee1: PromiseOrValue<BigNumberish>,
      _fee2: PromiseOrValue<BigNumberish>,
      _feeBase: PromiseOrValue<BigNumberish>,
      _fee1Wallet: PromiseOrValue<string>,
      _fee2Wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    takeDVDTransfer(
      _transferID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token1ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token2ToDeliver(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    txNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
