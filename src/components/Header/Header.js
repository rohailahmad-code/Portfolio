import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    
    constructor() {
        super();
        this.state = { 
            navlink_1 : 'Hello.',
            navlink_2 : 'I am',
            navlink_3 : 'Rohail' 
        }
      }

      mouseOverOne (e) {
        this.setState({
            navlink_1 : 'About',       
        })
      }
      mouseOverTwo (e) {
        this.setState({
            navlink_2 : 'Work',       
        })
      }
      mouseOverThree (e) {
        this.setState({
            navlink_3 : 'Contact',       
        })
      }
      mouseOut (e) {
          this.setState({
            navlink_1 : 'Hello.',
            navlink_2 : 'I am',
            navlink_3 : 'Rohail'
            })
      }

      toggleDisplay(){
        this.setState(prevState => ({
          navlink_1: prevState.navlink_1 === 'Hello.' ? 'About' : 'Hello.',
          navlink_2: prevState.navlink_2 === 'I am' ? 'Work' : 'I am',
          navlink_3: prevState.navlink_3 === 'Rohail' ? 'Contact' : 'Rohail',
        }))
      }
    
      // changeStateHandler(e){
      //     this.setState({
      //       navlink_1 : 'About',
      //       navlink_2 : 'Work',
      //       navlink_3 : 'Contact'
      //     })
      // }

      // onClick={this.changeStateHandler.bind(this)}


      render() {
        
            // const {text} = this.state;
            return (

                <main onClick={this.toggleDisplay.bind(this)}  className='Header'>

                    <div className='navlinks'>
                        <NavLink className='navlink l1' to='/about'
                        onMouseEnter={this.mouseOverOne.bind(this)}
                        onMouseLeave={this.mouseOut.bind(this)}
                        >
                        {this.state.navlink_1}
                        </NavLink>
                        <NavLink className='navlink l2' to='/work'
                        onMouseEnter={this.mouseOverTwo.bind(this)}
                        onMouseLeave={this.mouseOut.bind(this)}>
                        {this.state.navlink_2}
                        </NavLink>
                        <NavLink className='navlink l3' to='/contact'
                        onMouseEnter={this.mouseOverThree.bind(this)}
                        onMouseLeave={this.mouseOut.bind(this)}>
                        {this.state.navlink_3}
                        </NavLink>
                    </div>
                   
                </main>
            )
      }
    
}

export default Header;