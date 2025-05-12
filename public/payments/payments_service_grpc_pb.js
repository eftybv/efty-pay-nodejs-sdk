// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_common_pb = require('../../common/common_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var includes_protoc$gen$openapiv2_openapiv2$annotations_pb = require('../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb.js');
var public_payments_mangopay_onboarding_pb = require('../../public/payments/mangopay/onboarding_pb.js');

function serialize_eftypay_common_Id(arg) {
  if (!(arg instanceof common_common_pb.Id)) {
    throw new Error('Expected argument of type eftypay.common.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_common_Id(buffer_arg) {
  return common_common_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_common_ReturnString(arg) {
  if (!(arg instanceof common_common_pb.ReturnString)) {
    throw new Error('Expected argument of type eftypay.common.ReturnString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_common_ReturnString(buffer_arg) {
  return common_common_pb.ReturnString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_payments_mangopay_MangopayOnboarding(arg) {
  if (!(arg instanceof public_payments_mangopay_onboarding_pb.MangopayOnboarding)) {
    throw new Error('Expected argument of type eftypay.payments.mangopay.MangopayOnboarding');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_payments_mangopay_MangopayOnboarding(buffer_arg) {
  return public_payments_mangopay_onboarding_pb.MangopayOnboarding.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Payments service allows for management of Payments (on-boarding, checkout, etc) with Efty Pay's payment partners.
var PaymentsService = exports.PaymentsService = {
  // CreateSellerOnboardingForMangopay initiates the on-boarding for a seller for Mangopay.
createSellerOnboardingForMangopay: {
    path: '/eftypay.payments.Payments/CreateSellerOnboardingForMangopay',
    requestStream: false,
    responseStream: false,
    requestType: public_payments_mangopay_onboarding_pb.MangopayOnboarding,
    responseType: public_payments_mangopay_onboarding_pb.MangopayOnboarding,
    requestSerialize: serialize_eftypay_payments_mangopay_MangopayOnboarding,
    requestDeserialize: deserialize_eftypay_payments_mangopay_MangopayOnboarding,
    responseSerialize: serialize_eftypay_payments_mangopay_MangopayOnboarding,
    responseDeserialize: deserialize_eftypay_payments_mangopay_MangopayOnboarding,
  },
  // UpdateSellerOnboardingForMangopay updates an existing Mangopay on-boarding application.
// Note that the whole request object needs to be provided, and all writeable values are overwritten.
updateSellerOnboardingForMangopay: {
    path: '/eftypay.payments.Payments/UpdateSellerOnboardingForMangopay',
    requestStream: false,
    responseStream: false,
    requestType: public_payments_mangopay_onboarding_pb.MangopayOnboarding,
    responseType: public_payments_mangopay_onboarding_pb.MangopayOnboarding,
    requestSerialize: serialize_eftypay_payments_mangopay_MangopayOnboarding,
    requestDeserialize: deserialize_eftypay_payments_mangopay_MangopayOnboarding,
    responseSerialize: serialize_eftypay_payments_mangopay_MangopayOnboarding,
    responseDeserialize: deserialize_eftypay_payments_mangopay_MangopayOnboarding,
  },
  // GetOnboardingStatusForMangopay gets details about an existing Mangopay on-boarding application.
// It requires the ID of the seller user to be passed in.
getOnboardingStatusForMangopay: {
    path: '/eftypay.payments.Payments/GetOnboardingStatusForMangopay',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.Id,
    responseType: public_payments_mangopay_onboarding_pb.MangopayOnboarding,
    requestSerialize: serialize_eftypay_common_Id,
    requestDeserialize: deserialize_eftypay_common_Id,
    responseSerialize: serialize_eftypay_payments_mangopay_MangopayOnboarding,
    responseDeserialize: deserialize_eftypay_payments_mangopay_MangopayOnboarding,
  },
  // GetGenericMagicLink generates a generic magic link for a seller to access the onboarding portal.
// It requires the ID of the seller user to be passed in.
getGenericMagicLink: {
    path: '/eftypay.payments.Payments/GetGenericMagicLink',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.Id,
    responseType: common_common_pb.ReturnString,
    requestSerialize: serialize_eftypay_common_Id,
    requestDeserialize: deserialize_eftypay_common_Id,
    responseSerialize: serialize_eftypay_common_ReturnString,
    responseDeserialize: deserialize_eftypay_common_ReturnString,
  },
};

exports.PaymentsClient = grpc.makeGenericClientConstructor(PaymentsService, 'Payments');
