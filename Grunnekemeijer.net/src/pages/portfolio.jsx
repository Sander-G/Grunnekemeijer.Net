
import React, {useEffect, useContext} from 'react';
import { StyledImage, Container, ImageWrapper, Italics, Text, TextShadow } from './Portfolio.styled';
import { MuteContext } from '../contexts/MuteContext';

const data = [
  {
    id: 1,
    link: '../../JSeindopdracht/JSON_Cards/index.html',
    image: '../assets/pix/transformerindex.png',
    text: (
      <>
        Na wat inleidende oefening met HTML en sass
        <a href='https://css-eindopdr-final.netlify.app/' target='_blank' rel='noopener noreferrer'>
          <TextShadow> css </TextShadow>
        </a>
        was de Transformer index een van de eerste JavaScript apps die ik tijdens de TechGrounds opleiding heb gemaakt. Het doel van de opdracht was het vinden van een geschikte database met RESTful
        API data, deze data op te halen en gestructureerd weer te geven in een zelfgemaakte index. Een veelgebruikte database hiervoor is de Pokédex API, maar omdat ik kind ben van een eerdere
        generatie viel de keuze op een Transformer Index (
        <a href='https://github.com/crxssed7/transformers-api' target='_blank' rel='noopener noreferrer'>
          <TextShadow>deze</TextShadow>
        </a>
        ). Na enig worstelen met endpoints die niet werkten zoals verwacht heb ik de database JSON data gekopieerd en geprobeerd deze data lokaal te fetchen
        <Italics>- introductie met CORS errors.</Italics> Het resultaat is een pagina met 1st Gen. Transformers gemapped vanuit een JSON bestand, met een modal voor grotere weergave.
        <a href='../../JSeindopdracht/JSON_Cards/index.html' target='_blank' rel='noopener noreferrer'>
          <TextShadow> Hier </TextShadow>
        </a>
        een live versie van de Transformer Index en een paar andere Javascript opdrachten die ik heb gemaakt.
      </>
    ),
  },
  {
    id: 2,
    link: 'https://sander-g.github.io/WeatherApp/',
    image: '../assets/pix/pietsweerbericht.png',
    text: (
      <>
        My first React App: Piets weerbericht, een ode aan weerman Piet Paulusma (1956-2022). Deze weather App heb is gemaakt met create react app, styled components. Op basis van de
        <a href='https://openweathermap.com' target='_blank' rel='noopener noreferrer'>
          <TextShadow> OpenWeatherMap </TextShadow>
        </a>
        API. Nadat ik eerst endpoints heb onderzocht met Postman, ben ik begonnen met het bouwen van de componenten, De App maakt API calls voor geolocatie obv. ingevoerde Plaatsnaam en geeft
        vervolgens het weer & zevendaagse voorspelling voor de gezochte locatie. Nog niet geheel responsive maar extra trots op de windvaan met kloppende windrichting. Hier de gedeployde versie van de
        App:
        <a href='https://sander-g.github.io/WeatherApp/' target='_blank' rel='noopener noreferrer'>
          <TextShadow> Piets Weerbericht</TextShadow>
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    link: 'https://skippysskateboards.netlify.app',
    image: '../assets/pix/skippyskateboards.png',
    text: (
      <>
        Skippy&apos;s vintage skateboards. Create React App project, eerste volledig zelf ontwikkelde webshop met verschillende product categorieën, winkelwagentje, user account login, state
        management en Routing. In enkele weken gebouwd vanaf user stories en wireframe tot gedeployde webshop. De webshop maakt gebruik van React Router voor pagina Routing, user account/login met
        Google Firebase (inmiddels verwijderd), state management met Redux toolkit, Express server backend voor de product database. Styling is gedaan met styled-components, de pagina is responsive en
        de producten uit de database worden gefetched als de pagina voor het eerst wordt geladen. Winkelwagentje en favoriete producten worden in local storage bewaard. Het product database JSON
        bestand wordt
        <a href='https://skippysexpressserver.netlify.app/.netlify/functions/api/products' target='_blank' rel='noopener noreferrer'>
          <TextShadow> gehost </TextShadow>
        </a>
        met Netlify serverless functions. De toast berichten hadden iets minder gekund.. Laatst gedeployde versie
        <a href='https://skippysskateboards.netlify.app' target='_blank' rel='noopener noreferrer'>
          <TextShadow> hier</TextShadow>
        </a>
        !
      </>
    ),
  },
  {
    id: 4,
    link: 'https://tg-nepflix.vercel.app',
    image: '../assets/pix/nepflix.png',
    text: (
      <>
        Het Nepflix project was de eindopdracht van de TechGrounds opleiding, waarbij we als groep beginnende developers als scrum team in 3 sprints van 2 weken een Netfix clone hebben gebouwd in
        React met Vite als Toolchain, React Router, Redux Toolkit, React-Icons, Styled Components. Het team bestond uit een front-end en een backend groep. Er was een scrum master, een productowner en
        planning en voortgang werd bijgehouden in een Jira board. De front-end groep was vooral gericht op het nauwkeurig nabouwen van de Netflix site en de functionele componenten zoals de carousels,
        players and modals. De backend groep was gericht op het aanleveren van API data voor de frontend obv de gebruikte databases (TMDB, FanArt TV). Er waren dagelijkse stand-up meetings en sprint
        reviews na afloop van de sprints. De phishing waarschuwing die de landingpage veroorzaakte accepteerden we als bewijs van een geslaagde kopie :) Het Github
        <a href='https://github.com/tg-netflix' target='_blank' rel='noopener noreferrer'>
          <TextShadow> project</TextShadow>
        </a>{' '}
        en de laatste versie van de site vind je hier:
        <a href='https://tg-nepflix.vercel.app' target='_blank' rel='noopener noreferrer'>
          <TextShadow> Nepflix</TextShadow>
        </a>
        .
      </>
    ),
  },
  {
    id: 5,
    link: 'https://lottayoga.nl',
    image: '../assets/pix/lottayoga.png',
    text: (
      <>
        De LottaYoga website heb ik voor Lotte (mijn vrouw) gemaakt met HTML, (Sass) CSS en een klein beetje JavaScript voor de hamburger & nav menu, een modal en mail/telefoon obfuscatie. De site is
        responsive en bestaat uit fullpage achtergrondfoto&apos;s van Lotte in verschillende yoga houdingen tegen een blauwe lucht. De foto&apos;s worden in verschillende resoluties aangeboden op
        basis van scherm grootte om lange laadtijden te voorkomen. De verschillende secties van de site heeft een achtergrond parallax effect dat (eerst niet.. maar nu wel) ook werkt in safari mobile.
        Voor SEO doeleinden heb ik o.a. Structured Data en een sitemap toegevoegd. Woon je in Enschede en overweeg je yoga te gaan doen? Neem contact op met Lotte!
        <a href='https://lottayoga.nl' target='_blank' rel='noopener noreferrer'>
          <TextShadow> https://lottayoga.nl</TextShadow>
        </a>
        .
      </>
    ),
  },
];




