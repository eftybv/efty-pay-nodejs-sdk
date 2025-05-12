// package: eftypay.common
// file: common/encrypt.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class EncryptedLinkRequest extends jspb.Message { 
    getEncrypteddata(): string;
    setEncrypteddata(value: string): EncryptedLinkRequest;
    getIv(): string;
    setIv(value: string): EncryptedLinkRequest;
    getKeyid(): string;
    setKeyid(value: string): EncryptedLinkRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EncryptedLinkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EncryptedLinkRequest): EncryptedLinkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EncryptedLinkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EncryptedLinkRequest;
    static deserializeBinaryFromReader(message: EncryptedLinkRequest, reader: jspb.BinaryReader): EncryptedLinkRequest;
}

export namespace EncryptedLinkRequest {
    export type AsObject = {
        encrypteddata: string,
        iv: string,
        keyid: string,
    }
}
