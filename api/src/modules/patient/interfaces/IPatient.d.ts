//  id        String   @id @default(uuid())
//   name      String
//   phone     String
//   email     String?
//   companyId String
//   createdAt DateTime @default(now())
//   company   Company  @relation(fields: [companyId], references: [id])
// }

import { IAppoitmentDTOResponse } from "../../appointment/interfaces/IAppointment";

export interface IPatientDTOResponse {
    id: string;
    name: string;
    phone: string;
    email?: string | null;
    appointment?: IAppoitmentDTOResponse[]
}

export interface IPatientDTORequest {
    name: string;
    phone: string;
    email?: string | null;
    companyId: string;
}

export interface IPatientiAppoiment extends Pick<IAppoitmentDTOResponse, 
    'id' | 'startTime' | 'endTime' | 'status' > {

}