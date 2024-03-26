export interface AiPainterConvertReqType {
  drawing: string
  request: {
    name: string
    artStyle: string
  }
}

export interface AiPainterSaveReqType {
  originalImage: string
  convertedImage: string
  name: string
}
