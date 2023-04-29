// source: aim/api/v1/aim_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.aim.SetIRDataRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Any');

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
proto.aim.SetIRDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aim.SetIRDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aim.SetIRDataRequest.displayName = 'proto.aim.SetIRDataRequest';
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
proto.aim.SetIRDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.aim.SetIRDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aim.SetIRDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aim.SetIRDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applianceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commandId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    irdata: (f = msg.getIrdata()) && proto.google.protobuf.Any.toObject(includeInstance, f)
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
 * @return {!proto.aim.SetIRDataRequest}
 */
proto.aim.SetIRDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aim.SetIRDataRequest;
  return proto.aim.SetIRDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aim.SetIRDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aim.SetIRDataRequest}
 */
proto.aim.SetIRDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplianceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandId(value);
      break;
    case 3:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setIrdata(value);
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
proto.aim.SetIRDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aim.SetIRDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aim.SetIRDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aim.SetIRDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApplianceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommandId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIrdata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string appliance_id = 1;
 * @return {string}
 */
proto.aim.SetIRDataRequest.prototype.getApplianceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aim.SetIRDataRequest} returns this
 */
proto.aim.SetIRDataRequest.prototype.setApplianceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string command_id = 2;
 * @return {string}
 */
proto.aim.SetIRDataRequest.prototype.getCommandId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aim.SetIRDataRequest} returns this
 */
proto.aim.SetIRDataRequest.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Any irdata = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.aim.SetIRDataRequest.prototype.getIrdata = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.aim.SetIRDataRequest} returns this
*/
proto.aim.SetIRDataRequest.prototype.setIrdata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.aim.SetIRDataRequest} returns this
 */
proto.aim.SetIRDataRequest.prototype.clearIrdata = function() {
  return this.setIrdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aim.SetIRDataRequest.prototype.hasIrdata = function() {
  return jspb.Message.getField(this, 3) != null;
};

