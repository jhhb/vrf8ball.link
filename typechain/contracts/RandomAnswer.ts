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
} from "../common";

export interface RandomAnswerInterface extends utils.Interface {
  functions: {
    "answer(address)": FunctionFragment;
    "askQuestion()": FunctionFragment;
    "getUserStatus(address)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "answer"
      | "askQuestion"
      | "getUserStatus"
      | "rawFulfillRandomWords"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "answer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "askQuestion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserStatus",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(functionFragment: "answer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "askQuestion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;

  events: {
    "QuestionAnswered(uint256,uint256)": EventFragment;
    "QuestionAsked(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "QuestionAnswered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuestionAsked"): EventFragment;
}

export interface QuestionAnsweredEventObject {
  requestId: BigNumber;
  asker: BigNumber;
}
export type QuestionAnsweredEvent = TypedEvent<
  [BigNumber, BigNumber],
  QuestionAnsweredEventObject
>;

export type QuestionAnsweredEventFilter =
  TypedEventFilter<QuestionAnsweredEvent>;

export interface QuestionAskedEventObject {
  requestId: BigNumber;
  asker: string;
}
export type QuestionAskedEvent = TypedEvent<
  [BigNumber, string],
  QuestionAskedEventObject
>;

export type QuestionAskedEventFilter = TypedEventFilter<QuestionAskedEvent>;

export interface RandomAnswer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RandomAnswerInterface;

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
    answer(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    askQuestion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getUserStatus(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  answer(
    userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  askQuestion(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getUserStatus(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  rawFulfillRandomWords(
    requestId: PromiseOrValue<BigNumberish>,
    randomWords: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    answer(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    askQuestion(overrides?: CallOverrides): Promise<BigNumber>;

    getUserStatus(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "QuestionAnswered(uint256,uint256)"(
      requestId?: PromiseOrValue<BigNumberish> | null,
      asker?: PromiseOrValue<BigNumberish> | null
    ): QuestionAnsweredEventFilter;
    QuestionAnswered(
      requestId?: PromiseOrValue<BigNumberish> | null,
      asker?: PromiseOrValue<BigNumberish> | null
    ): QuestionAnsweredEventFilter;

    "QuestionAsked(uint256,address)"(
      requestId?: PromiseOrValue<BigNumberish> | null,
      asker?: PromiseOrValue<string> | null
    ): QuestionAskedEventFilter;
    QuestionAsked(
      requestId?: PromiseOrValue<BigNumberish> | null,
      asker?: PromiseOrValue<string> | null
    ): QuestionAskedEventFilter;
  };

  estimateGas: {
    answer(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    askQuestion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getUserStatus(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    answer(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    askQuestion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getUserStatus(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: PromiseOrValue<BigNumberish>,
      randomWords: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}