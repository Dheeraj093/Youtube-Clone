import stled, { ThemeProvider, styled } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home"
import Video from "./pages/Video"
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display:flex  ;

`
const Main = stled.div`
  flex:7;
  background-color:${({theme})=>theme.bg};
`
const Wrapper = stled.div`
  // padding:22px 96px;
`


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container >
      <BrowserRouter >
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
           <Wrapper>
              <Routes>
                 <Route path="/">
                 <Route index element={<Home type="random" />} />
                 <Route path="trends" element={<Home type="trend" />} />
                 <Route path="subscriptions" element={<Home type="sub" />} />
                 <Route path="signin" element={<SignIn/>} />
                 <Route path="video">
                    <Route path=":id" element={<Video />}/>
                 </Route>
                 </Route>
              </Routes>
           </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
   </ThemeProvider>
  );
}

export default App;
