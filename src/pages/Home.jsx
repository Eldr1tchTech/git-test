import { Link } from 'react-router-dom';

function Home () {
    return (
        <>
        <p>Home Page</p>
        <p><Link to="/hochzeiten">Go to Hochzeiten</Link></p>
        </>
    )
}

export default Home;