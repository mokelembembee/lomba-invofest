import DashboardNav from "@/components/dashboard/nav"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className = "w-full h-screen flex">
            <DashboardNav />

            <div className = "w-full h-full shrink overflow-y-auto">

            { children }
            </div>
        </div>
    )
}

export default DashboardLayout