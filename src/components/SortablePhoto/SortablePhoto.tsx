import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Cross } from "../../icons/Cross"
import { ISortPhoto } from "../../types/types"

export const SortablePhoto = ({ handleRemove, ...props }: ISortPhoto) => {
  const sortable = useSortable({ id: props.url })
  const { attributes, listeners, setNodeRef, transform, transition } = sortable

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const inlineStyles: React.CSSProperties = {
    transformOrigin: "0 0",
    height: props.index === 0 ? 410 : 200,
    backgroundImage: `url("${props.url}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "grey",
    ...style,
  }

  const wrapStyles: React.CSSProperties = {
    position: "relative",
    gridRowStart: props.index === 0 ? "span 2" : undefined,
    gridColumnStart: props.index === 0 ? "span 2" : undefined,
    zIndex: 100,
  }

  const buttonStyles: React.CSSProperties = {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    zIndex: "100",
    border: "none",
    backgroundColor: "#ffffff00",
    cursor: "pointer",
  }

  return (
    <div style={wrapStyles}>
      <button style={buttonStyles} onClick={() => handleRemove(props.url)}>
        <Cross />
      </button>
      <div style={inlineStyles} ref={setNodeRef} {...props} {...attributes} {...listeners} />
    </div>
  )
}
