import * as grpcWeb from 'grpc-web';

import * as aim_api_v1_aim_service_pb from '../../../aim/api/v1/aim_service_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class AimServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addRemote(
    request: aim_api_v1_aim_service_pb.AddRemoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.AddRemoteResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.AddRemoteResponse>;

  addButtons(
    request: aim_api_v1_aim_service_pb.AddButtonsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getRemotes(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.GetRemotesResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.GetRemotesResponse>;

  getRemote(
    request: aim_api_v1_aim_service_pb.GetRemoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.GetRemoteResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.GetRemoteResponse>;

  getButtons(
    request: aim_api_v1_aim_service_pb.GetButtonsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.GetButtonsResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.GetButtonsResponse>;

  getIrData(
    request: aim_api_v1_aim_service_pb.GetIrDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_any_pb.Any) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_any_pb.Any>;

  editRemote(
    request: aim_api_v1_aim_service_pb.EditRemoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  editButton(
    request: aim_api_v1_aim_service_pb.EditButtonRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  setIrData(
    request: aim_api_v1_aim_service_pb.SetIRDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteRemote(
    request: aim_api_v1_aim_service_pb.DeleteRemoteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteButton(
    request: aim_api_v1_aim_service_pb.DeleteButtonRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  notifyUpdate(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.UpdateNotification>;

}

export class AimServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addRemote(
    request: aim_api_v1_aim_service_pb.AddRemoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.AddRemoteResponse>;

  addButtons(
    request: aim_api_v1_aim_service_pb.AddButtonsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getRemotes(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.GetRemotesResponse>;

  getRemote(
    request: aim_api_v1_aim_service_pb.GetRemoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.GetRemoteResponse>;

  getButtons(
    request: aim_api_v1_aim_service_pb.GetButtonsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.GetButtonsResponse>;

  getIrData(
    request: aim_api_v1_aim_service_pb.GetIrDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_any_pb.Any>;

  editRemote(
    request: aim_api_v1_aim_service_pb.EditRemoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  editButton(
    request: aim_api_v1_aim_service_pb.EditButtonRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setIrData(
    request: aim_api_v1_aim_service_pb.SetIRDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteRemote(
    request: aim_api_v1_aim_service_pb.DeleteRemoteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteButton(
    request: aim_api_v1_aim_service_pb.DeleteButtonRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  notifyUpdate(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.UpdateNotification>;

}

