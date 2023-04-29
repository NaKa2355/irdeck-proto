import * as jspb from 'google-protobuf'

import * as pirem_api_v1_device_info_pb from '../../../pirem/api/v1/device_info_pb';
import * as pirem_api_v1_irdata_pb from '../../../pirem/api/v1/irdata_pb';


export class SendIrRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): SendIrRequest;

  getIrData(): pirem_api_v1_irdata_pb.IrData | undefined;
  setIrData(value?: pirem_api_v1_irdata_pb.IrData): SendIrRequest;
  hasIrData(): boolean;
  clearIrData(): SendIrRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendIrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendIrRequest): SendIrRequest.AsObject;
  static serializeBinaryToWriter(message: SendIrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendIrRequest;
  static deserializeBinaryFromReader(message: SendIrRequest, reader: jspb.BinaryReader): SendIrRequest;
}

export namespace SendIrRequest {
  export type AsObject = {
    deviceId: string,
    irData?: pirem_api_v1_irdata_pb.IrData.AsObject,
  }
}

export class SendIrResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendIrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendIrResponse): SendIrResponse.AsObject;
  static serializeBinaryToWriter(message: SendIrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendIrResponse;
  static deserializeBinaryFromReader(message: SendIrResponse, reader: jspb.BinaryReader): SendIrResponse;
}

export namespace SendIrResponse {
  export type AsObject = {
  }
}

export class ReceiveIrRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): ReceiveIrRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveIrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveIrRequest): ReceiveIrRequest.AsObject;
  static serializeBinaryToWriter(message: ReceiveIrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveIrRequest;
  static deserializeBinaryFromReader(message: ReceiveIrRequest, reader: jspb.BinaryReader): ReceiveIrRequest;
}

export namespace ReceiveIrRequest {
  export type AsObject = {
    deviceId: string,
  }
}

export class ReceiveIrResponse extends jspb.Message {
  getIrData(): pirem_api_v1_irdata_pb.IrData | undefined;
  setIrData(value?: pirem_api_v1_irdata_pb.IrData): ReceiveIrResponse;
  hasIrData(): boolean;
  clearIrData(): ReceiveIrResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveIrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveIrResponse): ReceiveIrResponse.AsObject;
  static serializeBinaryToWriter(message: ReceiveIrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveIrResponse;
  static deserializeBinaryFromReader(message: ReceiveIrResponse, reader: jspb.BinaryReader): ReceiveIrResponse;
}

export namespace ReceiveIrResponse {
  export type AsObject = {
    irData?: pirem_api_v1_irdata_pb.IrData.AsObject,
  }
}

export class GetAllDeviceInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllDeviceInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllDeviceInfoRequest): GetAllDeviceInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllDeviceInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllDeviceInfoRequest;
  static deserializeBinaryFromReader(message: GetAllDeviceInfoRequest, reader: jspb.BinaryReader): GetAllDeviceInfoRequest;
}

export namespace GetAllDeviceInfoRequest {
  export type AsObject = {
  }
}

export class GetAllDeviceInfoResponse extends jspb.Message {
  getDeviceInfoList(): Array<pirem_api_v1_device_info_pb.DeviceInfo>;
  setDeviceInfoList(value: Array<pirem_api_v1_device_info_pb.DeviceInfo>): GetAllDeviceInfoResponse;
  clearDeviceInfoList(): GetAllDeviceInfoResponse;
  addDeviceInfo(value?: pirem_api_v1_device_info_pb.DeviceInfo, index?: number): pirem_api_v1_device_info_pb.DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllDeviceInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllDeviceInfoResponse): GetAllDeviceInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllDeviceInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllDeviceInfoResponse;
  static deserializeBinaryFromReader(message: GetAllDeviceInfoResponse, reader: jspb.BinaryReader): GetAllDeviceInfoResponse;
}

export namespace GetAllDeviceInfoResponse {
  export type AsObject = {
    deviceInfoList: Array<pirem_api_v1_device_info_pb.DeviceInfo.AsObject>,
  }
}

export class GetDeviceInfoRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): GetDeviceInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceInfoRequest): GetDeviceInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeviceInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceInfoRequest;
  static deserializeBinaryFromReader(message: GetDeviceInfoRequest, reader: jspb.BinaryReader): GetDeviceInfoRequest;
}

export namespace GetDeviceInfoRequest {
  export type AsObject = {
    deviceId: string,
  }
}

export class GetDeviceStatusRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): GetDeviceStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceStatusRequest): GetDeviceStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeviceStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceStatusRequest;
  static deserializeBinaryFromReader(message: GetDeviceStatusRequest, reader: jspb.BinaryReader): GetDeviceStatusRequest;
}

export namespace GetDeviceStatusRequest {
  export type AsObject = {
    deviceId: string,
  }
}

export class IsBusyRequest extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): IsBusyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsBusyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsBusyRequest): IsBusyRequest.AsObject;
  static serializeBinaryToWriter(message: IsBusyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsBusyRequest;
  static deserializeBinaryFromReader(message: IsBusyRequest, reader: jspb.BinaryReader): IsBusyRequest;
}

export namespace IsBusyRequest {
  export type AsObject = {
    deviceId: string,
  }
}

export class IsBusyResponse extends jspb.Message {
  getIsBusy(): boolean;
  setIsBusy(value: boolean): IsBusyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsBusyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsBusyResponse): IsBusyResponse.AsObject;
  static serializeBinaryToWriter(message: IsBusyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsBusyResponse;
  static deserializeBinaryFromReader(message: IsBusyResponse, reader: jspb.BinaryReader): IsBusyResponse;
}

export namespace IsBusyResponse {
  export type AsObject = {
    isBusy: boolean,
  }
}

