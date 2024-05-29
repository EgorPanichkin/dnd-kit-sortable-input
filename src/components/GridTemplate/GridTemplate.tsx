import { Camera } from "../../icons/Camera"
import { ChangeInputValueHandler } from "../../types/types"
import style from "./GridTemplate.module.scss"

export const GridTemplate = ({
  children,
  handleChange,
}: {
  children: React.ReactNode
  handleChange: ChangeInputValueHandler
}) => {
  return (
    <div className={style.gridTemplate}>
      <div className={style.childWrapper}>{children}</div>
      <label className={style.template}>
        <Camera />
        <input
          id="photoInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            handleChange(e.target.files)
          }}
          multiple
        />
      </label>
      <label className={style.template}>
        <Camera />
        <input
          id="photoInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            handleChange(e.target.files)
          }}
          multiple
        />
      </label>
      <label className={style.template}>
        <Camera />
        <input
          id="photoInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            handleChange(e.target.files)
          }}
          multiple
        />
      </label>
      <label className={style.template}>
        <Camera />
        <input
          id="photoInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            handleChange(e.target.files)
          }}
          multiple
        />
      </label>
      <label className={style.template}>
        <Camera />
        <input
          id="photoInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            handleChange(e.target.files)
          }}
          multiple
        />
      </label>
      <label className={style.template}>
        <Camera />
        <input
          id="photoInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            handleChange(e.target.files)
          }}
          multiple
        />
      </label>
      <label className={style.template}>
        <Camera />
        <input
          id="photoInput"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            handleChange(e.target.files)
          }}
          multiple
        />
      </label>
    </div>
  )
}
