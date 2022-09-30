import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Books from '../Book/Book'
import './Home.css'
import { getBooks } from '../../services/dataService'
import BookView from '../BookView/BookView'

function Home() {
  const [books, setbooks] = useState([])
  const [view, setview] = useState(true)
  const [selecbook, setselecbook] = useState("")
  const [searchBook, setSearchBook] = React.useState('')

  const ListenToBookList = () => {
    setview(false)
  }

  const listenToEachBook = (data) => {
    setselecbook(data);
  }

  const booksarray = books.map(book => (<Books book={book} books={books} ListenToBookList={ListenToBookList} listenToEachBook={listenToEachBook} />))

  useEffect(() => {
    displayBooks();
  }, [searchBook])

  const displayBooks = () => {

    getBooks().then((response) => {
      console.log(response);
      if (searchBook) {
        let filterbooks = response.data.success.filter(books => books.name.toLowerCase().includes(searchBook.toLowerCase()))
        setbooks(filterbooks)
      }
      else {
        setbooks(response.data.success)

      }
    }).catch((error) => {
      console.log(error);
    })

  }


  const showSearchedBooks = (string) => {
    setSearchBook(string)
  }
  return (
    <div>
      <Header showSearchedBooks={showSearchedBooks} />
      <div className='bookarray'>
        {view ? booksarray : <BookView selecbook={selecbook} />}
      </div>
      <Footer />
    </div>
  )
}

export default Home