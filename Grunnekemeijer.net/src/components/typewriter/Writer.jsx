import React, { useState, useEffect, useRef } from 'react';
import Typed from 'react-typed';
import { Container, Button, ButtonWrapper, BlinkingCursor, Row } from './Writer.styled';
import Heatmap from '../heatmap/Heatmap';
import TimeDifference from './TimeDifference';

export default function Writer() {
  const { years, months, weeks, days, hours } = TimeDifference();
  const [lines, setLines] = useState([
    `Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, nu ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 heb ik mij gekwalificeerd voor het volgen van een developer opleiding bij TechGrounds in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.`,
    '',
    '',
  ]);
  const [instantType, setInstantType] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [typingCompleted, setTypingCompleted] = useState(false);
   const typedRef = useRef(null);
  const timeoutIdsRef = useRef([]);

  useEffect(() => {
    
    if (typedRef.current) {
      typedRef.current.typed.reset();
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines([
            'Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, nu ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 heb ik mij gekwalificeerd voor het volgen van een developer opleiding bij TechGrounds in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.',
            'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving.',
            '',
          ]);
        }, 4000)
      );
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines([
            'Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, nu ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 heb ik mij gekwalificeerd voor het volgen van een developer opleiding bij TechGrounds in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.',
            'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving.',
            `Naast mijn passie voor webontwikkeling, vind ik het ook leuk om te klussen aan ons huis. Ik ben ook geïnteresseerd in smarthome technologie en het bevrijden van apparaten uit de Chinese cloud. Als trotse vader van mijn ${years} jaar, ${months} maanden, ${weeks} weken, ${days} dagen en ${hours} uur oude dochtertje, geniet ik van de tijd die we samen doorbrengen. In mijn vrije tijd vind ik het heerlijk om op de racefiets te stappen en in de zomer speel ik graag cricket. - Sander.`,
          ]);
        }, 10000)
      );
    }
  }, []);

  const handleInstantType = () => {
    setInstantType(true);
    setShowButton(false);
    setLines([
      `Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, nu ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 heb ik mij gekwalificeerd voor het volgen van een developer opleiding bij TechGrounds in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.`,
      'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving.',
      `Naast mijn passie voor webontwikkeling, vind ik het ook leuk om te klussen aan ons huis. Ik ben ook geïnteresseerd in smarthome technologie en het bevrijden van apparaten uit de Chinese cloud. Als trotse vader van mijn ${years} jaar, ${months} maanden, ${weeks} weken, ${days} dagen en ${hours} uur oude dochtertje, geniet ik van de tijd die we samen doorbrengen. In mijn vrije tijd vind ik het heerlijk om op de racefiets te stappen en in de zomer speel ik graag cricket. - Sander.`,
    ]);
    timeoutIdsRef.current.forEach(clearTimeout);
  };
   

  const handleTypingComplete = () => {
    setShowButton(false);
    setTypingCompleted(true);
  };

  return (
    <>
      {instantType ? (
        <Container>
          <Row>
            <div>{lines[0]}</div>
          </Row>
          <div>{lines[1]}</div>
          <Row>
            <div>{lines[2]}</div>
          </Row>
          <BlinkingCursor />
        </Container>
      ) : (
        <Container>
          {typingCompleted ? null : (
            <ButtonWrapper show={showButton}>
              <Button onClick={handleInstantType}>Cut to the chase</Button>
            </ButtonWrapper>
          )}
          <Row>
            <Typed
              strings={[lines[0]]}
              typeSpeed={20}
              backSpeed={50}
              loop={false}
              shuffle={false}
              backDelay={1500}
              fadeOut={false}
              smartBackspace={true}
              showCursor={false}
              ref={typedRef}
              startDelay={500}
            />
          </Row>
          <Typed strings={[lines[1]]} typeSpeed={20} backSpeed={50} loop={false} shuffle={false} backDelay={1500} fadeOut={false} smartBackspace={true} startDelay={20000} showCursor={false} />
          <Row>
            <Typed
              strings={[lines[2]]}
              typeSpeed={20}
              backSpeed={50}
              loop={false}
              shuffle={false}
              backDelay={1500}
              fadeOut={false}
              smartBackspace={true}
              startDelay={30000}
              onComplete={handleTypingComplete}
              ref={typedRef}
              caretPosition={true}
              showCursor={false}
            />
            {!typingCompleted ? null : <BlinkingCursor />}
          </Row>
        </Container>
      )}
      <ButtonWrapper show={showButton}>
        <Heatmap />
      </ButtonWrapper>
    </>
  );
}
