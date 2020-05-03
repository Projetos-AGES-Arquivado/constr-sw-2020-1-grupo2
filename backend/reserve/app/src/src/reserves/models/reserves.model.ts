export class ReservesModel {
  constructor(
    public _id: string,
    public idResources: [],
    public idUser: string,
    public idSubject: string,
    public timeStart: Date,
    public timeClose: Date,
  ) {}
}
