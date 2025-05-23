// source: public/finances/vat.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var common_finance_pb = require('../../common/finance_pb.js');
goog.object.extend(proto, common_finance_pb);
goog.exportSymbol('proto.eftypay.finances.CalculateVatRequest', null, global);
goog.exportSymbol('proto.eftypay.finances.CalculateVatResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.eftypay.finances.CalculateVatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.eftypay.finances.CalculateVatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.eftypay.finances.CalculateVatRequest.displayName = 'proto.eftypay.finances.CalculateVatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.eftypay.finances.CalculateVatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.eftypay.finances.CalculateVatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.eftypay.finances.CalculateVatResponse.displayName = 'proto.eftypay.finances.CalculateVatResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.eftypay.finances.CalculateVatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.eftypay.finances.CalculateVatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.eftypay.finances.CalculateVatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    itempricewithoutvat: jspb.Message.getFieldWithDefault(msg, 1, 0),
    supplierchargesvat: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    suppliercountry: jspb.Message.getFieldWithDefault(msg, 3, 0),
    supplierrepresentscompany: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    buyercountry: jspb.Message.getFieldWithDefault(msg, 5, 0),
    buyerrepresentscompany: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.eftypay.finances.CalculateVatRequest}
 */
proto.eftypay.finances.CalculateVatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.eftypay.finances.CalculateVatRequest;
  return proto.eftypay.finances.CalculateVatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.eftypay.finances.CalculateVatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.eftypay.finances.CalculateVatRequest}
 */
proto.eftypay.finances.CalculateVatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setItempricewithoutvat(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupplierchargesvat(value);
      break;
    case 3:
      var value = /** @type {!proto.eftypay.common.CountryCode} */ (reader.readEnum());
      msg.setSuppliercountry(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupplierrepresentscompany(value);
      break;
    case 5:
      var value = /** @type {!proto.eftypay.common.CountryCode} */ (reader.readEnum());
      msg.setBuyercountry(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBuyerrepresentscompany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.eftypay.finances.CalculateVatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.eftypay.finances.CalculateVatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.eftypay.finances.CalculateVatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItempricewithoutvat();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSupplierchargesvat();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSuppliercountry();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSupplierrepresentscompany();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBuyercountry();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getBuyerrepresentscompany();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int64 itemPriceWithoutVat = 1;
 * @return {number}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.getItempricewithoutvat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.eftypay.finances.CalculateVatRequest} returns this
 */
proto.eftypay.finances.CalculateVatRequest.prototype.setItempricewithoutvat = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool supplierChargesVat = 2;
 * @return {boolean}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.getSupplierchargesvat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eftypay.finances.CalculateVatRequest} returns this
 */
proto.eftypay.finances.CalculateVatRequest.prototype.setSupplierchargesvat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional eftypay.common.CountryCode supplierCountry = 3;
 * @return {!proto.eftypay.common.CountryCode}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.getSuppliercountry = function() {
  return /** @type {!proto.eftypay.common.CountryCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.eftypay.common.CountryCode} value
 * @return {!proto.eftypay.finances.CalculateVatRequest} returns this
 */
proto.eftypay.finances.CalculateVatRequest.prototype.setSuppliercountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool supplierRepresentsCompany = 4;
 * @return {boolean}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.getSupplierrepresentscompany = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eftypay.finances.CalculateVatRequest} returns this
 */
proto.eftypay.finances.CalculateVatRequest.prototype.setSupplierrepresentscompany = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional eftypay.common.CountryCode buyerCountry = 5;
 * @return {!proto.eftypay.common.CountryCode}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.getBuyercountry = function() {
  return /** @type {!proto.eftypay.common.CountryCode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.eftypay.common.CountryCode} value
 * @return {!proto.eftypay.finances.CalculateVatRequest} returns this
 */
proto.eftypay.finances.CalculateVatRequest.prototype.setBuyercountry = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool buyerRepresentsCompany = 6;
 * @return {boolean}
 */
proto.eftypay.finances.CalculateVatRequest.prototype.getBuyerrepresentscompany = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eftypay.finances.CalculateVatRequest} returns this
 */
proto.eftypay.finances.CalculateVatRequest.prototype.setBuyerrepresentscompany = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.eftypay.finances.CalculateVatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.eftypay.finances.CalculateVatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.eftypay.finances.CalculateVatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chargevat: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    vatoutofscope: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    vatreversecharge: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    vatonestopshop: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    vatpercentage: jspb.Message.getFieldWithDefault(msg, 5, 0),
    vatamount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    amountincludingvat: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.eftypay.finances.CalculateVatResponse}
 */
proto.eftypay.finances.CalculateVatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.eftypay.finances.CalculateVatResponse;
  return proto.eftypay.finances.CalculateVatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.eftypay.finances.CalculateVatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.eftypay.finances.CalculateVatResponse}
 */
proto.eftypay.finances.CalculateVatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChargevat(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVatoutofscope(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVatreversecharge(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVatonestopshop(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVatpercentage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVatamount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmountincludingvat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.eftypay.finances.CalculateVatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.eftypay.finances.CalculateVatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.eftypay.finances.CalculateVatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargevat();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getVatoutofscope();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getVatreversecharge();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getVatonestopshop();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getVatpercentage();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getVatamount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getAmountincludingvat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional bool chargeVat = 1;
 * @return {boolean}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.getChargevat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eftypay.finances.CalculateVatResponse} returns this
 */
proto.eftypay.finances.CalculateVatResponse.prototype.setChargevat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool vatOutOfScope = 2;
 * @return {boolean}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.getVatoutofscope = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eftypay.finances.CalculateVatResponse} returns this
 */
proto.eftypay.finances.CalculateVatResponse.prototype.setVatoutofscope = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool vatReverseCharge = 3;
 * @return {boolean}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.getVatreversecharge = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eftypay.finances.CalculateVatResponse} returns this
 */
proto.eftypay.finances.CalculateVatResponse.prototype.setVatreversecharge = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool vatOneStopShop = 4;
 * @return {boolean}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.getVatonestopshop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.eftypay.finances.CalculateVatResponse} returns this
 */
proto.eftypay.finances.CalculateVatResponse.prototype.setVatonestopshop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 vatPercentage = 5;
 * @return {number}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.getVatpercentage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.eftypay.finances.CalculateVatResponse} returns this
 */
proto.eftypay.finances.CalculateVatResponse.prototype.setVatpercentage = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 vatAmount = 6;
 * @return {number}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.getVatamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.eftypay.finances.CalculateVatResponse} returns this
 */
proto.eftypay.finances.CalculateVatResponse.prototype.setVatamount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 amountIncludingVat = 7;
 * @return {number}
 */
proto.eftypay.finances.CalculateVatResponse.prototype.getAmountincludingvat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.eftypay.finances.CalculateVatResponse} returns this
 */
proto.eftypay.finances.CalculateVatResponse.prototype.setAmountincludingvat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


goog.object.extend(exports, proto.eftypay.finances);
