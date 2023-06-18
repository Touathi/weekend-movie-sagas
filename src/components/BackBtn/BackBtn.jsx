import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function BackBtn() {

    const history = useHistory()


    const handleclick = () => {
        history.push('/')
    }

    return (
        <>
        <p>Back</p>
        </>
    )
}

export default BackBtn