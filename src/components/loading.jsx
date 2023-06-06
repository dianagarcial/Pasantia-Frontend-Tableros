import '../styles/loading.css'
import LinearProgress from '@mui/material/LinearProgress';

export const Loading = () => {


    return (
        <div className="loading">
            <img id="logoload" src="/images/Logo.png" alt="Group-38-3" />

            <LinearProgress />
        </div>


    )
}