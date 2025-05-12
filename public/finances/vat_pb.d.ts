// package: eftypay.finances
// file: public/finances/vat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_finance_pb from "../../common/finance_pb";

export class CalculateVatRequest extends jspb.Message { 
    getItempricewithoutvat(): number;
    setItempricewithoutvat(value: number): CalculateVatRequest;
    getSupplierchargesvat(): boolean;
    setSupplierchargesvat(value: boolean): CalculateVatRequest;
    getSuppliercountry(): common_finance_pb.CountryCode;
    setSuppliercountry(value: common_finance_pb.CountryCode): CalculateVatRequest;
    getSupplierrepresentscompany(): boolean;
    setSupplierrepresentscompany(value: boolean): CalculateVatRequest;
    getBuyercountry(): common_finance_pb.CountryCode;
    setBuyercountry(value: common_finance_pb.CountryCode): CalculateVatRequest;
    getBuyerrepresentscompany(): boolean;
    setBuyerrepresentscompany(value: boolean): CalculateVatRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateVatRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateVatRequest): CalculateVatRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateVatRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateVatRequest;
    static deserializeBinaryFromReader(message: CalculateVatRequest, reader: jspb.BinaryReader): CalculateVatRequest;
}

export namespace CalculateVatRequest {
    export type AsObject = {
        itempricewithoutvat: number,
        supplierchargesvat: boolean,
        suppliercountry: common_finance_pb.CountryCode,
        supplierrepresentscompany: boolean,
        buyercountry: common_finance_pb.CountryCode,
        buyerrepresentscompany: boolean,
    }
}

export class CalculateVatResponse extends jspb.Message { 
    getChargevat(): boolean;
    setChargevat(value: boolean): CalculateVatResponse;
    getVatoutofscope(): boolean;
    setVatoutofscope(value: boolean): CalculateVatResponse;
    getVatreversecharge(): boolean;
    setVatreversecharge(value: boolean): CalculateVatResponse;
    getVatonestopshop(): boolean;
    setVatonestopshop(value: boolean): CalculateVatResponse;
    getVatpercentage(): number;
    setVatpercentage(value: number): CalculateVatResponse;
    getVatamount(): number;
    setVatamount(value: number): CalculateVatResponse;
    getAmountincludingvat(): number;
    setAmountincludingvat(value: number): CalculateVatResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateVatResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateVatResponse): CalculateVatResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateVatResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateVatResponse;
    static deserializeBinaryFromReader(message: CalculateVatResponse, reader: jspb.BinaryReader): CalculateVatResponse;
}

export namespace CalculateVatResponse {
    export type AsObject = {
        chargevat: boolean,
        vatoutofscope: boolean,
        vatreversecharge: boolean,
        vatonestopshop: boolean,
        vatpercentage: number,
        vatamount: number,
        amountincludingvat: number,
    }
}
