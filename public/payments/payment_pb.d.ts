// package: eftypay.payments
// file: public/payments/payment.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as public_payments_mangopay_checkout_pb from "../../public/payments/mangopay/checkout_pb";

export class PaymentDetails extends jspb.Message { 

    hasMangopaydetails(): boolean;
    clearMangopaydetails(): void;
    getMangopaydetails(): public_payments_mangopay_checkout_pb.MangopayDetails | undefined;
    setMangopaydetails(value?: public_payments_mangopay_checkout_pb.MangopayDetails): PaymentDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PaymentDetails.AsObject;
    static toObject(includeInstance: boolean, msg: PaymentDetails): PaymentDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PaymentDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PaymentDetails;
    static deserializeBinaryFromReader(message: PaymentDetails, reader: jspb.BinaryReader): PaymentDetails;
}

export namespace PaymentDetails {
    export type AsObject = {
        mangopaydetails?: public_payments_mangopay_checkout_pb.MangopayDetails.AsObject,
    }
}

export class CheckoutDetails extends jspb.Message { 
    getCheckouturl(): string;
    setCheckouturl(value: string): CheckoutDetails;

    hasMangopaydetails(): boolean;
    clearMangopaydetails(): void;
    getMangopaydetails(): public_payments_mangopay_checkout_pb.MangopayCheckoutDetails | undefined;
    setMangopaydetails(value?: public_payments_mangopay_checkout_pb.MangopayCheckoutDetails): CheckoutDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CheckoutDetails.AsObject;
    static toObject(includeInstance: boolean, msg: CheckoutDetails): CheckoutDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CheckoutDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CheckoutDetails;
    static deserializeBinaryFromReader(message: CheckoutDetails, reader: jspb.BinaryReader): CheckoutDetails;
}

export namespace CheckoutDetails {
    export type AsObject = {
        checkouturl: string,
        mangopaydetails?: public_payments_mangopay_checkout_pb.MangopayCheckoutDetails.AsObject,
    }
}
