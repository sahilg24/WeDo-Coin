import './WedoPageDemo.css';
import WedoHeader from "./components/WedoHeader";
import WedoFooter from "./components/WedoFooter";

const WedoPageDemo = () => {

  return (
    <html>
      <header>
        <WedoHeader></WedoHeader>
      </header>

      <footer className='footerStyle'>
        <WedoFooter></WedoFooter>
      </footer>



    </html>



    //FOOTER



  );
};
export default WedoPageDemo;
