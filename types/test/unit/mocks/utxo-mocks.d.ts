export namespace simpleUtxos {
    const success: boolean;
    const utxos: {
        height: number;
        tx_hash: string;
        tx_pos: number;
        value: number;
    }[];
}
export const mixedUtxos: {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
}[];
export const hydratedUtxos: ({
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    isValid: boolean;
    utxoType?: undefined;
    transactionType?: undefined;
    tokenId?: undefined;
    tokenTicker?: undefined;
    tokenName?: undefined;
    tokenDocumentUrl?: undefined;
    tokenDocumentHash?: undefined;
    decimals?: undefined;
    tokenType?: undefined;
    tokenQty?: undefined;
} | {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    utxoType: string;
    transactionType: string;
    tokenId: string;
    tokenTicker: string;
    tokenName: string;
    tokenDocumentUrl: string;
    tokenDocumentHash: string;
    decimals: number;
    tokenType: number;
    tokenQty: string;
    isValid: boolean;
})[];
export namespace tokenUtxos01 {
    const address: string;
    const bchUtxos: {
        height: number;
        tx_hash: string;
        tx_pos: number;
        value: number;
        satoshis: number;
        txid: string;
        vout: number;
        isValid: boolean;
    }[];
    const nullUtxos: any[];
    namespace slpUtxos {
        namespace type1 {
            const mintBatons: any[];
            const tokens: ({
                height: number;
                tx_hash: string;
                tx_pos: number;
                value: number;
                txid: string;
                vout: number;
                utxoType: string;
                transactionType: string;
                tokenId: string;
                tokenTicker: string;
                tokenName: string;
                tokenDocumentUrl: string;
                tokenDocumentHash: string;
                decimals: number;
                tokenType: number;
                isValid: boolean;
                tokenQty: string;
                satoshis?: undefined;
            } | {
                height: number;
                tx_hash: string;
                tx_pos: number;
                value: number;
                satoshis: number;
                txid: string;
                vout: number;
                utxoType: string;
                transactionType: string;
                tokenId: string;
                tokenTicker: string;
                tokenName: string;
                tokenDocumentUrl: string;
                tokenDocumentHash: string;
                decimals: number;
                tokenType: number;
                tokenQty: string;
                isValid: boolean;
            })[];
        }
        namespace nft {
            export const groupMintBatons: any[];
            export const groupTokens: any[];
            const tokens_1: any[];
            export { tokens_1 as tokens };
        }
    }
}
export const tokenUtxos02: {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    utxoType: string;
    transactionType: string;
    tokenId: string;
    tokenTicker: string;
    tokenName: string;
    tokenDocumentUrl: string;
    tokenDocumentHash: string;
    decimals: number;
    tokenType: number;
    tokenQty: number;
    isValid: boolean;
}[];
export const mockUtxoStore: ({
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    utxoType: string;
    transactionType: string;
    tokenId: string;
    tokenTicker: string;
    tokenName: string;
    tokenDocumentUrl: string;
    tokenDocumentHash: string;
    decimals: number;
    tokenType: number;
    tokenQty: number;
    isValid: boolean;
} | {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    isValid: boolean;
    utxoType?: undefined;
    transactionType?: undefined;
    tokenId?: undefined;
    tokenTicker?: undefined;
    tokenName?: undefined;
    tokenDocumentUrl?: undefined;
    tokenDocumentHash?: undefined;
    decimals?: undefined;
    tokenType?: undefined;
    tokenQty?: undefined;
})[];
export const mockBchUtxos: {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    isValid: boolean;
}[];
export const mockTokenUtxos: {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    utxoType: string;
    transactionType: string;
    tokenId: string;
    tokenTicker: string;
    tokenName: string;
    tokenDocumentUrl: string;
    tokenDocumentHash: string;
    decimals: number;
    tokenType: number;
    tokenQty: number;
    isValid: boolean;
}[];
export namespace mockNFTGroupUtxos {
    const address_1: string;
    export { address_1 as address };
    const bchUtxos_1: {
        height: number;
        tx_hash: string;
        tx_pos: number;
        value: number;
        satoshis: number;
        txid: string;
        vout: number;
        isValid: boolean;
    }[];
    export { bchUtxos_1 as bchUtxos };
    const nullUtxos_1: any[];
    export { nullUtxos_1 as nullUtxos };
    export namespace slpUtxos_1 {
        export namespace type1_1 {
            const mintBatons_1: any[];
            export { mintBatons_1 as mintBatons };
            const tokens_2: {
                height: number;
                tx_hash: string;
                tx_pos: number;
                value: number;
                txid: string;
                vout: number;
                utxoType: string;
                transactionType: string;
                tokenId: string;
                tokenTicker: string;
                tokenName: string;
                tokenDocumentUrl: string;
                tokenDocumentHash: string;
                decimals: number;
                tokenType: number;
                isValid: boolean;
                tokenQty: string;
            }[];
            export { tokens_2 as tokens };
        }
        export { type1_1 as type1 };
        export namespace nft_1 {
            const groupMintBatons_1: any[];
            export { groupMintBatons_1 as groupMintBatons };
            const groupTokens_1: {
                height: number;
                tx_hash: string;
                tx_pos: number;
                value: number;
                satoshis: number;
                txid: string;
                vout: number;
                utxoType: string;
                transactionType: string;
                tokenId: string;
                tokenTicker: string;
                tokenName: string;
                tokenDocumentUrl: string;
                tokenDocumentHash: string;
                decimals: number;
                tokenType: number;
                tokenQty: number;
                isValid: boolean;
            }[];
            export { groupTokens_1 as groupTokens };
            const tokens_3: any[];
            export { tokens_3 as tokens };
        }
        export { nft_1 as nft };
    }
    export { slpUtxos_1 as slpUtxos };
}
export namespace mockNFTChildUtxos {
    const address_2: string;
    export { address_2 as address };
    const bchUtxos_2: {
        height: number;
        tx_hash: string;
        tx_pos: number;
        value: number;
        satoshis: number;
        txid: string;
        vout: number;
        isValid: boolean;
    }[];
    export { bchUtxos_2 as bchUtxos };
    const nullUtxos_2: any[];
    export { nullUtxos_2 as nullUtxos };
    export namespace slpUtxos_2 {
        export namespace type1_2 {
            const mintBatons_2: any[];
            export { mintBatons_2 as mintBatons };
            const tokens_4: any[];
            export { tokens_4 as tokens };
        }
        export { type1_2 as type1 };
        export namespace nft_2 {
            const groupMintBatons_2: any[];
            export { groupMintBatons_2 as groupMintBatons };
            const groupTokens_2: any[];
            export { groupTokens_2 as groupTokens };
            const tokens_5: {
                height: number;
                tx_hash: string;
                tx_pos: number;
                value: number;
                satoshis: number;
                txid: string;
                vout: number;
                utxoType: string;
                transactionType: string;
                tokenId: string;
                tokenTicker: string;
                tokenName: string;
                tokenDocumentUrl: string;
                tokenDocumentHash: string;
                decimals: number;
                tokenType: number;
                tokenQty: number;
                isValid: boolean;
            }[];
            export { tokens_5 as tokens };
        }
        export { nft_2 as nft };
    }
    export { slpUtxos_2 as slpUtxos };
}
export namespace dustAttackUtxo {
    const height: number;
    const tx_hash: string;
    const tx_pos: number;
    const value: number;
    const satoshis: number;
    const txid: string;
    const vout: number;
    const isValid: any;
}
export namespace mockSlpApi {
    const details: {
        height: number;
        tx_hash: string;
        tx_pos: number;
        value: number;
        satoshis: number;
        txid: string;
        vout: number;
        isValid: boolean;
    }[];
}
export namespace mockSlpApiResult {
    const txid_1: string;
    export { txid_1 as txid };
    const isValid_1: boolean;
    export { isValid_1 as isValid };
    export const msg: string;
}
export const cornerCase1BchUtxos: {
    height: number;
    tx_hash: string;
    tx_pos: number;
    value: number;
    satoshis: number;
    txid: string;
    vout: number;
    isValid: boolean;
}[];
export namespace cornerCase1TokenUtxos {
    const address_3: string;
    export { address_3 as address };
    const bchUtxos_3: {
        height: number;
        tx_hash: string;
        tx_pos: number;
        value: number;
        satoshis: number;
        txid: string;
        vout: number;
        isValid: boolean;
    }[];
    export { bchUtxos_3 as bchUtxos };
    const nullUtxos_3: any[];
    export { nullUtxos_3 as nullUtxos };
    export namespace slpUtxos_3 {
        export namespace type1_3 {
            const mintBatons_3: any[];
            export { mintBatons_3 as mintBatons };
            const tokens_6: {
                height: number;
                tx_hash: string;
                tx_pos: number;
                value: number;
                satoshis: number;
                txid: string;
                vout: number;
                utxoType: string;
                transactionType: string;
                tokenId: string;
                tokenTicker: string;
                tokenName: string;
                tokenDocumentUrl: string;
                tokenDocumentHash: string;
                decimals: number;
                tokenType: number;
                tokenQty: number;
                isValid: boolean;
            }[];
            export { tokens_6 as tokens };
        }
        export { type1_3 as type1 };
        export namespace nft_3 {
            const groupMintBatons_3: any[];
            export { groupMintBatons_3 as groupMintBatons };
            const groupTokens_3: any[];
            export { groupTokens_3 as groupTokens };
            const tokens_7: any[];
            export { tokens_7 as tokens };
        }
        export { nft_3 as nft };
    }
    export { slpUtxos_3 as slpUtxos };
}
