import React from 'react'
import {useHistory} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
const AddQuote = () => {
    const history= useHistory()
    const newQuote=(quoteData)=>{
        console.log(quoteData)
        history.replace('/quotes')
    }
    return (
       <QuoteForm onAddQuote={newQuote}/>
    )
}

export default AddQuote
