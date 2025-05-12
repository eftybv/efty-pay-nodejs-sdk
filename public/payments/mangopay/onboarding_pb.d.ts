// package: eftypay.payments.mangopay
// file: public/payments/mangopay/onboarding.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_pb from "../../../common/common_pb";
import * as common_finance_pb from "../../../common/finance_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as public_payments_mangopay_checkout_pb from "../../../public/payments/mangopay/checkout_pb";

export class LegalUser extends jspb.Message { 
    getRegisteredname(): string;
    setRegisteredname(value: string): LegalUser;
    getCompanynumber(): string;
    setCompanynumber(value: string): LegalUser;
    getEmail(): string;
    setEmail(value: string): LegalUser;

    hasRegisteredaddress(): boolean;
    clearRegisteredaddress(): void;
    getRegisteredaddress(): Address | undefined;
    setRegisteredaddress(value?: Address): LegalUser;

    hasLegalrepresentative(): boolean;
    clearLegalrepresentative(): void;
    getLegalrepresentative(): Person | undefined;
    setLegalrepresentative(value?: Person): LegalUser;

    hasUbodeclaration(): boolean;
    clearUbodeclaration(): void;
    getUbodeclaration(): UboDeclaration | undefined;
    setUbodeclaration(value?: UboDeclaration): LegalUser;
    getLegalusertype(): LegalUserType;
    setLegalusertype(value: LegalUserType): LegalUser;
    getVatnumber(): string;
    setVatnumber(value: string): LegalUser;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegalUser.AsObject;
    static toObject(includeInstance: boolean, msg: LegalUser): LegalUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegalUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegalUser;
    static deserializeBinaryFromReader(message: LegalUser, reader: jspb.BinaryReader): LegalUser;
}

export namespace LegalUser {
    export type AsObject = {
        registeredname: string,
        companynumber: string,
        email: string,
        registeredaddress?: Address.AsObject,
        legalrepresentative?: Person.AsObject,
        ubodeclaration?: UboDeclaration.AsObject,
        legalusertype: LegalUserType,
        vatnumber: string,
    }
}

export class Person extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): Person;
    getLastname(): string;
    setLastname(value: string): Person;
    getEmail(): string;
    setEmail(value: string): Person;

    hasDateofbirth(): boolean;
    clearDateofbirth(): void;
    getDateofbirth(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateofbirth(value?: google_protobuf_timestamp_pb.Timestamp): Person;
    getNationality(): common_finance_pb.CountryCode;
    setNationality(value: common_finance_pb.CountryCode): Person;
    getCountryofresidence(): common_finance_pb.CountryCode;
    setCountryofresidence(value: common_finance_pb.CountryCode): Person;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Person.AsObject;
    static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Person;
    static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
    export type AsObject = {
        firstname: string,
        lastname: string,
        email: string,
        dateofbirth?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        nationality: common_finance_pb.CountryCode,
        countryofresidence: common_finance_pb.CountryCode,
    }
}

export class UboDeclaration extends jspb.Message { 
    getMangopayubodeclarationid(): string;
    setMangopayubodeclarationid(value: string): UboDeclaration;
    clearBeneficialownersList(): void;
    getBeneficialownersList(): Array<Ubo>;
    setBeneficialownersList(value: Array<Ubo>): UboDeclaration;
    addBeneficialowners(value?: Ubo, index?: number): Ubo;
    getStatus(): string;
    setStatus(value: string): UboDeclaration;
    getRefusedreason(): string;
    setRefusedreason(value: string): UboDeclaration;
    getRefusedreasonmessage(): string;
    setRefusedreasonmessage(value: string): UboDeclaration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UboDeclaration.AsObject;
    static toObject(includeInstance: boolean, msg: UboDeclaration): UboDeclaration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UboDeclaration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UboDeclaration;
    static deserializeBinaryFromReader(message: UboDeclaration, reader: jspb.BinaryReader): UboDeclaration;
}

