import * as grpcWeb from 'grpc-web';

import * as pirem_api_v1_device_info_pb from '../../../pirem/api/v1/device_info_pb';
import * as pirem_api_v1_pirem_service_pb from '../../../pirem/api/v1/pirem_service_pb';


export class PiRemServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendIr(
    request: pirem_api_v1_pirem_service_pb.SendIrRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pirem_api_v1_pirem_service_pb.SendIrResponse) => void
  ): grpcWeb.ClientReadableStream<pirem_api_v1_pirem_service_pb.SendIrResponse>;

  receiveIr(
    request: pirem_api_v1_pirem_service_pb.ReceiveIrRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pirem_api_v1_pirem_service_pb.ReceiveIrResponse) => void
  ): grpcWeb.ClientReadableStream<pirem_api_v1_pirem_service_pb.ReceiveIrResponse>;

  getAllDeviceInfo(
    request: pirem_api_v1_pirem_service_pb.GetAllDeviceInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pirem_api_v1_pirem_service_pb.GetAllDeviceInfoResponse) => void
  ): grpcWeb.ClientReadableStream<pirem_api_v1_pirem_service_pb.GetAllDeviceInfoResponse>;

  getDeviceInfo(
    request: pirem_api_v1_pirem_service_pb.GetDeviceInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: pirem_api_v1_device_info_pb.DeviceInfo) => void
  ): grpcWeb.ClientReadableStream<pirem_api_v1_device_info_pb.DeviceInfo>;

}

export class PiRemServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sendIr(
    request: pirem_api_v1_pirem_service_pb.SendIrRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<pirem_api_v1_pirem_service_pb.SendIrResponse>;

  receiveIr(
    request: pirem_api_v1_pirem_service_pb.ReceiveIrRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<pirem_api_v1_pirem_service_pb.ReceiveIrResponse>;

  getAllDeviceInfo(
    request: pirem_api_v1_pirem_service_pb.GetAllDeviceInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<pirem_api_v1_pirem_service_pb.GetAllDeviceInfoResponse>;

  getDeviceInfo(
    request: pirem_api_v1_pirem_service_pb.GetDeviceInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<pirem_api_v1_device_info_pb.DeviceInfo>;

}

