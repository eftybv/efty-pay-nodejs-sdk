// package: eftypay.integrators
// file: public/integrators/integrator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CommissionSettings extends jspb.Message { 
    getEftypayflatfeeamount(): number;
    setEftypayflatfeeamount(value: number): CommissionSettings;
    getEftypaycommissionpercentage(): number;
    setEftypaycommissionpercentage(value: number): CommissionSettings;
    getIntegratorflatfeeamount(): number;
    setIntegratorflatfeeamount(value: number): CommissionSettings;
    getIntegratorcommissionpercentage(): number;
    setIntegratorcommissionpercentage(value: number): CommissionSettings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommissionSettings.AsObject;
    static toObject(includeInstance: boolean, msg: CommissionSettings): CommissionSettings.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommissionSettings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommissionSettings;
    static deserializeBinaryFromReader(message: CommissionSettings, reader: jspb.BinaryReader): CommissionSettings;
}

export namespace CommissionSettings {
    export type AsObject = {
        eftypayflatfeeamount: number,
        eftypaycommissionpercentage: number,
        integratorflatfeeamount: number,
        integratorcommissionpercentage: number,
    }
}
