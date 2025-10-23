import DashboardNav from "@/components/dashboard/nav"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className = "w-full h-screen flex">            
            <DashboardNav/>

            { children }
        </div>
    )
}

export default DashboardLayout