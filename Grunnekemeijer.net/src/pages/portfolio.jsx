import React from 'react';
import { StyledImage, Container, ImageWrapper,  Italics, Text, TextShadow} from './Portfolio.styled';



const data = [
    {
      id: 1,
      link: '../../JSeindopdracht/JSON_Cards/index.html',
      image: 'src/assets/pix/transformerindex.png',
      text: ( 
      <div> 
      De transformer index was één van de onderdelen van de javascript eindopdracht die ik tijdens de TechGrounds opleiding heb gemaakt. Het doel van de opdracht was het vinden van een geschikte database met RESTful API data, deze data op te halen en gestructureerd weer te geven in een zelfgemaakte index. Een veelgebruikte database hiervoor is de Pokédex API, maar aangezien ik een kind ben van een eerdere generatie viel de keuze op een Transformer Index (<a  href='https://github.com/crxssed7/transformers-api' target='_blank' rel='noopener noreferrer'>
      <TextShadow>deze</TextShadow></a>). Na enig worstelen met endpoints die niet werkten zoals verwacht heb ik de database JSON data gekopieerd en geprobeerd deze data lokaal te fetchen - <Italics> mijn eerste introductie met CORS errors. </Italics> Het uiteindelijke resultaat is een pagina met de eerste generatie Transformers gemapped vanuit een JSON bestand, met een modal voor grotere weergave. <a href='../../JSeindopdracht/JSON_Cards/index.html' target='_blank' rel='noopener noreferrer'><TextShadow>Hier</TextShadow></a> een live versie van de Transformer Index en een paar andere Javascript opdrachten die ik heb gemaakt (een image carousel, een analoge klok en een searchbar).     
      
      </div>
      ),
    },
    {
      id: 2,
      link: 'https://sander-g.github.io/WeatherApp/',
      image: 'src/assets/pix/pietsweerbericht.png',
      text: (
        <div> Piets weerbericht.. eerste React project, openweathermap, api data onderzoeken met postman, geolocatie, huidige weer, weersvoorspelling 7 dagen, windvaan richting kloppend, svg animaties, 
        <a href='https://sander-g.github.io/WeatherApp/' target='_blank' rel='noopener noreferrer'><TextShadow>gedeployde versie</TextShadow></a>.

        </div>
      ),
    },
    {
      id: 3,
      link: 'https://skippysskateboards.netlify.app',
      image: 'src/assets/pix/skippyskateboards.png',
      text: (
        <div> Skippy's vintage skateboards

<a href='https://skippysskateboards.netlify.app' target='_blank' rel='noopener noreferrer'><TextShadow>gedeployde versie hier!</TextShadow></a>.

        </div>
      ),
    },
    {
      id: 4,
      link: 'https://tg-nepflix.vercel.app',
      image: 'src/assets/pix/nepflix.png',
      text: (
        <div> Nepflix project
<a href='https://tg-nepflix.vercel.app' target='_blank' rel='noopener noreferrer'><TextShadow>gedeployde versie hier!</TextShadow></a>.



        </div>
      ),
    },
    { 
      id: 5,
      link: 'https://lottayoga.nl',
      image: 'src/assets/pix/lottayoga.png',
      text: (
        <div> Lotta Yoga

<a href='https://lottayoga.nl' target='_blank' rel='noopener noreferrer'><TextShadow>Link naar de site</TextShadow></a>.


        </div>
      ),
    }
  ];



export default function Portfolio() {
    return (
        <>
              <Container>
        {data.map((item) => (
         <React.Fragment key={item.id}>
            <ImageWrapper>
         <a href={item.link} target="_blank" rel="noopener noreferrer">
           
            <StyledImage src={item.image} alt={`Image ${item.id}`}/>
            </a>
            </ImageWrapper>
            <Text index={item.id}>{item.text}</Text>
         </React.Fragment>
       ))}

        </Container>
        </>
    )
}
