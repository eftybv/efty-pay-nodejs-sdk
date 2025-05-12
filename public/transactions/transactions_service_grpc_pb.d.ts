// package: eftypay.transactions
// file: public/transactions/transactions_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as public_transactions_transactions_service_pb from "../../public/transactions/transactions_service_pb";
import * as common_common_pb from "../../common/common_pb";
import * as common_encrypt_pb from "../../common/encrypt_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as public_transactions_transaction_pb from "../../public/transactions/transaction_pb";
import * as public_transactions_activity_activity_pb from "../../public/transactions/activity/activity_pb";
import * as includes_protoc_gen_openapiv2_openapiv2_annotations_pb from "../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb";

interface ITransactionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTransaction: ITransactionsService_ICreateTransaction;
    updateTransaction: ITransactionsService_IUpdateTransaction;
    pushTransactionToNextAvailableStatus: ITransactionsService_IPushTransactionToNextAvailableStatus;
    listTransactions: ITransactionsService_IListTransactions;
    getTransactionById: ITransactionsService_IGetTransactionById;
    cancelTransaction: ITransactionsService_ICancelTransaction;
    deleteTransaction: ITransactionsService_IDeleteTransaction;
    sendTransactionMagicLinkEmail: ITransactionsService_ISendTransactionMagicLinkEmail;
    verifyEncryptedMagicLinkAndSendOtpEmailPublic: ITransactionsService_IVerifyEncryptedMagicLinkAndSendOtpEmailPublic;
    authenticateWithOtpPublic: ITransactionsService_IAuthenticateWithOtpPublic;
    getStatusChangeConfiguration: ITransactionsService_IGetStatusChangeConfiguration;
    getNextPossibleStatusAndSubStatus: ITransactionsService_IGetNextPossibleStatusAndSubStatus;
    reRunWhoisForDomainTransaction: ITransactionsService_IReRunWhoisForDomainTransaction;
    getTransactionWithEncryptPublic: ITransactionsService_IGetTransactionWithEncryptPublic;
    updateTransactionWithEncryptPublic: ITransactionsService_IUpdateTransactionWithEncryptPublic;
    sendTransactionMagicLinkEmailBuyerPublic: ITransactionsService_ISendTransactionMagicLinkEmailBuyerPublic;
    updateTransactionMetaData: ITransactionsService_IUpdateTransactionMetaData;
}

