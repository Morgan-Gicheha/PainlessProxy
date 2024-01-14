export interface ServiceIdentityDetails {
    country?: string;
    serviceName: string;
    type?: string;
    url?: string;
}

export interface PaymentDetails {
    amount: string;
    mobileNumber: string;
    uniqueID: string;
}

export interface IncomingPaymentIntent extends PaymentDetails {
    details: ServiceIdentityDetails;
}


export interface APIResponse {
    status: string;
    message?:string
    uniqueID?:string

}

