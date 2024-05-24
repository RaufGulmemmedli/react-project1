import "./main.css";
import Input from "../Input/input";
import Image from '../../../assets/image.svg'
function main() {
  return (
    <div className="main">
      <div className="left">
        <div className="headText">
          <h1>Always Track & Analyze Your Business Statistics To Succeed.</h1>
        </div>
        <div className="textP">
          <p>
            A better way to manage your sales, team, clients & marketing — on a
            single platform. Powerful, affordable & easy.
          </p>
        </div>
        <Input />
      </div>
      <div className="right1">
       <img src={Image} alt="" />
      </div>
    </div>
  );
}

export default main;
