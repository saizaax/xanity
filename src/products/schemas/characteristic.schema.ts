import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import { Document } from "mongoose"

export type CharacteristicDocument = Characteristic & Document

@Schema()
export class Characteristic {
  @ApiProperty()
  @Prop()
  key: string

  @ApiProperty()
  @Prop()
  value: string
}

export const CharacteristicSchema = SchemaFactory.createForClass(Characteristic)
