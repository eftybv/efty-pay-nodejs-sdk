// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var public_messages_message_pb = require('../../public/messages/message_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var includes_protoc$gen$openapiv2_openapiv2$annotations_pb = require('../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb.js');

function serialize_eftypay_messages_ListMessagesRequest(arg) {
  if (!(arg instanceof public_messages_message_pb.ListMessagesRequest)) {
    throw new Error('Expected argument of type eftypay.messages.ListMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_messages_ListMessagesRequest(buffer_arg) {
  return public_messages_message_pb.ListMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_messages_Message(arg) {
  if (!(arg instanceof public_messages_message_pb.Message)) {
    throw new Error('Expected argument of type eftypay.messages.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_messages_Message(buffer_arg) {
  return public_messages_message_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_messages_SendMessageRequest(arg) {
  if (!(arg instanceof public_messages_message_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type eftypay.messages.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_messages_SendMessageRequest(buffer_arg) {
  return public_messages_message_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Messages service allows for sending / adding messages to transactions.
// Message methods are only available to integrators.
var MessagesService = exports.MessagesService = {
  // SendMessage adds / sends a message for a transaction.
sendMessage: {
    path: '/eftypay.messages.Messages/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: public_messages_message_pb.SendMessageRequest,
    responseType: public_messages_message_pb.Message,
    requestSerialize: serialize_eftypay_messages_SendMessageRequest,
    requestDeserialize: deserialize_eftypay_messages_SendMessageRequest,
    responseSerialize: serialize_eftypay_messages_Message,
    responseDeserialize: deserialize_eftypay_messages_Message,
  },
  // ListMessages lists all the messages for a transaction.
listMessages: {
    path: '/eftypay.messages.Messages/ListMessages',
    requestStream: false,
    responseStream: true,
    requestType: public_messages_message_pb.ListMessagesRequest,
    responseType: public_messages_message_pb.Message,
    requestSerialize: serialize_eftypay_messages_ListMessagesRequest,
    requestDeserialize: deserialize_eftypay_messages_ListMessagesRequest,
    responseSerialize: serialize_eftypay_messages_Message,
    responseDeserialize: deserialize_eftypay_messages_Message,
  },
};

exports.MessagesClient = grpc.makeGenericClientConstructor(MessagesService, 'Messages');
