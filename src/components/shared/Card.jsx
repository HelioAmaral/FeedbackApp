

function Card({children, reverse}){

    //conditional class
    //<div className={`card ${reverse && 'reverse'}`}>{children}</div> 


    //below we have conditional style instead of conditional class
    return(
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
        }}>
            {children}
        </div>
    )
}

export default Card;