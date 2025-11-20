import DashboardNav from "@/components/dashboard/nav"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-screen flex flex-col-reverse md:flex-row overflow-hidden bg-gray-50">
            <DashboardNav />
            <div className="flex-1 w-full h-full overflow-y-auto">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
