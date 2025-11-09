
import { model, models, Schema } from "mongoose";

// image-interface.ts

export interface IImage  extends Document{
  _id?: string; // optional when creating a new record
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // use string for URLs
  width?: number;
  height?: number;
  config?: object; // for dynamic config objects
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?:{
    _id: string;
    firstName: string;
    lastname: string;
  } 
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
     title: { type: String, required: true},
    transformationType:{ type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl:{ type: URL, required: true},
    width: { type: Number},
    height: { type: Number},
    config: { type: Object},
    transformationUrl: { type: URL},
    aspectRatio:{type: String},
    color: { type: String},
    prompt: { type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt:{ type:Date, default:Date.now},
    updatedAt:{type:Date, default: Date.now}

});
const Image = models?.Image || model('Image',
    ImageSchema);

export default Image;
