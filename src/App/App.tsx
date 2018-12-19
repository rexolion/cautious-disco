import * as React from 'react';
import { cn } from '@bem-react/classname';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import ReactDOM from 'react-dom';

const cnApp = cn('App')

 
export class App extends React.Component {
    render() { 
        return ( 
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
         );
    }
}
 
ReactDOM.render(<App/>, document.getElementById('root'));