// package: eftypay.finances
// file: public/finances/finances_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as public_finances_finances_service_pb from "../../public/finances/finances_service_pb";
import * as includes_protoc_gen_openapiv2_openapiv2_annotations_pb from "../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb";
import * as public_finances_vat_pb from "../../public/finances/vat_pb";

interface IFinancesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    calculateVatPublic: IFinancesService_ICalculateVatPublic;
}

interface IFinancesService_ICalculateVatPublic extends grpc.MethodDefinition<public_finances_vat_pb.CalculateVatRequest, public_finances_vat_pb.CalculateVatResponse> {
    path: "/eftypay.finances.Finances/CalculateVatPublic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_finances_vat_pb.CalculateVatRequest>;
    requestDeserialize: grpc.deserialize<public_finances_vat_pb.CalculateVatRequest>;
    responseSerialize: grpc.serialize<public_finances_vat_pb.CalculateVatResponse>;
    responseDeserialize: grpc.deserialize<public_finances_vat_pb.CalculateVatResponse>;
}

export const FinancesService: IFinancesService;

export interface IFinancesServer extends grpc.UntypedServiceImplementation {
    calculateVatPublic: grpc.handleUnaryCall<public_finances_vat_pb.CalculateVatRequest, public_finances_vat_pb.CalculateVatResponse>;
}

export interface IFinancesClient {
    calculateVatPublic(request: public_finances_vat_pb.CalculateVatRequest, callback: (error: grpc.ServiceError | null, response: public_finances_vat_pb.CalculateVatResponse) => void): grpc.ClientUnaryCall;
    calculateVatPublic(request: public_finances_vat_pb.CalculateVatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_finances_vat_pb.CalculateVatResponse) => void): grpc.ClientUnaryCall;
    calculateVatPublic(request: public_finances_vat_pb.CalculateVatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_finances_vat_pb.CalculateVatResponse) => void): grpc.ClientUnaryCall;
}

export class FinancesClient extends grpc.Client implements IFinancesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public calculateVatPublic(request: public_finances_vat_pb.CalculateVatRequest, callback: (error: grpc.ServiceError | null, response: public_finances_vat_pb.CalculateVatResponse) => void): grpc.ClientUnaryCall;
    public calculateVatPublic(request: public_finances_vat_pb.CalculateVatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_finances_vat_pb.CalculateVatResponse) => void): grpc.ClientUnaryCall;
    public calculateVatPublic(request: public_finances_vat_pb.CalculateVatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_finances_vat_pb.CalculateVatResponse) => void): grpc.ClientUnaryCall;
}
