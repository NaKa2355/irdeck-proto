import * as jspb from 'google-protobuf'



export class Remote extends jspb.Message {
  getId(): string;
  setId(value: string): Remote;

  getName(): string;
  setName(value: string): Remote;

  getDeviceId(): string;
  setDeviceId(value: string): Remote;

  getTag(): string;
  setTag(value: string): Remote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Remote.AsObject;
  static toObject(includeInstance: boolean, msg: Remote): Remote.AsObject;
  static serializeBinaryToWriter(message: Remote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Remote;
  static deserializeBinaryFromReader(message: Remote, reader: jspb.BinaryReader): Remote;
}

export namespace Remote {
  export type AsObject = {
    id: string,
    name: string,
    deviceId: string,
    tag: string,
  }
}

