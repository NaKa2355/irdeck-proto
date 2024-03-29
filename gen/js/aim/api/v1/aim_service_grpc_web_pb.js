/**
 * @fileoverview gRPC-Web generated client stub for aim
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.12.4
// source: aim/api/v1/aim_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var aim_api_v1_button_pb = require('../../../aim/api/v1/button_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var aim_api_v1_remote_pb = require('../../../aim/api/v1/remote_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.aim = require('./aim_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.aim.AimServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.aim.AimServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.AddRemoteRequest,
 *   !proto.aim.AddRemoteResponse>}
 */
const methodDescriptor_AimService_AddRemote = new grpc.web.MethodDescriptor(
  '/aim.AimService/AddRemote',
  grpc.web.MethodType.UNARY,
  proto.aim.AddRemoteRequest,
  proto.aim.AddRemoteResponse,
  /**
   * @param {!proto.aim.AddRemoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.aim.AddRemoteResponse.deserializeBinary
);


/**
 * @param {!proto.aim.AddRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.aim.AddRemoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.aim.AddRemoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.addRemote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/AddRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_AddRemote,
      callback);
};


/**
 * @param {!proto.aim.AddRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.aim.AddRemoteResponse>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.addRemote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/AddRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_AddRemote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.AddButtonRequest,
 *   !proto.aim.AddButtonsResponse>}
 */
const methodDescriptor_AimService_AddButton = new grpc.web.MethodDescriptor(
  '/aim.AimService/AddButton',
  grpc.web.MethodType.UNARY,
  proto.aim.AddButtonRequest,
  proto.aim.AddButtonsResponse,
  /**
   * @param {!proto.aim.AddButtonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.aim.AddButtonsResponse.deserializeBinary
);


/**
 * @param {!proto.aim.AddButtonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.aim.AddButtonsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.aim.AddButtonsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.addButton =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/AddButton',
      request,
      metadata || {},
      methodDescriptor_AimService_AddButton,
      callback);
};


/**
 * @param {!proto.aim.AddButtonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.aim.AddButtonsResponse>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.addButton =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/AddButton',
      request,
      metadata || {},
      methodDescriptor_AimService_AddButton);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.aim.GetRemotesResponse>}
 */
const methodDescriptor_AimService_GetRemotes = new grpc.web.MethodDescriptor(
  '/aim.AimService/GetRemotes',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.aim.GetRemotesResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.aim.GetRemotesResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.aim.GetRemotesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.aim.GetRemotesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.getRemotes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/GetRemotes',
      request,
      metadata || {},
      methodDescriptor_AimService_GetRemotes,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.aim.GetRemotesResponse>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.getRemotes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/GetRemotes',
      request,
      metadata || {},
      methodDescriptor_AimService_GetRemotes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.GetRemoteRequest,
 *   !proto.aim.GetRemoteResponse>}
 */
const methodDescriptor_AimService_GetRemote = new grpc.web.MethodDescriptor(
  '/aim.AimService/GetRemote',
  grpc.web.MethodType.UNARY,
  proto.aim.GetRemoteRequest,
  proto.aim.GetRemoteResponse,
  /**
   * @param {!proto.aim.GetRemoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.aim.GetRemoteResponse.deserializeBinary
);


/**
 * @param {!proto.aim.GetRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.aim.GetRemoteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.aim.GetRemoteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.getRemote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/GetRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_GetRemote,
      callback);
};


/**
 * @param {!proto.aim.GetRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.aim.GetRemoteResponse>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.getRemote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/GetRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_GetRemote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.GetButtonsRequest,
 *   !proto.aim.GetButtonsResponse>}
 */
const methodDescriptor_AimService_GetButtons = new grpc.web.MethodDescriptor(
  '/aim.AimService/GetButtons',
  grpc.web.MethodType.UNARY,
  proto.aim.GetButtonsRequest,
  proto.aim.GetButtonsResponse,
  /**
   * @param {!proto.aim.GetButtonsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.aim.GetButtonsResponse.deserializeBinary
);


/**
 * @param {!proto.aim.GetButtonsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.aim.GetButtonsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.aim.GetButtonsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.getButtons =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/GetButtons',
      request,
      metadata || {},
      methodDescriptor_AimService_GetButtons,
      callback);
};


/**
 * @param {!proto.aim.GetButtonsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.aim.GetButtonsResponse>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.getButtons =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/GetButtons',
      request,
      metadata || {},
      methodDescriptor_AimService_GetButtons);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.GetIrDataRequest,
 *   !proto.google.protobuf.Any>}
 */
const methodDescriptor_AimService_GetIrData = new grpc.web.MethodDescriptor(
  '/aim.AimService/GetIrData',
  grpc.web.MethodType.UNARY,
  proto.aim.GetIrDataRequest,
  google_protobuf_any_pb.Any,
  /**
   * @param {!proto.aim.GetIrDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_any_pb.Any.deserializeBinary
);


/**
 * @param {!proto.aim.GetIrDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Any)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Any>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.getIrData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/GetIrData',
      request,
      metadata || {},
      methodDescriptor_AimService_GetIrData,
      callback);
};


/**
 * @param {!proto.aim.GetIrDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Any>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.getIrData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/GetIrData',
      request,
      metadata || {},
      methodDescriptor_AimService_GetIrData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.EditRemoteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AimService_EditRemote = new grpc.web.MethodDescriptor(
  '/aim.AimService/EditRemote',
  grpc.web.MethodType.UNARY,
  proto.aim.EditRemoteRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.aim.EditRemoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.aim.EditRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.editRemote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/EditRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_EditRemote,
      callback);
};


/**
 * @param {!proto.aim.EditRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.editRemote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/EditRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_EditRemote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.EditButtonRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AimService_EditButton = new grpc.web.MethodDescriptor(
  '/aim.AimService/EditButton',
  grpc.web.MethodType.UNARY,
  proto.aim.EditButtonRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.aim.EditButtonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.aim.EditButtonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.editButton =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/EditButton',
      request,
      metadata || {},
      methodDescriptor_AimService_EditButton,
      callback);
};


/**
 * @param {!proto.aim.EditButtonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.editButton =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/EditButton',
      request,
      metadata || {},
      methodDescriptor_AimService_EditButton);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.SetIRDataRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AimService_SetIrData = new grpc.web.MethodDescriptor(
  '/aim.AimService/SetIrData',
  grpc.web.MethodType.UNARY,
  proto.aim.SetIRDataRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.aim.SetIRDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.aim.SetIRDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.setIrData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/SetIrData',
      request,
      metadata || {},
      methodDescriptor_AimService_SetIrData,
      callback);
};


/**
 * @param {!proto.aim.SetIRDataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.setIrData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/SetIrData',
      request,
      metadata || {},
      methodDescriptor_AimService_SetIrData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.DeleteRemoteRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AimService_DeleteRemote = new grpc.web.MethodDescriptor(
  '/aim.AimService/DeleteRemote',
  grpc.web.MethodType.UNARY,
  proto.aim.DeleteRemoteRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.aim.DeleteRemoteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.aim.DeleteRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.deleteRemote =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/DeleteRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_DeleteRemote,
      callback);
};


/**
 * @param {!proto.aim.DeleteRemoteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.deleteRemote =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/DeleteRemote',
      request,
      metadata || {},
      methodDescriptor_AimService_DeleteRemote);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.aim.DeleteButtonRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AimService_DeleteButton = new grpc.web.MethodDescriptor(
  '/aim.AimService/DeleteButton',
  grpc.web.MethodType.UNARY,
  proto.aim.DeleteButtonRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.aim.DeleteButtonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.aim.DeleteButtonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.deleteButton =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/aim.AimService/DeleteButton',
      request,
      metadata || {},
      methodDescriptor_AimService_DeleteButton,
      callback);
};


/**
 * @param {!proto.aim.DeleteButtonRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.aim.AimServicePromiseClient.prototype.deleteButton =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/aim.AimService/DeleteButton',
      request,
      metadata || {},
      methodDescriptor_AimService_DeleteButton);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.aim.UpdateNotification>}
 */
const methodDescriptor_AimService_NotifyUpdate = new grpc.web.MethodDescriptor(
  '/aim.AimService/NotifyUpdate',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.aim.UpdateNotification,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.aim.UpdateNotification.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.aim.UpdateNotification>}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServiceClient.prototype.notifyUpdate =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/aim.AimService/NotifyUpdate',
      request,
      metadata || {},
      methodDescriptor_AimService_NotifyUpdate);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.aim.UpdateNotification>}
 *     The XHR Node Readable Stream
 */
proto.aim.AimServicePromiseClient.prototype.notifyUpdate =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/aim.AimService/NotifyUpdate',
      request,
      metadata || {},
      methodDescriptor_AimService_NotifyUpdate);
};


module.exports = proto.aim;

