import {React, Fragment} from 'react'
import { useParams,Route } from 'react-router-dom'
import Comments from "../components/comments/Comments"
const ShowQuote = () => {
    const params=useParams()
    return (
        <Fragment>
            <h1>this is Quote {params.id}</h1>
            <Route path="/quotes/:id/comments">
                <Comments />
            </Route>
        </Fragment>
    )
}

export default ShowQuote
