import * as jspb from 'google-protobuf'

import * as aim_api_v1_command_pb from '../../../aim/api/v1/command_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as aim_api_v1_appliance_pb from '../../../aim/api/v1/appliance_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class AddCustomRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddCustomRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddCustomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCustomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCustomRequest): AddCustomRequest.AsObject;
  static serializeBinaryToWriter(message: AddCustomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCustomRequest;
  static deserializeBinaryFromReader(message: AddCustomRequest, reader: jspb.BinaryReader): AddCustomRequest;
}

export namespace AddCustomRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
  }
}

export class AddToggleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddToggleRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddToggleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToggleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToggleRequest): AddToggleRequest.AsObject;
  static serializeBinaryToWriter(message: AddToggleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToggleRequest;
  static deserializeBinaryFromReader(message: AddToggleRequest, reader: jspb.BinaryReader): AddToggleRequest;
}

export namespace AddToggleRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
  }
}

export class AddButtonRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddButtonRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddButtonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddButtonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddButtonRequest): AddButtonRequest.AsObject;
  static serializeBinaryToWriter(message: AddButtonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddButtonRequest;
  static deserializeBinaryFromReader(message: AddButtonRequest, reader: jspb.BinaryReader): AddButtonRequest;
}

export namespace AddButtonRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
  }
}

export class AddThermostatRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AddThermostatRequest;

  getDeviceId(): string;
  setDeviceId(value: string): AddThermostatRequest;

  getScale(): number;
  setScale(value: number): AddThermostatRequest;

  getMaximumHeatingTemp(): number;
  setMaximumHeatingTemp(value: number): AddThermostatRequest;

  getMinimumHeatingTemp(): number;
  setMinimumHeatingTemp(value: number): AddThermostatRequest;

  getMaximumCoolingTemp(): number;
  setMaximumCoolingTemp(value: number): AddThermostatRequest;

  getMinimumCoolingTemp(): number;
  setMinimumCoolingTemp(value: number): AddThermostatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddThermostatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddThermostatRequest): AddThermostatRequest.AsObject;
  static serializeBinaryToWriter(message: AddThermostatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddThermostatRequest;
  static deserializeBinaryFromReader(message: AddThermostatRequest, reader: jspb.BinaryReader): AddThermostatRequest;
}

export namespace AddThermostatRequest {
  export type AsObject = {
    name: string,
    deviceId: string,
    scale: number,
    maximumHeatingTemp: number,
    minimumHeatingTemp: number,
    maximumCoolingTemp: number,
    minimumCoolingTemp: number,
  }
}

export class AddApplianceRequest extends jspb.Message {
  getCustom(): AddCustomRequest | undefined;
  setCustom(value?: AddCustomRequest): AddApplianceRequest;
  hasCustom(): boolean;
  clearCustom(): AddApplianceRequest;

  getToggle(): AddToggleRequest | undefined;
  setToggle(value?: AddToggleRequest): AddApplianceRequest;
  hasToggle(): boolean;
  clearToggle(): AddApplianceRequest;

  getButton(): AddButtonRequest | undefined;
  setButton(value?: AddButtonRequest): AddApplianceRequest;
  hasButton(): boolean;
  clearButton(): AddApplianceRequest;

  getThermostat(): AddThermostatRequest | undefined;
  setThermostat(value?: AddThermostatRequest): AddApplianceRequest;
  hasThermostat(): boolean;
  clearThermostat(): AddApplianceRequest;

  getApplianceCase(): AddApplianceRequest.ApplianceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddApplianceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddApplianceRequest): AddApplianceRequest.AsObject;
  static serializeBinaryToWriter(message: AddApplianceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddApplianceRequest;
  static deserializeBinaryFromReader(message: AddApplianceRequest, reader: jspb.BinaryReader): AddApplianceRequest;
}

export namespace AddApplianceRequest {
  export type AsObject = {
    custom?: AddCustomRequest.AsObject,
    toggle?: AddToggleRequest.AsObject,
    button?: AddButtonRequest.AsObject,
    thermostat?: AddThermostatRequest.AsObject,
  }

  export enum ApplianceCase { 
    APPLIANCE_NOT_SET = 0,
    CUSTOM = 1,
    TOGGLE = 2,
    BUTTON = 3,
    THERMOSTAT = 4,
  }
}

