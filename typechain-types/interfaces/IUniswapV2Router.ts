/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface IUniswapV2RouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addLiquidity"
      | "swapExactTokensForTokens"
      | "swapTokensForExactETH"
      | "swapTokensForExactTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactETH",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;
}

export interface IUniswapV2Router extends BaseContract {
  connect(runner?: ContractRunner | null): IUniswapV2Router;
  waitForDeployment(): Promise<this>;

  interface: IUniswapV2RouterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addLiquidity: TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "nonpayable"
  >;

  swapExactTokensForTokens: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapTokensForExactETH: TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapTokensForExactTokens: TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [
      tokenA: AddressLike,
      tokenB: AddressLike,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: AddressLike,
      deadline: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        amountA: bigint;
        amountB: bigint;
        liquidity: bigint;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForTokens"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapTokensForExactETH"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapTokensForExactTokens"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  filters: {};
}
