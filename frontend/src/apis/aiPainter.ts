import { publicRequest } from '@hooks/requestMethods'

export const aiPaintConvert = async (familyId: number, formData: FormData): Promise<string> => {
  return publicRequest
    .patch(`/families/${familyId}/drawings/convert`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => res.data)
}
