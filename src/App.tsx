import { useState } from "react"
import { InputPhoto } from "./components/InputPhoto/InputPhoto"

import { GridTemplate } from "./components/GridTemplate/GridTemplate"
import style from "./App.module.scss"
import { Gallery } from "./components/Gallary/Gallery"
import { ChangeInputValueHandler } from "./types/types"

const slots: number = 7

const App = () => {
  const [photos, setPhotos] = useState<string[]>([])

  const handleChange: ChangeInputValueHandler = (files) => {
    if (files) {
      const fileList = [...Object.values(files)]

      const state = [...photos]

      let emptySlots = slots - photos.length

      for (let i = 0; i < fileList.length; i++) {
        if (emptySlots > 0) {
          const url = URL.createObjectURL(fileList[i])

          state.push(url)
          emptySlots -= 1
        }
      }
      setPhotos(state)
    } else {
      console.error("files === null")
    }
  }

  return (
    <div className={style.inputWrapper}>
      {/* <InputPhoto handleChange={handleChange} /> */}
      <GridTemplate handleChange={handleChange}>
        <Gallery items={photos} setItems={setPhotos} />
      </GridTemplate>
    </div>
  )
}

export default App
