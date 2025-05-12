// package: eftypay.users
// file: public/users/users_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as public_users_users_service_pb from "../../public/users/users_service_pb";
import * as common_common_pb from "../../common/common_pb";
import * as public_users_user_pb from "../../public/users/user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as includes_protoc_gen_openapiv2_openapiv2_annotations_pb from "../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserProfile: IUsersService_IGetUserProfile;
    createUser: IUsersService_ICreateUser;
    updateUser: IUsersService_IUpdateUser;
    listUsers: IUsersService_IListUsers;
    getUserById: IUsersService_IGetUserById;
    getUserByEmail: IUsersService_IGetUserByEmail;
    getApiCredentials: IUsersService_IGetApiCredentials;
    regenerateApiCredentials: IUsersService_IRegenerateApiCredentials;
}

interface IUsersService_IGetUserProfile extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, public_users_user_pb.User> {
    path: "/eftypay.users.Users/GetUserProfile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<public_users_user_pb.User>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.User>;
}
interface IUsersService_ICreateUser extends grpc.MethodDefinition<public_users_user_pb.UserRequest, public_users_user_pb.User> {
    path: "/eftypay.users.Users/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_users_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<public_users_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<public_users_user_pb.User>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.User>;
}
interface IUsersService_IUpdateUser extends grpc.MethodDefinition<public_users_user_pb.UserRequest, public_users_user_pb.User> {
    path: "/eftypay.users.Users/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<public_users_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<public_users_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<public_users_user_pb.User>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.User>;
}
interface IUsersService_IListUsers extends grpc.MethodDefinition<public_users_user_pb.ListUserRequest, public_users_user_pb.User> {
    path: "/eftypay.users.Users/ListUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<public_users_user_pb.ListUserRequest>;
    requestDeserialize: grpc.deserialize<public_users_user_pb.ListUserRequest>;
    responseSerialize: grpc.serialize<public_users_user_pb.User>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.User>;
}
interface IUsersService_IGetUserById extends grpc.MethodDefinition<common_common_pb.Id, public_users_user_pb.User> {
    path: "/eftypay.users.Users/GetUserById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.Id>;
    requestDeserialize: grpc.deserialize<common_common_pb.Id>;
    responseSerialize: grpc.serialize<public_users_user_pb.User>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.User>;
}
interface IUsersService_IGetUserByEmail extends grpc.MethodDefinition<common_common_pb.GetObjectRequest, public_users_user_pb.User> {
    path: "/eftypay.users.Users/GetUserByEmail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.GetObjectRequest>;
    requestDeserialize: grpc.deserialize<common_common_pb.GetObjectRequest>;
    responseSerialize: grpc.serialize<public_users_user_pb.User>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.User>;
}
interface IUsersService_IGetApiCredentials extends grpc.MethodDefinition<common_common_pb.Id, public_users_user_pb.ApiCredentials> {
    path: "/eftypay.users.Users/GetApiCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.Id>;
    requestDeserialize: grpc.deserialize<common_common_pb.Id>;
    responseSerialize: grpc.serialize<public_users_user_pb.ApiCredentials>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.ApiCredentials>;
}
interface IUsersService_IRegenerateApiCredentials extends grpc.MethodDefinition<common_common_pb.Id, public_users_user_pb.ApiCredentials> {
    path: "/eftypay.users.Users/RegenerateApiCredentials";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_pb.Id>;
    requestDeserialize: grpc.deserialize<common_common_pb.Id>;
    responseSerialize: grpc.serialize<public_users_user_pb.ApiCredentials>;
    responseDeserialize: grpc.deserialize<public_users_user_pb.ApiCredentials>;
}

export const UsersService: IUsersService;

export interface IUsersServer extends grpc.UntypedServiceImplementation {
    getUserProfile: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, public_users_user_pb.User>;
    createUser: grpc.handleUnaryCall<public_users_user_pb.UserRequest, public_users_user_pb.User>;
    updateUser: grpc.handleUnaryCall<public_users_user_pb.UserRequest, public_users_user_pb.User>;
    listUsers: grpc.handleServerStreamingCall<public_users_user_pb.ListUserRequest, public_users_user_pb.User>;
    getUserById: grpc.handleUnaryCall<common_common_pb.Id, public_users_user_pb.User>;
    getUserByEmail: grpc.handleUnaryCall<common_common_pb.GetObjectRequest, public_users_user_pb.User>;
    getApiCredentials: grpc.handleUnaryCall<common_common_pb.Id, public_users_user_pb.ApiCredentials>;
    regenerateApiCredentials: grpc.handleUnaryCall<common_common_pb.Id, public_users_user_pb.ApiCredentials>;
}

export interface IUsersClient {
    getUserProfile(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserProfile(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserProfile(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: public_users_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: public_users_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: public_users_user_pb.ListUserRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_users_user_pb.User>;
    listUsers(request: public_users_user_pb.ListUserRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_users_user_pb.User>;
    getUserById(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserById(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserById(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: common_common_pb.GetObjectRequest, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: common_common_pb.GetObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: common_common_pb.GetObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    getApiCredentials(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    getApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    getApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    regenerateApiCredentials(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    regenerateApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    regenerateApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUserProfile(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserProfile(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserProfile(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: public_users_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: public_users_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: public_users_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: public_users_user_pb.ListUserRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_users_user_pb.User>;
    public listUsers(request: public_users_user_pb.ListUserRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<public_users_user_pb.User>;
    public getUserById(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserById(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserById(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: common_common_pb.GetObjectRequest, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: common_common_pb.GetObjectRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: common_common_pb.GetObjectRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.User) => void): grpc.ClientUnaryCall;
    public getApiCredentials(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    public getApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    public getApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    public regenerateApiCredentials(request: common_common_pb.Id, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    public regenerateApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
    public regenerateApiCredentials(request: common_common_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: public_users_user_pb.ApiCredentials) => void): grpc.ClientUnaryCall;
}
