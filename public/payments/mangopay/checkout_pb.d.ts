// package: eftypay.payments.mangopay
// file: public/payments/mangopay/checkout.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MangopayDetails extends jspb.Message { 
    getOnboardassellerwithmangopay(): boolean;
    setOnboardassellerwithmangopay(value: boolean): MangopayDetails;
    getUsercategory(): UserCategory;
    setUsercategory(value: UserCategory): MangopayDetails;
    getUserid(): string;
    setUserid(value: string): MangopayDetails;
    getKyclevel(): KycLevel;
    setKyclevel(value: KycLevel): MangopayDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MangopayDetails.AsObject;
    static toObject(includeInstance: boolean, msg: MangopayDetails): MangopayDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MangopayDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MangopayDetails;
    static deserializeBinaryFromReader(message: MangopayDetails, reader: jspb.BinaryReader): MangopayDetails;
}

export namespace MangopayDetails {
    export type AsObject = {
        onboardassellerwithmangopay: boolean,
        usercategory: UserCategory,
        userid: string,
        kyclevel: KycLevel,
    }
}

export class MangopayCheckoutDetails extends jspb.Message { 
    getMangopaypayinid(): string;
    setMangopaypayinid(value: string): MangopayCheckoutDetails;
    getPaymentmethod(): PaymentMethod;
    setPaymentmethod(value: PaymentMethod): MangopayCheckoutDetails;
    getCheckoutstatus(): CheckoutStatus;
    setCheckoutstatus(value: CheckoutStatus): MangopayCheckoutDetails;

    getPayindetailsMap(): jspb.Map<string, string>;
    clearPayindetailsMap(): void;
    getHaspayinamountdiscrepancy(): boolean;
    setHaspayinamountdiscrepancy(value: boolean): MangopayCheckoutDetails;
    getAmountreceivedbymangopay(): number;
    setAmountreceivedbymangopay(value: number): MangopayCheckoutDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MangopayCheckoutDetails.AsObject;
    static toObject(includeInstance: boolean, msg: MangopayCheckoutDetails): MangopayCheckoutDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MangopayCheckoutDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MangopayCheckoutDetails;
    static deserializeBinaryFromReader(message: MangopayCheckoutDetails, reader: jspb.BinaryReader): MangopayCheckoutDetails;
}

export namespace MangopayCheckoutDetails {
    export type AsObject = {
        mangopaypayinid: string,
        paymentmethod: PaymentMethod,
        checkoutstatus: CheckoutStatus,

        payindetailsMap: Array<[string, string]>,
        haspayinamountdiscrepancy: boolean,
        amountreceivedbymangopay: number,
    }
}

export enum UserCategory {
    USER_TYPE_NONE = 0,
    PAYER = 1,
    OWNER = 2,
}

export enum KycLevel {
    KYC_LEVEL_NONE = 0,
    LIGHT = 1,
    REGULAR = 2,
}

export enum CheckoutStatus {
    CHECKOUT_STATUS_NONE = 0,
    INITIATED = 1,
    BUYER_DETAILS_PROVIDED = 2,
    BUYER_CREATED_WITH_MANGOPAY = 3,
    PAYMENT_METHOD_SELECTED = 4,
    PAYMENT_SUCCEEDED = 5,
    PAYMENT_FAILED = 6,
    COMPLETE = 7,
}

export enum PaymentMethod {
    PAYMENT_METHOD_NONE = 0,
    BANK_WIRE = 1,
    CARD = 2,
    IDEAL = 3,
    PAY_PAL = 4,
}

export enum CardType {
    CARD_TYPE_NONE = 0,
    CB_VISA_MASTERCARD = 1,
    AMEX = 2,
    MAESTRO = 3,
    BCMC = 4,
}
