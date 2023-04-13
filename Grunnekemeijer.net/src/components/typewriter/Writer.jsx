import React, { useState, useEffect, useRef, useContext } from 'react';
import Typed from 'react-typed';
import { Container, Button, ButtonWrapper, BlinkingCursor, Row, LastRow, HeatmapLink, HeatmapWrapper } from './Writer.styled';
import Heatmap from '../heatmap/Heatmap';
import TimeDifference from './TimeDifference';
import { MuteContext } from '../../contexts/MuteContext';

export default function Writer() {
    const { sounds, isMuted } = useContext(MuteContext);
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
            'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving. Ik hou van interface sounds, darkmode (vandaar de zaklamp..) en minimalistisch design. Op dit moment ben ik bezig met het leren van TypeScript.',
            '',
          ]);
        }, 4000)
      );
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines([
            'Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, nu ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 heb ik mij gekwalificeerd voor het volgen van een developer opleiding bij TechGrounds in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.',
            'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving. Ik hou van interface sounds, darkmode (vandaar de zaklamp..) en minimalistisch design. Op dit moment ben ik bezig met het leren van TypeScript.',
            `Naast mijn passie voor webontwikkeling, vind ik het leuk om te klussen aan ons huis. Ik ben ook geïnteresseerd in smarthome technologie en het bevrijden van apparaten uit de cloud. Als trotse vader van mijn ${years} jaar, ${months} maanden, ${weeks} weken, ${days} dagen en ${hours} uur oude dochtertje, geniet ik van de tijd die we samen doorbrengen. In mijn vrije tijd vind ik het heerlijk om op de racefiets te stappen en in de zomer speel ik graag cricket. - Sander.`,
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
      'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving. Ik hou van interface sounds, darkmode (vandaar de zaklamp..) en minimalistisch design. Op dit moment ben ik bezig met het leren van TypeScript.',
      `Naast mijn passie voor webontwikkeling, vind ik het leuk om te klussen aan ons huis. Ik ben ook geïnteresseerd in smarthome technologie en het bevrijden van apparaten uit de cloud. Als trotse vader van mijn ${years} jaar, ${months} maanden, ${weeks} weken, ${days} dagen en ${hours} uur oude dochtertje, geniet ik van de tijd die we samen doorbrengen. In mijn vrije tijd vind ik het heerlijk om op de racefiets te stappen en in de zomer speel ik graag cricket. - Sander.`,
    ]);
    timeoutIdsRef.current.forEach(clearTimeout);
  };
   

  const handleTypingComplete = () => {
    setShowButton(false);
    setTypingCompleted(true);
  };

  const githubProfileUrl = 'https://github.com/Sander-G';

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
          <LastRow>
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
          </LastRow>
        </Container>
      )}
      <ButtonWrapper show={showButton}>
        <HeatmapWrapper>
          <HeatmapLink
            href={githubProfileUrl}
            target='_blank'
            rel='noopener noreferrer'
            onMouseEnter={() => {
              !isMuted && sounds[0].play();
            }}
            onMouseLeave={() => {
              sounds[0].stop();
            }}
          >
            <Heatmap />
          </HeatmapLink>
        </HeatmapWrapper>
      </ButtonWrapper>
    </>
  );
}
