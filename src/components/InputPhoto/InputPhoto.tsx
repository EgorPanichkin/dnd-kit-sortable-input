import { Camera } from "../../icons/Camera"
import { ChangeInputValueHandler } from "../../types/types"
import style from "./InputPhoto.module.scss"

export const InputPhoto = ({ handleChange }: { handleChange: ChangeInputValueHandler }) => {
  return (
    <div className={style.photoInputWrapper}>
      <label htmlFor="photoInput">
        <Camera />
      </label>
      <input
        id="photoInput"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={(e) => {
          handleChange(e.target.files)
        }}
        multiple
      />
    </div>
  )
}
