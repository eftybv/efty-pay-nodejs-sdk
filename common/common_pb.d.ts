// package: eftypay.common
// file: common/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Id extends jspb.Message { 
    getId(): string;
    setId(value: string): Id;
    getIntegratorid(): string;
    setIntegratorid(value: string): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
    export type AsObject = {
        id: string,
        integratorid: string,
    }
}

export class ReturnString extends jspb.Message { 
    getValue(): string;
    setValue(value: string): ReturnString;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnString.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnString): ReturnString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnString;
    static deserializeBinaryFromReader(message: ReturnString, reader: jspb.BinaryReader): ReturnString;
}

export namespace ReturnString {
    export type AsObject = {
        value: string,
    }
}

export class ReturnStrings extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): ReturnStrings;
    addValues(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReturnStrings.AsObject;
    static toObject(includeInstance: boolean, msg: ReturnStrings): ReturnStrings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReturnStrings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReturnStrings;
    static deserializeBinaryFromReader(message: ReturnStrings, reader: jspb.BinaryReader): ReturnStrings;
}

export namespace ReturnStrings {
    export type AsObject = {
        valuesList: Array<string>,
    }
}

export class GetObjectRequest extends jspb.Message { 
    getFieldvalue(): string;
    setFieldvalue(value: string): GetObjectRequest;
    getIntegratorid(): string;
    setIntegratorid(value: string): GetObjectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetObjectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetObjectRequest): GetObjectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetObjectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetObjectRequest;
    static deserializeBinaryFromReader(message: GetObjectRequest, reader: jspb.BinaryReader): GetObjectRequest;
}

export namespace GetObjectRequest {
    export type AsObject = {
        fieldvalue: string,
        integratorid: string,
    }
}

export class Query extends jspb.Message { 
    getConditionoperator(): ConditionOperator;
    setConditionoperator(value: ConditionOperator): Query;
    clearFieldconditionsList(): void;
    getFieldconditionsList(): Array<Condition>;
    setFieldconditionsList(value: Array<Condition>): Query;
    addFieldconditions(value?: Condition, index?: number): Condition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Query.AsObject;
    static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Query;
    static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
    export type AsObject = {
        conditionoperator: ConditionOperator,
        fieldconditionsList: Array<Condition.AsObject>,
    }
}

export class Condition extends jspb.Message { 
    getField(): string;
    setField(value: string): Condition;
    getOperator(): ComparisonOperator;
    setOperator(value: ComparisonOperator): Condition;

    hasStringvalue(): boolean;
    clearStringvalue(): void;
    getStringvalue(): string;
    setStringvalue(value: string): Condition;

    hasIntvalue(): boolean;
    clearIntvalue(): void;
    getIntvalue(): number;
    setIntvalue(value: number): Condition;

    getValueCase(): Condition.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
    export type AsObject = {
        field: string,
        operator: ComparisonOperator,
        stringvalue: string,
        intvalue: number,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        STRINGVALUE = 3,
        INTVALUE = 4,
    }

}

export class ListRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): ListRequest;
    getStartafter(): string;
    setStartafter(value: string): ListRequest;
    clearQueriesList(): void;
    getQueriesList(): Array<Query>;
    setQueriesList(value: Array<Query>): ListRequest;
    addQueries(value?: Query, index?: number): Query;
    getOrderbyfield(): string;
    setOrderbyfield(value: string): ListRequest;
    getOrder(): OrderDirection;
    setOrder(value: OrderDirection): ListRequest;
    getIntegratorid(): string;
    setIntegratorid(value: string): ListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRequest;
    static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
    export type AsObject = {
        limit: number,
        startafter: string,
        queriesList: Array<Query.AsObject>,
        orderbyfield: string,
        order: OrderDirection,
        integratorid: string,
    }
}

export class DbInt64 extends jspb.Message { 
    getIntvalue(): number;
    setIntvalue(value: number): DbInt64;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DbInt64.AsObject;
    static toObject(includeInstance: boolean, msg: DbInt64): DbInt64.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DbInt64, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DbInt64;
    static deserializeBinaryFromReader(message: DbInt64, reader: jspb.BinaryReader): DbInt64;
}

export namespace DbInt64 {
    export type AsObject = {
        intvalue: number,
    }
}

export enum ConditionOperator {
    CONDITION_OPERATOR_NONE = 0,
    CONDITION_OPERATOR_AND = 1,
    CONDITION_OPERATOR_OR = 2,
    CONDITION_OPERATOR_NOT = 3,
}

export enum ComparisonOperator {
    COMPARISON_OPERATOR_NONE = 0,
    COMPARISON_OPERATOR_EQUALS = 1,
    COMPARISON_OPERATOR_GTE = 2,
    COMPARISON_OPERATOR_LTE = 3,
    COMPARISON_OPERATOR_GT = 4,
    COMPARISON_OPERATOR_LT = 5,
    COMPARISON_OPERATOR_NOT_EQUALS = 6,
}

export enum OrderDirection {
    ORDER_DIRECTION_NONE = 0,
    ORDER_DIRECTION_ASC = 1,
    ORDER_DIRECTION_DESC = 2,
}
