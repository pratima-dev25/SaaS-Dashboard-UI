import StatCard from "./StatCard";
import {stats} from "../data/data";
import TaskTable from './TaskTable'


function Dashboard(){
    return(
        <div className="min-h-screen bg-gray-100 p-5">

            <h1 className="text-3xl text-center font-bold mb-5">Dashboard</h1>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                
                <StatCard title ="Total Users" value = {stats.users}/>

                <StatCard title ="Active Devices" value = {stats.devices}/>

                <StatCard title ="Revenue" value = {stats.revenue}/>

                <StatCard title ="Failed Jobs" value = {stats.failedJobs}/>
            </div>
            

            {/* table */}
            <div >
                <TaskTable/>
            </div>
        </div>
    );
}

export default Dashboard;