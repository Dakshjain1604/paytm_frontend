import { useState, useEffect } from "react"
import { SendMoneyButton } from "./subcompoents/sendMoneyButton";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setfilter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/user/find/?filter=${filter}`).then(response => {
            setUsers(response.data.users);
        })
    }, [filter])

    return <>
        <div className="px-4 py-6">
            <div className="text-xl font-bold text-wh mb-4">
                Users
            </div>
            <div className="mb-6">
                <input 
                    onChange={(e) => { setfilter(e.target.value) }} 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
            </div>
            <div className="space-y-4">
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    </>
}

function User({ user }) {
    const navigate = useNavigate();
    return <div className="bg-blue-100 p-4 rounded-lg shadow-lg border border-gray-100 hover-scale flex justify-between items-center">
        <div className="flex items-center gap-4">
            <div className="rounded-full h-12 w-12 bg-blue-50 flex justify-center items-center">
                <div className="text-xl font-semibold text-blue-600">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="font-medium text-gray-800">
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>
        <SendMoneyButton 
            onClick={(e) => { navigate("/send?id=" + user._id + "&name=" + user.firstName) }} 
            label="Send Money"
        />
    </div>
}