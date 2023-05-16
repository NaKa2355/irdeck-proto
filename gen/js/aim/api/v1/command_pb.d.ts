import * as jspb from 'google-protobuf'



export class Command extends jspb.Message {
  getId(): string;
  setId(value: string): Command;

  getName(): string;
  setName(value: string): Command;

  getCanRename(): boolean;
  setCanRename(value: boolean): Command;

  getCanDelete(): boolean;
  setCanDelete(value: boolean): Command;

  getHasIrdata(): boolean;
  setHasIrdata(value: boolean): Command;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    id: string,
    name: string,
    canRename: boolean,
    canDelete: boolean,
    hasIrdata: boolean,
  }
}

