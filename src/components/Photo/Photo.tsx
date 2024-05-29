import { forwardRef } from "react"
import { IPhotoProp } from "../../types/types"
import { Cross } from "../../icons/Cross"

export const Photo = forwardRef(({ url, index, faded, style, ...props }: IPhotoProp, ref: any) => {
  const inlineStyles: React.CSSProperties = {
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? "span 2" : undefined,
    gridColumnStart: index === 0 ? "span 2" : undefined,
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "grey",
    ...style,
  }

  const wrapStyles: React.CSSProperties = {
    position: "relative",
    gridRowStart: index === 0 ? "span 2" : undefined,
    gridColumnStart: index === 0 ? "span 2" : undefined,
  }

  const buttonStyles: React.CSSProperties = {
    display: "none",
  }

  return (
    <div style={wrapStyles}>
      <button style={buttonStyles}>
        <Cross />
      </button>
      <div style={inlineStyles} ref={ref} {...props} />
    </div>
  )
})
