"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.ethereumPlugin = exports.EthereumPlugin = void 0;
var wrap_1 = require("./wrap");
var Mapping = __importStar(require("./utils/mapping"));
var parsing_1 = require("./utils/parsing");
var ethers_1 = require("ethers");
var utils_1 = require("ethers/lib/utils");
__exportStar(require("./Connection"), exports);
__exportStar(require("./Connections"), exports);
var EthereumPlugin = /** @class */ (function (_super) {
    __extends(EthereumPlugin, _super);
    function EthereumPlugin(config) {
        var _this = _super.call(this, config) || this;
        _this._connections = config.connections;
        return _this;
    }
    EthereumPlugin.prototype.callContractView = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, abi, contract, funcs, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        abi = parsing_1.constructAbi(args.method);
                        contract = connection.getContract(args.address, abi, false);
                        funcs = Object.keys(contract.interface.functions);
                        return [4 /*yield*/, contract[funcs[0]].apply(contract, __spread(parsing_1.parseArgs(args.args)))];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, parsing_1.parseResult(result)];
                }
            });
        });
    };
    EthereumPlugin.prototype.callContractStatic = function (args, _client) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var connection, abi, contract, funcs, result, e_1;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _e.sent();
                        abi = parsing_1.constructAbi(args.method);
                        contract = connection.getContract(args.address, abi);
                        funcs = Object.keys(contract.interface.functions);
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (_d = contract.callStatic)[funcs[0]].apply(_d, __spread(parsing_1.parseArgs(args.args), [{
                                    gasPrice: ((_a = args.txOverrides) === null || _a === void 0 ? void 0 : _a.gasPrice) ? ethers_1.ethers.BigNumber.from(args.txOverrides.gasPrice)
                                        : undefined,
                                    gasLimit: ((_b = args.txOverrides) === null || _b === void 0 ? void 0 : _b.gasLimit) ? ethers_1.ethers.BigNumber.from(args.txOverrides.gasLimit)
                                        : undefined,
                                    value: ((_c = args.txOverrides) === null || _c === void 0 ? void 0 : _c.value) ? ethers_1.ethers.BigNumber.from(args.txOverrides.value)
                                        : undefined,
                                }]))];
                    case 3:
                        result = _e.sent();
                        return [2 /*return*/, {
                                result: result.length ? parsing_1.parseResult(result) : "",
                                error: false,
                            }];
                    case 4:
                        e_1 = _e.sent();
                        return [2 /*return*/, {
                                result: e_1.reason,
                                error: true,
                            }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EthereumPlugin.prototype.getBalance = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection
                                .getProvider()
                                .getBalance(args.address, args.blockTag || undefined)];
                    case 2: return [2 /*return*/, (_a.sent()).toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype.encodeParams = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, utils_1.defaultAbiCoder.encode(args.types, parsing_1.parseArgs(args.values))];
            });
        });
    };
    EthereumPlugin.prototype.encodeFunction = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var functionInterface;
            return __generator(this, function (_a) {
                functionInterface = ethers_1.ethers.Contract.getInterface([args.method]);
                return [2 /*return*/, functionInterface.encodeFunctionData(functionInterface.functions[Object.keys(functionInterface.functions)[0]], parsing_1.parseArgs(args.args))];
            });
        });
    };
    EthereumPlugin.prototype.solidityPack = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ethers_1.ethers.utils.solidityPack(args.types, parsing_1.parseArgs(args.values))];
            });
        });
    };
    EthereumPlugin.prototype.solidityKeccak256 = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ethers_1.ethers.utils.solidityKeccak256(args.types, parsing_1.parseArgs(args.values))];
            });
        });
    };
    EthereumPlugin.prototype.soliditySha256 = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ethers_1.ethers.utils.soliditySha256(args.types, parsing_1.parseArgs(args.values))];
            });
        });
    };
    EthereumPlugin.prototype.getSignerAddress = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getSigner().getAddress()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EthereumPlugin.prototype.getSignerBalance = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getSigner().getBalance(args.blockTag || undefined)];
                    case 2: return [2 /*return*/, (_a.sent()).toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype.getSignerTransactionCount = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection
                                .getSigner()
                                .getTransactionCount(args.blockTag || undefined)];
                    case 2: return [2 /*return*/, (_a.sent()).toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype.getGasPrice = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getSigner().getGasPrice()];
                    case 2: return [2 /*return*/, (_a.sent()).toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype.estimateTransactionGas = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getSigner().estimateGas(Mapping.fromTxRequest(args.tx))];
                    case 2: return [2 /*return*/, (_a.sent()).toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype.estimateContractCallGas = function (args, _client) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var connection, abi, contract, funcs, gasPrice, gasLimit, value, gas;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _e.sent();
                        abi = parsing_1.constructAbi(args.method);
                        contract = connection.getContract(args.address, abi);
                        funcs = Object.keys(contract.interface.functions);
                        gasPrice = (_a = args.txOverrides) === null || _a === void 0 ? void 0 : _a.gasPrice;
                        gasLimit = (_b = args.txOverrides) === null || _b === void 0 ? void 0 : _b.gasLimit;
                        value = (_c = args.txOverrides) === null || _c === void 0 ? void 0 : _c.value;
                        return [4 /*yield*/, (_d = contract.estimateGas)[funcs[0]].apply(_d, __spread(parsing_1.parseArgs(args.args), [{
                                    gasPrice: gasPrice ? ethers_1.ethers.BigNumber.from(gasPrice) : undefined,
                                    gasLimit: gasLimit ? ethers_1.ethers.BigNumber.from(gasLimit) : undefined,
                                    value: value ? ethers_1.ethers.BigNumber.from(value) : undefined,
                                }]))];
                    case 2:
                        gas = _e.sent();
                        return [2 /*return*/, gas.toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype.checkAddress = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var address, result;
            return __generator(this, function (_a) {
                address = args.address;
                try {
                    // If the address is all upper-case, convert to lower case
                    if (address.indexOf("0X") > -1) {
                        address = address.toLowerCase();
                    }
                    result = ethers_1.ethers.utils.getAddress(address);
                    if (!result) {
                        return [2 /*return*/, false];
                    }
                    return [2 /*return*/, true];
                }
                catch (error) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    EthereumPlugin.prototype.toWei = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var weiAmount;
            return __generator(this, function (_a) {
                weiAmount = ethers_1.ethers.utils.parseEther(args.eth);
                return [2 /*return*/, weiAmount.toString()];
            });
        });
    };
    EthereumPlugin.prototype.toEth = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var etherAmount;
            return __generator(this, function (_a) {
                etherAmount = ethers_1.ethers.utils.formatEther(args.wei);
                return [2 /*return*/, etherAmount.toString()];
            });
        });
    };
    EthereumPlugin.prototype.waitForEvent = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, abi, contract, events, filter;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _b.sent();
                        abi = parsing_1.constructAbi(args.event);
                        contract = connection.getContract(args.address, abi);
                        events = Object.keys(contract.interface.events);
                        filter = (_a = contract.filters)[events[0]].apply(_a, __spread(parsing_1.parseArgs(args.args)));
                        return [2 /*return*/, Promise.race([
                                new Promise(function (resolve) {
                                    contract.once(filter, function (data, address, log) {
                                        resolve({
                                            data: data,
                                            address: address,
                                            log: Mapping.toLog(log),
                                        });
                                    });
                                }),
                                new Promise(function (_, reject) {
                                    setTimeout(function () {
                                        reject("Waiting for event \"" + args.event + "\" on contract \"" + args.address + "\" timed out");
                                    }, args.timeout || 60000);
                                }),
                            ])];
                }
            });
        });
    };
    EthereumPlugin.prototype.awaitTransaction = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, provider, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        provider = connection.getProvider();
                        return [4 /*yield*/, provider.waitForTransaction(args.txHash, args.confirmations, args.timeout)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, Mapping.toTxReceipt(res)];
                }
            });
        });
    };
    EthereumPlugin.prototype.getNetwork = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, provider, network;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        provider = connection.getProvider();
                        return [4 /*yield*/, provider.getNetwork()];
                    case 2:
                        network = _a.sent();
                        return [2 /*return*/, {
                                name: network.name,
                                chainId: network.chainId.toString(),
                                ensAddress: network.ensAddress,
                            }];
                }
            });
        });
    };
    EthereumPlugin.prototype.requestAccounts = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        provider = connection.getProvider();
                        return [2 /*return*/, provider.send("eth_requestAccounts", [])];
                }
            });
        });
    };
    EthereumPlugin.prototype.callContractMethod = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._callContractMethod(args)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, Mapping.toTxResponse(res)];
                }
            });
        });
    };
    EthereumPlugin.prototype.callContractMethodAndWait = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var response, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._callContractMethod(args)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.wait()];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, Mapping.toTxReceipt(res)];
                }
            });
        });
    };
    EthereumPlugin.prototype.sendTransaction = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, signer, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        signer = connection.getSigner();
                        return [4 /*yield*/, signer.sendTransaction(Mapping.fromTxRequest(args.tx))];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, Mapping.toTxResponse(res)];
                }
            });
        });
    };
    EthereumPlugin.prototype.sendTransactionAndWait = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, signer, response, receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        signer = connection.getSigner();
                        return [4 /*yield*/, signer.sendTransaction(Mapping.fromTxRequest(args.tx))];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.wait()];
                    case 3:
                        receipt = _a.sent();
                        return [2 /*return*/, Mapping.toTxReceipt(receipt)];
                }
            });
        });
    };
    EthereumPlugin.prototype.deployContract = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, signer, factory, contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        signer = connection.getSigner();
                        factory = new ethers_1.ethers.ContractFactory(args.abi, args.bytecode, signer);
                        return [4 /*yield*/, factory.deploy.apply(factory, __spread(parsing_1.parseArgs(args.args)))];
                    case 2:
                        contract = _a.sent();
                        return [4 /*yield*/, contract.deployTransaction.wait()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, contract.address];
                }
            });
        });
    };
    EthereumPlugin.prototype.signMessage = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getSigner().signMessage(args.message)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EthereumPlugin.prototype.signMessageBytes = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.getSigner().signMessage(args.bytes)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EthereumPlugin.prototype.signTypedData = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, provider, signerAddress, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        provider = connection.getProvider();
                        return [4 /*yield*/, connection.getSigner().getAddress()];
                    case 2:
                        signerAddress = _a.sent();
                        return [4 /*yield*/, provider.send('eth_signTypedData', [signerAddress, JSON.parse(args.payload)])];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype.sendRPC = function (args, _client) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, provider, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _a.sent();
                        provider = connection.getProvider();
                        return [4 /*yield*/, provider.send(args.method, args.params)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.toString()];
                }
            });
        });
    };
    EthereumPlugin.prototype._callContractMethod = function (args) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var connection, abi, contract, funcs, gasPrice, gasLimit, value;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this._getConnection(args.connection)];
                    case 1:
                        connection = _d.sent();
                        abi = parsing_1.constructAbi(args.method);
                        contract = connection.getContract(args.address, abi);
                        funcs = Object.keys(contract.interface.functions);
                        gasPrice = (_a = args.txOverrides) === null || _a === void 0 ? void 0 : _a.gasPrice;
                        gasLimit = (_b = args.txOverrides) === null || _b === void 0 ? void 0 : _b.gasLimit;
                        value = (_c = args.txOverrides) === null || _c === void 0 ? void 0 : _c.value;
                        return [4 /*yield*/, contract[funcs[0]].apply(contract, __spread(parsing_1.parseArgs(args.args), [{
                                    gasPrice: gasPrice ? ethers_1.ethers.BigNumber.from(gasPrice) : undefined,
                                    gasLimit: gasLimit ? ethers_1.ethers.BigNumber.from(gasLimit) : undefined,
                                    value: value ? ethers_1.ethers.BigNumber.from(value) : undefined,
                                }]))];
                    case 2: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    EthereumPlugin.prototype._getConnection = function (connection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._connections.getConnection(connection || this.env.connection)];
            });
        });
    };
    return EthereumPlugin;
}(wrap_1.Module));
exports.EthereumPlugin = EthereumPlugin;
var ethereumPlugin = function (config) {
    return {
        factory: function () { return new EthereumPlugin(config); },
        manifest: wrap_1.manifest,
    };
};
exports.ethereumPlugin = ethereumPlugin;
exports.plugin = exports.ethereumPlugin;
//# sourceMappingURL=index.js.map