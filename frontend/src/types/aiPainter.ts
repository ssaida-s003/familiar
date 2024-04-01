export interface AiPainterConvertReqType {
  drawing: string
  name: string
  artStyle: string
}

export interface AiPainterSaveReqType {
  originalImage: string
  convertedImage: string
  name: string
}

export interface getPaintResType {
  drawingId: number
  familyId: number
  name: string
  originalImage: string
  generatedImage: string
  createdAt: string
  isWallpaper: boolean
}