export namespace UboDeclaration {
    export type AsObject = {
        mangopayubodeclarationid: string,
        beneficialownersList: Array<Ubo.AsObject>,
        status: string,
        refusedreason: string,
        refusedreasonmessage: string,
    }
}

export class Ubo extends jspb.Message { 
    getId(): string;
    setId(value: string): Ubo;
    getFirstname(): string;
    setFirstname(value: string): Ubo;
    getLastname(): string;
    setLastname(value: string): Ubo;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Address | undefined;
    setAddress(value?: Address): Ubo;

    hasDateofbirth(): boolean;
    clearDateofbirth(): void;
    getDateofbirth(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateofbirth(value?: google_protobuf_timestamp_pb.Timestamp): Ubo;
    getNationality(): common_finance_pb.CountryCode;
    setNationality(value: common_finance_pb.CountryCode): Ubo;

    hasBirthplace(): boolean;
    clearBirthplace(): void;
    getBirthplace(): BirthPlace | undefined;
    setBirthplace(value?: BirthPlace): Ubo;
    getIsactive(): boolean;
    setIsactive(value: boolean): Ubo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ubo.AsObject;
    static toObject(includeInstance: boolean, msg: Ubo): Ubo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ubo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ubo;
    static deserializeBinaryFromReader(message: Ubo, reader: jspb.BinaryReader): Ubo;
}

export namespace Ubo {
    export type AsObject = {
        id: string,
        firstname: string,
        lastname: string,
        address?: Address.AsObject,
        dateofbirth?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        nationality: common_finance_pb.CountryCode,
        birthplace?: BirthPlace.AsObject,
        isactive: boolean,
    }
}

export class Address extends jspb.Message { 
    getAddressline1(): string;
    setAddressline1(value: string): Address;
    getAddressline2(): string;
    setAddressline2(value: string): Address;
    getCity(): string;
    setCity(value: string): Address;
    getRegionorcounty(): string;
    setRegionorcounty(value: string): Address;
    getPostalcode(): string;
    setPostalcode(value: string): Address;
    getCountry(): common_finance_pb.CountryCode;
    setCountry(value: common_finance_pb.CountryCode): Address;

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
        regionorcounty: string,
        postalcode: string,
        country: common_finance_pb.CountryCode,
    }
}

export class BirthPlace extends jspb.Message { 
    getCity(): string;
    setCity(value: string): BirthPlace;
    getCountry(): common_finance_pb.CountryCode;
    setCountry(value: common_finance_pb.CountryCode): BirthPlace;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BirthPlace.AsObject;
    static toObject(includeInstance: boolean, msg: BirthPlace): BirthPlace.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BirthPlace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BirthPlace;
    static deserializeBinaryFromReader(message: BirthPlace, reader: jspb.BinaryReader): BirthPlace;
}

export namespace BirthPlace {
    export type AsObject = {
        city: string,
        country: common_finance_pb.CountryCode,
    }
}

export class KycDocument extends jspb.Message { 
    getMangopaydocumentid(): string;
    setMangopaydocumentid(value: string): KycDocument;
    getDocumenttype(): KycDocumentType;
    setDocumenttype(value: KycDocumentType): KycDocument;
    getStatus(): string;
    setStatus(value: string): KycDocument;
    clearMangopayflagsList(): void;
    getMangopayflagsList(): Array<string>;
    setMangopayflagsList(value: Array<string>): KycDocument;
    addMangopayflags(value: string, index?: number): string;
    getRefusedreasontype(): string;
    setRefusedreasontype(value: string): KycDocument;
    getRefusedreasonmessage(): string;
    setRefusedreasonmessage(value: string): KycDocument;
    getIssubmitted(): boolean;
    setIssubmitted(value: boolean): KycDocument;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): KycDocument;

    hasUpdated(): boolean;
    clearUpdated(): void;
    getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): KycDocument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KycDocument.AsObject;
    static toObject(includeInstance: boolean, msg: KycDocument): KycDocument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KycDocument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KycDocument;
    static deserializeBinaryFromReader(message: KycDocument, reader: jspb.BinaryReader): KycDocument;
}

