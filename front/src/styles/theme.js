const palette = {
    whitegray: '#DADADA',
    brightgray: '#A49E9E',
    txtgray: '#BDBDBD',
    mainyellow: '#F9CF00',
    assiyellow : '#FCE40A',
    red: '#EC4848',
    brightyellow : '#FFFBD3', 
    black : '#000000',
    green : '#55B586',
    gray: '#404040'
  };
  const common = {
    flexCenter: `
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    flexEnd: `
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `,
    flexAround: `
      display: flex;
      align-items: center;
      justify-content: space-around;
    `,
    flexSpaceBetWeen: `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
    flexColumnStart: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `,
  };
  
  const theme = {
    palette,
    common,
  };
  
  export default theme;