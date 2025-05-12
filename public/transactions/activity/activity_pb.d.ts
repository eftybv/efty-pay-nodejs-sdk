// package: eftypay.transactions.activity
// file: public/transactions/activity/activity.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as public_users_user_pb from "../../../public/users/user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetStatusChangeConfigurationResponse extends jspb.Message { 
    clearStatuschangeconfigurationList(): void;
    getStatuschangeconfigurationList(): Array<StatusChangeConfig>;
    setStatuschangeconfigurationList(value: Array<StatusChangeConfig>): GetStatusChangeConfigurationResponse;
    addStatuschangeconfiguration(value?: StatusChangeConfig, index?: number): StatusChangeConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatusChangeConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatusChangeConfigurationResponse): GetStatusChangeConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatusChangeConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatusChangeConfigurationResponse;
    static deserializeBinaryFromReader(message: GetStatusChangeConfigurationResponse, reader: jspb.BinaryReader): GetStatusChangeConfigurationResponse;
}

export namespace GetStatusChangeConfigurationResponse {
    export type AsObject = {
        statuschangeconfigurationList: Array<StatusChangeConfig.AsObject>,
    }
}

export class StatusChangeConfig extends jspb.Message { 
    getMainstatus(): TransactionStatus;
    setMainstatus(value: TransactionStatus): StatusChangeConfig;
    getSubstatus(): TransactionSubStatus;
    setSubstatus(value: TransactionSubStatus): StatusChangeConfig;
    getCanbesetbyintegrator(): boolean;
    setCanbesetbyintegrator(value: boolean): StatusChangeConfig;
    getCanbesetbybuyerseller(): boolean;
    setCanbesetbybuyerseller(value: boolean): StatusChangeConfig;
    getTitleinepui(): string;
    setTitleinepui(value: string): StatusChangeConfig;
    getDescriptioninepui(): string;
    setDescriptioninepui(value: string): StatusChangeConfig;
    clearStatuscontextList(): void;
    getStatuscontextList(): Array<TransactionParty>;
    setStatuscontextList(value: Array<TransactionParty>): StatusChangeConfig;
    addStatuscontext(value: TransactionParty, index?: number): TransactionParty;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusChangeConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StatusChangeConfig): StatusChangeConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusChangeConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusChangeConfig;
    static deserializeBinaryFromReader(message: StatusChangeConfig, reader: jspb.BinaryReader): StatusChangeConfig;
}

export namespace StatusChangeConfig {
    export type AsObject = {
        mainstatus: TransactionStatus,
        substatus: TransactionSubStatus,
        canbesetbyintegrator: boolean,
        canbesetbybuyerseller: boolean,
        titleinepui: string,
        descriptioninepui: string,
        statuscontextList: Array<TransactionParty>,
    }
}

export class TransactionActivity extends jspb.Message { 
    getId(): string;
    setId(value: string): TransactionActivity;
    getStatus(): TransactionStatus;
    setStatus(value: TransactionStatus): TransactionActivity;
    getSubstatus(): TransactionSubStatus;
    setSubstatus(value: TransactionSubStatus): TransactionActivity;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): TransactionActivity;

    hasActivityowner(): boolean;
    clearActivityowner(): void;
    getActivityowner(): public_users_user_pb.User | undefined;
    setActivityowner(value?: public_users_user_pb.User): TransactionActivity;
    getNotes(): string;
    setNotes(value: string): TransactionActivity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionActivity.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionActivity): TransactionActivity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionActivity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionActivity;
    static deserializeBinaryFromReader(message: TransactionActivity, reader: jspb.BinaryReader): TransactionActivity;
}

export namespace TransactionActivity {
    export type AsObject = {
        id: string,
        status: TransactionStatus,
        substatus: TransactionSubStatus,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        activityowner?: public_users_user_pb.User.AsObject,
        notes: string,
    }
}

export class TransactionStatusConfiguration extends jspb.Message { 
    getStatus(): TransactionStatus;
    setStatus(value: TransactionStatus): TransactionStatusConfiguration;
    getSubstatus(): TransactionSubStatus;
    setSubstatus(value: TransactionSubStatus): TransactionStatusConfiguration;
    getSendnotificationonenteringstatus(): boolean;
    setSendnotificationonenteringstatus(value: boolean): TransactionStatusConfiguration;
    clearNotificationreceiversonenteringList(): void;
    getNotificationreceiversonenteringList(): Array<TransactionParty>;
    setNotificationreceiversonenteringList(value: Array<TransactionParty>): TransactionStatusConfiguration;
    addNotificationreceiversonentering(value: TransactionParty, index?: number): TransactionParty;
    clearNotificationreceiversonexitingList(): void;
    getNotificationreceiversonexitingList(): Array<TransactionParty>;
    setNotificationreceiversonexitingList(value: Array<TransactionParty>): TransactionStatusConfiguration;
    addNotificationreceiversonexiting(value: TransactionParty, index?: number): TransactionParty;

