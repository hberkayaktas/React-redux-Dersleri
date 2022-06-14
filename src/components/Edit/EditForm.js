import {useState} from "react";
import { useDispatch} from 'react-redux';
import { updateContact } from '../../redux/contactSlice';
import { useNavigate } from "react-router-dom";

function EditForm({contact}) {
      const [name,setName] = useState(contact.name);
      const [number, setNumber] = useState(contact.phone_number);
      let navigate = useNavigate();
      const dispatch = useDispatch();
      const handleSubmit = (e)=>{
            e.preventDefault();
            if(!name || !number ) return false;
            dispatch(
                  updateContact({
                        id: contact.id,
                        changes: {
                              name,
                              phone_number:number,
                        },
                  })
            )
            navigate("/");
      }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="btn">
          <button type="submit"> Update </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
