// package: eftypay.transactions
// file: public/transactions/transaction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_pb from "../../common/common_pb";
import * as common_encrypt_pb from "../../common/encrypt_pb";
import * as common_finance_pb from "../../common/finance_pb";
import * as public_integrators_integrator_pb from "../../public/integrators/integrator_pb";
import * as public_transactions_activity_activity_pb from "../../public/transactions/activity/activity_pb";
import * as public_domains_domain_pb from "../../public/domains/domain_pb";
import * as public_messages_message_pb from "../../public/messages/message_pb";
import * as public_payments_payment_pb from "../../public/payments/payment_pb";
import * as public_users_user_pb from "../../public/users/user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Transaction extends jspb.Message { 
    getId(): string;
    setId(value: string): Transaction;
    getDigitalassetexternalid(): string;
    setDigitalassetexternalid(value: string): Transaction;
    getAssettype(): AssetType;
    setAssettype(value: AssetType): Transaction;

    hasDigitalasset(): boolean;
    clearDigitalasset(): void;
    getDigitalasset(): DigitalAsset | undefined;
    setDigitalasset(value?: DigitalAsset): Transaction;

    hasBuyer(): boolean;
    clearBuyer(): void;
    getBuyer(): public_users_user_pb.User | undefined;
    setBuyer(value?: public_users_user_pb.User): Transaction;

    hasSeller(): boolean;
    clearSeller(): void;
    getSeller(): public_users_user_pb.User | undefined;
    setSeller(value?: public_users_user_pb.User): Transaction;
    getCurrency(): common_finance_pb.Currency;
    setCurrency(value: common_finance_pb.Currency): Transaction;

    hasVatdetails(): boolean;
    clearVatdetails(): void;
    getVatdetails(): VatDetails | undefined;
    setVatdetails(value?: VatDetails): Transaction;
    getAssetamountexcvat(): number;
    setAssetamountexcvat(value: number): Transaction;
    getExpressfeeamountexcvat(): number;
    setExpressfeeamountexcvat(value: number): Transaction;
    getCommissionamountexcvat(): number;
    setCommissionamountexcvat(value: number): Transaction;
    getAssetamountincvat(): number;
    setAssetamountincvat(value: number): Transaction;
    getExpressfeeamountincvat(): number;
    setExpressfeeamountincvat(value: number): Transaction;
    getCommissionamountincvat(): number;
    setCommissionamountincvat(value: number): Transaction;
    getTotalamounttobepaidbybuyer(): number;
    setTotalamounttobepaidbybuyer(value: number): Transaction;
    getTotalamountsellerreceives(): number;
    setTotalamountsellerreceives(value: number): Transaction;

    hasCommissionsettings(): boolean;
    clearCommissionsettings(): void;
    getCommissionsettings(): public_integrators_integrator_pb.CommissionSettings | undefined;
    setCommissionsettings(value?: public_integrators_integrator_pb.CommissionSettings): Transaction;

    getStatusMap(): jspb.Map<string, public_transactions_activity_activity_pb.TransactionSubStatus>;
    clearStatusMap(): void;
    clearAudittrailList(): void;
    getAudittrailList(): Array<public_transactions_activity_activity_pb.TransactionActivity>;
    setAudittrailList(value: Array<public_transactions_activity_activity_pb.TransactionActivity>): Transaction;
    addAudittrail(value?: public_transactions_activity_activity_pb.TransactionActivity, index?: number): public_transactions_activity_activity_pb.TransactionActivity;
    clearMessagehistoryList(): void;
    getMessagehistoryList(): Array<public_messages_message_pb.Message>;
    setMessagehistoryList(value: Array<public_messages_message_pb.Message>): Transaction;
    addMessagehistory(value?: public_messages_message_pb.Message, index?: number): public_messages_message_pb.Message;

    hasUtmparameters(): boolean;
    clearUtmparameters(): void;
    getUtmparameters(): UtmParameters | undefined;
    setUtmparameters(value?: UtmParameters): Transaction;

    hasCheckoutdetails(): boolean;
    clearCheckoutdetails(): void;
    getCheckoutdetails(): public_payments_payment_pb.CheckoutDetails | undefined;
    setCheckoutdetails(value?: public_payments_payment_pb.CheckoutDetails): Transaction;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    hasCreatedby(): boolean;
    clearCreatedby(): void;
    getCreatedby(): public_users_user_pb.User | undefined;
    setCreatedby(value?: public_users_user_pb.User): Transaction;

    hasUpdated(): boolean;
    clearUpdated(): void;
    getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    hasUpdatedby(): boolean;
    clearUpdatedby(): void;
    getUpdatedby(): public_users_user_pb.User | undefined;
    setUpdatedby(value?: public_users_user_pb.User): Transaction;

    hasFinalized(): boolean;
    clearFinalized(): void;
    getFinalized(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFinalized(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;
    getInitiatedby(): public_transactions_activity_activity_pb.TransactionParty;
    setInitiatedby(value: public_transactions_activity_activity_pb.TransactionParty): Transaction;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        id: string,
        digitalassetexternalid: string,
        assettype: AssetType,
        digitalasset?: DigitalAsset.AsObject,
        buyer?: public_users_user_pb.User.AsObject,
        seller?: public_users_user_pb.User.AsObject,
        currency: common_finance_pb.Currency,
        vatdetails?: VatDetails.AsObject,
        assetamountexcvat: number,
        expressfeeamountexcvat: number,
        commissionamountexcvat: number,
        assetamountincvat: number,
        expressfeeamountincvat: number,
        commissionamountincvat: number,
        totalamounttobepaidbybuyer: number,
        totalamountsellerreceives: number,
        commissionsettings?: public_integrators_integrator_pb.CommissionSettings.AsObject,

        statusMap: Array<[string, public_transactions_activity_activity_pb.TransactionSubStatus]>,
        audittrailList: Array<public_transactions_activity_activity_pb.TransactionActivity.AsObject>,
        messagehistoryList: Array<public_messages_message_pb.Message.AsObject>,
        utmparameters?: UtmParameters.AsObject,
        checkoutdetails?: public_payments_payment_pb.CheckoutDetails.AsObject,
        created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createdby?: public_users_user_pb.User.AsObject,
        updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedby?: public_users_user_pb.User.AsObject,
        finalized?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        initiatedby: public_transactions_activity_activity_pb.TransactionParty,

        metadataMap: Array<[string, string]>,
    }
}

