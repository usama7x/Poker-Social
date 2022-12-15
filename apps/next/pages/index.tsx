import { HomeScreen } from 'app/features/home/screen'
import { isLoggedIn } from '../utils/user'

export default HomeScreen

export const getServerSideProps = (context: any) => isLoggedIn(context)
