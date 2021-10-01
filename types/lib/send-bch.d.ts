export = SendBCH;
declare class SendBCH {
    constructor(config: any);
    restURL: any;
    apiToken: any;
    bchjs: any;
    sendBch(outputs: any, walletInfo: any, utxos: any): Promise<any>;
    createTransaction(outputs: any, walletInfo: any, utxos: any): Promise<{
        hex: any;
        txid: any;
    }>;
    getNecessaryUtxosAndChange(outputs: any, availableUtxos: any, satsPerByte?: number): {
        necessaryUtxos: any[];
        change: number;
    };
    sortUtxosBySize(utxos: any, sortingOrder?: string): any;
    calculateFee(numInputs: any, numOutputs: any, satsPerByte: any): number;
    getKeyPairFromMnemonic(walletInfo: any): Promise<any>;
    sendAllBch(toAddress: any, walletInfo: any, utxos: any): Promise<any>;
    createSendAllTx(toAddress: any, walletInfo: any, utxos: any): Promise<{
        hex: any;
        txid: any;
    }>;
}
