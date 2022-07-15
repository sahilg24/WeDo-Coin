import './WedoPageDemo.css';
import WedoHeader from "./components/WedoHeader";
import WedoBody from "./components/WedoBody";
import WedoFooter from "./components/WedoFooter";

const WedoPageDemo = () => {

  return (
    <html>
      <div>
        <WedoHeader></WedoHeader>
      </div>
      <div>
        <WedoBody></WedoBody>
      </div>
      <div>
        <WedoFooter></WedoFooter>
      </div>
    </html>
  );
};
export default WedoPageDemo;
