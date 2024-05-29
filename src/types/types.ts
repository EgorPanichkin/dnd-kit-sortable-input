export type URLEventHandler = (url: string) => void
export type ChangeInputValueHandler = (files: FileList | null) => void

export interface IPhotoProp {
  url: string
  index: number
  faded?: undefined
  style?: React.CSSProperties | undefined
}

export interface ISortPhoto {
  url: string
  index: number
  key: undefined | any
  getKey?: void
  handleRemove: URLEventHandler
}

export interface IUploadGallary {
  items: string[]
  setItems: React.Dispatch<React.SetStateAction<string[]>>
}
