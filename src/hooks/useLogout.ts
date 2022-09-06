import axios from "../api/axios";
import useSession from "../store/SessionStore";

const useLogout = () => {
    const { handleLogout } = useSession()

    const logout = async () => {
        handleLogout()
        try {
            await axios('/auth/logout', {
                withCredentials: true
            })
        } catch (err) {
            console.error(err)
        }
    }

    return logout
}

export default useLogout