export namespace KycDocument {
    export type AsObject = {
        mangopaydocumentid: string,
        documenttype: KycDocumentType,
        status: string,
        mangopayflagsList: Array<string>,
        refusedreasontype: string,
        refusedreasonmessage: string,
        issubmitted: boolean,
        created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class MangopayOnboarding extends jspb.Message { 

    hasSelleruserid(): boolean;
    clearSelleruserid(): void;
    getSelleruserid(): common_common_pb.Id | undefined;
    setSelleruserid(value?: common_common_pb.Id): MangopayOnboarding;

    hasNaturaluser(): boolean;
    clearNaturaluser(): void;
    getNaturaluser(): Person | undefined;
    setNaturaluser(value?: Person): MangopayOnboarding;

    hasLegaluser(): boolean;
    clearLegaluser(): void;
    getLegaluser(): LegalUser | undefined;
    setLegaluser(value?: LegalUser): MangopayOnboarding;
    getOnboardingtype(): OnboardingType;
    setOnboardingtype(value: OnboardingType): MangopayOnboarding;
    getKyclevel(): public_payments_mangopay_checkout_pb.KycLevel;
    setKyclevel(value: public_payments_mangopay_checkout_pb.KycLevel): MangopayOnboarding;
    clearAssociatedkycdocumentdetailsList(): void;
    getAssociatedkycdocumentdetailsList(): Array<KycDocument>;
    setAssociatedkycdocumentdetailsList(value: Array<KycDocument>): MangopayOnboarding;
    addAssociatedkycdocumentdetails(value?: KycDocument, index?: number): KycDocument;
    getOnboardingadditionalinformation(): string;
    setOnboardingadditionalinformation(value: string): MangopayOnboarding;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): MangopayOnboarding;

    hasUpdated(): boolean;
    clearUpdated(): void;
    getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): MangopayOnboarding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MangopayOnboarding.AsObject;
    static toObject(includeInstance: boolean, msg: MangopayOnboarding): MangopayOnboarding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MangopayOnboarding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MangopayOnboarding;
    static deserializeBinaryFromReader(message: MangopayOnboarding, reader: jspb.BinaryReader): MangopayOnboarding;
}

export namespace MangopayOnboarding {
    export type AsObject = {
        selleruserid?: common_common_pb.Id.AsObject,
        naturaluser?: Person.AsObject,
        legaluser?: LegalUser.AsObject,
        onboardingtype: OnboardingType,
        kyclevel: public_payments_mangopay_checkout_pb.KycLevel,
        associatedkycdocumentdetailsList: Array<KycDocument.AsObject>,
        onboardingadditionalinformation: string,
        created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum OnboardingType {
    ONBOARDING_TYPE_NONE = 0,
    NATURAL_USER = 1,
    LEGAL_USER = 2,
}

export enum LegalUserType {
    LEGAL_USER_TYPE_NONE = 0,
    BUSINESS = 1,
    PARTNERSHIP = 2,
    ORGANIZATION = 3,
    SOLETRADER = 4,
}

export enum KycDocumentType {
    KYC_DOCUMENT_TYPE_NONE = 0,
    IDENTITY_PROOF = 1,
    REGISTRATION_PROOF = 2,
    ARTICLES_OF_ASSOCIATION = 3,
    SHAREHOLDER_DECLARATION = 4,
    ADDRESS_PROOF = 5,
}

export enum IdentityProofType {
    IDENTITY_TYPE_PROOF_NONE = 0,
    PASSPORT = 1,
    DRIVING_LICENSE = 2,
    NATIONAL_IDENTITY_CARD = 3,
}
