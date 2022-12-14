import {
  Client,
  Module,
  Args_callContractView,
  Args_callContractStatic,
  Args_getBalance,
  Args_encodeParams,
  Args_encodeFunction,
  Args_signTypedData,
  Args_solidityPack,
  Args_solidityKeccak256,
  Args_soliditySha256,
  Args_signMessageBytes,
  Args_getSignerAddress,
  Args_getSignerBalance,
  Args_getSignerTransactionCount,
  Args_getGasPrice,
  Args_estimateTransactionGas,
  Args_estimateContractCallGas,
  Args_checkAddress,
  Args_toWei,
  Args_toEth,
  Args_waitForEvent,
  Args_awaitTransaction,
  Args_getNetwork,
  Args_requestAccounts,
  Args_callContractMethod,
  Args_callContractMethodAndWait,
  Args_deployContract,
  Args_sendRPC,
  Args_sendTransaction,
  Args_sendTransactionAndWait,
  Args_signMessage,
  TxResponse,
  BigInt,
  StaticTxResult,
  EventNotification,
  TxReceipt,
  Network,
} from "./wrap";
import { Connections } from "./Connections";
import { PluginFactory } from "@polywrap/core-js";
export * from "./Connection";
export * from "./Connections";
export interface EthereumPluginConfig {
  connections: Connections;
}
export declare class EthereumPlugin extends Module<EthereumPluginConfig> {
  private _connections;
  constructor(config: EthereumPluginConfig);
  callContractView(
    args: Args_callContractView,
    _client: Client
  ): Promise<string>;
  callContractStatic(
    args: Args_callContractStatic,
    _client: Client
  ): Promise<StaticTxResult>;
  getBalance(args: Args_getBalance, _client: Client): Promise<BigInt>;
  encodeParams(args: Args_encodeParams, _client: Client): Promise<string>;
  encodeFunction(args: Args_encodeFunction, _client: Client): Promise<string>;
  solidityPack(args: Args_solidityPack, _client: Client): Promise<string>;
  solidityKeccak256(
    args: Args_solidityKeccak256,
    _client: Client
  ): Promise<string>;
  soliditySha256(args: Args_soliditySha256, _client: Client): Promise<string>;
  getSignerAddress(
    args: Args_getSignerAddress,
    _client: Client
  ): Promise<string>;
  getSignerBalance(
    args: Args_getSignerBalance,
    _client: Client
  ): Promise<string>;
  getSignerTransactionCount(
    args: Args_getSignerTransactionCount,
    _client: Client
  ): Promise<string>;
  getGasPrice(args: Args_getGasPrice, _client: Client): Promise<string>;
  estimateTransactionGas(
    args: Args_estimateTransactionGas,
    _client: Client
  ): Promise<string>;
  estimateContractCallGas(
    args: Args_estimateContractCallGas,
    _client: Client
  ): Promise<string>;
  checkAddress(args: Args_checkAddress, _client: Client): Promise<boolean>;
  toWei(args: Args_toWei, _client: Client): Promise<string>;
  toEth(args: Args_toEth, _client: Client): Promise<string>;
  waitForEvent(
    args: Args_waitForEvent,
    _client: Client
  ): Promise<EventNotification>;
  awaitTransaction(
    args: Args_awaitTransaction,
    _client: Client
  ): Promise<TxReceipt>;
  getNetwork(args: Args_getNetwork, _client: Client): Promise<Network>;
  requestAccounts(
    args: Args_requestAccounts,
    _client: Client
  ): Promise<string[]>;
  callContractMethod(
    args: Args_callContractMethod,
    _client: Client
  ): Promise<TxResponse>;
  callContractMethodAndWait(
    args: Args_callContractMethodAndWait,
    _client: Client
  ): Promise<TxReceipt>;
  sendTransaction(
    args: Args_sendTransaction,
    _client: Client
  ): Promise<TxResponse>;
  sendTransactionAndWait(
    args: Args_sendTransactionAndWait,
    _client: Client
  ): Promise<TxReceipt>;
  deployContract(args: Args_deployContract, _client: Client): Promise<string>;
  signMessage(args: Args_signMessage, _client: Client): Promise<string>;
  signMessageBytes(
    args: Args_signMessageBytes,
    _client: Client
  ): Promise<string>;
  signTypedData(args: Args_signTypedData, _client: Client): Promise<string>;
  sendRPC(args: Args_sendRPC, _client: Client): Promise<string>;
  private _callContractMethod;
  private _getConnection;
}
export declare const ethereumPlugin: PluginFactory<EthereumPluginConfig>;
export declare const plugin: PluginFactory<EthereumPluginConfig>;
