//function with the accepted props
function Header({text, bgColor, textColor}) {
    //we use a variable that stores values for the header styling
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    //in the header we use headerStyles variable to style it
  return (
<header style={headerStyles}>
    <div className="container">
        <h2>{text}</h2>
    </div>
</header>
  )
}

//if no props are passed this will take place
Header.defaultProps = {
    text: 'Feedback Ui',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
   
}

export default Header



