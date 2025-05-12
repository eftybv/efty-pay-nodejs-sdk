// package: eftypay.messages
// file: public/messages/message.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_pb from "../../common/common_pb";
import * as public_transactions_activity_activity_pb from "../../public/transactions/activity/activity_pb";
import * as public_users_user_pb from "../../public/users/user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Message extends jspb.Message { 
    getId(): string;
    setId(value: string): Message;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): public_users_user_pb.User | undefined;
    setAuthor(value?: public_users_user_pb.User): Message;

    hasReceiver(): boolean;
    clearReceiver(): void;
    getReceiver(): public_users_user_pb.User | undefined;
    setReceiver(value?: public_users_user_pb.User): Message;
    getContents(): string;
    setContents(value: string): Message;
    getIssystemgeneratedmessage(): boolean;
    setIssystemgeneratedmessage(value: boolean): Message;

    hasTransactionactivity(): boolean;
    clearTransactionactivity(): void;
    getTransactionactivity(): public_transactions_activity_activity_pb.TransactionActivity | undefined;
    setTransactionactivity(value?: public_transactions_activity_activity_pb.TransactionActivity): Message;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        id: string,
        author?: public_users_user_pb.User.AsObject,
        receiver?: public_users_user_pb.User.AsObject,
        contents: string,
        issystemgeneratedmessage: boolean,
        transactionactivity?: public_transactions_activity_activity_pb.TransactionActivity.AsObject,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class File extends jspb.Message { 
    getName(): string;
    setName(value: string): File;
    getContents(): string;
    setContents(value: string): File;
    getFiletype(): FileType;
    setFiletype(value: FileType): File;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        name: string,
        contents: string,
        filetype: FileType,
    }
}

export class SendMessageRequest extends jspb.Message { 
    getTransactionid(): string;
    setTransactionid(value: string): SendMessageRequest;
    getAuthorid(): string;
    setAuthorid(value: string): SendMessageRequest;
    getReceiverid(): string;
    setReceiverid(value: string): SendMessageRequest;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): string;
    setMessage(value: string): SendMessageRequest;

    hasFile(): boolean;
    clearFile(): void;
    getFile(): File | undefined;
    setFile(value?: File): SendMessageRequest;
    getIntegratorid(): string;
    setIntegratorid(value: string): SendMessageRequest;
    getOmitmessagenotificationemail(): boolean;
    setOmitmessagenotificationemail(value: boolean): SendMessageRequest;

    getContentsCase(): SendMessageRequest.ContentsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
    static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
    export type AsObject = {
        transactionid: string,
        authorid: string,
        receiverid: string,
        message: string,
        file?: File.AsObject,
        integratorid: string,
        omitmessagenotificationemail: boolean,
    }

    export enum ContentsCase {
        CONTENTS_NOT_SET = 0,
        MESSAGE = 4,
        FILE = 5,
    }

}

export class ListMessagesRequest extends jspb.Message { 
    getTransactionid(): string;
    setTransactionid(value: string): ListMessagesRequest;

    hasListrequest(): boolean;
    clearListrequest(): void;
    getListrequest(): common_common_pb.ListRequest | undefined;
    setListrequest(value?: common_common_pb.ListRequest): ListMessagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMessagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMessagesRequest): ListMessagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMessagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMessagesRequest;
    static deserializeBinaryFromReader(message: ListMessagesRequest, reader: jspb.BinaryReader): ListMessagesRequest;
}

export namespace ListMessagesRequest {
    export type AsObject = {
        transactionid: string,
        listrequest?: common_common_pb.ListRequest.AsObject,
    }
}

export enum FileType {
    FILE_TYPE_NONE = 0,
    IMAGE = 1,
    PDF = 2,
}
