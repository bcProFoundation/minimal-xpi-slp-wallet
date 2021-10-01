export = UTXOs;
declare class UTXOs {
    constructor(config: any);
    bchjs: any;
    utxoStore: any[];
    temp: any[];
    initUtxoStore(addr: any): Promise<any[]>;
    getSpendableTokenUtxos(): any;
}
