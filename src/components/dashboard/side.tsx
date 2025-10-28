'use client'

const SideSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className = "sticky top-0 w-md h-screen border-l p-8 flex flex-col gap-6">
            { children }
        </aside>
    )
}

export default SideSection;