export class AddApplianceResponse extends jspb.Message {
  getAppliance(): aim_api_v1_appliance_pb.Appliance | undefined;
  setAppliance(value?: aim_api_v1_appliance_pb.Appliance): AddApplianceResponse;
  hasAppliance(): boolean;
  clearAppliance(): AddApplianceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddApplianceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddApplianceResponse): AddApplianceResponse.AsObject;
  static serializeBinaryToWriter(message: AddApplianceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddApplianceResponse;
  static deserializeBinaryFromReader(message: AddApplianceResponse, reader: jspb.BinaryReader): AddApplianceResponse;
}

export namespace AddApplianceResponse {
  export type AsObject = {
    appliance?: aim_api_v1_appliance_pb.Appliance.AsObject,
  }
}

export class AddCommandRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): AddCommandRequest;

  getName(): string;
  setName(value: string): AddCommandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCommandRequest): AddCommandRequest.AsObject;
  static serializeBinaryToWriter(message: AddCommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCommandRequest;
  static deserializeBinaryFromReader(message: AddCommandRequest, reader: jspb.BinaryReader): AddCommandRequest;
}

export namespace AddCommandRequest {
  export type AsObject = {
    applianceId: string,
    name: string,
  }
}

export class GetAppliancesResponse extends jspb.Message {
  getAppliancesList(): Array<aim_api_v1_appliance_pb.Appliance>;
  setAppliancesList(value: Array<aim_api_v1_appliance_pb.Appliance>): GetAppliancesResponse;
  clearAppliancesList(): GetAppliancesResponse;
  addAppliances(value?: aim_api_v1_appliance_pb.Appliance, index?: number): aim_api_v1_appliance_pb.Appliance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppliancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppliancesResponse): GetAppliancesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAppliancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppliancesResponse;
  static deserializeBinaryFromReader(message: GetAppliancesResponse, reader: jspb.BinaryReader): GetAppliancesResponse;
}

export namespace GetAppliancesResponse {
  export type AsObject = {
    appliancesList: Array<aim_api_v1_appliance_pb.Appliance.AsObject>,
  }
}

export class GetApplianceRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): GetApplianceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplianceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplianceRequest): GetApplianceRequest.AsObject;
  static serializeBinaryToWriter(message: GetApplianceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplianceRequest;
  static deserializeBinaryFromReader(message: GetApplianceRequest, reader: jspb.BinaryReader): GetApplianceRequest;
}

export namespace GetApplianceRequest {
  export type AsObject = {
    applianceId: string,
  }
}

export class GetApplianceResponse extends jspb.Message {
  getAppliance(): aim_api_v1_appliance_pb.Appliance | undefined;
  setAppliance(value?: aim_api_v1_appliance_pb.Appliance): GetApplianceResponse;
  hasAppliance(): boolean;
  clearAppliance(): GetApplianceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplianceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplianceResponse): GetApplianceResponse.AsObject;
  static serializeBinaryToWriter(message: GetApplianceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplianceResponse;
  static deserializeBinaryFromReader(message: GetApplianceResponse, reader: jspb.BinaryReader): GetApplianceResponse;
}

export namespace GetApplianceResponse {
  export type AsObject = {
    appliance?: aim_api_v1_appliance_pb.Appliance.AsObject,
  }
}

export class GetCommandsRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): GetCommandsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommandsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommandsRequest): GetCommandsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommandsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommandsRequest;
  static deserializeBinaryFromReader(message: GetCommandsRequest, reader: jspb.BinaryReader): GetCommandsRequest;
}

export namespace GetCommandsRequest {
  export type AsObject = {
    applianceId: string,
  }
}

export class GetCommandsResponse extends jspb.Message {
  getCommandsList(): Array<aim_api_v1_command_pb.Command>;
  setCommandsList(value: Array<aim_api_v1_command_pb.Command>): GetCommandsResponse;
  clearCommandsList(): GetCommandsResponse;
  addCommands(value?: aim_api_v1_command_pb.Command, index?: number): aim_api_v1_command_pb.Command;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommandsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommandsResponse): GetCommandsResponse.AsObject;
  static serializeBinaryToWriter(message: GetCommandsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommandsResponse;
  static deserializeBinaryFromReader(message: GetCommandsResponse, reader: jspb.BinaryReader): GetCommandsResponse;
}

