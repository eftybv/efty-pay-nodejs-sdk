// package: eftypay.common
// file: common/finance.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class VatSettings extends jspb.Message { 
    getVatnumber(): string;
    setVatnumber(value: string): VatSettings;
    getHasvat(): boolean;
    setHasvat(value: boolean): VatSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VatSettings.AsObject;
    static toObject(includeInstance: boolean, msg: VatSettings): VatSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VatSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VatSettings;
    static deserializeBinaryFromReader(message: VatSettings, reader: jspb.BinaryReader): VatSettings;
}

export namespace VatSettings {
    export type AsObject = {
        vatnumber: string,
        hasvat: boolean,
    }
}

export class Address extends jspb.Message { 
    getAddressline1(): string;
    setAddressline1(value: string): Address;
    getAddressline2(): string;
    setAddressline2(value: string): Address;
    getCity(): string;
    setCity(value: string): Address;
    getStateorcounty(): string;
    setStateorcounty(value: string): Address;
    getPostalcode(): string;
    setPostalcode(value: string): Address;
    getCountry(): CountryCode;
    setCountry(value: CountryCode): Address;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
    export type AsObject = {
        addressline1: string,
        addressline2: string,
        city: string,
        stateorcounty: string,
        postalcode: string,
        country: CountryCode,
    }
}

export enum StripeConnectedAccountStatus {
    ACCOUNT_STATUS_NONE = 0,
    ONBOARDING_COMPLETED = 1,
    ONBOARDING_IN_PROGRESS = 2,
}

export enum Currency {
    CURRENCY_NONE = 0,
    USD = 1,
    EUR = 2,
    GBP = 3,
    AUD = 4,
    CAD = 5,
}

export enum CountryCode {
    COUNTRY_NONE = 0,
    AF = 1,
    AX = 2,
    AL = 3,
    DZ = 4,
    AS = 5,
    AD = 6,
    AO = 7,
    AI = 8,
    AQ = 9,
    AG = 10,
    AR = 11,
    AM = 12,
    AW = 13,
    AU = 14,
    AT = 15,
    AZ = 16,
    BS = 17,
    BH = 18,
    BD = 19,
    BB = 20,
    BY = 21,
    BE = 22,
    BZ = 23,
    BJ = 24,
    BM = 25,
    BT = 26,
    BO = 27,
    BQ = 28,
    BA = 29,
    BW = 30,
    BV = 31,
    BR = 32,
    IO = 33,
    BN = 34,
    BG = 35,
    BF = 36,
    BI = 37,
    KH = 38,
    CM = 39,
    CA = 40,
    CV = 41,
    KY = 42,
    CF = 43,
    TD = 44,
    CL = 45,
    CN = 46,
    CX = 47,
    CC = 48,
    CO = 49,
    KM = 50,
    CG = 51,
    CD = 52,
    CK = 53,
    CR = 54,
    CI = 55,
    HR = 56,
    CU = 57,
    CW = 58,
    CY = 59,
    CZ = 60,
    DK = 61,
    DJ = 62,
    DM = 63,
    DO = 64,
    EC = 65,
    EG = 66,
    SV = 67,
    GQ = 68,
    ER = 69,
    EE = 70,
    ET = 71,
    FK = 72,
    FO = 73,
    FJ = 74,
    FI = 75,
    FR = 76,
    GF = 77,
    PF = 78,
    TF = 79,
    GA = 80,
    GM = 81,
    GE = 82,
    DE = 83,
    GH = 84,
    GI = 85,
    GR = 86,
    GL = 87,
    GD = 88,
    GP = 89,
    GU = 90,
    GT = 91,
    GG = 92,
    GN = 93,
    GW = 94,
    GY = 95,
    HT = 96,
    HM = 97,
    VA = 98,
    HN = 99,
    HK = 100,
    HU = 101,
    IS = 102,
    IN = 103,
    ID = 104,
    IR = 105,
    IQ = 106,
    IE = 107,
    IM = 108,
    IL = 109,
    IT = 110,
    JM = 111,
    JP = 112,
    JE = 113,
    JO = 114,
    KZ = 115,
    KE = 116,
    KI = 117,
    KP = 118,
    KR = 119,
    KW = 120,
    KG = 121,
    LA = 122,
    LV = 123,
    LB = 124,
    LS = 125,
    LR = 126,
    LY = 127,
    LI = 128,
    LT = 129,
    LU = 130,
    MO = 131,
    MK = 132,
    MG = 133,
    MW = 134,
    MY = 135,
    MV = 136,
    ML = 137,
    MT = 138,
    MH = 139,
    MQ = 140,
    MR = 141,
    MU = 142,
    YT = 143,
    MX = 144,
    FM = 145,
    MD = 146,
    MC = 147,
    MN = 148,
    ME = 149,
    MS = 150,
    MA = 151,
    MZ = 152,
    MM = 153,
    NA = 154,
    NR = 155,
    NP = 156,
    NL = 157,
    NC = 158,
    NZ = 159,
    NI = 160,
    NE = 161,
    NG = 162,
    NU = 163,
    NF = 164,
    MP = 165,
    NO = 166,
    OM = 167,
    PK = 168,
    PW = 169,
    PS = 170,
    PA = 171,
    PG = 172,
    PY = 173,
    PE = 174,
    PH = 175,
    PN = 176,
    PL = 177,
    PT = 178,
    PR = 179,
    QA = 180,
    RE = 181,
    RO = 182,
    RU = 183,
    RW = 184,
    BL = 185,
    SH = 186,
    KN = 187,
    LC = 188,
    MF = 189,
    PM = 190,
    VC = 191,
    WS = 192,
    SM = 193,
    ST = 194,
    SA = 195,
    SN = 196,
    RS = 197,
    SC = 198,
    SL = 199,
    SG = 200,
    SX = 201,
    SK = 202,
    SI = 203,
    SB = 204,
    SO = 205,
    ZA = 206,
    GS = 207,
    SS = 208,
    ES = 209,
    LK = 210,
    SD = 211,
    SR = 212,
    SJ = 213,
    SZ = 214,
    SE = 215,
    CH = 216,
    SY = 217,
    TW = 218,
    TJ = 219,
    TZ = 220,
    TH = 221,
    TL = 222,
    TG = 223,
    TK = 224,
    TO = 225,
    TT = 226,
    TN = 227,
    TR = 228,
    TM = 229,
    TC = 230,
    TV = 231,
    UG = 232,
    UA = 233,
    AE = 234,
    GB = 235,
    US = 236,
    UM = 237,
    UY = 238,
    UZ = 239,
    VU = 240,
    VE = 241,
    VN = 242,
    VG = 243,
    VI = 244,
    WF = 245,
    EH = 246,
    YE = 247,
    ZM = 248,
    ZW = 249,
}
