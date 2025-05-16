import type { MouseEventHandler } from "react"


interface content{
    label:string,
    onClick:MouseEventHandler
}

export function SendMoneyButton(props:content){

    return <div className="bg-black text-white text-md rounded-md px-2 py-1 hover:cursor-pointer m-2"> 
            <button onClick={props.onClick}>{props.label}</button>

    </div>
}