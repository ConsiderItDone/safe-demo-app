import { Signer, ethers } from "ethers";
import {
  ExternalProvider,
  JsonRpcProvider,
  Web3Provider,
  Networkish,
} from "@ethersproject/providers";
export declare type Address = string;
export declare type AccountIndex = number;
export declare type EthereumSigner = Signer | Address | AccountIndex;
export declare type EthereumProvider =
  | string
  | ExternalProvider
  | JsonRpcProvider;
export declare type EthereumClient = Web3Provider | JsonRpcProvider;
export interface ConnectionConfig {
  provider: EthereumProvider;
  signer?: EthereumSigner;
}
export declare class Connection {
  private _config;
  private _client;
  constructor(_config: ConnectionConfig);
  static fromNetwork(networkish: Networkish): Connection;
  static fromNode(node: string): Connection;
  setProvider(provider: EthereumProvider, signer?: EthereumSigner): void;
  getProvider(): EthereumClient;
  setSigner(signer: EthereumSigner): void;
  getSigner(): ethers.Signer;
  getContract(
    address: Address,
    abi: string[],
    signer?: boolean
  ): ethers.Contract;
}
