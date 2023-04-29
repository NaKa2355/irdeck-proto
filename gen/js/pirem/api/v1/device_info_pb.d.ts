import * as jspb from 'google-protobuf'



export class DeviceInfo extends jspb.Message {
  getId(): string;
  setId(value: string): DeviceInfo;

  getName(): string;
  setName(value: string): DeviceInfo;

  getBufferSize(): number;
  setBufferSize(value: number): DeviceInfo;

  getCanSend(): boolean;
  setCanSend(value: boolean): DeviceInfo;

  getCanReceive(): boolean;
  setCanReceive(value: boolean): DeviceInfo;

  getDriverVersion(): string;
  setDriverVersion(value: string): DeviceInfo;

  getFirmwareVersion(): string;
  setFirmwareVersion(value: string): DeviceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    id: string,
    name: string,
    bufferSize: number,
    canSend: boolean,
    canReceive: boolean,
    driverVersion: string,
    firmwareVersion: string,
  }
}

