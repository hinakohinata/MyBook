import { useEffect, useState } from "react";

function Content(){
const [avatar,setAvatar]=useState()
    const handleChange = (e)=>{
        const file = e.target.files[0]
        file.prev =  URL.createObjectURL(file)
        setAvatar(file)
        console.log(file);
    }
    useEffect(()=>{
        return()=>{
            avatar && URL.revokeObjectURL(avatar.prev)
        }
    },[avatar])
    return(
        <div>
            <input type='file'
            onChange={handleChange}/>
           {avatar&& (<img src={avatar.prev} alt='' width="80%"/>)}
        </div>

        )
}
export default Content