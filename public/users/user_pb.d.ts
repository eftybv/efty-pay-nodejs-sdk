// package: eftypay.users
// file: public/users/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_pb from "../../common/common_pb";
import * as common_finance_pb from "../../common/finance_pb";
import * as public_payments_payment_pb from "../../public/payments/payment_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): User;
    getFirstname(): string;
    setFirstname(value: string): User;
    getLastname(): string;
    setLastname(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getUsername(): string;
    setUsername(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;

    hasApicredentials(): boolean;
    clearApicredentials(): void;
    getApicredentials(): ApiCredentials | undefined;
    setApicredentials(value?: ApiCredentials): User;
    getUsertype(): UserType;
    setUsertype(value: UserType): User;
    getCompanyregistrationnumber(): string;
    setCompanyregistrationnumber(value: string): User;
    getCompanyname(): string;
    setCompanyname(value: string): User;

    hasCompanyaddress(): boolean;
    clearCompanyaddress(): void;
    getCompanyaddress(): common_finance_pb.Address | undefined;
    setCompanyaddress(value?: common_finance_pb.Address): User;

    hasVatsettings(): boolean;
    clearVatsettings(): void;
    getVatsettings(): common_finance_pb.VatSettings | undefined;
    setVatsettings(value?: common_finance_pb.VatSettings): User;
    getStatus(): UserStatus;
    setStatus(value: UserStatus): User;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): User;

    hasUpdated(): boolean;
    clearUpdated(): void;
    getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): User;
    getRepresentscompany(): boolean;
    setRepresentscompany(value: boolean): User;
    getExternalid(): string;
    setExternalid(value: string): User;
    getExternalintegratorid(): string;
    setExternalintegratorid(value: string): User;
    getEncryptionhexkey(): string;
    setEncryptionhexkey(value: string): User;
    getPhonenumber(): string;
    setPhonenumber(value: string): User;

    hasPaymentdetails(): boolean;
    clearPaymentdetails(): void;
    getPaymentdetails(): public_payments_payment_pb.PaymentDetails | undefined;
    setPaymentdetails(value?: public_payments_payment_pb.PaymentDetails): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        firstname: string,
        lastname: string,
        email: string,
        username: string,
        password: string,
        apicredentials?: ApiCredentials.AsObject,
        usertype: UserType,
        companyregistrationnumber: string,
        companyname: string,
        companyaddress?: common_finance_pb.Address.AsObject,
        vatsettings?: common_finance_pb.VatSettings.AsObject,
        status: UserStatus,
        created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        representscompany: boolean,
        externalid: string,
        externalintegratorid: string,
        encryptionhexkey: string,
        phonenumber: string,
        paymentdetails?: public_payments_payment_pb.PaymentDetails.AsObject,
    }
}

export class ApiCredentials extends jspb.Message { 
    getApikey(): string;
    setApikey(value: string): ApiCredentials;
    getApisecret(): string;
    setApisecret(value: string): ApiCredentials;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApiCredentials.AsObject;
    static toObject(includeInstance: boolean, msg: ApiCredentials): ApiCredentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApiCredentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApiCredentials;
    static deserializeBinaryFromReader(message: ApiCredentials, reader: jspb.BinaryReader): ApiCredentials;
}

export namespace ApiCredentials {
    export type AsObject = {
        apikey: string,
        apisecret: string,
    }
}

export class UserRequest extends jspb.Message { 
    getIntegratorid(): string;
    setIntegratorid(value: string): UserRequest;

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): UserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        integratorid: string,
        user?: User.AsObject,
    }
}

export class ListUserRequest extends jspb.Message { 
    getIntegratorid(): string;
    setIntegratorid(value: string): ListUserRequest;

    hasListrequest(): boolean;
    clearListrequest(): void;
    getListrequest(): common_common_pb.ListRequest | undefined;
    setListrequest(value?: common_common_pb.ListRequest): ListUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserRequest): ListUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserRequest;
    static deserializeBinaryFromReader(message: ListUserRequest, reader: jspb.BinaryReader): ListUserRequest;
}

export namespace ListUserRequest {
    export type AsObject = {
        integratorid: string,
        listrequest?: common_common_pb.ListRequest.AsObject,
    }
}

export enum UserType {
    USER_TYPE_NONE = 0,
    ADMIN = 1,
    INTEGRATOR = 2,
    INTEGRATOR_ADMINISTRATOR = 3,
    BUYER_OR_SELLER = 4,
}

export enum UserStatus {
    USER_STATUS_NONE = 0,
    ACTIVE = 1,
    DISABLED = 2,
    BANNED = 3,
}
