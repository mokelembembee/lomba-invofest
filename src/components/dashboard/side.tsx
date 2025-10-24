'use client'

const SideSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className = "sticky top-0 w-100 h-screen border-l px-4 py-8 flex flex-col gap-6">
            { children }
        </aside>
    )
}

export default SideSection;