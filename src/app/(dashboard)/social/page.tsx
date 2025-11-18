'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Plus,
    Clock,
    MapPin
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

    if (!user) {
        return null
    }

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
                // Pesan Agus dimasukkan ke sini sebagai data
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

    const [selectedGroup, setSelectedGroup] = useState(groups[0])
    const [message, setMessage] = useState('')
    const [newGroup, setNewGroup] = useState({ name: '', sport: '', description: '' })

    const sendMessage = () => {
        if (!message.trim()) return

        const currentGroupId = selectedGroup.id

        const time = new Date()
        const hh = time.getHours().toString().padStart(2, "0")
        const mm = time.getMinutes().toString().padStart(2, "0")
        const timestamp = `${hh}:${mm}`

        // Tambahkan properti type: 'text'
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
                if (prev.id === currentGroupId) {
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
        <main className="flex h-screen w-full">
            
            <aside className="w-2/7 border-r p-2 flex flex-col gap-4">
                <div className="flex justify-between items-center pr-2 pt-4 px-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Grup Sehat</h2>
                    <button onClick={createGroup}><Plus size={16} /></button>
                </div>
                <div className="px-4">
                    <Input className="rounded-full text-base h-auto py-2 px-4 shadow-none" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                        <div className="rounded-full size-12 overflow-hidden bg-gray-200">
                            <img src="/images/users/1.png" alt="" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium tracking-wide text-gray-800">Penjoging Handal</span>
                            <span className="text-xs text-gray-600">Salman:...</span>
                        </div>
                    </div>
                </div>
            </aside>

            
            {selectedGroup && (
                <section className="flex-1 flex flex-col h-full p-6 bg-white w-full">
                    <header className="border-b pb-3 mb-6 flex justify-between items-center">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-semibold text-gray-800">{selectedGroup.name}</h2>
                            <p className="text-gray-600 text-sm">{selectedGroup.description}</p>
                        </div>
                        <div className="flex items-center">
                            {/* User Avatars Header */}
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-12 h-12 rounded-full bg-white p-0.5 ${i > 1 ? '-ml-4' : ''} z-${50 - i * 10}`}>
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img src={`/images/users/${i}.png`} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </header>

                    <div className="flex gap-4 flex-1 overflow-hidden">
                        <div className="flex flex-col flex-1 rounded-xl">
                            <div className="flex-1 space-y-4 overflow-y-auto rounded-xl text-sm text-gray-700 bg-gray-50 p-4">
                                {selectedGroup.messages.length === 0 ? (
                                    <p className="text-gray-400">Belum ada pesan...</p>
                                ) : (
                                    selectedGroup.messages.map((m: any, idx) => (
                                        <div key={idx}>
                                            {m.type === 'text' ? (
                                                
                                                <div className="flex gap-2 items-center">
                                                    <div className="flex flex-col items-center">
                                                        <img src="/images/users/1.png" className="size-14" />
                                                        <span className="text-xs font-medium">{m.sender}</span>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex gap-2 items-center">
                                                            <p className="bg-white rounded-full rounded-tl-none h-fit px-4 border py-2.5">
                                                                {m.text}
                                                            </p>
                                                            <span className="text-gray-500">{m.time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : m.type === 'activity' ? (
                                                    <div className="flex gap-2 items-center">
                                                        <div className="flex gap-2 items-center">
                                                            <div className="flex flex-col items-center">
                                                                <img src="/images/users/2.png" className="size-14 min-w-14" />
                                                                <span className="text-xs font-medium">{m.sender}</span>
                                                            </div>

                                                            <div className="flex flex-col gap-2 w-full">
                                                                <div className="p-2 rounded-xl mt-2 text-gray-800 overflow-hidden h-48 bg-blue-200 relative">
                                                                    <div className="bg-white w-fit px-4 py-2 text-sm mx-auto mt-2 rounded-full font-medium flex gap-2 items-center">
                                                                        <Clock className="size-5" />
                                                                        <span className="pr-3 border-r">{m.stats.time}</span>
                                                                        <MapPin className="size-5" />
                                                                        <span>{m.stats.dist}</span>
                                                                    </div>
                                                                    <img src="/images/land.png" className="absolute bottom-0 left-0" />
                                                                    <img src="/images/tuyul.svg" className="absolute bottom-9.5 left-1/2 -translate-x-1/2 h-24 w-auto" />
                                                                </div>

                                                                <div className="py-2.5 px-4 bg-white rounded-xl border">
                                                                    <span className="font-medium">{m.sender} {' '}</span>
                                                                    <span>baru saja menyelesaikan lari pagi. </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="bg-white py-2 px-4 h-fit rounded-full border flex gap-2">
                                                            <span className="font-medium text-sm">{m.likes}</span>
                                                            👍
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex gap-2 items-center">
                                                        <div className="flex gap-2 items-center">
                                                            <div className="flex flex-col items-center">
                                                                <img src="/images/users/2.png" className="size-14 min-w-14" />
                                                                <span className="text-xs font-medium">{m.sender}</span>
                                                            </div>

                                                            <div className = "p-6 bg-white rounded-2xl border flex flex-col gap-2">
                                                                <span><span className = "font-medium">Salman</span> kayaknya lupa buat lari pagi deh.</span>

                                                                <div className = "flex gap-4 items-center">
                                                                    <Button className = "mt-2 w-fit">Ingatkan</Button>
                                                                    
                                                                    <span className = "text-xs w-1/2">2 orang sudah mengingatkan</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="flex gap-2 mt-3 border p-1.5 rounded-full">
                                <input
                                    className="text-sm px-5 py-2 h-auto rounded-full w-full focus:outline-none"
                                    placeholder="Ketik pesan..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                />
                                <button onClick={sendMessage} className="bg-primary flex text-white h-full rounded-full aspect-square">
                                    <Send className="size-4.5 m-auto" />
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