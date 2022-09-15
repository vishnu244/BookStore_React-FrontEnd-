import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Books from '../Book/Book'
import './Home.css'
import { getBooks } from '../../services/dataService'

function Home() {
  const [books, setbooks] = useState([])
  const booksarray = books.map(book => (<Books book={book} />))

  useEffect(() => {
    getBooks().then((response) => { console.log(response); setbooks(response.data.success) })
  }, [])
  return (
    <div>
      <Header />
      <div className='bookarray'>
        {booksarray}
      </div>
      <Footer />
    </div>
  )
}

export default Home