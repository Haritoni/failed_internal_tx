"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var forta_agent_1 = require("forta-agent");
var agent_1 = __importDefault(require("./agent"));
describe("internal failure agent", function () {
    var handleTransaction;
    var createTxEventWithTraces = function () { return (0, forta_agent_1.createTransactionEvent)({
        transaction: {
            hash: "0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199",
            to: null,
            from: "123",
            nonce: 1,
            gas: "",
            gasPrice: "",
            value: "",
            data: "",
            r: "",
            s: "",
            v: ""
        },
        type: undefined,
        network: undefined,
        receipt: {
            status: true,
            root: "",
            gasUsed: "",
            cumulativeGasUsed: "",
            logsBloom: "",
            logs: {},
            contractAddress: "0x095f385be1e631ffdd7c1ac54dfcef6ed868eb36",
            blockHash: "",
            blockNumber: 1,
            transactionHash: "",
            transactionIndex: 1
        },
        traces: [
            __assign(__assign({}, {}), { error: "Reverted" }),
            __assign(__assign({}, {}), { error: "Reverted" })
        ],
        block: {}
    }); };
    beforeAll(function () {
        handleTransaction = agent_1.default.handleTransaction;
    });
    describe("token event", function () {
        it("trace detected", function () { return __awaiter(void 0, void 0, void 0, function () {
            var txEvent, findings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txEvent = createTxEventWithTraces();
                        return [4 /*yield*/, handleTransaction(txEvent)];
                    case 1:
                        findings = _a.sent();
                        expect(findings.length).toEqual(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