interface ITransactionsService_ICreateTransaction extends grpc.MethodDefinition<public_transactions_transaction_pb.TransactionRequest, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/CreateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_IUpdateTransaction extends grpc.MethodDefinition<public_transactions_transaction_pb.TransactionRequest, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/UpdateTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_IPushTransactionToNextAvailableStatus extends grpc.MethodDefinition<public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/PushTransactionToNextAvailableStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_IListTransactions extends grpc.MethodDefinition<public_transactions_transaction_pb.ListTransactionsRequest, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/ListTransactions";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.ListTransactionsRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.ListTransactionsRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_IGetTransactionById extends grpc.MethodDefinition<common_common_pb.Id, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/GetTransactionById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.Id>;
    requestDeserialize: grpc.deserialize<common_common_pb.Id>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_ICancelTransaction extends grpc.MethodDefinition<public_transactions_transaction_pb.TransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/eftypay.transactions.Transactions/CancelTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITransactionsService_IDeleteTransaction extends grpc.MethodDefinition<public_transactions_transaction_pb.TransactionRequest, google_protobuf_empty_pb.Empty> {
    path: "/eftypay.transactions.Transactions/DeleteTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITransactionsService_ISendTransactionMagicLinkEmail extends grpc.MethodDefinition<public_transactions_transaction_pb.TransactionMagicLinkPayload, public_transactions_transaction_pb.TransactionMagicLinkResponse> {
    path: "/eftypay.transactions.Transactions/SendTransactionMagicLinkEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionMagicLinkPayload>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionMagicLinkPayload>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionMagicLinkResponse>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionMagicLinkResponse>;
}
interface ITransactionsService_IVerifyEncryptedMagicLinkAndSendOtpEmailPublic extends grpc.MethodDefinition<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, google_protobuf_empty_pb.Empty> {
    path: "/eftypay.transactions.Transactions/VerifyEncryptedMagicLinkAndSendOtpEmailPublic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ITransactionsService_IAuthenticateWithOtpPublic extends grpc.MethodDefinition<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, common_common_pb.ReturnString> {
    path: "/eftypay.transactions.Transactions/AuthenticateWithOtpPublic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload>;
    responseSerialize: grpc.serialize<common_common_pb.ReturnString>;
    responseDeserialize: grpc.deserialize<common_common_pb.ReturnString>;
}
interface ITransactionsService_IGetStatusChangeConfiguration extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse> {
    path: "/eftypay.transactions.Transactions/GetStatusChangeConfiguration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse>;
    responseDeserialize: grpc.deserialize<public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse>;
}
interface ITransactionsService_IGetNextPossibleStatusAndSubStatus extends grpc.MethodDefinition<public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, public_transactions_activity_activity_pb.TransactionActivity> {
    path: "/eftypay.transactions.Transactions/GetNextPossibleStatusAndSubStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest>;
    responseSerialize: grpc.serialize<public_transactions_activity_activity_pb.TransactionActivity>;
    responseDeserialize: grpc.deserialize<public_transactions_activity_activity_pb.TransactionActivity>;
}
interface ITransactionsService_IReRunWhoisForDomainTransaction extends grpc.MethodDefinition<common_common_pb.Id, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/ReRunWhoisForDomainTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.Id>;
    requestDeserialize: grpc.deserialize<common_common_pb.Id>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_IGetTransactionWithEncryptPublic extends grpc.MethodDefinition<common_encrypt_pb.EncryptedLinkRequest, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/GetTransactionWithEncryptPublic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_encrypt_pb.EncryptedLinkRequest>;
    requestDeserialize: grpc.deserialize<common_encrypt_pb.EncryptedLinkRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_IUpdateTransactionWithEncryptPublic extends grpc.MethodDefinition<public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/UpdateTransactionWithEncryptPublic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}
interface ITransactionsService_ISendTransactionMagicLinkEmailBuyerPublic extends grpc.MethodDefinition<common_encrypt_pb.EncryptedLinkRequest, public_transactions_transaction_pb.TransactionMagicLinkResponse> {
    path: "/eftypay.transactions.Transactions/SendTransactionMagicLinkEmailBuyerPublic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_encrypt_pb.EncryptedLinkRequest>;
    requestDeserialize: grpc.deserialize<common_encrypt_pb.EncryptedLinkRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.TransactionMagicLinkResponse>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.TransactionMagicLinkResponse>;
}
interface ITransactionsService_IUpdateTransactionMetaData extends grpc.MethodDefinition<public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, public_transactions_transaction_pb.Transaction> {
    path: "/eftypay.transactions.Transactions/UpdateTransactionMetaData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_transactions_transaction_pb.UpdateTransactionMetaDataRequest>;
    requestDeserialize: grpc.deserialize<public_transactions_transaction_pb.UpdateTransactionMetaDataRequest>;
    responseSerialize: grpc.serialize<public_transactions_transaction_pb.Transaction>;
    responseDeserialize: grpc.deserialize<public_transactions_transaction_pb.Transaction>;
}

export const TransactionsService: ITransactionsService;

