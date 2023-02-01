import React from 'react';
import { StyledImage, Header, Container, Italics, Text} from './Portfolio.styled';



const data = [
    {
      image: 'src/assets/pix/transformerindex.png',
      text: ( 
      <div> 
      De transformer index was 1 van de onderdelen van de javascript eindopdracht die ik tijdens de TechGrounds opleiding heb gemaakt. Het doel van de opdracht was het vinden van een geschikte database met RESTful API data, deze data te fetchen en gestructureerd weer te geven in een zelfgemaakte index. Een veelgebruikte database hiervoor is de Pokédex API, maar aangezien ik een kind ben van een eerdere generatie viel de keuze op deze <a  href='https://github.com/crxssed7/transformers-api' target='_blank' rel='noopener noreferrer'>Transformers Index</a>. Na enig worstelen met endpoints die niet werkten zoals verwacht heb ik de database JSON data gekopieerd en geprobeerd deze data lokaal te fetchen - <Italics> mijn eerste introductie met CORS errors. </Italics> Het resultaat ...    
      
      </div>
      ),
    },
    {
      image: 'src/assets/pix/pietsweerbericht.png',
      text: 'Text for t quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur e'
    },
    {
      image: 'src/assets/pix/skippyskateboards.png',
      text: 'Text for image 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente seovident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.'
    },
    {
      image: 'src/assets/pix/nepflix.png',
      text: 'Text for image 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.'
    },
    {
      image: 'src/assets/pix/lottayoga.png',
      text: 'Text for image 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium '
    }
  ];



export default function Portfolio() {


    return (
        <>
        <Header><h2>Portfolio</h2></Header>
        <Container>
        {data.map((item, i) => (
         <React.Fragment key={i}>
            <StyledImage src={item.image} alt={`Image ${i + 1}`} index={i}/>
            <Text index={i}>{item.text}</Text>
         </React.Fragment>
       ))}

                </Container>

        </>
    )
}
