// package: eftypay.messages
// file: public/messages/messages_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as public_messages_messages_service_pb from "../../public/messages/messages_service_pb";
import * as public_messages_message_pb from "../../public/messages/message_pb";
import * as includes_protoc_gen_openapiv2_openapiv2_annotations_pb from "../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb";

interface IMessagesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendMessage: IMessagesService_ISendMessage;
    listMessages: IMessagesService_IListMessages;
}

interface IMessagesService_ISendMessage extends grpc.MethodDefinition<public_messages_message_pb.SendMessageRequest, public_messages_message_pb.Message> {
    path: "/eftypay.messages.Messages/SendMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_messages_message_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<public_messages_message_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<public_messages_message_pb.Message>;
    responseDeserialize: grpc.deserialize<public_messages_message_pb.Message>;
}
interface IMessagesService_IListMessages extends grpc.MethodDefinition<public_messages_message_pb.ListMessagesRequest, public_messages_message_pb.Message> {
    path: "/eftypay.messages.Messages/ListMessages";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<public_messages_message_pb.ListMessagesRequest>;
    requestDeserialize: grpc.deserialize<public_messages_message_pb.ListMessagesRequest>;
    responseSerialize: grpc.serialize<public_messages_message_pb.Message>;
    responseDeserialize: grpc.deserialize<public_messages_message_pb.Message>;
}

export const MessagesService: IMessagesService;

export interface IMessagesServer extends grpc.UntypedServiceImplementation {
    sendMessage: grpc.handleUnaryCall<public_messages_message_pb.SendMessageRequest, public_messages_message_pb.Message>;
    listMessages: grpc.handleServerStreamingCall<public_messages_message_pb.ListMessagesRequest, public_messages_message_pb.Message>;
}

export interface IMessagesClient {
    sendMessage(request: public_messages_message_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: public_messages_message_pb.Message) => void): grpc.ClientUnaryCall;
    sendMessage(request: public_messages_message_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_messages_message_pb.Message) => void): grpc.ClientUnaryCall;
    sendMessage(request: public_messages_message_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_messages_message_pb.Message) => void): grpc.ClientUnaryCall;
    listMessages(request: public_messages_message_pb.ListMessagesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_messages_message_pb.Message>;
    listMessages(request: public_messages_message_pb.ListMessagesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_messages_message_pb.Message>;
}

export class MessagesClient extends grpc.Client implements IMessagesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendMessage(request: public_messages_message_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: public_messages_message_pb.Message) => void): grpc.ClientUnaryCall;
    public sendMessage(request: public_messages_message_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_messages_message_pb.Message) => void): grpc.ClientUnaryCall;
    public sendMessage(request: public_messages_message_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_messages_message_pb.Message) => void): grpc.ClientUnaryCall;
    public listMessages(request: public_messages_message_pb.ListMessagesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_messages_message_pb.Message>;
    public listMessages(request: public_messages_message_pb.ListMessagesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_messages_message_pb.Message>;
}
