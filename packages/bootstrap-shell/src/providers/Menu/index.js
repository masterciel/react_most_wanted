import { useContext } from 'react'
import Context from './Context'
export { default as withMenu } from './with.js'
export { default } from './Provider.js'

export function useMenu() {
  console.log("useMenu");
  return useContext(Context)
}
