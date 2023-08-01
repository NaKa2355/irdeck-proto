import * as jspb from 'google-protobuf'

import * as aim_api_v1_button_pb from '../../../aim/api/v1/button_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as aim_api_v1_remote_pb from '../../../aim/api/v1/remote_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class AddCustomRemoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddCustomRemoteRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddCustomRemoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCustomRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCustomRemoteRequest): AddCustomRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: AddCustomRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCustomRemoteRequest;
  static deserializeBinaryFromReader(message: AddCustomRemoteRequest, reader: jspb.BinaryReader): AddCustomRemoteRequest;
}

export namespace AddCustomRemoteRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
  }
}

export class AddToggleRemoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddToggleRemoteRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddToggleRemoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToggleRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToggleRemoteRequest): AddToggleRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: AddToggleRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToggleRemoteRequest;
  static deserializeBinaryFromReader(message: AddToggleRemoteRequest, reader: jspb.BinaryReader): AddToggleRemoteRequest;
}

export namespace AddToggleRemoteRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
  }
}

export class AddButtonRemoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddButtonRemoteRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddButtonRemoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddButtonRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddButtonRemoteRequest): AddButtonRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: AddButtonRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddButtonRemoteRequest;
  static deserializeBinaryFromReader(message: AddButtonRemoteRequest, reader: jspb.BinaryReader): AddButtonRemoteRequest;
}

export namespace AddButtonRemoteRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
  }
}

export class AddThermostatRemoteRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddThermostatRemoteRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddThermostatRemoteRequest;

  getScale(): AddThermostatRemoteRequest.Scale;
  setScale(value: AddThermostatRemoteRequest.Scale): AddThermostatRemoteRequest;

  getMaximumHeatingTemp(): number;
  setMaximumHeatingTemp(value: number): AddThermostatRemoteRequest;

  getMinimumHeatingTemp(): number;
  setMinimumHeatingTemp(value: number): AddThermostatRemoteRequest;

  getMaximumCoolingTemp(): number;
  setMaximumCoolingTemp(value: number): AddThermostatRemoteRequest;

  getMinimumCoolingTemp(): number;
  setMinimumCoolingTemp(value: number): AddThermostatRemoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddThermostatRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddThermostatRemoteRequest): AddThermostatRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: AddThermostatRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddThermostatRemoteRequest;
  static deserializeBinaryFromReader(message: AddThermostatRemoteRequest, reader: jspb.BinaryReader): AddThermostatRemoteRequest;
}

export namespace AddThermostatRemoteRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
    scale: AddThermostatRemoteRequest.Scale,
    maximumHeatingTemp: number,
    minimumHeatingTemp: number,
    maximumCoolingTemp: number,
    minimumCoolingTemp: number,
  }

  export enum Scale { 
    SCALE_UNKNOWN = 0,
    HALF = 1,
    ONE = 2,
  }
}

export class AddRemoteRequest extends jspb.Message {
  getCustom(): AddCustomRemoteRequest | undefined;
  setCustom(value?: AddCustomRemoteRequest): AddRemoteRequest;
  hasCustom(): boolean;
  clearCustom(): AddRemoteRequest;

  getToggle(): AddToggleRemoteRequest | undefined;
  setToggle(value?: AddToggleRemoteRequest): AddRemoteRequest;
  hasToggle(): boolean;
  clearToggle(): AddRemoteRequest;

  getButton(): AddButtonRemoteRequest | undefined;
  setButton(value?: AddButtonRemoteRequest): AddRemoteRequest;
  hasButton(): boolean;
  clearButton(): AddRemoteRequest;

  getThermostat(): AddThermostatRemoteRequest | undefined;
  setThermostat(value?: AddThermostatRemoteRequest): AddRemoteRequest;
  hasThermostat(): boolean;
  clearThermostat(): AddRemoteRequest;

  getRemoteCase(): AddRemoteRequest.RemoteCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRemoteRequest): AddRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: AddRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRemoteRequest;
  static deserializeBinaryFromReader(message: AddRemoteRequest, reader: jspb.BinaryReader): AddRemoteRequest;
}

export namespace AddRemoteRequest {
  export type AsObject = {
    custom?: AddCustomRemoteRequest.AsObject,
    toggle?: AddToggleRemoteRequest.AsObject,
    button?: AddButtonRemoteRequest.AsObject,
    thermostat?: AddThermostatRemoteRequest.AsObject,
  }

  export enum RemoteCase { 
    REMOTE_NOT_SET = 0,
    CUSTOM = 1,
    TOGGLE = 2,
    BUTTON = 3,
    THERMOSTAT = 4,
  }
}

export class AddRemoteResponse extends jspb.Message {
  getRemote(): aim_api_v1_remote_pb.Remote | undefined;
  setRemote(value?: aim_api_v1_remote_pb.Remote): AddRemoteResponse;
  hasRemote(): boolean;
  clearRemote(): AddRemoteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRemoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddRemoteResponse): AddRemoteResponse.AsObject;
  static serializeBinaryToWriter(message: AddRemoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRemoteResponse;
  static deserializeBinaryFromReader(message: AddRemoteResponse, reader: jspb.BinaryReader): AddRemoteResponse;
}

