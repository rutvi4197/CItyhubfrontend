export class Venueclass {
    
    public constructor(public pk_venue_id:number,public venue_name:string,
    public venue_address:string,public fk_city_id:number,public pincode:number)
    {

    }
}
