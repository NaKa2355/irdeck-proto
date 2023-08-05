import * as jspb from 'google-protobuf'



export class Button extends jspb.Message {
  getId(): string;
  setId(value: string): Button;

  getName(): string;
  setName(value: string): Button;

  getTag(): string;
  setTag(value: string): Button;

  getHasIrdata(): boolean;
  setHasIrdata(value: boolean): Button;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Button.AsObject;
  static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
  static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Button;
  static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
}

export namespace Button {
  export type AsObject = {
    id: string,
    name: string,
    tag: string,
    hasIrdata: boolean,
  }
}

