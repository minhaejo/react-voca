import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>

      <Switch>

        <Route exact path="/">
      <DayList/>
      </Route>

      <Route path="/day/:day"> 

      {/* 1. url에서 디테일한 값을 얻기위함 :(상세값)
        2.dayList 컴포넌트에서 link to 뒤에 {day.day}
         3.자식컴포넌트에서의 useParams 훅을 통해 url에 데이터를 받아옴 
         const day = useParams() << 얘는 객체반환 .(day) << 객체안에 day라는 애가 있을것
      */}

      <Day />
      </Route>

       <Route path="/create_word"> 
       {/* 루트의 경로 경로만 정한거고 결국 이동시키는건 Link to 태그임 */}
       <CreateWord />
      </Route>
    
         

       <Route path="/create_day"> 
       
       <CreateDay />
      </Route>

      
      
      <Route>
        {/* EmptyPage */}
      <EmptyPage/> 
      {/* 앞에있는 조건이 모두 만족하지 않는다면 이거실행함  맨위에 가게되면 모든페이지가 얘로 먹음*/}
      </Route>

      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