export interface ITransactionsServer extends grpc.UntypedServiceImplementation {
    createTransaction: grpc.handleUnaryCall<public_transactions_transaction_pb.TransactionRequest, public_transactions_transaction_pb.Transaction>;
    updateTransaction: grpc.handleUnaryCall<public_transactions_transaction_pb.TransactionRequest, public_transactions_transaction_pb.Transaction>;
    pushTransactionToNextAvailableStatus: grpc.handleUnaryCall<public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, public_transactions_transaction_pb.Transaction>;
    listTransactions: grpc.handleServerStreamingCall<public_transactions_transaction_pb.ListTransactionsRequest, public_transactions_transaction_pb.Transaction>;
    getTransactionById: grpc.handleUnaryCall<common_common_pb.Id, public_transactions_transaction_pb.Transaction>;
    cancelTransaction: grpc.handleUnaryCall<public_transactions_transaction_pb.TransactionRequest, google_protobuf_empty_pb.Empty>;
    deleteTransaction: grpc.handleUnaryCall<public_transactions_transaction_pb.TransactionRequest, google_protobuf_empty_pb.Empty>;
    sendTransactionMagicLinkEmail: grpc.handleUnaryCall<public_transactions_transaction_pb.TransactionMagicLinkPayload, public_transactions_transaction_pb.TransactionMagicLinkResponse>;
    verifyEncryptedMagicLinkAndSendOtpEmailPublic: grpc.handleUnaryCall<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, google_protobuf_empty_pb.Empty>;
    authenticateWithOtpPublic: grpc.handleUnaryCall<public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, common_common_pb.ReturnString>;
    getStatusChangeConfiguration: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse>;
    getNextPossibleStatusAndSubStatus: grpc.handleUnaryCall<public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, public_transactions_activity_activity_pb.TransactionActivity>;
    reRunWhoisForDomainTransaction: grpc.handleUnaryCall<common_common_pb.Id, public_transactions_transaction_pb.Transaction>;
    getTransactionWithEncryptPublic: grpc.handleUnaryCall<common_encrypt_pb.EncryptedLinkRequest, public_transactions_transaction_pb.Transaction>;
    updateTransactionWithEncryptPublic: grpc.handleUnaryCall<public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, public_transactions_transaction_pb.Transaction>;
    sendTransactionMagicLinkEmailBuyerPublic: grpc.handleUnaryCall<common_encrypt_pb.EncryptedLinkRequest, public_transactions_transaction_pb.TransactionMagicLinkResponse>;
    updateTransactionMetaData: grpc.handleUnaryCall<public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, public_transactions_transaction_pb.Transaction>;
}

