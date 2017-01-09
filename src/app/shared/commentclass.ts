export class Commentclass {
    public constructor(public user_name:string,public user_photo:string,public event_name:string,
    public pk_comment_id:number,public fk_event_id:number,public fk_email_id:string,
    public comment_desc:string,public comment_date:string)
    {

    }
}
