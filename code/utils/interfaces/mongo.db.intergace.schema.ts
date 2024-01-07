import { ServiceIdentityDetails } from "./incomingData.interface.schema";

import  {  Document } from 'mongoose';


export interface RegistryInterface extends ServiceIdentityDetails,Document {
    url:string,
    createdAt: Date;
    updatedAt: Date;
}
