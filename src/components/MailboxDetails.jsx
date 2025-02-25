import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxes }) => {
 const { mailboxId } = useParams()
 const mailbox = mailboxes.find((m) => m._id === Number(mailboxId))

 if (!mailbox) {
   return <h2>Mailbox Not Found!</h2>
 }

 return (
   <div>
     <h2>Mailbox Details</h2>
     <p>Box ID: {mailbox._id}</p>
     <p>Boxholder: {mailbox.boxholder}</p>
     <p>Box Size: {mailbox.boxSize}</p>
   </div>
 )
}

export default MailboxDetails