export namespace AddRemoteResponse {
  export type AsObject = {
    remote?: aim_api_v1_remote_pb.Remote.AsObject,
  }
}

export class AddButtonRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): AddButtonRequest;

  getName(): string;
  setName(value: string): AddButtonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddButtonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddButtonRequest): AddButtonRequest.AsObject;
  static serializeBinaryToWriter(message: AddButtonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddButtonRequest;
  static deserializeBinaryFromReader(message: AddButtonRequest, reader: jspb.BinaryReader): AddButtonRequest;
}

export namespace AddButtonRequest {
  export type AsObject = {
    remoteId: string,
    name: string,
  }
}

export class GetRemotesResponse extends jspb.Message {
  getRemotesList(): Array<aim_api_v1_remote_pb.Remote>;
  setRemotesList(value: Array<aim_api_v1_remote_pb.Remote>): GetRemotesResponse;
  clearRemotesList(): GetRemotesResponse;
  addRemotes(value?: aim_api_v1_remote_pb.Remote, index?: number): aim_api_v1_remote_pb.Remote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemotesResponse): GetRemotesResponse.AsObject;
  static serializeBinaryToWriter(message: GetRemotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemotesResponse;
  static deserializeBinaryFromReader(message: GetRemotesResponse, reader: jspb.BinaryReader): GetRemotesResponse;
}

export namespace GetRemotesResponse {
  export type AsObject = {
    remotesList: Array<aim_api_v1_remote_pb.Remote.AsObject>,
  }
}

export class GetRemoteRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): GetRemoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemoteRequest): GetRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: GetRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemoteRequest;
  static deserializeBinaryFromReader(message: GetRemoteRequest, reader: jspb.BinaryReader): GetRemoteRequest;
}

export namespace GetRemoteRequest {
  export type AsObject = {
    remoteId: string,
  }
}

export class GetRemoteResponse extends jspb.Message {
  getRemote(): aim_api_v1_remote_pb.Remote | undefined;
  setRemote(value?: aim_api_v1_remote_pb.Remote): GetRemoteResponse;
  hasRemote(): boolean;
  clearRemote(): GetRemoteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemoteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemoteResponse): GetRemoteResponse.AsObject;
  static serializeBinaryToWriter(message: GetRemoteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemoteResponse;
  static deserializeBinaryFromReader(message: GetRemoteResponse, reader: jspb.BinaryReader): GetRemoteResponse;
}

export namespace GetRemoteResponse {
  export type AsObject = {
    remote?: aim_api_v1_remote_pb.Remote.AsObject,
  }
}

export class GetButtonsRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): GetButtonsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetButtonsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetButtonsRequest): GetButtonsRequest.AsObject;
  static serializeBinaryToWriter(message: GetButtonsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetButtonsRequest;
  static deserializeBinaryFromReader(message: GetButtonsRequest, reader: jspb.BinaryReader): GetButtonsRequest;
}

export namespace GetButtonsRequest {
  export type AsObject = {
    remoteId: string,
  }
}

export class GetButtonsResponse extends jspb.Message {
  getButtonsList(): Array<aim_api_v1_button_pb.Button>;
  setButtonsList(value: Array<aim_api_v1_button_pb.Button>): GetButtonsResponse;
  clearButtonsList(): GetButtonsResponse;
  addButtons(value?: aim_api_v1_button_pb.Button, index?: number): aim_api_v1_button_pb.Button;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetButtonsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetButtonsResponse): GetButtonsResponse.AsObject;
  static serializeBinaryToWriter(message: GetButtonsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetButtonsResponse;
  static deserializeBinaryFromReader(message: GetButtonsResponse, reader: jspb.BinaryReader): GetButtonsResponse;
}

export namespace GetButtonsResponse {
  export type AsObject = {
    buttonsList: Array<aim_api_v1_button_pb.Button.AsObject>,
  }
}

export class EditRemoteRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): EditRemoteRequest;

  getName(): string;
  setName(value: string): EditRemoteRequest;

  getDeviceId(): string;
  setDeviceId(value: string): EditRemoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditRemoteRequest): EditRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: EditRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditRemoteRequest;
  static deserializeBinaryFromReader(message: EditRemoteRequest, reader: jspb.BinaryReader): EditRemoteRequest;
}

export namespace EditRemoteRequest {
  export type AsObject = {
    remoteId: string,
    name: string,
    deviceId: string,
  }
}

export class EditButtonRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): EditButtonRequest;

  getButtonId(): string;
  setButtonId(value: string): EditButtonRequest;

  getName(): string;
  setName(value: string): EditButtonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditButtonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditButtonRequest): EditButtonRequest.AsObject;
  static serializeBinaryToWriter(message: EditButtonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditButtonRequest;
  static deserializeBinaryFromReader(message: EditButtonRequest, reader: jspb.BinaryReader): EditButtonRequest;
}

