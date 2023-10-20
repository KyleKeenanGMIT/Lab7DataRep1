import BookItem from "./bookItem";

function Books(props) {

   

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook = {book}></BookItem>//return book item component
        }
    ); //map function created with arrow function
       
    
}
export default Books;