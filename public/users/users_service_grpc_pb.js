// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_common_pb = require('../../common/common_pb.js');
var public_users_user_pb = require('../../public/users/user_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var includes_protoc$gen$openapiv2_openapiv2$annotations_pb = require('../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb.js');

function serialize_eftypay_common_GetObjectRequest(arg) {
  if (!(arg instanceof common_common_pb.GetObjectRequest)) {
    throw new Error('Expected argument of type eftypay.common.GetObjectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_common_GetObjectRequest(buffer_arg) {
  return common_common_pb.GetObjectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_common_Id(arg) {
  if (!(arg instanceof common_common_pb.Id)) {
    throw new Error('Expected argument of type eftypay.common.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_common_Id(buffer_arg) {
  return common_common_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_users_ApiCredentials(arg) {
  if (!(arg instanceof public_users_user_pb.ApiCredentials)) {
    throw new Error('Expected argument of type eftypay.users.ApiCredentials');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_users_ApiCredentials(buffer_arg) {
  return public_users_user_pb.ApiCredentials.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_users_ListUserRequest(arg) {
  if (!(arg instanceof public_users_user_pb.ListUserRequest)) {
    throw new Error('Expected argument of type eftypay.users.ListUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_users_ListUserRequest(buffer_arg) {
  return public_users_user_pb.ListUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_users_User(arg) {
  if (!(arg instanceof public_users_user_pb.User)) {
    throw new Error('Expected argument of type eftypay.users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_users_User(buffer_arg) {
  return public_users_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_users_UserRequest(arg) {
  if (!(arg instanceof public_users_user_pb.UserRequest)) {
    throw new Error('Expected argument of type eftypay.users.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_users_UserRequest(buffer_arg) {
  return public_users_user_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Users service allows for management of buyer & sellers within the Efty Pay backend.
// User methods are only available to integrators.
var UsersService = exports.UsersService = {
  // GetUserProfile returns the User data for the logged in user.
getUserProfile: {
    path: '/eftypay.users.Users/GetUserProfile',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: public_users_user_pb.User,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_eftypay_users_User,
    responseDeserialize: deserialize_eftypay_users_User,
  },
  // CreateUser creates a new user and returns the User object.
createUser: {
    path: '/eftypay.users.Users/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: public_users_user_pb.UserRequest,
    responseType: public_users_user_pb.User,
    requestSerialize: serialize_eftypay_users_UserRequest,
    requestDeserialize: deserialize_eftypay_users_UserRequest,
    responseSerialize: serialize_eftypay_users_User,
    responseDeserialize: deserialize_eftypay_users_User,
  },
  // UpdateUser updates an existing user and returns the User object.
// Note that the whole user object needs to be provided, and all writeable values are overwritten.
updateUser: {
    path: '/eftypay.users.Users/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: public_users_user_pb.UserRequest,
    responseType: public_users_user_pb.User,
    requestSerialize: serialize_eftypay_users_UserRequest,
    requestDeserialize: deserialize_eftypay_users_UserRequest,
    responseSerialize: serialize_eftypay_users_User,
    responseDeserialize: deserialize_eftypay_users_User,
  },
  // ListUsers lists all the users for the integrator.
listUsers: {
    path: '/eftypay.users.Users/ListUsers',
    requestStream: false,
    responseStream: true,
    requestType: public_users_user_pb.ListUserRequest,
    responseType: public_users_user_pb.User,
    requestSerialize: serialize_eftypay_users_ListUserRequest,
    requestDeserialize: deserialize_eftypay_users_ListUserRequest,
    responseSerialize: serialize_eftypay_users_User,
    responseDeserialize: deserialize_eftypay_users_User,
  },
  // GetUserById gets an existing user by ID.
getUserById: {
    path: '/eftypay.users.Users/GetUserById',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.Id,
    responseType: public_users_user_pb.User,
    requestSerialize: serialize_eftypay_common_Id,
    requestDeserialize: deserialize_eftypay_common_Id,
    responseSerialize: serialize_eftypay_users_User,
    responseDeserialize: deserialize_eftypay_users_User,
  },
  // GetUserByEmail gets an existing user by email address.
getUserByEmail: {
    path: '/eftypay.users.Users/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.GetObjectRequest,
    responseType: public_users_user_pb.User,
    requestSerialize: serialize_eftypay_common_GetObjectRequest,
    requestDeserialize: deserialize_eftypay_common_GetObjectRequest,
    responseSerialize: serialize_eftypay_users_User,
    responseDeserialize: deserialize_eftypay_users_User,
  },
  // GetApiCredentials gets the API credentials for a user.
getApiCredentials: {
    path: '/eftypay.users.Users/GetApiCredentials',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.Id,
    responseType: public_users_user_pb.ApiCredentials,
    requestSerialize: serialize_eftypay_common_Id,
    requestDeserialize: deserialize_eftypay_common_Id,
    responseSerialize: serialize_eftypay_users_ApiCredentials,
    responseDeserialize: deserialize_eftypay_users_ApiCredentials,
  },
  // RegenerateApiCredentials regenerates API credentials for a user.
regenerateApiCredentials: {
    path: '/eftypay.users.Users/RegenerateApiCredentials',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.Id,
    responseType: public_users_user_pb.ApiCredentials,
    requestSerialize: serialize_eftypay_common_Id,
    requestDeserialize: deserialize_eftypay_common_Id,
    responseSerialize: serialize_eftypay_users_ApiCredentials,
    responseDeserialize: deserialize_eftypay_users_ApiCredentials,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService, 'Users');
