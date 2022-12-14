import * as Types from "./";
export declare type UInt = number;
export declare type UInt8 = number;
export declare type UInt16 = number;
export declare type UInt32 = number;
export declare type Int = number;
export declare type Int8 = number;
export declare type Int16 = number;
export declare type Int32 = number;
export declare type Bytes = Uint8Array;
export declare type BigInt = string;
export declare type BigNumber = string;
export declare type Json = string;
export declare type String = string;
export declare type Boolean = boolean;
export interface Env extends Record<string, unknown> {
  connection?: Types.Connection | null;
}
export interface TxReceipt {
  to: Types.String;
  from: Types.String;
  contractAddress: Types.String;
  transactionIndex: Types.UInt32;
  root?: Types.String | null;
  gasUsed: Types.BigInt;
  logsBloom: Types.String;
  transactionHash: Types.String;
  logs: Array<Types.Log>;
  blockNumber: Types.BigInt;
  blockHash: Types.String;
  confirmations: Types.UInt32;
  cumulativeGasUsed: Types.BigInt;
  effectiveGasPrice: Types.BigInt;
  byzantium: Types.Boolean;
  type: Types.UInt32;
  status?: Types.UInt32 | null;
}
export interface TxResponse {
  hash: Types.String;
  to?: Types.String | null;
  from: Types.String;
  nonce: Types.UInt32;
  gasLimit: Types.BigInt;
  gasPrice?: Types.BigInt | null;
  data: Types.String;
  value: Types.BigInt;
  chainId: Types.BigInt;
  blockNumber?: Types.BigInt | null;
  blockHash?: Types.String | null;
  timestamp?: Types.UInt32 | null;
  confirmations: Types.UInt32;
  raw?: Types.String | null;
  r?: Types.String | null;
  s?: Types.String | null;
  v?: Types.UInt32 | null;
  type?: Types.UInt32 | null;
  accessList?: Array<Types.Access> | null;
}
export interface TxRequest {
  to?: Types.String | null;
  from?: Types.String | null;
  nonce?: Types.UInt32 | null;
  gasLimit?: Types.BigInt | null;
  gasPrice?: Types.BigInt | null;
  data?: Types.String | null;
  value?: Types.BigInt | null;
  chainId?: Types.BigInt | null;
  type?: Types.UInt32 | null;
}
export interface TxOverrides {
  gasLimit?: Types.BigInt | null;
  gasPrice?: Types.BigInt | null;
  value?: Types.BigInt | null;
}
export interface StaticTxResult {
  result: Types.String;
  error: Types.Boolean;
}
export interface Log {
  blockNumber: Types.BigInt;
  blockHash: Types.String;
  transactionIndex: Types.UInt32;
  removed: Types.Boolean;
  address: Types.String;
  data: Types.String;
  topics: Array<Types.String>;
  transactionHash: Types.String;
  logIndex: Types.UInt32;
}
export interface EventNotification {
  data: Types.String;
  address: Types.String;
  log: Types.Log;
}
export interface Access {
  address: Types.String;
  storageKeys: Array<Types.String>;
}
export interface Connection {
  node?: Types.String | null;
  networkNameOrChainId?: Types.String | null;
}
export interface Network {
  name: Types.String;
  chainId: Types.BigInt;
  ensAddress?: Types.String | null;
}
export interface TypedDataDomain {
  name?: Types.String | null;
  version?: Types.String | null;
  chainId?: Types.BigInt | null;
  verifyingContract?: Types.String | null;
  salt?: Types.Bytes | null;
}
export interface TypedDataType {
  name: Types.String;
  fields: Array<Types.TypedDataField>;
}
export interface TypedDataField {
  name: Types.String;
  type: Types.String;
}
export interface TypedDataValue {
  name: Types.String;
  value: Types.Json;
}
