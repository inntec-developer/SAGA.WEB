export class CreateRequisicion{
  IdDamfo: string;
  IdAddress: string;
  Usuario: string;
}

export class UpdateRequisicion{
  id:string;
  folio: any;
  fch_Cumplimiento: Date;
  estatusId: number;
  prioridadId: number;
  confidencial: boolean;
  usuario: string;
}
