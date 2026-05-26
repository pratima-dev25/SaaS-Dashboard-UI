import { useState } from "react";
import { tasks } from "../data/data";

function TaskTable(){

    //search state
    let [search, setSearch] = useState("");

    //filter tasks
    const filteredTasks = tasks.filter((item) => 
        item.task.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className="bg-white p-5 rounded shadow" >

            {/* heaading */}
            <h2 className="text-2xl text-center font-bold mb-5">Task Table</h2>

            {/* search */}
            <input type="text" placeholder="Serach Task" value={search} onChange={(e) => setSearch(e.target.value)} className="border text-center p-2 w-full mb-5 md:w-80" />

            {/* Table */}
            <div className="overflow-auto">
                <table className="w-full">

                    {/* Table heading */}
                    <thead>
                        <tr className="border-b bg-gray-100">
                            <th className="p-3">Task</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Date</th>
                        </tr>
                    </thead>

                    {/* table body */}
                    <tbody>
                        {filteredTasks.map((item) => (
                            <tr key={item.id} className="text-center border-b">

                                {/* task... */}
                                <td className="p-3">{item.task}</td>

                                {/* status */}
                                <td className="p-3">
                                    <span className={
                                        item.status === "Success"
                                        ?"bg-green-200 text-green-800 px-3 py-1 rounded"
                                        : item.status === "Failed"
                                        ?"bg-red-200 text-red-800 px-3 py-1 rounded" 
                                        : "bg-yellow-200 text-yellow-800 px-3 py-1 rounded"}
                                    >
                                        {item.status}
                                    </span>
                                </td>

                                {/* date */}
                                <td className="p-3">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
        </div>
   
    );
}


export default TaskTable;
