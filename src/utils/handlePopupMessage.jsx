import { toast } from "react-toastify"

export default function handlePopupMessage(name, value = "") {
  console.log('work!')
  return toast(`${name}, ${value}`)
}