export default function Portfolio() {
 const { sounds, isMuted } = useContext(MuteContext);
   useEffect(() => {
     document.removeEventListener('touchmove', preventDefault);
   }, []);

   function preventDefault(e) {
     e.preventDefault();
   }
 

  return (
    <>
      <Container>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <ImageWrapper>
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => {
                  !isMuted && sounds[1].volume(0.1);
                  !isMuted && sounds[1].play();
                }}
                onMouseEnter={() => {
                  !isMuted && sounds[0].volume(0.1);
                  !isMuted && sounds[0].play();
                }}
                onMouseLeave={() => {
                  sounds[0].stop();
                }}
              >
                <StyledImage src={item.image} alt={`Image ${item.id}`} />
              </a>
            </ImageWrapper>
            <Text index={item.id}>
              {React.cloneElement(item.text, {
                children: React.Children.map(item.text.props.children, (child) => {
                  if (child.type === 'a') {
                    return React.cloneElement(child, {
                      onClick: () => {
                        !isMuted && sounds[1].volume(0.1);
                        !isMuted && sounds[1].play();
                      },
                      onMouseEnter: () => {
                        !isMuted && sounds[0].volume(0.1);
                        !isMuted && sounds[0].play();
                      },
                      onMouseLeave: () => {
                        sounds[0].stop();
                      },
                    });
                  }
                  return child;
                }),
              })}
            </Text>
          </React.Fragment>
        ))}
      </Container>
    </>
  );
}