export namespace GetCommandsResponse {
  export type AsObject = {
    commandsList: Array<aim_api_v1_command_pb.Command.AsObject>,
  }
}

export class RenameApplianceRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): RenameApplianceRequest;

  getName(): string;
  setName(value: string): RenameApplianceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameApplianceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameApplianceRequest): RenameApplianceRequest.AsObject;
  static serializeBinaryToWriter(message: RenameApplianceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameApplianceRequest;
  static deserializeBinaryFromReader(message: RenameApplianceRequest, reader: jspb.BinaryReader): RenameApplianceRequest;
}

export namespace RenameApplianceRequest {
  export type AsObject = {
    applianceId: string,
    name: string,
  }
}

export class ChangeDeviceRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): ChangeDeviceRequest;

  getDeviceId(): string;
  setDeviceId(value: string): ChangeDeviceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeDeviceRequest): ChangeDeviceRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeDeviceRequest;
  static deserializeBinaryFromReader(message: ChangeDeviceRequest, reader: jspb.BinaryReader): ChangeDeviceRequest;
}

export namespace ChangeDeviceRequest {
  export type AsObject = {
    applianceId: string,
    deviceId: string,
  }
}

export class RenameCommandRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): RenameCommandRequest;

  getCommandId(): string;
  setCommandId(value: string): RenameCommandRequest;

  getName(): string;
  setName(value: string): RenameCommandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameCommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameCommandRequest): RenameCommandRequest.AsObject;
  static serializeBinaryToWriter(message: RenameCommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameCommandRequest;
  static deserializeBinaryFromReader(message: RenameCommandRequest, reader: jspb.BinaryReader): RenameCommandRequest;
}

export namespace RenameCommandRequest {
  export type AsObject = {
    applianceId: string,
    commandId: string,
    name: string,
  }
}

export class DeleteApplianceRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): DeleteApplianceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplianceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplianceRequest): DeleteApplianceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApplianceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplianceRequest;
  static deserializeBinaryFromReader(message: DeleteApplianceRequest, reader: jspb.BinaryReader): DeleteApplianceRequest;
}

export namespace DeleteApplianceRequest {
  export type AsObject = {
    applianceId: string,
  }
}

export class DeleteCommandRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): DeleteCommandRequest;

  getCommandId(): string;
  setCommandId(value: string): DeleteCommandRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommandRequest): DeleteCommandRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommandRequest;
  static deserializeBinaryFromReader(message: DeleteCommandRequest, reader: jspb.BinaryReader): DeleteCommandRequest;
}

export namespace DeleteCommandRequest {
  export type AsObject = {
    applianceId: string,
    commandId: string,
  }
}

export class GetIrDataRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): GetIrDataRequest;

  getCommandId(): string;
  setCommandId(value: string): GetIrDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIrDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIrDataRequest): GetIrDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetIrDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIrDataRequest;
  static deserializeBinaryFromReader(message: GetIrDataRequest, reader: jspb.BinaryReader): GetIrDataRequest;
}

export namespace GetIrDataRequest {
  export type AsObject = {
    applianceId: string,
    commandId: string,
  }
}

export class SetIRDataRequest extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): SetIRDataRequest;

  getCommandId(): string;
  setCommandId(value: string): SetIRDataRequest;

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
    applianceId: string,
    commandId: string,
    irdata?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ApplianceUpdateNotification extends jspb.Message {
  getApplianceId(): string;
  setApplianceId(value: string): ApplianceUpdateNotification;

  getUpdateType(): ApplianceUpdateNotification.UpdateType;
  setUpdateType(value: ApplianceUpdateNotification.UpdateType): ApplianceUpdateNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplianceUpdateNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ApplianceUpdateNotification): ApplianceUpdateNotification.AsObject;
  static serializeBinaryToWriter(message: ApplianceUpdateNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplianceUpdateNotification;
  static deserializeBinaryFromReader(message: ApplianceUpdateNotification, reader: jspb.BinaryReader): ApplianceUpdateNotification;
}

export namespace ApplianceUpdateNotification {
  export type AsObject = {
    applianceId: string,
    updateType: ApplianceUpdateNotification.UpdateType,
  }

  export enum UpdateType { 
    UPDATE_TYPE_UNSPECIFIED = 0,
    UPDATE_TYPE_ADD = 1,
    UPDATE_TYPE_DELETE = 2,
  }
}