export namespace EditButtonRequest {
  export type AsObject = {
    remoteId: string,
    buttonId: string,
    name: string,
  }
}

export class DeleteRemoteRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): DeleteRemoteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRemoteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRemoteRequest): DeleteRemoteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRemoteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRemoteRequest;
  static deserializeBinaryFromReader(message: DeleteRemoteRequest, reader: jspb.BinaryReader): DeleteRemoteRequest;
}

export namespace DeleteRemoteRequest {
  export type AsObject = {
    remoteId: string,
  }
}

export class DeleteButtonRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): DeleteButtonRequest;

  getButtonId(): string;
  setButtonId(value: string): DeleteButtonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteButtonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteButtonRequest): DeleteButtonRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteButtonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteButtonRequest;
  static deserializeBinaryFromReader(message: DeleteButtonRequest, reader: jspb.BinaryReader): DeleteButtonRequest;
}

export namespace DeleteButtonRequest {
  export type AsObject = {
    remoteId: string,
    buttonId: string,
  }
}

export class GetIrDataRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): GetIrDataRequest;

  getButtonId(): string;
  setButtonId(value: string): GetIrDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIrDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIrDataRequest): GetIrDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetIrDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIrDataRequest;
  static deserializeBinaryFromReader(message: GetIrDataRequest, reader: jspb.BinaryReader): GetIrDataRequest;
}

export namespace GetIrDataRequest {
  export type AsObject = {
    remoteId: string,
    buttonId: string,
  }
}

export class SetIRDataRequest extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): SetIRDataRequest;

  getButtonId(): string;
  setButtonId(value: string): SetIRDataRequest;

  getIrdata(): google_protobuf_any_pb.Any | undefined;
  setIrdata(value?: google_protobuf_any_pb.Any): SetIRDataRequest;
  hasIrdata(): boolean;
  clearIrdata(): SetIRDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetIRDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetIRDataRequest): SetIRDataRequest.AsObject;
  static serializeBinaryToWriter(message: SetIRDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetIRDataRequest;
  static deserializeBinaryFromReader(message: SetIRDataRequest, reader: jspb.BinaryReader): SetIRDataRequest;
}

export namespace SetIRDataRequest {
  export type AsObject = {
    remoteId: string,
    buttonId: string,
    irdata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class RemoteAdditionNotification extends jspb.Message {
  getRemoteId(): aim_api_v1_remote_pb.Remote | undefined;
  setRemoteId(value?: aim_api_v1_remote_pb.Remote): RemoteAdditionNotification;
  hasRemoteId(): boolean;
  clearRemoteId(): RemoteAdditionNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteAdditionNotification.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteAdditionNotification): RemoteAdditionNotification.AsObject;
  static serializeBinaryToWriter(message: RemoteAdditionNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteAdditionNotification;
  static deserializeBinaryFromReader(message: RemoteAdditionNotification, reader: jspb.BinaryReader): RemoteAdditionNotification;
}

export namespace RemoteAdditionNotification {
  export type AsObject = {
    remoteId?: aim_api_v1_remote_pb.Remote.AsObject,
  }
}

export class RemoteDeletionNotification extends jspb.Message {
  getRemoteId(): string;
  setRemoteId(value: string): RemoteDeletionNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteDeletionNotification.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteDeletionNotification): RemoteDeletionNotification.AsObject;
  static serializeBinaryToWriter(message: RemoteDeletionNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteDeletionNotification;
  static deserializeBinaryFromReader(message: RemoteDeletionNotification, reader: jspb.BinaryReader): RemoteDeletionNotification;
}

export namespace RemoteDeletionNotification {
  export type AsObject = {
    remoteId: string,
  }
}

export class RemoteUpdateNotification extends jspb.Message {
  getAdd(): RemoteAdditionNotification | undefined;
  setAdd(value?: RemoteAdditionNotification): RemoteUpdateNotification;
  hasAdd(): boolean;
  clearAdd(): RemoteUpdateNotification;

  getDelete(): RemoteDeletionNotification | undefined;
  setDelete(value?: RemoteDeletionNotification): RemoteUpdateNotification;
  hasDelete(): boolean;
  clearDelete(): RemoteUpdateNotification;

  getNotificationCase(): RemoteUpdateNotification.NotificationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteUpdateNotification.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteUpdateNotification): RemoteUpdateNotification.AsObject;
  static serializeBinaryToWriter(message: RemoteUpdateNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteUpdateNotification;
  static deserializeBinaryFromReader(message: RemoteUpdateNotification, reader: jspb.BinaryReader): RemoteUpdateNotification;
}

export namespace RemoteUpdateNotification {
  export type AsObject = {
    add?: RemoteAdditionNotification.AsObject,
    pb_delete?: RemoteDeletionNotification.AsObject,
  }

  export enum NotificationCase { 
    NOTIFICATION_NOT_SET = 0,
    ADD = 1,
    DELETE = 2,
  }
}

