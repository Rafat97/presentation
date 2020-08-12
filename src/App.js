import React, {
  // lazy,
  Component,
  // Suspense
} from "react";

import Reveal from 'reveal.js'
import RevealMenu from 'reveal.js-menu/menu.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/zenburn.css'

class App extends Component {
  componentDidMount(){
    Reveal.initialize({
      plugins: [ RevealMenu ],
    })
  }
  render() {
    return (
      <>
        <div className="reveal">
          <div className="slides">
            <section data-menu-title="Custom Menu Title" >Slide 1</section>
            <section data-menu-title="Custom Menu Title 2 " >Slide 2</section>
            <section data-menu-title="Custom Menu Title 2" >Slide 3</section>
            <section data-menu-title="Custom Menu Title 3" >Horizontal Slide</section>
            <section data-menu-title="Custom Menu Title 4" >
              <section>Vertical Slide 1</section>
              <section>Vertical Slide 2</section>
            </section >
            <section data-menu-title="Custom Menu Title 5" >Slide 4</section>
            <section data-menu-title="Custom Menu Title 6" >Slide 5</section>
            <section data-menu-title="Custom Menu Title 7" >Slide 6</section>
            <section data-menu-title="Custom Menu Title 8" >Slide 7</section>
            <section data-menu-title="Custom Menu Title 9" >Slide 8</section>
            <section data-menu-title="Custom Menu Title 10" >Slide 9</section>
            <section data-menu-title="Custom Menu Title 11" >Slide 10</section>
            <section data-menu-title="Custom Menu Title 12" >Slide 11</section>
            <section data-menu-title="Custom Menu Title 13" >Slide 12</section>
          </div>
        </div>

        {/* <Suspense fallback={<div>Loading...</div>}> */}

        {/* </Suspense> */}
      </>
    );
  }
}

export default App;
