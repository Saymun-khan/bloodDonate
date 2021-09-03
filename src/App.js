import Card from "./component/Card/Card"
import Header from './component/Header/Header'
import Search from './component/SearchBox/Search'
import { User, Donar } from './DummyData'
import BloodDonar from './component/bloodDonar/bloodDonar'
import Register from './component/register/Register'
import ApplyForBlood from './component/apply/Apply'
import Skeleton from './component/skeletonComponent/ske'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import db from './firebase'
import { useState, useEffect } from 'react'
import { SearchBar } from './appElement'

function App() {
  const Cardin = {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    marginLeft: "30px",
    marginTop: "35px",

  }
  const [info, setinfo] = useState([])
  const [donar, setdonar] = useState([])
  const [searchTerm, setsearchTerm] = useState('')
  useEffect(() => {
    db.collection('Donate').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setinfo(snapshot.docs.map(doc => doc.data()))
    });
  }, [])

  useEffect(() => {
    db.collection('Donar').onSnapshot(snapshot => {
      setdonar(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  const searchHandler = (searchTerm) => {
    setsearchTerm(searchTerm)
  }

  return (

    <>

      <div style={{ backgroundColor: "#8dd7f0" }}>
        <Header />
        <SearchBar>
          <Search placeholder="রক্তের গ্রুপ অনুসারে খুজুন..." searchfunc={searchTerm} setsearchfunc={setsearchTerm} searchHandler={searchHandler} />
          <Search placeholder="উপজেলা বা ইউনিয়নের নাম অনুসারে খুজুন..." searchfunc={searchTerm} setsearchfunc={setsearchTerm} searchHandler={searchHandler} />
        </SearchBar>
        <Router>
          <Switch>
            <Route exact path="/">
              <div style={Cardin}>
                {
                  info.map(({ Name, Hospital, Mobile, Location, BloodGroup }) => (
                    < Card
                      bloodGroup={BloodGroup}
                      name={Name}
                      hospital={Hospital}
                      location={Location}
                      mobile={Mobile}
                    />
                  ))
                }

              </div>
            </Route>
            <Route path="/request">
              <ApplyForBlood />
            </Route>
            <Route path="/donar">
              <div style={Cardin}>
                {
                  donar.map(({ Name, Mobile, Location, BloodGroup }) => (
                    <BloodDonar
                      bloodGroup={BloodGroup}
                      name={Name}
                      location={Location}
                      mobile={Mobile}
                    />
                  ))
                }
              </div>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>

      </div>



    </>
  );
}

export default App;
