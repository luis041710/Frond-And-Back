import UserForm from "../features/users/components/UserForm"
import DeleteUseEffect from "../shared/components/DeleteUseEffect"
import "../styles/global.css"
import DeleteCounter from "@/shared/components/DeleteCounter"
import Select from "@/shared/components/Select"

export default function App() {
  return(
    <div className="grid grid-cols-1 justify-items-center">
      <h1 className="bg-brand text-black text-2x1 font-bold">
           Pharmasoft
      </h1>
    
    <div>
       
      <UserForm/>

    </div>

      <DeleteCounter/>

      <DeleteUseEffect/>
      
    </div>
    
  );
};