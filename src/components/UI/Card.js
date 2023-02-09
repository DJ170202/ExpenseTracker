import './Card.css';
function Card(props){
    const classes  = 'card'+props.children;
    return <div className = {classes}>        
        {/* the value of this children prop will always be the content between the opening and closing tag between the custom component(ExpenseItem.js me Card tag ke andar ka component available hai props.children me) */}
        {/* children props by default hota h, par hum yahan pe custom children prop bana rhe h */}
        {props.children}
    </div>
}
export default Card;