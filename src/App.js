import './css/common.css'
import './css/header.css'
import './css/footer.css'
import './css/main.css'

import Header from './Header';
import Aside from './Aside';
import Section from './Section';
import Footer from './Footer';

function App() {
  return (
    <div id = "wrap">
      <Header></Header>
      <Aside></Aside>
      <Section></Section>
      <div class="clear"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
