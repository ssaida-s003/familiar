import { publicRequest } from '@hooks/requestMethods'

interface DataReqType {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
}

interface DataResType {
  themeColor: string
}

export const putDoorColors = async (familyId: number, data: DataReqType): Promise<DataResType> => {
  return publicRequest.put(`/families/${familyId}/fridge`, data).then(res => res.data)
}
