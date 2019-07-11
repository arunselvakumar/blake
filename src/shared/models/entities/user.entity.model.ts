export interface UserEntityModel {
    id: string;
    phone: Phone;
    application: Application;
}

export interface Application {
    id: string;
}

export interface Phone {
    number: string;
    country_prefix: string;
    national_number: string;
}
