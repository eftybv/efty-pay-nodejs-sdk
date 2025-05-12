// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var includes_protoc$gen$openapiv2_openapiv2$annotations_pb = require('../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb.js');
var public_finances_vat_pb = require('../../public/finances/vat_pb.js');

function serialize_eftypay_finances_CalculateVatRequest(arg) {
  if (!(arg instanceof public_finances_vat_pb.CalculateVatRequest)) {
    throw new Error('Expected argument of type eftypay.finances.CalculateVatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_finances_CalculateVatRequest(buffer_arg) {
  return public_finances_vat_pb.CalculateVatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_finances_CalculateVatResponse(arg) {
  if (!(arg instanceof public_finances_vat_pb.CalculateVatResponse)) {
    throw new Error('Expected argument of type eftypay.finances.CalculateVatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_finances_CalculateVatResponse(buffer_arg) {
  return public_finances_vat_pb.CalculateVatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Finances service provides generic finance tools & services.
var FinancesService = exports.FinancesService = {
  // CalculateVat gets an invoice by invoice ID.
calculateVatPublic: {
    path: '/eftypay.finances.Finances/CalculateVatPublic',
    requestStream: false,
    responseStream: false,
    requestType: public_finances_vat_pb.CalculateVatRequest,
    responseType: public_finances_vat_pb.CalculateVatResponse,
    requestSerialize: serialize_eftypay_finances_CalculateVatRequest,
    requestDeserialize: deserialize_eftypay_finances_CalculateVatRequest,
    responseSerialize: serialize_eftypay_finances_CalculateVatResponse,
    responseDeserialize: deserialize_eftypay_finances_CalculateVatResponse,
  },
};

exports.FinancesClient = grpc.makeGenericClientConstructor(FinancesService, 'Finances');
