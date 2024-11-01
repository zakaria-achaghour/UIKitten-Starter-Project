import React, {useState} from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text,Button, Icon, IconRegistry } from '@ui-kitten/components';
import { default as themeGlobal } from './constants/custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ThemeContext } from './Config/theme-context';
import Appnavigator from './navigation/AppNavigator';
import { FontAwesome5IconsPack } from './Config/fontAwesom5-icons';
import { FontAwesomeIconsPack } from './Config/fontAwesom-icons';

const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);

 
export default function App() {
  
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(nextTheme);
};

  return (<>
    <IconRegistry icons={[EvaIconsPack, FontAwesome5IconsPack,FontAwesomeIconsPack]} />
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <ApplicationProvider {...eva} theme={{...eva[theme],...themeGlobal}} >
    
      <Appnavigator/>
      {/* <SplashScreen /> */}
    
      {/* <SignInScreen /> */}
      {/* <SignupScreen /> */}

  </ApplicationProvider>
  </ThemeContext.Provider>
  </>
  );
}
