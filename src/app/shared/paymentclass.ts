export class Paymentclass {
    public constructor(public pk_payment_id:number,public fk_email_id:string,
    public card_number:number,public expiry_date:string,
    public cvv:number)
    {

    }

}