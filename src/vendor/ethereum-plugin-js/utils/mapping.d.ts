import { Access, TxReceipt, TxResponse, TxRequest, Log } from "../wrap";
import { ethers } from "ethers";
export declare const toTxReceipt: (
  receipt: ethers.providers.TransactionReceipt
) => TxReceipt;
export declare const fromTxReceipt: (
  receipt: TxReceipt
) => ethers.providers.TransactionReceipt;
export declare const toTxResponse: (
  response: ethers.providers.TransactionResponse
) => TxResponse;
export declare const toTxRequest: (
  request: ethers.providers.TransactionRequest
) => TxRequest;
export declare const fromTxRequest: (
  request: TxRequest
) => ethers.providers.TransactionRequest;
export declare const toLog: (log: ethers.providers.Log) => Log;
export declare const fromLog: (log: Log) => ethers.providers.Log;
export declare const toAccess: (access: {
  address: string;
  storageKeys: string[];
}) => Access;
export declare const fromAccess: (access: Access) => {
  address: string;
  storageKeys: string[];
};
