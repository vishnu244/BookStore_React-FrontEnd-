import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Books from '../Book/Book'
import './Home.css'
import { getBooks } from '../../services/dataService'
import { getBooksbyID } from '../../services/dataService'
import BookView from '../BookView/BookView'

function Home() {
  const [books, setbooks] = useState([])
  const [view, setview] = useState(true)
  const [selecbook, setselecbook] = useState("")

  const ListenToBookList = () => {
    setview(false)
  }

  const listenToEachBook = (data) => {
    setselecbook(data);
  }

  const booksarray = books.map(book => (<Books book={book} books={books} ListenToBookList={ListenToBookList} listenToEachBook={listenToEachBook} />))
  // console.log(books.length)
  useEffect(() => {
    getBooks().then((response) => { console.log(response); setbooks(response.data.success) })
  }, [])

  return (
    <div>
      <Header />
      <div className='bookarray'>
        {view ? booksarray : <BookView selecbook={selecbook} />}
        {/* {booksarray}  */}
      </div>
      <Footer />
    </div>
  )
}

export default Home