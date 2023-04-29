import * as jspb from 'google-protobuf'



export class Appliance extends jspb.Message {
  getId(): string;
  setId(value: string): Appliance;

  getName(): string;
  setName(value: string): Appliance;

  getDeviceId(): string;
  setDeviceId(value: string): Appliance;

  getApplianceType(): Appliance.AppType;
  setApplianceType(value: Appliance.AppType): Appliance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Appliance.AsObject;
  static toObject(includeInstance: boolean, msg: Appliance): Appliance.AsObject;
  static serializeBinaryToWriter(message: Appliance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Appliance;
  static deserializeBinaryFromReader(message: Appliance, reader: jspb.BinaryReader): Appliance;
}

export namespace Appliance {
  export type AsObject = {
    id: string,
    name: string,
    deviceId: string,
    applianceType: Appliance.AppType,
  }

  export enum AppType { 
    APP_TYPE_UNKNOWN = 0,
    CUSTOM = 1,
    BUTTON = 2,
    TOGGLE = 3,
    THERMOSTAT = 4,
  }
}

