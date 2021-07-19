import styled from 'styled-components'
import './App.css';

interface LeftProps {
  readonly clipPath?: string;
  readonly shapeOutside?: string;
};

const Useless = styled.div`
  width: 180px;
  height: 180px;
  background-color: pink;
  border-radius: 50%;
  overflow: visible;
  outline: white solid 1px;

  p {
    margin: 0;
    font-size: 12px;
  }
`

const Left = styled.div<LeftProps>`
  content: "";
  float: left;
  height: 100%;
  width: 50%;
  shape-outside: ${({ shapeOutside }) => `polygon(${shapeOutside})` || "none"};

  background-color: red;
  clip-path: ${({ clipPath }) => `polygon(${clipPath})` || "none"};
  opacity: 1;
`;

function App() {

  const shapeOutside = "0px 0px, 98% 0px, 50% 6%, 23.4% 17.3%, 6% 32.6%, 0px 50%, 6% 65.6%, 23.4% 82.7%, 50% 94%, 98% 100%, 0px 100%"

  return (
    <div className="App">
      <header className="App-header">
        <Useless>
          <Left
            id="left"
            clipPath={shapeOutside}
            shapeOutside={shapeOutside}
          />
          <div id="right" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia maiores officia, quam aliquid expedita, qui dignissimos saepe beatae at quas laudantium culpa eveniet sequi, vel veritatis reprehenderit. Libero, quas totam.
          </p>
        </Useless>
      </header>
    </div>
  );
}

export default App;
