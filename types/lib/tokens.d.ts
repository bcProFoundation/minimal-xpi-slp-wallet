export = Tokens;
declare class Tokens {
    constructor(config: any);
    bchjs: any;
    sendBch: SendBCH;
    utxos: Utxos;
    listTokensFromAddress(addr: any): Promise<any[]>;
    listTokensFromUtxos(utxos: any): any[];
    sendTokens(output: any, walletInfo: any, bchUtxos: any, tokenUtxos: any, satsPerByte?: number): Promise<any>;
    createTransaction(output: any, walletInfo: any, bchUtxos: any, tokenUtxos: any, satsPerByte?: number): Promise<{
        hex: any;
        txid: any;
    }>;
    createBurnTransaction(qty: any, tokenId: any, walletInfo: any, bchUtxos: any, tokenUtxos: any, satsPerByte?: number): Promise<{
        hex: any;
        txid: any;
    }>;
    burnTokens(qty: any, tokenId: any, walletInfo: any, bchUtxos: any, tokenUtxos: any, satsPerByte?: number): Promise<any>;
    burnAll(tokenId: any, walletInfo: any, bchUtxos: any, tokenUtxos: any): Promise<any>;
}
import SendBCH = require("./send-bch");
import Utxos = require("./utxos");
