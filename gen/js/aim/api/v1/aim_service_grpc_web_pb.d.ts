import * as grpcWeb from 'grpc-web';

import * as aim_api_v1_aim_service_pb from '../../../aim/api/v1/aim_service_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class AimServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addAppliance(
    request: aim_api_v1_aim_service_pb.AddApplianceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.AddApplianceResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.AddApplianceResponse>;

  addCommand(
    request: aim_api_v1_aim_service_pb.AddCommandRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getAppliances(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.GetAppliancesResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.GetAppliancesResponse>;

  getAppliance(
    request: aim_api_v1_aim_service_pb.GetApplianceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.GetApplianceResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.GetApplianceResponse>;

  getCommands(
    request: aim_api_v1_aim_service_pb.GetCommandsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: aim_api_v1_aim_service_pb.GetCommandsResponse) => void
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.GetCommandsResponse>;

  getIrData(
    request: aim_api_v1_aim_service_pb.GetIrDataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_any_pb.Any) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_any_pb.Any>;

  renameAppliance(
    request: aim_api_v1_aim_service_pb.RenameApplianceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  changeDevice(
    request: aim_api_v1_aim_service_pb.ChangeDeviceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  renameCommand(
    request: aim_api_v1_aim_service_pb.RenameCommandRequest,
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

  deleteAppliance(
    request: aim_api_v1_aim_service_pb.DeleteApplianceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteCommand(
    request: aim_api_v1_aim_service_pb.DeleteCommandRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  notifyApplianceUpdate(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.ApplianceUpdateNotification>;

}

export class AimServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  addAppliance(
    request: aim_api_v1_aim_service_pb.AddApplianceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.AddApplianceResponse>;

  addCommand(
    request: aim_api_v1_aim_service_pb.AddCommandRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getAppliances(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.GetAppliancesResponse>;

  getAppliance(
    request: aim_api_v1_aim_service_pb.GetApplianceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.GetApplianceResponse>;

  getCommands(
    request: aim_api_v1_aim_service_pb.GetCommandsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<aim_api_v1_aim_service_pb.GetCommandsResponse>;

  getIrData(
    request: aim_api_v1_aim_service_pb.GetIrDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_any_pb.Any>;

  renameAppliance(
    request: aim_api_v1_aim_service_pb.RenameApplianceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  changeDevice(
    request: aim_api_v1_aim_service_pb.ChangeDeviceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  renameCommand(
    request: aim_api_v1_aim_service_pb.RenameCommandRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  setIrData(
    request: aim_api_v1_aim_service_pb.SetIRDataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteAppliance(
    request: aim_api_v1_aim_service_pb.DeleteApplianceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteCommand(
    request: aim_api_v1_aim_service_pb.DeleteCommandRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  notifyApplianceUpdate(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<aim_api_v1_aim_service_pb.ApplianceUpdateNotification>;

}

