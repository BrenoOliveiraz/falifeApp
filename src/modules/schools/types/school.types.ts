import { Class } from "../../classes/types/class.types"

export type School = {
  id: string
  name: string
  address: string
  classes: Class[]
}