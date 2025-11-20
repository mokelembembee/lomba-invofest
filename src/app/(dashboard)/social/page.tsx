'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Plus,
    Clock,
    MapPin,
    ArrowLeft
} from 'lucide-react'
import { Send, Users, Users2 } from 'iconest-react'
import { useRouter } from 'next/navigation'
import { useUser } from '@stackframe/stack'
import { Button } from '@/components/ui/button'

const Page = () => {
    const router = useRouter()
    const user = useUser()

    useEffect(() => {
        if (!user) {
            router.replace('/handler/sign-in')
        }
    }, [user, router])

    const [groups, setGroups] = useState([
        {
            id: 1,
            name: 'Morning Joggers',
            description: 'Komunitas lari pagi pukul 6.',
            sport: 'Jogging',
            members: ['Salman', 'Nebula', 'Aisha', 'Rafi'],
            messages: [
                { type: 'text', sender: 'Salman', text: 'Besok kita jadi lari ga ya?', time: "06:40" },
                { type: 'text', sender: 'Nebula', text: 'JADIII', time: "06:41" },
                {
                    type: 'activity',
                    sender: 'Agus S',
                    time: '06:55',
                    stats: { time: '20m 10d', dist: '10km' },
                    likes: 2
                }, {
                    type: 'touch',
                    sender: 'Salman',
                    time: '09:50'
                }
            ],
        },
        {
            id: 2,
            name: 'Yoga Serenity',
            description: 'Yoga setiap sore bersama instruktur profesional.',
            sport: 'Yoga',
            members: ['Lia', 'Tari', 'Bintang'],
            messages: [
                { type: 'text', sender: 'Tari', text: 'PAGI SEMUAAA!', time: "05:21" },
            ],
        },
    ])

    const [selectedGroup, setSelectedGroup] = useState<typeof groups[0] | null>(groups[0])
    const [message, setMessage] = useState('')
    const [newGroup, setNewGroup] = useState({ name: '', sport: '', description: '' })

    if (!user) {
        return null
    }

    const sendMessage = () => {
        if (!message.trim() || !selectedGroup) return

        const currentGroupId = selectedGroup.id

        const time = new Date()
        const hh = time.getHours().toString().padStart(2, "0")
        const mm = time.getMinutes().toString().padStart(2, "0")
        const timestamp = `${hh}:${mm}`

        const updated = groups.map((g) =>
            g.id === currentGroupId
                ? { ...g, messages: [...g.messages, { type: 'text', sender: 'Kamu', text: message, time: timestamp }] }
                : g
        )

        setGroups(updated)
        setSelectedGroup(updated.find((g) => g.id === currentGroupId)!)
        setMessage('')

        setTimeout(() => {
            const replyTime = new Date()
            const rh = replyTime.getHours().toString().padStart(2, "0")
            const rm = replyTime.getMinutes().toString().padStart(2, "0")
            const replyStamp = `${rh}:${rm}`

            const reply = `Okee gasken!`

            setGroups((prev) =>
                prev.map((g) =>
                    g.id === currentGroupId
                        ? { ...g, messages: [...g.messages, { type: 'text', sender: 'Salman', text: reply, time: replyStamp }] }
                        : g
                )
            )

            setSelectedGroup((prev) => {
                if (prev && prev.id === currentGroupId) {
                    return {
                        ...prev,
                        messages: [...prev.messages, { type: 'text', sender: 'Salman', text: reply, time: replyStamp }]
                    }
                }
                return prev
            })
        }, 3000)
    }

    const createGroup = () => {
        if (!newGroup.name.trim() || !newGroup.sport.trim()) return

        const group = {
            id: Date.now(),
            ...newGroup,
            members: ['Kamu'],
            messages: []
        }

        setGroups([...groups, group as any])
        setNewGroup({ name: '', sport: '', description: '' })
    }

    return (
        <main className="flex h-screen w-full bg-white overflow-hidden">
            
            <aside className={`w-full md:w-80 lg:w-96 border-r p-2 flex-col gap-4 shrink-0 h-full bg-white ${selectedGroup ? 'hidden md:flex' : 'flex'}`}>
                <div className="flex justify-between items-center pr-2 pt-4 px-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Grup Sehat</h2>
                    <button onClick={createGroup}><Plus size={16} /></button>
                </div>
                <div className="px-4">
                    <Input className="rounded-full text-base h-auto py-2 px-4 shadow-none" />
                </div>
                <div className="flex flex-col gap-2 overflow-y-auto flex-1">
                    {groups.map(group => (
                        <div 
                            key={group.id} 
                            onClick={() => setSelectedGroup(group)}
                            className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors ${selectedGroup?.id === group.id ? 'bg-gray-50' : ''}`}
                        >
                            <div className="rounded-full size-12 overflow-hidden bg-gray-200 shrink-0">
                                <img src="/images/users/1.png" alt="" className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <span className="text-sm font-medium tracking-wide text-gray-800 truncate">{group.name}</span>
                                <span className="text-xs text-gray-600 truncate">{group.messages[group.messages.length - 1]?.sender || 'Info'}: ...</span>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            
            {selectedGroup && (
                <section className="flex-1 flex flex-col h-full p-4 md:p-6 bg-white w-full relative z-10">
                    <header className="border-b pb-3 mb-4 md:mb-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <button onClick={() => setSelectedGroup(null)} className="md:hidden p-1">
                                <ArrowLeft size={20} />
                            </button>
                            <div className="space-y-1">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{selectedGroup.name}</h2>
                                <p className="text-gray-600 text-xs md:text-sm line-clamp-1">{selectedGroup.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center shrink-0">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-8 h-8 md:w-12 md:h-12 rounded-full bg-white p-0.5 ${i > 1 ? '-ml-2 md:-ml-4' : ''} z-${50 - i * 10}`}>
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img src={`/images/users/${i}.png`} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </header>

                    <div className="flex gap-4 flex-1 overflow-hidden">
                        <div className="flex flex-col flex-1 rounded-xl overflow-hidden">
                            <div className="flex-1 space-y-4 overflow-y-auto rounded-xl text-sm text-gray-700 bg-gray-50 p-4">
                                {selectedGroup.messages.length === 0 ? (
                                    <p className="text-gray-400">Belum ada pesan...</p>
                                ) : (
                                    selectedGroup.messages.map((m: any, idx) => (
                                        <div key={idx}>
                                            {m.type === 'text' ? (
                                                
                                                <div className="flex gap-2 items-start">
                                                    <div className="flex flex-col items-center shrink-0">
                                                        <img src="/images/users/1.png" className="size-10 md:size-14 rounded-full" />
                                                        <span className="text-[10px] md:text-xs font-medium mt-1">{m.sender}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-1 max-w-[75%]">
                                                        <div className="flex gap-2 items-center flex-wrap">
                                                            <p className="bg-white rounded-2xl rounded-tl-none h-fit px-4 border py-2.5 break-words">
                                                                {m.text}
                                                            </p>
                                                            <span className="text-gray-500 text-xs whitespace-nowrap">{m.time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : m.type === 'activity' ? (
                                                    <div className="flex gap-2 items-start">
                                                        <div className="flex flex-col items-center shrink-0">
                                                            <img src="/images/users/2.png" className="size-10 md:size-14 rounded-full min-w-[40px] md:min-w-[56px]" />
                                                            <span className="text-[10px] md:text-xs font-medium mt-1">{m.sender}</span>
                                                        </div>

                                                        <div className="flex flex-col gap-2 w-full max-w-[85%] md:max-w-[60%]">
                                                            <div className="p-2 rounded-xl mt-2 text-gray-800 overflow-hidden h-40 md:h-48 bg-blue-200 relative w-full">
                                                                <div className="bg-white w-fit px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm mx-auto mt-2 rounded-full font-medium flex gap-2 items-center z-10 relative shadow-sm">
                                                                    <Clock className="size-4 md:size-5" />
                                                                    <span className="pr-3 border-r">{m.stats.time}</span>
                                                                    <MapPin className="size-4 md:size-5" />
                                                                    <span>{m.stats.dist}</span>
                                                                </div>
                                                                <img src="/images/land.png" className="absolute bottom-0 left-0 w-full object-cover" />
                                                                <img src="/images/tuyul.svg" className="absolute bottom-8 md:bottom-9.5 left-1/2 -translate-x-1/2 h-16 md:h-24 w-auto" />
                                                            </div>

                                                            <div className="py-2.5 px-4 bg-white rounded-xl border text-xs md:text-sm">
                                                                <span className="font-medium">{m.sender} {' '}</span>
                                                                <span>baru saja menyelesaikan lari pagi. </span>
                                                            </div>
                                                            
                                                            <div className="bg-white py-1.5 md:py-2 px-3 md:px-4 w-fit rounded-full border flex gap-2 items-center">
                                                                <span className="font-medium text-sm">{m.likes}</span>
                                                                <span className="text-sm">👍</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex gap-2 items-start">
                                                        <div className="flex flex-col items-center shrink-0">
                                                            <img src="/images/users/2.png" className="size-10 md:size-14 rounded-full min-w-[40px] md:min-w-[56px]" />
                                                            <span className="text-[10px] md:text-xs font-medium mt-1">{m.sender}</span>
                                                        </div>

                                                        <div className = "p-4 md:p-6 bg-white rounded-2xl border flex flex-col gap-2 max-w-[85%]">
                                                            <span className="text-sm"><span className = "font-medium">Salman</span> kayaknya lupa buat lari pagi deh.</span>

                                                            <div className = "flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
                                                                <Button className = "mt-2 w-full md:w-fit h-8 md:h-10 text-xs md:text-sm">Ingatkan</Button>
                                                                
                                                                <span className = "text-xs text-gray-500">2 orang sudah mengingatkan</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="flex gap-2 mt-3 border p-1.5 rounded-full shrink-0 bg-white">
                                <input
                                    className="text-sm px-4 md:px-5 py-2 h-auto rounded-full w-full focus:outline-none"
                                    placeholder="Ketik pesan..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                />
                                <button onClick={sendMessage} className="bg-primary flex text-white h-10 w-10 shrink-0 rounded-full aspect-square justify-center items-center hover:bg-primary/90 transition-colors">
                                    <Send className="size-4.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}

export default Page