    hasNotificationcontents(): boolean;
    clearNotificationcontents(): void;
    getNotificationcontents(): NotificationContents | undefined;
    setNotificationcontents(value?: NotificationContents): TransactionStatusConfiguration;
    getMaxstatusdurationindays(): number;
    setMaxstatusdurationindays(value: number): TransactionStatusConfiguration;

    hasSendemailnotificationconfig(): boolean;
    clearSendemailnotificationconfig(): void;
    getSendemailnotificationconfig(): SendEmailNotificationConfig | undefined;
    setSendemailnotificationconfig(value?: SendEmailNotificationConfig): TransactionStatusConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionStatusConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionStatusConfiguration): TransactionStatusConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionStatusConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionStatusConfiguration;
    static deserializeBinaryFromReader(message: TransactionStatusConfiguration, reader: jspb.BinaryReader): TransactionStatusConfiguration;
}

export namespace TransactionStatusConfiguration {
    export type AsObject = {
        status: TransactionStatus,
        substatus: TransactionSubStatus,
        sendnotificationonenteringstatus: boolean,
        notificationreceiversonenteringList: Array<TransactionParty>,
        notificationreceiversonexitingList: Array<TransactionParty>,
        notificationcontents?: NotificationContents.AsObject,
        maxstatusdurationindays: number,
        sendemailnotificationconfig?: SendEmailNotificationConfig.AsObject,
    }
}

export class SendEmailNotificationConfig extends jspb.Message { 
    getOmitemailnotificationbuyerifsourceisbin(): boolean;
    setOmitemailnotificationbuyerifsourceisbin(value: boolean): SendEmailNotificationConfig;
    getOmitemailnotificationbuyerifsourceisnotbin(): boolean;
    setOmitemailnotificationbuyerifsourceisnotbin(value: boolean): SendEmailNotificationConfig;
    getOmitemailnotificationsellerifsourceisbin(): boolean;
    setOmitemailnotificationsellerifsourceisbin(value: boolean): SendEmailNotificationConfig;
    getOmitemailnotificationsellerifsourceisnotbin(): boolean;
    setOmitemailnotificationsellerifsourceisnotbin(value: boolean): SendEmailNotificationConfig;
    getOmitemailnotificationadminifsourceisbin(): boolean;
    setOmitemailnotificationadminifsourceisbin(value: boolean): SendEmailNotificationConfig;
    getOmitemailnotificationadminifsourceisnotbin(): boolean;
    setOmitemailnotificationadminifsourceisnotbin(value: boolean): SendEmailNotificationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendEmailNotificationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SendEmailNotificationConfig): SendEmailNotificationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendEmailNotificationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendEmailNotificationConfig;
    static deserializeBinaryFromReader(message: SendEmailNotificationConfig, reader: jspb.BinaryReader): SendEmailNotificationConfig;
}

export namespace SendEmailNotificationConfig {
    export type AsObject = {
        omitemailnotificationbuyerifsourceisbin: boolean,
        omitemailnotificationbuyerifsourceisnotbin: boolean,
        omitemailnotificationsellerifsourceisbin: boolean,
        omitemailnotificationsellerifsourceisnotbin: boolean,
        omitemailnotificationadminifsourceisbin: boolean,
        omitemailnotificationadminifsourceisnotbin: boolean,
    }
}

export class NotificationContents extends jspb.Message { 
    getInappmessagetextbuyer(): string;
    setInappmessagetextbuyer(value: string): NotificationContents;
    getInappmessagetextseller(): string;
    setInappmessagetextseller(value: string): NotificationContents;
    getInappmessagetextadmin(): string;
    setInappmessagetextadmin(value: string): NotificationContents;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationContents.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationContents): NotificationContents.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotificationContents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationContents;
    static deserializeBinaryFromReader(message: NotificationContents, reader: jspb.BinaryReader): NotificationContents;
}

export namespace NotificationContents {
    export type AsObject = {
        inappmessagetextbuyer: string,
        inappmessagetextseller: string,
        inappmessagetextadmin: string,
    }
}

export enum TransactionStatus {
    TRANSACTION_NONE = 0,
    INITIATE_TRANSACTION = 1,
    PAYMENT_TO_EFTY_PAY = 2,
    TRANSFER_ASSET_TO_EFTY_PAY = 3,
    PAYOUT_TO_SELLER = 4,
    TRANSFER_ASSET_TO_BUYER = 5,
    TRANSACTION_COMPLETE = 6,
    TRANSACTION_CANCELLED = 7,
}

export enum TransactionSubStatus {
    SUB_STATUS_NONE = 0,
    INITIATED_OR_REQUESTED = 1,
    CONFIRMED = 2,
    APPROVED = 3,
}

export enum TransactionParty {
    TRANSACTION_PARTY_NONE = 0,
    BUYER = 1,
    SELLER = 2,
    BROKER = 3,
    ADMIN = 4,
}
