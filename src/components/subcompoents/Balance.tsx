import { useState, useEffect } from "react";
import axios from "axios";

type BalanceProp = {
    Balance?: number
}

export function BalanceBar(props: BalanceProp) {
    const [balance, setBalance] = useState<number>(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/account/balance", {
                    headers: {
                        Authorization: "Bearer " + sessionStorage.getItem("token"),
                    },
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="bg-white mx-4 my-4 p-6 rounded-lg shadow-sm border border-gray-100 hover-scale">
            <div className="text-gray-600 text-sm mb-1">
                Your Balance
            </div>
            <div className="text-2xl font-bold text-blue-600">
                ₹ {balance.toLocaleString()}
            </div>
        </div>
    );
}