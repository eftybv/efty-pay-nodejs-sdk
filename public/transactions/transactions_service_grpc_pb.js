// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var common_common_pb = require('../../common/common_pb.js');
var common_encrypt_pb = require('../../common/encrypt_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var public_transactions_transaction_pb = require('../../public/transactions/transaction_pb.js');
var public_transactions_activity_activity_pb = require('../../public/transactions/activity/activity_pb.js');
var includes_protoc$gen$openapiv2_openapiv2$annotations_pb = require('../../includes/protoc-gen-openapiv2/openapiv2-annotations_pb.js');

function serialize_eftypay_common_EncryptedLinkRequest(arg) {
  if (!(arg instanceof common_encrypt_pb.EncryptedLinkRequest)) {
    throw new Error('Expected argument of type eftypay.common.EncryptedLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_common_EncryptedLinkRequest(buffer_arg) {
  return common_encrypt_pb.EncryptedLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_eftypay_common_ReturnString(arg) {
  if (!(arg instanceof common_common_pb.ReturnString)) {
    throw new Error('Expected argument of type eftypay.common.ReturnString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_common_ReturnString(buffer_arg) {
  return common_common_pb.ReturnString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_GetNextPossibleStatusAndSubStatusRequest(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest)) {
    throw new Error('Expected argument of type eftypay.transactions.GetNextPossibleStatusAndSubStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_GetNextPossibleStatusAndSubStatusRequest(buffer_arg) {
  return public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_ListTransactionsRequest(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.ListTransactionsRequest)) {
    throw new Error('Expected argument of type eftypay.transactions.ListTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_ListTransactionsRequest(buffer_arg) {
  return public_transactions_transaction_pb.ListTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_PushTransactionToNextAvailableStatusRequest(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest)) {
    throw new Error('Expected argument of type eftypay.transactions.PushTransactionToNextAvailableStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_PushTransactionToNextAvailableStatusRequest(buffer_arg) {
  return public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_Transaction(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.Transaction)) {
    throw new Error('Expected argument of type eftypay.transactions.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_Transaction(buffer_arg) {
  return public_transactions_transaction_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_TransactionMagicLinkEncryptedPayload(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload)) {
    throw new Error('Expected argument of type eftypay.transactions.TransactionMagicLinkEncryptedPayload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_TransactionMagicLinkEncryptedPayload(buffer_arg) {
  return public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_TransactionMagicLinkPayload(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.TransactionMagicLinkPayload)) {
    throw new Error('Expected argument of type eftypay.transactions.TransactionMagicLinkPayload');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_TransactionMagicLinkPayload(buffer_arg) {
  return public_transactions_transaction_pb.TransactionMagicLinkPayload.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_TransactionMagicLinkResponse(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.TransactionMagicLinkResponse)) {
    throw new Error('Expected argument of type eftypay.transactions.TransactionMagicLinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_TransactionMagicLinkResponse(buffer_arg) {
  return public_transactions_transaction_pb.TransactionMagicLinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_TransactionRequest(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.TransactionRequest)) {
    throw new Error('Expected argument of type eftypay.transactions.TransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_TransactionRequest(buffer_arg) {
  return public_transactions_transaction_pb.TransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_UpdateTransactionMetaDataRequest(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.UpdateTransactionMetaDataRequest)) {
    throw new Error('Expected argument of type eftypay.transactions.UpdateTransactionMetaDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_UpdateTransactionMetaDataRequest(buffer_arg) {
  return public_transactions_transaction_pb.UpdateTransactionMetaDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_UpdateTransactionWithEncryptPublicRequest(arg) {
  if (!(arg instanceof public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest)) {
    throw new Error('Expected argument of type eftypay.transactions.UpdateTransactionWithEncryptPublicRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_UpdateTransactionWithEncryptPublicRequest(buffer_arg) {
  return public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_activity_GetStatusChangeConfigurationResponse(arg) {
  if (!(arg instanceof public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse)) {
    throw new Error('Expected argument of type eftypay.transactions.activity.GetStatusChangeConfigurationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_activity_GetStatusChangeConfigurationResponse(buffer_arg) {
  return public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_eftypay_transactions_activity_TransactionActivity(arg) {
  if (!(arg instanceof public_transactions_activity_activity_pb.TransactionActivity)) {
    throw new Error('Expected argument of type eftypay.transactions.activity.TransactionActivity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_eftypay_transactions_activity_TransactionActivity(buffer_arg) {
  return public_transactions_activity_activity_pb.TransactionActivity.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Transactions service allows for management of transactions within the Efty Pay backend.
// Transaction methods are only available to integrators.
var TransactionsService = exports.TransactionsService = {
  // CreateTransaction creates a new transaction and returns the Transaction object.
// The initial status of the transaction is set to TRANSACTION_STATUS_INITIATED.
createTransaction: {
    path: '/eftypay.transactions.Transactions/CreateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.TransactionRequest,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_transactions_TransactionRequest,
    requestDeserialize: deserialize_eftypay_transactions_TransactionRequest,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // UpdateTransaction updates an existing transaction and returns the Transaction object.
// Note that the whole transaction object needs to be provided, and all writeable values are overwritten.
// Every update to a transaction results in a TransactionActivity record being created for this transaction, so all changes are record and accessible in the audit log for the transaction.
updateTransaction: {
    path: '/eftypay.transactions.Transactions/UpdateTransaction',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.TransactionRequest,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_transactions_TransactionRequest,
    requestDeserialize: deserialize_eftypay_transactions_TransactionRequest,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // PushTransactionToNextAvailableStatus pushes the status of a transaction into its next available status & sub-status, and allows for adding additional messaging / details.
// The method returns the whole transaction object.
pushTransactionToNextAvailableStatus: {
    path: '/eftypay.transactions.Transactions/PushTransactionToNextAvailableStatus',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.PushTransactionToNextAvailableStatusRequest,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_transactions_PushTransactionToNextAvailableStatusRequest,
    requestDeserialize: deserialize_eftypay_transactions_PushTransactionToNextAvailableStatusRequest,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // ListTransactions lists all the transactions for the integrator.
// In addition, the ListTransactionsRequest object can be used to list transactions for a specific buyer, seller, status, amount, etc.
listTransactions: {
    path: '/eftypay.transactions.Transactions/ListTransactions',
    requestStream: false,
    responseStream: true,
    requestType: public_transactions_transaction_pb.ListTransactionsRequest,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_transactions_ListTransactionsRequest,
    requestDeserialize: deserialize_eftypay_transactions_ListTransactionsRequest,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // GetTransactionById gets an existing transaction by ID.
getTransactionById: {
    path: '/eftypay.transactions.Transactions/GetTransactionById',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.Id,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_common_Id,
    requestDeserialize: deserialize_eftypay_common_Id,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // CancelTransaction cancels an existing transaction, by setting the status to TRANSACTION_STATUS_CANCELLED.
cancelTransaction: {
    path: '/eftypay.transactions.Transactions/CancelTransaction',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.TransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_eftypay_transactions_TransactionRequest,
    requestDeserialize: deserialize_eftypay_transactions_TransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteTransaction deletes an existing transaction. Please note that this method is irreversible, and can only be executed for transactions with status TRANSACTION_STATUS_INITIATED.
deleteTransaction: {
    path: '/eftypay.transactions.Transactions/DeleteTransaction',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.TransactionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_eftypay_transactions_TransactionRequest,
    requestDeserialize: deserialize_eftypay_transactions_TransactionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // SendTransactionMagicLinkEmail sends an email with an encrypted magic email to the buyer and/or seller of a transaction.
// Clicking this link will grant the user access to certain transaction details in the Efty Pay portal.
sendTransactionMagicLinkEmail: {
    path: '/eftypay.transactions.Transactions/SendTransactionMagicLinkEmail',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.TransactionMagicLinkPayload,
    responseType: public_transactions_transaction_pb.TransactionMagicLinkResponse,
    requestSerialize: serialize_eftypay_transactions_TransactionMagicLinkPayload,
    requestDeserialize: deserialize_eftypay_transactions_TransactionMagicLinkPayload,
    responseSerialize: serialize_eftypay_transactions_TransactionMagicLinkResponse,
    responseDeserialize: deserialize_eftypay_transactions_TransactionMagicLinkResponse,
  },
  // VerifyEncryptedMagicLinkAndSendOtpEmailPublic takes the encrypted payload from a magic link, validates it in the backend. And sends an OTP email if valid.
// This endpoint is a public endpoint.
verifyEncryptedMagicLinkAndSendOtpEmailPublic: {
    path: '/eftypay.transactions.Transactions/VerifyEncryptedMagicLinkAndSendOtpEmailPublic',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_eftypay_transactions_TransactionMagicLinkEncryptedPayload,
    requestDeserialize: deserialize_eftypay_transactions_TransactionMagicLinkEncryptedPayload,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // AuthenticateWithOtpPublic takes the encrypted payload from a magic link, and OTP, and if valid will return a temporary JWT to access certain protected API resources.
// This endpoint is a public endpoint.
authenticateWithOtpPublic: {
    path: '/eftypay.transactions.Transactions/AuthenticateWithOtpPublic',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.TransactionMagicLinkEncryptedPayload,
    responseType: common_common_pb.ReturnString,
    requestSerialize: serialize_eftypay_transactions_TransactionMagicLinkEncryptedPayload,
    requestDeserialize: deserialize_eftypay_transactions_TransactionMagicLinkEncryptedPayload,
    responseSerialize: serialize_eftypay_common_ReturnString,
    responseDeserialize: deserialize_eftypay_common_ReturnString,
  },
  // GetStatusChangeConfiguration returns an overview of which status & sub-status can be set by which user type.
getStatusChangeConfiguration: {
    path: '/eftypay.transactions.Transactions/GetStatusChangeConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: public_transactions_activity_activity_pb.GetStatusChangeConfigurationResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_eftypay_transactions_activity_GetStatusChangeConfigurationResponse,
    responseDeserialize: deserialize_eftypay_transactions_activity_GetStatusChangeConfigurationResponse,
  },
  // GetNextPossibleStatusAndSubStatus returns the next possible status for a transaction.
getNextPossibleStatusAndSubStatus: {
    path: '/eftypay.transactions.Transactions/GetNextPossibleStatusAndSubStatus',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.GetNextPossibleStatusAndSubStatusRequest,
    responseType: public_transactions_activity_activity_pb.TransactionActivity,
    requestSerialize: serialize_eftypay_transactions_GetNextPossibleStatusAndSubStatusRequest,
    requestDeserialize: deserialize_eftypay_transactions_GetNextPossibleStatusAndSubStatusRequest,
    responseSerialize: serialize_eftypay_transactions_activity_TransactionActivity,
    responseDeserialize: deserialize_eftypay_transactions_activity_TransactionActivity,
  },
  // ReRunWhoisForDomainTransaction reruns the WHOIS query for a domain in a transaction, and returns the updated transaction record with new WHOIS entry.
reRunWhoisForDomainTransaction: {
    path: '/eftypay.transactions.Transactions/ReRunWhoisForDomainTransaction',
    requestStream: false,
    responseStream: false,
    requestType: common_common_pb.Id,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_common_Id,
    requestDeserialize: deserialize_eftypay_common_Id,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // GetTransactionWithEncryptPublic gets an existing transaction by ID (provided in encrypted URL parameters, in the format of ?d=xx&i=xx&k=xx).
// This is a public endpoint used by the Efty Pay checkout widget.
// The endpoint returns limited transaction data, based on the sanitizePublic tag in the Transaction model.
getTransactionWithEncryptPublic: {
    path: '/eftypay.transactions.Transactions/GetTransactionWithEncryptPublic',
    requestStream: false,
    responseStream: false,
    requestType: common_encrypt_pb.EncryptedLinkRequest,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_common_EncryptedLinkRequest,
    requestDeserialize: deserialize_eftypay_common_EncryptedLinkRequest,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // UpdateTransactionWithEncryptPublic updates an existing transaction by ID (provided in encrypted URL parameters, in the format of ?d=xx&i=xx&k=xx).
// This is a public endpoint used by the Efty Pay checkout widget, and only allows for updating of limited fields & data.
// The endpoint returns limited transaction data, based on the sanitizePublic tag in the Transaction model.
updateTransactionWithEncryptPublic: {
    path: '/eftypay.transactions.Transactions/UpdateTransactionWithEncryptPublic',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.UpdateTransactionWithEncryptPublicRequest,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_transactions_UpdateTransactionWithEncryptPublicRequest,
    requestDeserialize: deserialize_eftypay_transactions_UpdateTransactionWithEncryptPublicRequest,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
  // SendTransactionMagicLinkEmailBuyerPublic sends an email with an encrypted magic email to the buyer of a transaction.
// Clicking this link will grant the user access to certain transaction details in the Efty Pay portal.
sendTransactionMagicLinkEmailBuyerPublic: {
    path: '/eftypay.transactions.Transactions/SendTransactionMagicLinkEmailBuyerPublic',
    requestStream: false,
    responseStream: false,
    requestType: common_encrypt_pb.EncryptedLinkRequest,
    responseType: public_transactions_transaction_pb.TransactionMagicLinkResponse,
    requestSerialize: serialize_eftypay_common_EncryptedLinkRequest,
    requestDeserialize: deserialize_eftypay_common_EncryptedLinkRequest,
    responseSerialize: serialize_eftypay_transactions_TransactionMagicLinkResponse,
    responseDeserialize: deserialize_eftypay_transactions_TransactionMagicLinkResponse,
  },
  // UpdateTransactionMetaData updates the meta-data for an existing transaction and returns the Transaction object.
// The whole meta-data object is overriden with this transaction.
updateTransactionMetaData: {
    path: '/eftypay.transactions.Transactions/UpdateTransactionMetaData',
    requestStream: false,
    responseStream: false,
    requestType: public_transactions_transaction_pb.UpdateTransactionMetaDataRequest,
    responseType: public_transactions_transaction_pb.Transaction,
    requestSerialize: serialize_eftypay_transactions_UpdateTransactionMetaDataRequest,
    requestDeserialize: deserialize_eftypay_transactions_UpdateTransactionMetaDataRequest,
    responseSerialize: serialize_eftypay_transactions_Transaction,
    responseDeserialize: deserialize_eftypay_transactions_Transaction,
  },
};

exports.TransactionsClient = grpc.makeGenericClientConstructor(TransactionsService, 'Transactions');