export class VatDetails extends jspb.Message { 
    getVatpercentageonassetamount(): number;
    setVatpercentageonassetamount(value: number): VatDetails;
    getVatamountonassetamount(): number;
    setVatamountonassetamount(value: number): VatDetails;
    getAssetamountchargevat(): boolean;
    setAssetamountchargevat(value: boolean): VatDetails;
    getAssetamountvatoutofscope(): boolean;
    setAssetamountvatoutofscope(value: boolean): VatDetails;
    getAssetamountvatreversecharge(): boolean;
    setAssetamountvatreversecharge(value: boolean): VatDetails;
    getAssetamountvatonestopshop(): boolean;
    setAssetamountvatonestopshop(value: boolean): VatDetails;
    getVatpercentageonexpressfeeamount(): number;
    setVatpercentageonexpressfeeamount(value: number): VatDetails;
    getVatamountonexpressfeeamount(): number;
    setVatamountonexpressfeeamount(value: number): VatDetails;
    getExpressfeeamountchargevat(): boolean;
    setExpressfeeamountchargevat(value: boolean): VatDetails;
    getExpressfeeamountvatoutofscope(): boolean;
    setExpressfeeamountvatoutofscope(value: boolean): VatDetails;
    getExpressfeeamountvatreversecharge(): boolean;
    setExpressfeeamountvatreversecharge(value: boolean): VatDetails;
    getExpressfeeamountvatonestopshop(): boolean;
    setExpressfeeamountvatonestopshop(value: boolean): VatDetails;
    getVatpercentageoncommissionamount(): number;
    setVatpercentageoncommissionamount(value: number): VatDetails;
    getVatamountoncommissionamount(): number;
    setVatamountoncommissionamount(value: number): VatDetails;
    getCommissionamountchargevat(): boolean;
    setCommissionamountchargevat(value: boolean): VatDetails;
    getCommissionamountvatoutofscope(): boolean;
    setCommissionamountvatoutofscope(value: boolean): VatDetails;
    getCommissionamountvatreversecharge(): boolean;
    setCommissionamountvatreversecharge(value: boolean): VatDetails;
    getCommissionamountvatonestopshop(): boolean;
    setCommissionamountvatonestopshop(value: boolean): VatDetails;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VatDetails.AsObject;
    static toObject(includeInstance: boolean, msg: VatDetails): VatDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VatDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VatDetails;
    static deserializeBinaryFromReader(message: VatDetails, reader: jspb.BinaryReader): VatDetails;
}

