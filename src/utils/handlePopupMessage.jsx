import { toast } from "react-toastify"

export default function handlePopupMessage(name, value = "") {
  return toast(`${name}, ${value}`)
}
