import axios from '../api/axios';
import useSession from '../store/SessionStore';

const useRefreshToken = () => {
    const { setAccessToken } = useSession()

    const refresh = async () => {
        const response = await axios.get('/auth/refresh', {
            withCredentials: true
        });
        setAccessToken(response.data.accessToken)
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;