export class CreateRequisicion{
  IdDamfo: string;
  IdAddress: string;
  Usuario: string;
}

export class UpdateRequisicion{
  id: string;
  folio: any;
  fch_Cumplimiento: Date;
  estatusId: number;
  prioridadId: number;
  confidencial: boolean;
  usuario: string;
}

export class AsignarRequis {
  id: string;
  fch_Cumplimiento : Date;
  Aprobador: string;
  DiasEnvio: number;
  Usuario: string;
}
