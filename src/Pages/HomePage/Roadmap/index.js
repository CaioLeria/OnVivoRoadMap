import React, { useState } from 'react';

const bounce = `@keyframes bounce {
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(-70%);
  }
}`;

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '35vh',
    backgroundColor: '#78009D',
    fontFamily: 'Inter, sans-serif',
    color: 'white',
    padding: '1rem',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  relativeContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '64rem',
    padding: '1rem',
  },
  svgWave: {
    position: 'absolute',
    top: '50%',
    left: '0',
    width: '100%',
    height: '2rem',
    transform: 'translateY(-50%)',
    zIndex: '0',
  },
  stepsContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepItem: {
    position: 'relative',
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCircle: {
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '9999px',
    borderWidth: '4px',
    transition: 'background-color 500ms, border-color 500ms',
  },
  flagWrapper: {
    position: 'absolute',
    top: '-1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  flagIcon: {
    height: '2rem',
    width: '2rem',
    position: 'absolute',
    top: '-1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'transform 500ms',
    color: '#FF5757',
  },
  checkeredFlagIcon: {
    height: '2rem',
    width: '2rem',
    position: 'absolute',
    top: '-1.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  lineBetweenSteps: {
    position: 'absolute',
    height: '0.25rem',
    top: '50%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    opacity: '0.4',
  },
  controlsContainer: {
    marginTop: '2rem',
    display: 'flex',
    gap: '1rem',
  },
  controlButton: {
    backgroundColor: '#6d28d9',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    transition: 'background-color 300ms',
  },
};

const Roadmap = () => {
  const [userPosition, setUserPosition] = useState(5);
  const steps = new Array(13).fill({});

  const handleNextStep = () => {
    if (userPosition < steps.length - 1) {
      setUserPosition(userPosition + 1);
    }
  };

  const handlePrevStep = () => {
    if (userPosition > 0) {
      setUserPosition(userPosition - 1);
    }
  };

  return (
    <div style={style.container}>
      <style>{bounce}</style>
      <h1 style={style.title}>Roadmap do Projeto</h1>
      <div style={style.relativeContainer}>
        <svg style={style.svgWave} viewBox="0 0 100 20" preserveAspectRatio="none">
          <path
            d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10"
            stroke="#fff"
            strokeWidth="0.5"
            fill="none"
            strokeOpacity="0.4"
          />
        </svg>

        <div style={style.stepsContainer}>
          {steps.map((step, index) => {
            const isCompleted = index < userPosition;
            const isAtCurrentPosition = index === userPosition;
            const isLastStep = index === steps.length - 1;

            const circleColor = isCompleted || (isLastStep && isAtCurrentPosition) ? '#84cc16' : 'white';
            const borderColor = isCompleted || (isLastStep && isAtCurrentPosition) ? '#84cc16' : '#8B5CF6';

            return (
              <div style={style.stepItem} key={index}>
                <div style={{
                  ...style.stepCircle,
                  backgroundColor: circleColor,
                  borderColor: borderColor
                }} />
                {isAtCurrentPosition && !isLastStep && (
                  <div style={style.flagWrapper}>
                    <svg style={{...style.flagIcon, animation: '1s infinite bounce'}} viewBox="0 0 24 24" fill="currentColor">
                      <title>Sua posição atual</title>
                      <path d="M5.5 2C5.77614 2 6 2.22386 6 2.5V3H17.5C18.3284 3 19 3.67157 19 4.5V11.5C19 12.3284 18.3284 13 17.5 13H6V21.5C6 21.7761 5.77614 22 5.5 22C5.22386 22 5 21.7761 5 21.5V2.5C5 2.22386 5.22386 2 5.5 2ZM17 11H6V4H17C17.2761 4 17.5 4.22386 17.5 4.5V11.5L17 11Z" />
                    </svg>
                  </div>
                )}
                {isLastStep && (
                  <div style={style.flagWrapper}>
                    <svg style={style.checkeredFlagIcon} viewBox="0 0 24 24" fill="currentColor">
                      <title>Chegada</title>
                      <path d="M12.4491 14.1539C12.4491 14.1539 12.8354 12.8431 12.8354 12.8431C13.2504 12.8431 13.5855 12.5079 13.5855 12.0929V8.89291C13.5855 8.47792 13.9206 8.14282 14.3356 8.14282C14.7506 8.14282 15.0857 8.47792 15.0857 8.89291V12.0929C15.0857 12.5079 15.4208 12.8431 15.8358 12.8431C16.2508 12.8431 16.5859 12.5079 16.5859 12.0929V8.89291C16.5859 8.47792 16.921 8.14282 17.336 8.14282V12.0929C17.336 12.5079 17.6711 12.8431 18.0861 12.8431C18.5011 12.8431 18.8362 12.5079 18.8362 12.0929V8.89291C18.8362 8.47792 19.1713 8.14282 19.5863 8.14282V21.1578C20.3364 21.5728 20.0013 21.9079 19.5863 21.9079H15.8358C15.4208 21.9079 15.0857 21.5728 15.0857 21.1578V18.1578C15.0857 17.7428 14.7506 17.4077 14.3356 17.4077C13.9206 17.4077 13.5855 17.7428 13.5855 18.1578V21.1578C13.5855 21.5728 13.2504 21.9079 12.8354 21.9079H9.08492C8.66992 21.9079 8.33482 21.5728 8.33482 21.1578V18.1578C8.33482 17.7428 7.99973 17.4077 7.58473 17.4077C7.16973 17.4077 6.83463 17.7428 6.83463 18.1578V21.1578C6.83463 21.5728 6.49954 21.9079 6.08454 21.9079H2.33405C1.91905 21.9079 1.58395 21.5728 1.58395 21.1578V8.89291C1.58395 8.47792 1.91905 8.14282 2.33405 8.14282V12.0929C2.33405 12.5079 2.66915 12.8431 3.08415 12.8431C3.49915 12.8431 3.83424 12.5079 3.83424 12.0929V8.89291C3.83424 8.47792 4.16934 8.14282 4.58434 8.14282V12.0929C4.58434 12.5079 4.91944 12.8431 5.33444 12.8431C5.74944 12.8431 6.08454 12.5079 6.08454 12.0929V8.89291C6.08454 8.47792 6.41964 8.14282 6.83463 8.14282V12.0929C6.83463 12.5079 7.16973 12.8431 7.58473 12.8431V15.8431C7.58473 16.2581 7.99973 16.5932 8.41473 16.5932C8.82973 16.5932 9.16482 16.2581 9.16482 15.8431V12.8431C9.16482 12.5079 9.49992 12.1728 9.91492 12.1728C10.3299 12.1728 10.665 12.5079 10.665 12.8431V15.8431C10.665 16.2581 11.0001 16.5932 11.4151 16.5932C11.8301 16.5932 12.1652 16.2581 12.1652 15.8431V12.8431C12.1652 12.5079 12.4491 14.1539 12.4491 14.1539Z" />
                    </svg>
                  </div>
                )}
                {index < steps.length - 1 && (
                  <div style={style.lineBetweenSteps} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
