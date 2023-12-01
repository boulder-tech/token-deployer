/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface IIAFactoryInterface extends utils.Interface {
  functions: {
    "deployIA(address)": FunctionFragment;
    "deployedByFactory(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "deployIA" | "deployedByFactory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployIA",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployedByFactory",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "deployIA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployedByFactory",
    data: BytesLike
  ): Result;

  events: {
    "ImplementationAuthorityDeployed(address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "ImplementationAuthorityDeployed"
  ): EventFragment;
}

export interface ImplementationAuthorityDeployedEventObject {
  _ia: string;
}
export type ImplementationAuthorityDeployedEvent = TypedEvent<
  [string],
  ImplementationAuthorityDeployedEventObject
>;

export type ImplementationAuthorityDeployedEventFilter =
  TypedEventFilter<ImplementationAuthorityDeployedEvent>;

export interface IIAFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IIAFactoryInterface;

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
    deployIA(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deployedByFactory(
      _ia: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  deployIA(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deployedByFactory(
    _ia: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    deployIA(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    deployedByFactory(
      _ia: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ImplementationAuthorityDeployed(address)"(
      _ia?: PromiseOrValue<string> | null
    ): ImplementationAuthorityDeployedEventFilter;
    ImplementationAuthorityDeployed(
      _ia?: PromiseOrValue<string> | null
    ): ImplementationAuthorityDeployedEventFilter;
  };

  estimateGas: {
    deployIA(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deployedByFactory(
      _ia: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployIA(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deployedByFactory(
      _ia: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