export namespace VatDetails {
    export type AsObject = {
        vatpercentageonassetamount: number,
        vatamountonassetamount: number,
        assetamountchargevat: boolean,
        assetamountvatoutofscope: boolean,
        assetamountvatreversecharge: boolean,
        assetamountvatonestopshop: boolean,
        vatpercentageonexpressfeeamount: number,
        vatamountonexpressfeeamount: number,
        expressfeeamountchargevat: boolean,
        expressfeeamountvatoutofscope: boolean,
        expressfeeamountvatreversecharge: boolean,
        expressfeeamountvatonestopshop: boolean,
        vatpercentageoncommissionamount: number,
        vatamountoncommissionamount: number,
        commissionamountchargevat: boolean,
        commissionamountvatoutofscope: boolean,
        commissionamountvatreversecharge: boolean,
        commissionamountvatonestopshop: boolean,
    }
}

export class DigitalAsset extends jspb.Message { 

    hasDomain(): boolean;
    clearDomain(): void;
    getDomain(): public_domains_domain_pb.Domain | undefined;
    setDomain(value?: public_domains_domain_pb.Domain): DigitalAsset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DigitalAsset.AsObject;
    static toObject(includeInstance: boolean, msg: DigitalAsset): DigitalAsset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DigitalAsset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DigitalAsset;
    static deserializeBinaryFromReader(message: DigitalAsset, reader: jspb.BinaryReader): DigitalAsset;
}

export namespace DigitalAsset {
    export type AsObject = {
        domain?: public_domains_domain_pb.Domain.AsObject,
    }
}

export class ListTransactionsRequest extends jspb.Message { 
    getReturnsellerdata(): boolean;
    setReturnsellerdata(value: boolean): ListTransactionsRequest;
    getReturnbuyerdata(): boolean;
    setReturnbuyerdata(value: boolean): ListTransactionsRequest;

    hasListrequest(): boolean;
    clearListrequest(): void;
    getListrequest(): common_common_pb.ListRequest | undefined;
    setListrequest(value?: common_common_pb.ListRequest): ListTransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsRequest): ListTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsRequest;
    static deserializeBinaryFromReader(message: ListTransactionsRequest, reader: jspb.BinaryReader): ListTransactionsRequest;
}

export namespace ListTransactionsRequest {
    export type AsObject = {
        returnsellerdata: boolean,
        returnbuyerdata: boolean,
        listrequest?: common_common_pb.ListRequest.AsObject,
    }
}

export class PushTransactionToNextAvailableStatusRequest extends jspb.Message { 

    hasTransactionid(): boolean;
    clearTransactionid(): void;
    getTransactionid(): common_common_pb.Id | undefined;
    setTransactionid(value?: common_common_pb.Id): PushTransactionToNextAvailableStatusRequest;
    getStatuscontext(): public_transactions_activity_activity_pb.TransactionParty;
    setStatuscontext(value: public_transactions_activity_activity_pb.TransactionParty): PushTransactionToNextAvailableStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushTransactionToNextAvailableStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PushTransactionToNextAvailableStatusRequest): PushTransactionToNextAvailableStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushTransactionToNextAvailableStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushTransactionToNextAvailableStatusRequest;
    static deserializeBinaryFromReader(message: PushTransactionToNextAvailableStatusRequest, reader: jspb.BinaryReader): PushTransactionToNextAvailableStatusRequest;
}

