import Card from 'react-bootstrap/Card';//card import.

function BookItem(props){
     
    return (
        <div>
             <Card> {/* card added from react */}
      <Card.Header>{props.myBook.title}</Card.Header>
      <Card.Body>
      <img src={props.myBook.cover}></img>
      <p>{props.myBook.author}</p>
        
      </Card.Body>
    </Card>

           
        </div>
        
    );
    
    
}
export default BookItem;