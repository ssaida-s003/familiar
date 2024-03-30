import { publicRequest } from '@hooks/requestMethods'

interface DataReqType {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
}

export const putDoorColors = async (familyId: number, data: DataReqType): Promise<string> => {
  return publicRequest.put(`/families/${familyId}/fridge`, data).then(res => res.data)
}

export const fetchDoorColors = async (familyId: number): Promise<string> => {
  return publicRequest.get(`/families/${familyId}/fridge`).then(res => res.data)
}
