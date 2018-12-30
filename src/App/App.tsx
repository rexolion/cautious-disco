import { cn } from '@bem-react/classname';
import * as React from 'react';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const cnApp = cn('App');

class App extends React.Component {
  public render() {
    return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
    );
  }
}

export default App;
