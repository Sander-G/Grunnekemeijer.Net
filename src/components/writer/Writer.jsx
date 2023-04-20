import React, { useState, useEffect, useRef, useContext } from 'react';
import Typed from 'react-typed';
import { Container, Button, ButtonWrapper, Row, HeatmapLink, HeatmapWrapper, LastRow } from './Writer.styled';
import TimeDifference from '../timeDifference/TimeDifference';
import { MuteContext } from '../../contexts/MuteContext';
import { useTouchEvents } from '../../hooks/useTouchEvents';
import Heatmap from '../heatmap/Heatmap';

export default function Writer() {
  const { sounds, isMuted } = useContext(MuteContext);
  const { handleMouseEnter, handleMouseLeave } = useTouchEvents();
  const handleClick = () => {
    !isMuted && sounds[1].volume(0.1);
    !isMuted && sounds[1].play();
  };

  const handleMouseEnterLocal = handleMouseEnter(() => {
    !isMuted && sounds[0].volume(0.1);
    !isMuted && sounds[0].play();
  });

  const handleMouseLeaveLocal = handleMouseLeave(() => {
    sounds[0].stop();
  });

  const { years, months, weeks, days } = TimeDifference();
  function formatDays(days) {
    return days === 1 ? '1 dag' : `${days} dagen`;
  }

  function formatWeeks(weeks) {
    return weeks === 1 ? '1 week' : `${weeks} weken`;
  }

  function formatMonths(months) {
    return months === 1 ? '1 maand' : `${months} maanden`;
  }

  



  const [lines, setLines] = useState([
    `|| April '23 || Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, tegenwoordig ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 ben ik begonnen met het front-end programma van de TechGrounds Academy in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.`,
    '',
    '',
  ]);

  const [instantType, setInstantType] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [typingCompleted, setTypingCompleted] = useState(false);
  const typedRef = useRef(null);
  const timeoutIdsRef = useRef([]);
  const cursor = [''];
  const githubProfileUrl = 'https://github.com/Sander-G';

  useEffect(() => {
    if (typedRef.current) {
      typedRef.current.typed.reset();
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines([
            "|| April '23 || - Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, tegenwoordig ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 ben ik begonnen met het front-end programma van de TechGrounds Academy in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.",
            'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving. Ik hou van interface sounds, darkmode (vandaar de zaklamp..) en minimalistisch design. Op dit moment ben ik me aan het verdiepen in TypeScript. Ik ben beschikbaar voor zowel een junior developer functie als freelance webdesign. ',
            '',
          ]);
        }, 4000)
      );
      timeoutIdsRef.current.push(
        setTimeout(() => {
          setLines([
            "|| April '23 || - Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, tegenwoordig ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 ben ik begonnen met het front-end programma van de TechGrounds Academy in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.",
            'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving. Ik hou van interface sounds, darkmode (vandaar de zaklamp..) en minimalistisch design. Op dit moment ben ik me aan het verdiepen in TypeScript. Ik ben beschikbaar voor zowel een junior developer functie als freelance webdesign. ',
            `Naast mijn passie voor webdevelopment, vind ik het leuk om te klussen aan ons huis. Ik ben ook geïnteresseerd in smarthome technologie en het bevrijden van apparaten uit de cloud. Als trotse vader van mijn ${years} jaar, ${formatMonths(months)}, ${formatWeeks(weeks)} en ${formatDays(days)} oude dochtertje, geniet ik van de tijd die we samen doorbrengen. In mijn vrije tijd vind ik het heerlijk om op de racefiets te stappen en in de zomer speel ik graag cricket. - Sander.`,
          ]);
        }, 10000)
      );
    }
  }, []);

  const handleInstantType = () => {
    setInstantType(true);
    setShowButton(false);
    setLines([
      `|| April '23 || - Welkom op de geheel vernieuwde Grunnekemeijer.net website. Sinds jaar en dag domein voor mijn E-mail, tegenwoordig ook voor mijn developer portfolio. In 2022 heb ik mijn langgekoesterde wens om over te stappen naar een carrière in softwareontwikkeling waargemaakt. In mei 2022 ben ik begonnen met het front-end programma van de TechGrounds Academy in Amsterdam en heb ik mijn kennis van front-end technologie in een intensief half jaar flink verbeterd.`,
      'Mijn vaardigheden omvatten het bouwen van webapplicaties met HTML, CSS en JavaScript, evenals het werken met React, Styled Components, React Router en Redux. Ik ben bekend met Git en Jira en ben comfortabel met het werken in een Scrum/Agile teamomgeving. Ik hou van interface sounds, darkmode (vandaar de zaklamp..) en minimalistisch design. Op dit moment ben ik me aan het verdiepen in TypeScript. Ik ben beschikbaar voor zowel een junior developer functie als freelance webdesign. ',
      `Naast mijn passie voor webdevelopment, vind ik het leuk om te klussen aan ons huis. Ik ben ook geïnteresseerd in smarthome technologie en het bevrijden van apparaten uit de cloud. Als trotse vader van mijn ${years} jaar, ${formatMonths(months)}, ${formatWeeks(weeks)} en ${formatDays(days)} oude dochtertje, geniet ik van de tijd die we samen doorbrengen. In mijn vrije tijd vind ik het heerlijk om op de racefiets te stappen en in de zomer speel ik graag cricket. - Sander.`,
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
            <div>
              {lines[2]}
              <Typed strings={[cursor[0]]} showCursor={true} />
            </div>
          </Row>
        </Container>
      ) : (
        <Container>
          {typingCompleted ? null : (
            <ButtonWrapper show={showButton}>
              <Button
                aria-label='Cut to the Chase Button'
                onClick={() => {
                  handleClick();
                  handleInstantType();
                }}
                onMouseEnter={handleMouseEnterLocal}
                onMouseLeave={handleMouseLeaveLocal}
              >
                Cut to the chase
              </Button>
            </ButtonWrapper>
          )}
          <Row>
            <Typed strings={[lines[0]]} typeSpeed={20} loop={false} fadeOut={false} showCursor={false} ref={typedRef} startDelay={500} />
          </Row>
          <Typed strings={[lines[1]]} typeSpeed={20} loop={false} shuffle={false} startDelay={16500} showCursor={false} />
          <LastRow>
            <Typed
              strings={[lines[2]]}
              typeSpeed={20}
              backSpeed={50}
              loop={false}
              shuffle={false}
              backDelay={1500}
              fadeOut={false}
              startDelay={33500}
              onComplete={handleTypingComplete}
              ref={typedRef}
              showCursor={false}
            />
            {!typingCompleted ? null : <Typed strings={[cursor[0]]} showCursor={true} />}
          </LastRow>
        </Container>
      )}

      <HeatmapWrapper show={showButton}>
        <HeatmapLink href={githubProfileUrl} target='_blank' rel='noopener noreferrer' onClick={handleClick} onMouseEnter={handleMouseEnterLocal} onMouseLeave={handleMouseLeaveLocal}>
          <Heatmap />
        </HeatmapLink>
      </HeatmapWrapper>
    </>
  );
}
