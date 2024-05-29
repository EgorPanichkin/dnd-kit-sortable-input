import { useState } from "react"
import style from "./Gallery.module.scss"
import { DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors } from "@dnd-kit/core"
import { SortableContext, rectSwappingStrategy, arraySwap } from "@dnd-kit/sortable"

import { SortablePhoto } from "../SortablePhoto/SortablePhoto"
import { Photo } from "../Photo/Photo"
import { IUploadGallary } from "../../types/types"

export const Gallery = ({ items, setItems }: IUploadGallary) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  const handleDragStart = (event: any): void => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event: any): void => {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arraySwap(items, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  const handleRemove = (url: string) => {
    setItems((items) => items.filter((item) => item !== url))
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSwappingStrategy}>
        <div className={style.gridContainer}>
          {items.map((url, index) => (
            <SortablePhoto key={url} url={url} index={index} handleRemove={handleRemove} />
          ))}
        </div>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeId ? <Photo url={activeId} index={items.indexOf(activeId)} /> : null}
      </DragOverlay>
    </DndContext>
  )
}
