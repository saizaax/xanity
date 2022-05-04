import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type CharacteristicDocument = Characteristic & Document

@Schema()
export class Characteristic {
  @Prop()
  key: string

  @Prop()
  value: string
}

export const CharacteristicSchema = SchemaFactory.createForClass(Characteristic)
