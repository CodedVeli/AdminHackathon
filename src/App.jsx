import { Routes, Route } from "react-router"
import NavBar from "./components/NavBar"
import ChallengeListPage from "./pages/ChallengeListPage"
import ChallengeDetails from "./pages/ChallengeDetails"
import CreateChallenge from "./pages/CreateChallenge"
import EditChallenge from "./pages/EditChallenge"
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ChallengeListPage />} />
        <Route path="/details" element={<ChallengeDetails />} />
        <Route path="/create" element={<CreateChallenge />} />
        <Route path="/edit" element={<EditChallenge />} />
      </Routes>

    </>
  )
}

export default App
