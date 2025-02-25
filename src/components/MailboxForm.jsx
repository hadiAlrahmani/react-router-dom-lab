import { useState } from 'react'

const MailboxForm = ({ addMailbox }) => {
 const initialState = {
   boxholder: '',
   boxSize: 'Small'
 }

 const [formData, setFormData] = useState(initialState)

 const handleChange = ({ target }) => {
   setFormData({ ...formData, [target.name]: target.value })
 }

 const handleSubmit = (e) => {
   e.preventDefault()
   addMailbox(formData)
   setFormData(initialState)
 }

 return (
   <form onSubmit={handleSubmit}>
     <label>
       Boxholder:
       <input
         type="text"
         name="boxholder"
         value={formData.boxholder}
         onChange={handleChange}
       />
     </label>
     <label>
       Box Size:
       <select
         name="boxSize"
         value={formData.boxSize}
         onChange={handleChange}
       >
         <option value="Small">Small</option>
         <option value="Medium">Medium</option>
         <option value="Large">Large</option>
       </select>
     </label>
     <button type="submit">Submit</button>
   </form>
 )
}

export default MailboxForm