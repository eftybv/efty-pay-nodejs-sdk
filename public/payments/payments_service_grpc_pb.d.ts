// package: eftypay.payments
// file: public/payments/payments_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as public_payments_payments_service_pb from "../../public/payments/payments_service_pb";
import * as common_common_pb from "../../common/common_pb";
import * as includes_protoc_gen_openapiv2_openapiv2_annotations_pb from "../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb";
import * as public_payments_mangopay_onboarding_pb from "../../public/payments/mangopay/onboarding_pb";

interface IPaymentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSellerOnboardingForMangopay: IPaymentsService_ICreateSellerOnboardingForMangopay;
    updateSellerOnboardingForMangopay: IPaymentsService_IUpdateSellerOnboardingForMangopay;
    getOnboardingStatusForMangopay: IPaymentsService_IGetOnboardingStatusForMangopay;
    getGenericMagicLink: IPaymentsService_IGetGenericMagicLink;
}

interface IPaymentsService_ICreateSellerOnboardingForMangopay extends grpc.MethodDefinition<public_payments_mangopay_onboarding_pb.MangopayOnboarding, public_payments_mangopay_onboarding_pb.MangopayOnboarding> {
    path: "/eftypay.payments.Payments/CreateSellerOnboardingForMangopay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    requestDeserialize: grpc.deserialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    responseSerialize: grpc.serialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    responseDeserialize: grpc.deserialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
}
interface IPaymentsService_IUpdateSellerOnboardingForMangopay extends grpc.MethodDefinition<public_payments_mangopay_onboarding_pb.MangopayOnboarding, public_payments_mangopay_onboarding_pb.MangopayOnboarding> {
    path: "/eftypay.payments.Payments/UpdateSellerOnboardingForMangopay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    requestDeserialize: grpc.deserialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    responseSerialize: grpc.serialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    responseDeserialize: grpc.deserialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
}
interface IPaymentsService_IGetOnboardingStatusForMangopay extends grpc.MethodDefinition<common_common_pb.Id, public_payments_mangopay_onboarding_pb.MangopayOnboarding> {
    path: "/eftypay.payments.Payments/GetOnboardingStatusForMangopay";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.Id>;
    requestDeserialize: grpc.deserialize<common_common_pb.Id>;
    responseSerialize: grpc.serialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    responseDeserialize: grpc.deserialize<public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
}
interface IPaymentsService_IGetGenericMagicLink extends grpc.MethodDefinition<common_common_pb.Id, common_common_pb.ReturnString> {
    path: "/eftypay.payments.Payments/GetGenericMagicLink";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.Id>;
    requestDeserialize: grpc.deserialize<common_common_pb.Id>;
    responseSerialize: grpc.serialize<common_common_pb.ReturnString>;
    responseDeserialize: grpc.deserialize<common_common_pb.ReturnString>;
}

export const PaymentsService: IPaymentsService;

export interface IPaymentsServer extends grpc.UntypedServiceImplementation {
    createSellerOnboardingForMangopay: grpc.handleUnaryCall<public_payments_mangopay_onboarding_pb.MangopayOnboarding, public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    updateSellerOnboardingForMangopay: grpc.handleUnaryCall<public_payments_mangopay_onboarding_pb.MangopayOnboarding, public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    getOnboardingStatusForMangopay: grpc.handleUnaryCall<common_common_pb.Id, public_payments_mangopay_onboarding_pb.MangopayOnboarding>;
    getGenericMagicLink: grpc.handleUnaryCall<common_common_pb.Id, common_common_pb.ReturnString>;
}

export interface IPaymentsClient {
    createSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    createSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    createSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    updateSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    updateSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    updateSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    getOnboardingStatusForMangopay(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    getOnboardingStatusForMangopay(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    getOnboardingStatusForMangopay(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    getGenericMagicLink(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    getGenericMagicLink(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    getGenericMagicLink(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
}

export class PaymentsClient extends grpc.Client implements IPaymentsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public createSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public createSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public updateSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public updateSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public updateSellerOnboardingForMangopay(request: public_payments_mangopay_onboarding_pb.MangopayOnboarding, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public getOnboardingStatusForMangopay(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public getOnboardingStatusForMangopay(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public getOnboardingStatusForMangopay(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_payments_mangopay_onboarding_pb.MangopayOnboarding) => void): grpc.ClientUnaryCall;
    public getGenericMagicLink(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    public getGenericMagicLink(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    public getGenericMagicLink(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
}
