//  id        String   @id @default(uuid())
//   name      String
//   phone     String
//   email     String?
//   companyId String
//   createdAt DateTime @default(now())
//   company   Company  @relation(fields: [companyId], references: [id])
// }

export interface IPatientDTOResponse {
    id: string;
    name: string;
    phone: string;
    email?: string | null;
}

export interface IPatientDTORequest {
    name: string;
    phone: string;
    email?: string | null;
    companyId: string;
}