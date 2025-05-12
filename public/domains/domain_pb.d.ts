// package: eftypay.domains
// file: public/domains/domain.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_finance_pb from "../../common/finance_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Domain extends jspb.Message { 
    getDomainname(): string;
    setDomainname(value: string): Domain;
    clearWhoislookupsList(): void;
    getWhoislookupsList(): Array<Whois>;
    setWhoislookupsList(value: Array<Whois>): Domain;
    addWhoislookups(value?: Whois, index?: number): Whois;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Domain.AsObject;
    static toObject(includeInstance: boolean, msg: Domain): Domain.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Domain, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Domain;
    static deserializeBinaryFromReader(message: Domain, reader: jspb.BinaryReader): Domain;
}

export namespace Domain {
    export type AsObject = {
        domainname: string,
        whoislookupsList: Array<Whois.AsObject>,
    }
}

export class Whois extends jspb.Message { 
    getRegistrarname(): string;
    setRegistrarname(value: string): Whois;
    getRegistrarianaid(): string;
    setRegistrarianaid(value: string): Whois;
    getEftypayhasaccountwithregistrar(): boolean;
    setEftypayhasaccountwithregistrar(value: boolean): Whois;
    getOwnername(): string;
    setOwnername(value: string): Whois;
    getOwneremail(): string;
    setOwneremail(value: string): Whois;

    hasOwneraddress(): boolean;
    clearOwneraddress(): void;
    getOwneraddress(): common_finance_pb.Address | undefined;
    setOwneraddress(value?: common_finance_pb.Address): Whois;
    clearDnsnameserverhostnamesList(): void;
    getDnsnameserverhostnamesList(): Array<string>;
    setDnsnameserverhostnamesList(value: Array<string>): Whois;
    addDnsnameserverhostnames(value: string, index?: number): string;
    clearDnsnameserverhostipsList(): void;
    getDnsnameserverhostipsList(): Array<string>;
    setDnsnameserverhostipsList(value: Array<string>): Whois;
    addDnsnameserverhostips(value: string, index?: number): string;
    getStatus(): DomainStatus;
    setStatus(value: DomainStatus): Whois;
    getStatusraw(): string;
    setStatusraw(value: string): Whois;

    hasWhoisquerydate(): boolean;
    clearWhoisquerydate(): void;
    getWhoisquerydate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setWhoisquerydate(value?: google_protobuf_timestamp_pb.Timestamp): Whois;

    hasCreateddate(): boolean;
    clearCreateddate(): void;
    getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): Whois;

    hasUpdateddate(): boolean;
    clearUpdateddate(): void;
    getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): Whois;

    hasExpiresdate(): boolean;
    clearExpiresdate(): void;
    getExpiresdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresdate(value?: google_protobuf_timestamp_pb.Timestamp): Whois;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Whois.AsObject;
    static toObject(includeInstance: boolean, msg: Whois): Whois.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Whois, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Whois;
    static deserializeBinaryFromReader(message: Whois, reader: jspb.BinaryReader): Whois;
}

export namespace Whois {
    export type AsObject = {
        registrarname: string,
        registrarianaid: string,
        eftypayhasaccountwithregistrar: boolean,
        ownername: string,
        owneremail: string,
        owneraddress?: common_finance_pb.Address.AsObject,
        dnsnameserverhostnamesList: Array<string>,
        dnsnameserverhostipsList: Array<string>,
        status: DomainStatus,
        statusraw: string,
        whoisquerydate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expiresdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum DomainStatus {
    DOMAIN_STATUS_NONE = 0,
    LOCKED = 1,
    UNLOCKED = 2,
}