export namespace PushTransactionToNextAvailableStatusRequest {
    export type AsObject = {
        transactionid?: common_common_pb.Id.AsObject,
        statuscontext: public_transactions_activity_activity_pb.TransactionParty,
    }
}

export class UtmParameters extends jspb.Message { 
    getUtmsource(): string;
    setUtmsource(value: string): UtmParameters;
    getUtmmedium(): string;
    setUtmmedium(value: string): UtmParameters;
    getUtmcampaign(): string;
    setUtmcampaign(value: string): UtmParameters;
    getUtmterm(): string;
    setUtmterm(value: string): UtmParameters;
    getUtmcontent(): string;
    setUtmcontent(value: string): UtmParameters;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtmParameters.AsObject;
    static toObject(includeInstance: boolean, msg: UtmParameters): UtmParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtmParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtmParameters;
    static deserializeBinaryFromReader(message: UtmParameters, reader: jspb.BinaryReader): UtmParameters;
}

export namespace UtmParameters {
    export type AsObject = {
        utmsource: string,
        utmmedium: string,
        utmcampaign: string,
        utmterm: string,
        utmcontent: string,
    }
}

export class TransactionMagicLinkPayload extends jspb.Message { 
    getTransactionid(): string;
    setTransactionid(value: string): TransactionMagicLinkPayload;
    getSendtobuyer(): boolean;
    setSendtobuyer(value: boolean): TransactionMagicLinkPayload;
    getSendtoseller(): boolean;
    setSendtoseller(value: boolean): TransactionMagicLinkPayload;
    getIntegratorid(): string;
    setIntegratorid(value: string): TransactionMagicLinkPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMagicLinkPayload.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMagicLinkPayload): TransactionMagicLinkPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMagicLinkPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMagicLinkPayload;
    static deserializeBinaryFromReader(message: TransactionMagicLinkPayload, reader: jspb.BinaryReader): TransactionMagicLinkPayload;
}

export namespace TransactionMagicLinkPayload {
    export type AsObject = {
        transactionid: string,
        sendtobuyer: boolean,
        sendtoseller: boolean,
        integratorid: string,
    }
}

export class TransactionMagicLinkResponse extends jspb.Message { 
    getSellerlink(): string;
    setSellerlink(value: string): TransactionMagicLinkResponse;
    getBuyerlink(): string;
    setBuyerlink(value: string): TransactionMagicLinkResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMagicLinkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMagicLinkResponse): TransactionMagicLinkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMagicLinkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMagicLinkResponse;
    static deserializeBinaryFromReader(message: TransactionMagicLinkResponse, reader: jspb.BinaryReader): TransactionMagicLinkResponse;
}

export namespace TransactionMagicLinkResponse {
    export type AsObject = {
        sellerlink: string,
        buyerlink: string,
    }
}

export class TransactionMagicLinkEncryptedPayload extends jspb.Message { 
    getEncrypteddata(): string;
    setEncrypteddata(value: string): TransactionMagicLinkEncryptedPayload;
    getIv(): string;
    setIv(value: string): TransactionMagicLinkEncryptedPayload;
    getKeyid(): string;
    setKeyid(value: string): TransactionMagicLinkEncryptedPayload;
    getOtp(): string;
    setOtp(value: string): TransactionMagicLinkEncryptedPayload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionMagicLinkEncryptedPayload.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionMagicLinkEncryptedPayload): TransactionMagicLinkEncryptedPayload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionMagicLinkEncryptedPayload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionMagicLinkEncryptedPayload;
    static deserializeBinaryFromReader(message: TransactionMagicLinkEncryptedPayload, reader: jspb.BinaryReader): TransactionMagicLinkEncryptedPayload;
}

