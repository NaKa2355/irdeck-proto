// source: pirem/api/v1/irdata.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.irdata.RawIrData');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.irdata.RawIrData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irdata.RawIrData.repeatedFields_, null);
};
goog.inherits(proto.irdata.RawIrData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irdata.RawIrData.displayName = 'proto.irdata.RawIrData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irdata.RawIrData.repeatedFields_ = [2];



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
proto.irdata.RawIrData.prototype.toObject = function(opt_includeInstance) {
  return proto.irdata.RawIrData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irdata.RawIrData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irdata.RawIrData.toObject = function(includeInstance, msg) {
  var f, obj = {
    carrierFreqKhz: jspb.Message.getFieldWithDefault(msg, 1, 0),
    onOffPluseNsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.irdata.RawIrData}
 */
proto.irdata.RawIrData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irdata.RawIrData;
  return proto.irdata.RawIrData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irdata.RawIrData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irdata.RawIrData}
 */
proto.irdata.RawIrData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCarrierFreqKhz(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setOnOffPluseNsList(value);
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
proto.irdata.RawIrData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irdata.RawIrData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irdata.RawIrData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irdata.RawIrData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCarrierFreqKhz();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOnOffPluseNsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 carrier_freq_khz = 1;
 * @return {number}
 */
proto.irdata.RawIrData.prototype.getCarrierFreqKhz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.irdata.RawIrData} returns this
 */
proto.irdata.RawIrData.prototype.setCarrierFreqKhz = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated uint32 on_off_pluse_ns = 2;
 * @return {!Array<number>}
 */
proto.irdata.RawIrData.prototype.getOnOffPluseNsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.irdata.RawIrData} returns this
 */
proto.irdata.RawIrData.prototype.setOnOffPluseNsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.irdata.RawIrData} returns this
 */
proto.irdata.RawIrData.prototype.addOnOffPluseNs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irdata.RawIrData} returns this
 */
proto.irdata.RawIrData.prototype.clearOnOffPluseNsList = function() {
  return this.setOnOffPluseNsList([]);
};


