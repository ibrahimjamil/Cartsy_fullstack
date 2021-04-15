
import * as React from 'react';
import { useState } from 'react';

interface InfoProps{
    name:String
}

interface infoState{
    Sname:{
        name:String
    }
}


const Demo:React.FC<InfoProps>=({name}:any)=>{
    const [Sname,setName]=React.useState<infoState>({
        Sname:{
            name:"ibrahim"
        }
    })
    return (
        <div>
            {name}
            {Sname.Sname.name}
        </div>
    )
}

export default Demo;