type BalanceProp = {
    Balance?: number
}
export function BalanceBar(props: BalanceProp) {
    return <div className="flex pl-4 items-center shadow-gray-200 shadow-sm">
        <div className="font-bold text-lg my-2 mr-2">
            Your Balance
        </div>
        <div className="my-2 items-center text-lg font-bold ">
            ₹ {props.Balance}
        </div>
    </div>
}