import {React, Fragment} from 'react'
import { useParams,Route } from 'react-router-dom'
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import NoQuotesFound from "../components/quotes/NoQuotesFound"
const DUMMY_QUOTES=[
    {id:1, author:"Mohammed", text:"Islam is the best"},
    {id:2, author:"Ahmed", text:"i like prophet Mohammed"}
]

const ShowQuote = () => {
    const params=useParams()
   
    const quote= DUMMY_QUOTES.find((item)=> item.id == params.id)

if(!quote){
    return <NoQuotesFound />
}
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path="/quotes/:id/comments">
                <Comments />
            </Route>
        </Fragment>
    )
}

export default ShowQuote
