import  * as UserActionCreator from "./user"
import  * as MovieActionCreator from "./movies"

export default  {
    ...UserActionCreator,
    ...MovieActionCreator
}