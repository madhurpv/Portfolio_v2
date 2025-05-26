import { useNavigate } from 'react-router';

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        //const history = useNavigate();
        const navigate = useNavigate();
        return <Component navigate={navigate} {...props}/>
    } 
    return Wrapper;
}