export interface ITransactionsClient {
    createTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    createTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    createTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    pushTransactionToNextAvailableStatus(request: public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    pushTransactionToNextAvailableStatus(request: public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    pushTransactionToNextAvailableStatus(request: public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    listTransactions(request: public_transactions_transaction_pb.ListTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_transactions_transaction_pb.Transaction>;
    listTransactions(request: public_transactions_transaction_pb.ListTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_transactions_transaction_pb.Transaction>;
    getTransactionById(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionById(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionById(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendTransactionMagicLinkEmail(request: public_transactions_transaction_pb.TransactionMagicLinkPayload, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    sendTransactionMagicLinkEmail(request: public_transactions_transaction_pb.TransactionMagicLinkPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    sendTransactionMagicLinkEmail(request: public_transactions_transaction_pb.TransactionMagicLinkPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    verifyEncryptedMagicLinkAndSendOtpEmailPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    verifyEncryptedMagicLinkAndSendOtpEmailPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    verifyEncryptedMagicLinkAndSendOtpEmailPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    authenticateWithOtpPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    authenticateWithOtpPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    authenticateWithOtpPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    getStatusChangeConfiguration(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse) => void): grpc.ClientUnaryCall;
    getStatusChangeConfiguration(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse) => void): grpc.ClientUnaryCall;
    getStatusChangeConfiguration(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse) => void): grpc.ClientUnaryCall;
    getNextPossibleStatusAndSubStatus(request: public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.TransactionActivity) => void): grpc.ClientUnaryCall;
    getNextPossibleStatusAndSubStatus(request: public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.TransactionActivity) => void): grpc.ClientUnaryCall;
    getNextPossibleStatusAndSubStatus(request: public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.TransactionActivity) => void): grpc.ClientUnaryCall;
    reRunWhoisForDomainTransaction(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    reRunWhoisForDomainTransaction(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    reRunWhoisForDomainTransaction(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionWithEncryptPublic(request: common_encrypt_pb.EncryptedLinkRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionWithEncryptPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    getTransactionWithEncryptPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransactionWithEncryptPublic(request: public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransactionWithEncryptPublic(request: public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransactionWithEncryptPublic(request: public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    sendTransactionMagicLinkEmailBuyerPublic(request: common_encrypt_pb.EncryptedLinkRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    sendTransactionMagicLinkEmailBuyerPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    sendTransactionMagicLinkEmailBuyerPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    updateTransactionMetaData(request: public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransactionMetaData(request: public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    updateTransactionMetaData(request: public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
}

export class TransactionsClient extends grpc.Client implements ITransactionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public createTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public createTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public pushTransactionToNextAvailableStatus(request: public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public pushTransactionToNextAvailableStatus(request: public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public pushTransactionToNextAvailableStatus(request: public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public listTransactions(request: public_transactions_transaction_pb.ListTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_transactions_transaction_pb.Transaction>;
    public listTransactions(request: public_transactions_transaction_pb.ListTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_transactions_transaction_pb.Transaction>;
    public getTransactionById(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionById(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionById(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: public_transactions_transaction_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTransaction(request: public_transactions_transaction_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendTransactionMagicLinkEmail(request: public_transactions_transaction_pb.TransactionMagicLinkPayload, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    public sendTransactionMagicLinkEmail(request: public_transactions_transaction_pb.TransactionMagicLinkPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    public sendTransactionMagicLinkEmail(request: public_transactions_transaction_pb.TransactionMagicLinkPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    public verifyEncryptedMagicLinkAndSendOtpEmailPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public verifyEncryptedMagicLinkAndSendOtpEmailPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public verifyEncryptedMagicLinkAndSendOtpEmailPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public authenticateWithOtpPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    public authenticateWithOtpPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    public authenticateWithOtpPublic(request: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_pb.ReturnString) => void): grpc.ClientUnaryCall;
    public getStatusChangeConfiguration(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getStatusChangeConfiguration(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getStatusChangeConfiguration(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse) => void): grpc.ClientUnaryCall;
    public getNextPossibleStatusAndSubStatus(request: public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.TransactionActivity) => void): grpc.ClientUnaryCall;
    public getNextPossibleStatusAndSubStatus(request: public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.TransactionActivity) => void): grpc.ClientUnaryCall;
    public getNextPossibleStatusAndSubStatus(request: public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_activity_activity_pb.TransactionActivity) => void): grpc.ClientUnaryCall;
    public reRunWhoisForDomainTransaction(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public reRunWhoisForDomainTransaction(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public reRunWhoisForDomainTransaction(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionWithEncryptPublic(request: common_encrypt_pb.EncryptedLinkRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionWithEncryptPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public getTransactionWithEncryptPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransactionWithEncryptPublic(request: public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransactionWithEncryptPublic(request: public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransactionWithEncryptPublic(request: public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public sendTransactionMagicLinkEmailBuyerPublic(request: common_encrypt_pb.EncryptedLinkRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    public sendTransactionMagicLinkEmailBuyerPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    public sendTransactionMagicLinkEmailBuyerPublic(request: common_encrypt_pb.EncryptedLinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.TransactionMagicLinkResponse) => void): grpc.ClientUnaryCall;
    public updateTransactionMetaData(request: public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransactionMetaData(request: public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
    public updateTransactionMetaData(request: public_transactions_transaction_pb.UpdateTransactionMetaDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_transactions_transaction_pb.Transaction) => void): grpc.ClientUnaryCall;
}
