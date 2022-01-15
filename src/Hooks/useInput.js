import react,{ useState} from 'react';
export const useInput = (initalState) => {
    const [ state, setState] = useState(initalState);
    console.log(state,'state')
    const onChange = (e) => {
        const { value, name} = e.target;
        setState({
            ...state,
            [name]:value,
        })
    }
    return [state,onChange]
}