export namespace TransactionMagicLinkEncryptedPayload {
    export type AsObject = {
        encrypteddata: string,
        iv: string,
        keyid: string,
        otp: string,
    }
}

export class TransactionRequest extends jspb.Message { 
    getIntegratorid(): string;
    setIntegratorid(value: string): TransactionRequest;

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): TransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionRequest): TransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionRequest;
    static deserializeBinaryFromReader(message: TransactionRequest, reader: jspb.BinaryReader): TransactionRequest;
}

export namespace TransactionRequest {
    export type AsObject = {
        integratorid: string,
        transaction?: Transaction.AsObject,
    }
}

export class UpdateTransactionWithEncryptPublicRequest extends jspb.Message { 

    hasEncryptedlinkdetails(): boolean;
    clearEncryptedlinkdetails(): void;
    getEncryptedlinkdetails(): common_encrypt_pb.EncryptedLinkRequest | undefined;
    setEncryptedlinkdetails(value?: common_encrypt_pb.EncryptedLinkRequest): UpdateTransactionWithEncryptPublicRequest;

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): UpdateTransactionWithEncryptPublicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransactionWithEncryptPublicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransactionWithEncryptPublicRequest): UpdateTransactionWithEncryptPublicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransactionWithEncryptPublicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransactionWithEncryptPublicRequest;
    static deserializeBinaryFromReader(message: UpdateTransactionWithEncryptPublicRequest, reader: jspb.BinaryReader): UpdateTransactionWithEncryptPublicRequest;
}

export namespace UpdateTransactionWithEncryptPublicRequest {
    export type AsObject = {
        encryptedlinkdetails?: common_encrypt_pb.EncryptedLinkRequest.AsObject,
        transaction?: Transaction.AsObject,
    }
}

export class GetNextPossibleStatusAndSubStatusRequest extends jspb.Message { 

    hasTransactionid(): boolean;
    clearTransactionid(): void;
    getTransactionid(): common_common_pb.Id | undefined;
    setTransactionid(value?: common_common_pb.Id): GetNextPossibleStatusAndSubStatusRequest;
    getStatuscontext(): public_transactions_activity_activity_pb.TransactionParty;
    setStatuscontext(value: public_transactions_activity_activity_pb.TransactionParty): GetNextPossibleStatusAndSubStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNextPossibleStatusAndSubStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNextPossibleStatusAndSubStatusRequest): GetNextPossibleStatusAndSubStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNextPossibleStatusAndSubStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNextPossibleStatusAndSubStatusRequest;
    static deserializeBinaryFromReader(message: GetNextPossibleStatusAndSubStatusRequest, reader: jspb.BinaryReader): GetNextPossibleStatusAndSubStatusRequest;
}

export namespace GetNextPossibleStatusAndSubStatusRequest {
    export type AsObject = {
        transactionid?: common_common_pb.Id.AsObject,
        statuscontext: public_transactions_activity_activity_pb.TransactionParty,
    }
}

export class UpdateTransactionMetaDataRequest extends jspb.Message { 

    hasTransactionid(): boolean;
    clearTransactionid(): void;
    getTransactionid(): common_common_pb.Id | undefined;
    setTransactionid(value?: common_common_pb.Id): UpdateTransactionMetaDataRequest;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransactionMetaDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransactionMetaDataRequest): UpdateTransactionMetaDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransactionMetaDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransactionMetaDataRequest;
    static deserializeBinaryFromReader(message: UpdateTransactionMetaDataRequest, reader: jspb.BinaryReader): UpdateTransactionMetaDataRequest;
}

export namespace UpdateTransactionMetaDataRequest {
    export type AsObject = {
        transactionid?: common_common_pb.Id.AsObject,

        metadataMap: Array<[string, string]>,
    }
}

export enum AssetType {
    ASSET_TYPE_NONE = 0,
    DOMAIN_NAME = 1,
}
