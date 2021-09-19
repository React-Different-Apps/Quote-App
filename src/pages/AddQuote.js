import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
const AddQuote = () => {
    const newQuote=(quoteData)=>{
        console.log(quoteData)
    }
    return (
       <QuoteForm onAddQuote={newQuote}/>
    )
}

export default AddQuote
