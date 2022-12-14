"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manifest = void 0;
exports.manifest = {
    name: "Ethereum",
    type: "plugin",
    version: "0.1",
    abi: {
        "envType": {
            "kind": 65536,
            "properties": [
                {
                    "kind": 34,
                    "name": "connection",
                    "object": {
                        "kind": 8192,
                        "name": "connection",
                        "type": "Connection"
                    },
                    "type": "Connection"
                }
            ],
            "type": "Env"
        },
        "moduleType": {
            "kind": 128,
            "methods": [
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "method",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "method",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "callContractView",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "callContractView",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "callContractView",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "method",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "method",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        },
                        {
                            "kind": 34,
                            "name": "txOverrides",
                            "object": {
                                "kind": 8192,
                                "name": "txOverrides",
                                "type": "TxOverrides"
                            },
                            "type": "TxOverrides"
                        }
                    ],
                    "kind": 64,
                    "name": "callContractStatic",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "callContractStatic",
                        "object": {
                            "kind": 8192,
                            "name": "callContractStatic",
                            "required": true,
                            "type": "StaticTxResult"
                        },
                        "required": true,
                        "type": "StaticTxResult"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "blockTag",
                            "scalar": {
                                "kind": 4,
                                "name": "blockTag",
                                "type": "BigInt"
                            },
                            "type": "BigInt"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "getBalance",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "getBalance",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "getBalance",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "types",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "types",
                            "required": true,
                            "type": "[String]"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "values",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "values",
                            "required": true,
                            "type": "[String]"
                        }
                    ],
                    "kind": 64,
                    "name": "encodeParams",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "encodeParams",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "encodeParams",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "method",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "method",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        }
                    ],
                    "kind": 64,
                    "name": "encodeFunction",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "encodeFunction",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "encodeFunction",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "types",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "types",
                            "required": true,
                            "type": "[String]"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "values",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "values",
                            "required": true,
                            "type": "[String]"
                        }
                    ],
                    "kind": 64,
                    "name": "solidityPack",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "solidityPack",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "solidityPack",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "types",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "types",
                            "required": true,
                            "type": "[String]"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "values",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "values",
                            "required": true,
                            "type": "[String]"
                        }
                    ],
                    "kind": 64,
                    "name": "solidityKeccak256",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "solidityKeccak256",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "solidityKeccak256",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "types",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "types",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "types",
                            "required": true,
                            "type": "[String]"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "values",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "values",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "values",
                            "required": true,
                            "type": "[String]"
                        }
                    ],
                    "kind": 64,
                    "name": "soliditySha256",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "soliditySha256",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "soliditySha256",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "getSignerAddress",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "getSignerAddress",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "getSignerAddress",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "blockTag",
                            "scalar": {
                                "kind": 4,
                                "name": "blockTag",
                                "type": "BigInt"
                            },
                            "type": "BigInt"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "getSignerBalance",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "getSignerBalance",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "getSignerBalance",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "blockTag",
                            "scalar": {
                                "kind": 4,
                                "name": "blockTag",
                                "type": "BigInt"
                            },
                            "type": "BigInt"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "getSignerTransactionCount",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "getSignerTransactionCount",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "getSignerTransactionCount",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "getGasPrice",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "getGasPrice",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "getGasPrice",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "tx",
                            "object": {
                                "kind": 8192,
                                "name": "tx",
                                "required": true,
                                "type": "TxRequest"
                            },
                            "required": true,
                            "type": "TxRequest"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "estimateTransactionGas",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "estimateTransactionGas",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "estimateTransactionGas",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "method",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "method",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        },
                        {
                            "kind": 34,
                            "name": "txOverrides",
                            "object": {
                                "kind": 8192,
                                "name": "txOverrides",
                                "type": "TxOverrides"
                            },
                            "type": "TxOverrides"
                        }
                    ],
                    "kind": 64,
                    "name": "estimateContractCallGas",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "estimateContractCallGas",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "estimateContractCallGas",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        }
                    ],
                    "kind": 64,
                    "name": "checkAddress",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "checkAddress",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "checkAddress",
                            "required": true,
                            "type": "Boolean"
                        },
                        "type": "Boolean"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "eth",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "eth",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        }
                    ],
                    "kind": 64,
                    "name": "toWei",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "toWei",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "toWei",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "wei",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "wei",
                                "required": true,
                                "type": "BigInt"
                            },
                            "type": "BigInt"
                        }
                    ],
                    "kind": 64,
                    "name": "toEth",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "toEth",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "toEth",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "txHash",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "txHash",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "confirmations",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "confirmations",
                                "required": true,
                                "type": "UInt32"
                            },
                            "type": "UInt32"
                        },
                        {
                            "kind": 34,
                            "name": "timeout",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "timeout",
                                "required": true,
                                "type": "UInt32"
                            },
                            "type": "UInt32"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "awaitTransaction",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "awaitTransaction",
                        "object": {
                            "kind": 8192,
                            "name": "awaitTransaction",
                            "required": true,
                            "type": "TxReceipt"
                        },
                        "required": true,
                        "type": "TxReceipt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "event",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "event",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "timeout",
                            "scalar": {
                                "kind": 4,
                                "name": "timeout",
                                "type": "UInt32"
                            },
                            "type": "UInt32"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "waitForEvent",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "waitForEvent",
                        "object": {
                            "kind": 8192,
                            "name": "waitForEvent",
                            "required": true,
                            "type": "EventNotification"
                        },
                        "required": true,
                        "type": "EventNotification"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "getNetwork",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "getNetwork",
                        "object": {
                            "kind": 8192,
                            "name": "getNetwork",
                            "required": true,
                            "type": "Network"
                        },
                        "required": true,
                        "type": "Network"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "requestAccounts",
                    "required": true,
                    "return": {
                        "array": {
                            "item": {
                                "kind": 4,
                                "name": "requestAccounts",
                                "required": true,
                                "type": "String"
                            },
                            "kind": 18,
                            "name": "requestAccounts",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "requestAccounts",
                                "required": true,
                                "type": "String"
                            },
                            "type": "[String]"
                        },
                        "kind": 34,
                        "name": "requestAccounts",
                        "required": true,
                        "type": "[String]"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "method",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "method",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        },
                        {
                            "kind": 34,
                            "name": "txOverrides",
                            "object": {
                                "kind": 8192,
                                "name": "txOverrides",
                                "type": "TxOverrides"
                            },
                            "type": "TxOverrides"
                        }
                    ],
                    "kind": 64,
                    "name": "callContractMethod",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "callContractMethod",
                        "object": {
                            "kind": 8192,
                            "name": "callContractMethod",
                            "required": true,
                            "type": "TxResponse"
                        },
                        "required": true,
                        "type": "TxResponse"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "address",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "address",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "method",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "method",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        },
                        {
                            "kind": 34,
                            "name": "txOverrides",
                            "object": {
                                "kind": 8192,
                                "name": "txOverrides",
                                "type": "TxOverrides"
                            },
                            "type": "TxOverrides"
                        }
                    ],
                    "kind": 64,
                    "name": "callContractMethodAndWait",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "callContractMethodAndWait",
                        "object": {
                            "kind": 8192,
                            "name": "callContractMethodAndWait",
                            "required": true,
                            "type": "TxReceipt"
                        },
                        "required": true,
                        "type": "TxReceipt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "tx",
                            "object": {
                                "kind": 8192,
                                "name": "tx",
                                "required": true,
                                "type": "TxRequest"
                            },
                            "required": true,
                            "type": "TxRequest"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "sendTransaction",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "sendTransaction",
                        "object": {
                            "kind": 8192,
                            "name": "sendTransaction",
                            "required": true,
                            "type": "TxResponse"
                        },
                        "required": true,
                        "type": "TxResponse"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "tx",
                            "object": {
                                "kind": 8192,
                                "name": "tx",
                                "required": true,
                                "type": "TxRequest"
                            },
                            "required": true,
                            "type": "TxRequest"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "sendTransactionAndWait",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "sendTransactionAndWait",
                        "object": {
                            "kind": 8192,
                            "name": "sendTransactionAndWait",
                            "required": true,
                            "type": "TxReceipt"
                        },
                        "required": true,
                        "type": "TxReceipt"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "abi",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "abi",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "bytecode",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "bytecode",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "args",
                                "scalar": {
                                    "kind": 4,
                                    "name": "args",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "args",
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "deployContract",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "deployContract",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "deployContract",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "message",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "message",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "signMessage",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "signMessage",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "signMessage",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "bytes",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "bytes",
                                "required": true,
                                "type": "Bytes"
                            },
                            "type": "Bytes"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "signMessageBytes",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "signMessageBytes",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "signMessageBytes",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "payload",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "payload",
                                "required": true,
                                "type": "JSON"
                            },
                            "type": "JSON"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "signTypedData",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "signTypedData",
                        "scalar": {
                            "kind": 4,
                            "name": "signTypedData",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                },
                {
                    "arguments": [
                        {
                            "kind": 34,
                            "name": "method",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "method",
                                "required": true,
                                "type": "String"
                            },
                            "type": "String"
                        },
                        {
                            "array": {
                                "item": {
                                    "kind": 4,
                                    "name": "params",
                                    "required": true,
                                    "type": "String"
                                },
                                "kind": 18,
                                "name": "params",
                                "required": true,
                                "scalar": {
                                    "kind": 4,
                                    "name": "params",
                                    "required": true,
                                    "type": "String"
                                },
                                "type": "[String]"
                            },
                            "kind": 34,
                            "name": "params",
                            "required": true,
                            "type": "[String]"
                        },
                        {
                            "kind": 34,
                            "name": "connection",
                            "object": {
                                "kind": 8192,
                                "name": "connection",
                                "type": "Connection"
                            },
                            "type": "Connection"
                        }
                    ],
                    "kind": 64,
                    "name": "sendRPC",
                    "required": true,
                    "return": {
                        "kind": 34,
                        "name": "sendRPC",
                        "scalar": {
                            "kind": 4,
                            "name": "sendRPC",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    "type": "Method"
                }
            ],
            "type": "Module"
        },
        "objectTypes": [
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "to",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "to",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "from",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "from",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "contractAddress",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "contractAddress",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "transactionIndex",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "transactionIndex",
                            "required": true,
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "root",
                        "scalar": {
                            "kind": 4,
                            "name": "root",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "gasUsed",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "gasUsed",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "logsBloom",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "logsBloom",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "transactionHash",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "transactionHash",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "array": {
                            "item": {
                                "kind": 8192,
                                "name": "logs",
                                "required": true,
                                "type": "Log"
                            },
                            "kind": 18,
                            "name": "logs",
                            "object": {
                                "kind": 8192,
                                "name": "logs",
                                "required": true,
                                "type": "Log"
                            },
                            "required": true,
                            "type": "[Log]"
                        },
                        "kind": 34,
                        "name": "logs",
                        "required": true,
                        "type": "[Log]"
                    },
                    {
                        "kind": 34,
                        "name": "blockNumber",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "blockNumber",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "blockHash",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "blockHash",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "confirmations",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "confirmations",
                            "required": true,
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "cumulativeGasUsed",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "cumulativeGasUsed",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "effectiveGasPrice",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "effectiveGasPrice",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "byzantium",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "byzantium",
                            "required": true,
                            "type": "Boolean"
                        },
                        "type": "Boolean"
                    },
                    {
                        "kind": 34,
                        "name": "type",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "type",
                            "required": true,
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "status",
                        "scalar": {
                            "kind": 4,
                            "name": "status",
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    }
                ],
                "type": "TxReceipt"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "hash",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "hash",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "to",
                        "scalar": {
                            "kind": 4,
                            "name": "to",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "from",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "from",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "nonce",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "nonce",
                            "required": true,
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "gasLimit",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "gasLimit",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "gasPrice",
                        "scalar": {
                            "kind": 4,
                            "name": "gasPrice",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "data",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "data",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "value",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "value",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "chainId",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "chainId",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "blockNumber",
                        "scalar": {
                            "kind": 4,
                            "name": "blockNumber",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "blockHash",
                        "scalar": {
                            "kind": 4,
                            "name": "blockHash",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "timestamp",
                        "scalar": {
                            "kind": 4,
                            "name": "timestamp",
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "confirmations",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "confirmations",
                            "required": true,
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "raw",
                        "scalar": {
                            "kind": 4,
                            "name": "raw",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "r",
                        "scalar": {
                            "kind": 4,
                            "name": "r",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "s",
                        "scalar": {
                            "kind": 4,
                            "name": "s",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "v",
                        "scalar": {
                            "kind": 4,
                            "name": "v",
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "type",
                        "scalar": {
                            "kind": 4,
                            "name": "type",
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "array": {
                            "item": {
                                "kind": 8192,
                                "name": "accessList",
                                "required": true,
                                "type": "Access"
                            },
                            "kind": 18,
                            "name": "accessList",
                            "object": {
                                "kind": 8192,
                                "name": "accessList",
                                "required": true,
                                "type": "Access"
                            },
                            "type": "[Access]"
                        },
                        "kind": 34,
                        "name": "accessList",
                        "type": "[Access]"
                    }
                ],
                "type": "TxResponse"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "to",
                        "scalar": {
                            "kind": 4,
                            "name": "to",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "from",
                        "scalar": {
                            "kind": 4,
                            "name": "from",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "nonce",
                        "scalar": {
                            "kind": 4,
                            "name": "nonce",
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "gasLimit",
                        "scalar": {
                            "kind": 4,
                            "name": "gasLimit",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "gasPrice",
                        "scalar": {
                            "kind": 4,
                            "name": "gasPrice",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "data",
                        "scalar": {
                            "kind": 4,
                            "name": "data",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "value",
                        "scalar": {
                            "kind": 4,
                            "name": "value",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "chainId",
                        "scalar": {
                            "kind": 4,
                            "name": "chainId",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "type",
                        "scalar": {
                            "kind": 4,
                            "name": "type",
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    }
                ],
                "type": "TxRequest"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "gasLimit",
                        "scalar": {
                            "kind": 4,
                            "name": "gasLimit",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "gasPrice",
                        "scalar": {
                            "kind": 4,
                            "name": "gasPrice",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "value",
                        "scalar": {
                            "kind": 4,
                            "name": "value",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    }
                ],
                "type": "TxOverrides"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "result",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "result",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "error",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "error",
                            "required": true,
                            "type": "Boolean"
                        },
                        "type": "Boolean"
                    }
                ],
                "type": "StaticTxResult"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "blockNumber",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "blockNumber",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "blockHash",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "blockHash",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "transactionIndex",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "transactionIndex",
                            "required": true,
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    },
                    {
                        "kind": 34,
                        "name": "removed",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "removed",
                            "required": true,
                            "type": "Boolean"
                        },
                        "type": "Boolean"
                    },
                    {
                        "kind": 34,
                        "name": "address",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "address",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "data",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "data",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "array": {
                            "item": {
                                "kind": 4,
                                "name": "topics",
                                "required": true,
                                "type": "String"
                            },
                            "kind": 18,
                            "name": "topics",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "topics",
                                "required": true,
                                "type": "String"
                            },
                            "type": "[String]"
                        },
                        "kind": 34,
                        "name": "topics",
                        "required": true,
                        "type": "[String]"
                    },
                    {
                        "kind": 34,
                        "name": "transactionHash",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "transactionHash",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "logIndex",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "logIndex",
                            "required": true,
                            "type": "UInt32"
                        },
                        "type": "UInt32"
                    }
                ],
                "type": "Log"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "data",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "data",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "address",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "address",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "log",
                        "object": {
                            "kind": 8192,
                            "name": "log",
                            "required": true,
                            "type": "Log"
                        },
                        "required": true,
                        "type": "Log"
                    }
                ],
                "type": "EventNotification"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "address",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "address",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "array": {
                            "item": {
                                "kind": 4,
                                "name": "storageKeys",
                                "required": true,
                                "type": "String"
                            },
                            "kind": 18,
                            "name": "storageKeys",
                            "required": true,
                            "scalar": {
                                "kind": 4,
                                "name": "storageKeys",
                                "required": true,
                                "type": "String"
                            },
                            "type": "[String]"
                        },
                        "kind": 34,
                        "name": "storageKeys",
                        "required": true,
                        "type": "[String]"
                    }
                ],
                "type": "Access"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "node",
                        "scalar": {
                            "kind": 4,
                            "name": "node",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "networkNameOrChainId",
                        "scalar": {
                            "kind": 4,
                            "name": "networkNameOrChainId",
                            "type": "String"
                        },
                        "type": "String"
                    }
                ],
                "type": "Connection"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "name",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "name",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "chainId",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "chainId",
                            "required": true,
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "ensAddress",
                        "scalar": {
                            "kind": 4,
                            "name": "ensAddress",
                            "type": "String"
                        },
                        "type": "String"
                    }
                ],
                "type": "Network"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "name",
                        "scalar": {
                            "kind": 4,
                            "name": "name",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "version",
                        "scalar": {
                            "kind": 4,
                            "name": "version",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "chainId",
                        "scalar": {
                            "kind": 4,
                            "name": "chainId",
                            "type": "BigInt"
                        },
                        "type": "BigInt"
                    },
                    {
                        "kind": 34,
                        "name": "verifyingContract",
                        "scalar": {
                            "kind": 4,
                            "name": "verifyingContract",
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "salt",
                        "scalar": {
                            "kind": 4,
                            "name": "salt",
                            "type": "Bytes"
                        },
                        "type": "Bytes"
                    }
                ],
                "type": "TypedDataDomain"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "name",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "name",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "array": {
                            "item": {
                                "kind": 8192,
                                "name": "fields",
                                "required": true,
                                "type": "TypedDataField"
                            },
                            "kind": 18,
                            "name": "fields",
                            "object": {
                                "kind": 8192,
                                "name": "fields",
                                "required": true,
                                "type": "TypedDataField"
                            },
                            "required": true,
                            "type": "[TypedDataField]"
                        },
                        "kind": 34,
                        "name": "fields",
                        "required": true,
                        "type": "[TypedDataField]"
                    }
                ],
                "type": "TypedDataType"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "name",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "name",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "type",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "type",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    }
                ],
                "type": "TypedDataField"
            },
            {
                "kind": 1,
                "properties": [
                    {
                        "kind": 34,
                        "name": "name",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "name",
                            "required": true,
                            "type": "String"
                        },
                        "type": "String"
                    },
                    {
                        "kind": 34,
                        "name": "value",
                        "required": true,
                        "scalar": {
                            "kind": 4,
                            "name": "value",
                            "required": true,
                            "type": "JSON"
                        },
                        "type": "JSON"
                    }
                ],
                "type": "TypedDataValue"
            }
        ],
        "version": "0.1"
    }
};
//# sourceMappingURL=wrap.info.js.map