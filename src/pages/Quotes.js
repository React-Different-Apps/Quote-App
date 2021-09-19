import React from 'react'
import QuoteList from '../components/quotes/QuoteList'


const DUMMY_QUOTES=[
    {id:1, author:"Mohammed", text:"Islam is the best"},
    {id:2, author:"Ahmed", text:"i like prophet Mohammed"}
]

const Quotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    )
}

export default Quotes
