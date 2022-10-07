import logo from './logo.svg';
import './App.css';


import FooterApp from './components/lichsu/FooterApp';
import FooterHistory from './components/lichsu/FooterHistory';
// import ContentApp from './components/lichsu/ContentApp';
// import ContentSlide from './components/lichsu/ContentSlide';
import HistoryApp from './components/lichsu/HistoryApp';
import ContentApp from './components/lichsu/ContentApp';
import { ScrollToTop } from './components/lichsu/ScrollToTop';
import QuestionApp from './components/lichsu/QuestionApp';
import JavTutorial from './components/jav/JavTutorial';
import ExpenseApp from './components/expense_app/ExpenseApp';
import MainApp from './test/MainApp';
import FootBall from './components/sakura/FootBall';

// import HistoryAdmin from './components/phanquyen/HistoryAdmin';
// import RoutingApp from './components/routing-app/RoutingApp';
// import MemeApp from './components/meme_app/MemeApp';
// import MainContent from './components/meme_app/MainContent';
// import HookApp from './components/Hook-app/HookApp';
import {CartApp} from './components/cart/CartApp';
import ThongTin from './components/lichsu/ThongTin';
import DarkLight from './components/lichsu/DarkLight';
import TrangChu from './components/lichsu/TrangChu';
import HistoryAdmin from './components/phanquyen/HistoryAdmin';
import Add from './Chapter_13/Add';
import Manger from './Chapter_14/Manger';
import UsserEffectApp from './Chapter_15/UserEffectApp';
import Count from './Chapter_15/Count';
import QuizApp from './components/quiz_app/QuizApp';
import TableUser from './Chapter_15/TableUser';
import ContextApi from './Chapter_16/ContextApi';
import UseRef from './Chapter_17/UseRef';
import UseReducer from './Chapter_17/UseReducer';
import FormReducer from './Chapter_17/FormReducer';








import ('https://fonts.googleapis.com/css2?family=Luxurious+Roman&family=Pacifico&display=swap');


function App() {
  
  return (
     <div>
       <HistoryApp />
       <div>
         <ScrollToTop />

       </div>
    </div>
    
    // <Manger />
    // <UsserEffectApp />
    // <Count />
    // <TableUser />
    // <ContextApi />
    // <CartApp />
    // <UseRef />
    // <UseReducer />
    // <FormReducer />
  )  
}

export default App;