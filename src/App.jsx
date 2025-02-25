import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'
import HomePage from './components/HomePage'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
    <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
    <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
    </Routes>
    </>
  )
}

export default App