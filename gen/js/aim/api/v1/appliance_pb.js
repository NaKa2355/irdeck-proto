// source: aim/api/v1/appliance.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.aim.Appliance', null, global);
goog.exportSymbol('proto.aim.Appliance.AppType', null, global);
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
proto.aim.Appliance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aim.Appliance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aim.Appliance.displayName = 'proto.aim.Appliance';
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
proto.aim.Appliance.prototype.toObject = function(opt_includeInstance) {
  return proto.aim.Appliance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aim.Appliance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aim.Appliance.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    applianceType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    canAddCommand: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.aim.Appliance}
 */
proto.aim.Appliance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aim.Appliance;
  return proto.aim.Appliance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aim.Appliance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aim.Appliance}
 */
proto.aim.Appliance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 4:
      var value = /** @type {!proto.aim.Appliance.AppType} */ (reader.readEnum());
      msg.setApplianceType(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanAddCommand(value);
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
proto.aim.Appliance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aim.Appliance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aim.Appliance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aim.Appliance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getApplianceType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCanAddCommand();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.aim.Appliance.AppType = {
  APP_TYPE_UNKNOWN: 0,
  CUSTOM: 1,
  BUTTON: 2,
  TOGGLE: 3,
  THERMOSTAT: 4
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.aim.Appliance.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aim.Appliance} returns this
 */
proto.aim.Appliance.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.aim.Appliance.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.aim.Appliance} returns this
 */
proto.aim.Appliance.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_id = 3;
 * @return {string}
 */
proto.aim.Appliance.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.aim.Appliance} returns this
 */
proto.aim.Appliance.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AppType appliance_type = 4;
 * @return {!proto.aim.Appliance.AppType}
 */
proto.aim.Appliance.prototype.getApplianceType = function() {
  return /** @type {!proto.aim.Appliance.AppType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.aim.Appliance.AppType} value
 * @return {!proto.aim.Appliance} returns this
 */
proto.aim.Appliance.prototype.setApplianceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool can_add_command = 5;
 * @return {boolean}
 */
proto.aim.Appliance.prototype.getCanAddCommand = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.aim.Appliance} returns this
 */
proto.aim.Appliance.prototype.setCanAddCommand = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


goog.object.extend(exports, proto.aim);
