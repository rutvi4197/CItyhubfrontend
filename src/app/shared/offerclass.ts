export class Offerclass {
    public constructor(public pk_offer_id:number,public fk_email_id:string,
    public offer_price:number,public offer_promocode:string,public offer_photo:string,
    public fk_event_id:number,public user_name:string,public event_name:string)
    {

    }
}
 