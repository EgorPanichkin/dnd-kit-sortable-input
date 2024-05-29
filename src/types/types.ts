import { DragEndEvent, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core"

export type URLEventHandler = (url: string) => void
export type ChangeInputValueHandler = (files: FileList | null) => void
export type DragStartHandler = (event: DragStartEvent) => void
export type DragEndHandler = (event: DragEndEvent) => void | null
export type DragCancelHandler = () => void

// onDragStart={handleDragStart}
// onDragEnd={handleDragEnd}
// onDragCancel={handleDragCancel}

export interface IPhotoProp {
  url: UniqueIdentifier
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
