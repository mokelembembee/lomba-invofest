'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import {
    Users,
    Dumbbell,
    MessageCircle,
    BellRing,
    Plus,
    UserPlus,
    MapPin
} from 'lucide-react'
import { Clock, Send } from 'iconest-react'
import { useRouter } from 'next/navigation'
import { useUser } from '@stackframe/stack'

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
            pending: ['Rafi'],
            messages: [
            { sender: 'Salman', text: 'Besok salman masuk ga ya?' },
            { sender: 'Nebula', text: 'YTTA' },
            ],
        },
        {
            id: 2,
            name: 'Yoga Serenity',
            description: 'Yoga setiap sore bersama instruktur profesional.',
            sport: 'Yoga',
            members: ['Lia', 'Tari', 'Bintang'],
            pending: [],
            messages: [
            { sender: 'Tari', text: 'BLABLABLABLEBLEBLEBLULBUBLUBLU' },
            ],
        },
    ])

    const [selectedGroup, setSelectedGroup] = useState(groups[0])
    const [message, setMessage] = useState('')
    const [newGroup, setNewGroup] = useState({
        name: '',
        sport: '',
        description: ''
    })
    const [newMember, setNewMember] = useState('')

    //pesan
    const sendMessage = () => {
        if (!message.trim()) return

        const updated = groups.map((g) =>
            g.id === selectedGroup.id
            ? { ...g, messages: [...g.messages, { sender: 'Kamu', text: message }] }
            : g
        )

        setGroups(updated)
        setSelectedGroup(updated.find((g) => g.id === selectedGroup.id)!)
        setMessage('')
    }


    const handleTouch = (member: string) => {
        alert(`${member} diingatkan untuk menyelesaikan tugasnya di grup ${selectedGroup.name}`)
    }

    //grup baru
    const createGroup = () => {
    if (!newGroup.name.trim() || !newGroup.sport.trim()) return

    const group = {
        id: Date.now(),
        ...newGroup,
        members: ['Kamu'],
        pending: [],
        messages: []
    }

    setGroups([...groups, group])
    setNewGroup({ name: '', sport: '', description: '' })
    }

    const addMember = () => {
    if (!newMember.trim()) return

    const updated = groups.map((g) =>
        g.id === selectedGroup.id
        ? { ...g, members: [...g.members, newMember] }
        : g
    )

    setGroups(updated)
    setSelectedGroup(updated.find((g) => g.id === selectedGroup.id)!)
    setNewMember('')
    }

    return (
        <main className="flex h-screen w-full">
            <aside className="w-2/7 border-r p-2 flex flex-col gap-4">
                <div className="flex justify-between items-center pr-2 pt-4 px-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Grup Sehat
                    </h2>
                    <button
                    onClick={createGroup}
                    >
                        <Plus size={16} />
                    </button>
                </div>

                <div className = "px-4">
                    <Input className = "rounded-full text-base h-auto py-2 px-4 shadow-nonde"/>
                </div>

                <div className = "flex flex-col gap-2">
                    <div className = "flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                        <div className = "rounded-full h-12 aspect-square bg-red-500">

                        </div>

                        <div className = "flex flex-col">
                            <span className = "text-sm font-medium tracing-wide text-gray-800">Suka Suka Salman</span>
                            <span className = "text-xs text-gray-600">Salman: BLEBLEBLE...</span>
                        </div>
                    </div>

                    <div className = "flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                        <div className = "rounded-full h-12 aspect-square bg-red-500">

                        </div>

                        <div className = "flex flex-col">
                            <span className = "text-sm font-medium tracing-wide text-gray-800">Suka Suka Salman</span>
                            <span className = "text-xs text-gray-600">Salman: BLEBLEBLE...</span>
                        </div>
                    </div>
                </div>

                {/*
                <div className="space-y-2">
                    <Input
                    placeholder="Nama grup"
                    value={newGroup.name}
                    onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                    />
                    <Select
                    value={newGroup.sport}
                    onValueChange={(v) => setNewGroup({ ...newGroup, sport: v })}
                    >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih olahraga" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Jogging">Jogging</SelectItem>
                        <SelectItem value="Yoga">Yoga</SelectItem>
                        <SelectItem value="Gym">Gym</SelectItem>
                        <SelectItem value="Renang">Renang</SelectItem>
                    </SelectContent>
                    </Select>
                    <Textarea
                    placeholder="Deskripsi singkat..."
                    value={newGroup.description}
                    onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                    />
                </div>
                */}

                {/*
                <div className="mt-6 flex-1 overflow-y-auto space-y-2">
                    {groups.map((group) => (
                    <div
                        key={group.id}
                        onClick={() => setSelectedGroup(group)}
                        className={`p-4 rounded-lg border cursor-pointer transition ${
                        selectedGroup.id === group.id
                            ? 'bg-green-100 border-green-400'
                            : 'bg-white hover:bg-gray-100'
                        }`}
                    >
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        <Dumbbell size={16} />
                        {group.name}
                        </h3>
                        <p className="text-sm text-gray-600">{group.sport}</p>
                        <p className="text-xs text-gray-500 mt-1">
                        {group.members.length} anggota
                        </p>
                    </div>
                    ))}
                </div>
                */}
            </aside>

            {selectedGroup && (
            <section className="flex-1 flex flex-col h-full p-6 bg-white w-full">
                <header className="border-b pb-3 mb-6 flex justify-between items-center">
                <div className = "space-y-1">
                    <h2 className="text-2xl font-semibold text-gray-800">
                    {selectedGroup.name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                    {selectedGroup.description}
                    </p>
                </div>

                <div className = "flex">
                    <div className = "bg-red-500 aspect-square w-12 rounded-full outline-4 outline-white translate-x-12 z-20"></div>
                    <div className = "bg-red-500 aspect-square w-12 rounded-full outline-4 outline-white translate-x-8 z-10"></div>
                    <div className = "bg-red-500 aspect-square w-12 rounded-full outline-4 outline-white translate-x-4"></div>
                    <div className = "bg-red-500 aspect-square w-12 rounded-full outline-4 outline-white"></div>
                </div>

                </header>

                <div className="flex gap-4 flex-1 overflow-hidden">
                <div className="flex flex-col flex-1 rounded-xl">
                    <div className="flex-1 space-y-4 overflow-y-auto rounded-xl text-sm text-gray-700 bg-gray-50 p-4">
                        {selectedGroup.messages.length === 0 ? (
                            <p className="text-gray-400">Belum ada pesan...</p>
                        ) : (
                            selectedGroup.messages.map((m, idx) => (
                                <div className = "flex gap-2 items-center" key={idx}>
                                    <div className = "flex flex-col items-center">
                                        <img src = "/images/users/1.png" className = "size-14"/>
                                        <span className = "text-xs font-medium">{m.sender}</span>
                                    </div>

                                    <div className = "flex flex-col gap-1">
                                        <div className = "flex gap-2 items-center">
                                            <p className="bg-white rounded-full rounded-tl-none h-fit px-4 border py-2.5">
                                                {m.text}
                                            </p>

                                            <span className = "text-gray-500">12:23</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                        <div className = "flex gap-2 items-center">
                            <div className = "flex gap-2 items-center">
                                <div className = "flex flex-col items-center">
                                    <img src = "/images/users/1.png" className = "size-14 min-w-14"/>
                                    <span className = "text-xs font-medium">Agus S</span>
                                </div>

                                <div className = "flex flex-col gap-2 w-full">
                                    <div className = "p-2 rounded-xl mt-2 text-gray-800 overflow-hidden h-48 bg-blue-200 relative">
                                        <div className = "bg-white w-fit px-4 py-2 text-sm mx-auto mt-2 rounded-full font-medium flex gap-2 items-center">
                                            <Clock className = "size-5"/>
                                            <span className = "pr-3 border-r">20m 10d</span>

                                            <MapPin className = "size-5"/>
                                            <span>10km</span>
                                        </div>

                                        <img src = "/images/land.png" className = "absolute bottom-0 left-0"/>

                                        <img src = "/images/tuyul.svg" className = "absolute bottom-9.5 left-1/2 -translate-x-1/2 h-24 w-auto"/>
                                    </div>
                                    
                                    <div className = "py-2.5 px-4 bg-white rounded-xl border">
                                        <span className = "font-medium">Salman {' '}</span>
                                        <span>baru saja menyelesaikan lari pagi. </span>
                                    </div>
                                </div>
                            </div>
                        
                            <div className = "bg-white py-2 px-4 h-fit rounded-full border flex gap-2">
                                <span className = "font-medium text-sm">2</span>
                                👍
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-3 border p-1.5 rounded-full">
                        <input
                            className = "text-sm px-5 py-2 h-auto rounded-full w-full focus:outline-none"
                            placeholder="Ketik pesan..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        />

                        <button onClick={sendMessage} className = "bg-primary flex text-white h-full rounded-full aspect-square">
                            <Send className = "size-4.5 m-auto"/>
                        </button>
                    </div>
                </div>


                {/*
                <div className="w-1/3 border rounded-xl p-4 bg-slate-50 flex flex-col">
                    <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
                    <Users size={16} />
                    Anggota
                    </h3>


                    <div className="flex gap-2 mb-4">
                    <Input
                        placeholder="Nama anggota"
                        value={newMember}
                        onChange={(e) => setNewMember(e.target.value)}
                    />
                    <Button
                        size="sm"
                        onClick={addMember}
                        className="flex items-center gap-1"
                    >
                        <UserPlus size={14} />
                        Tambah
                    </Button>
                    </div>


                    <div className="space-y-2 overflow-y-auto">
                    {selectedGroup.members.map((m) => (
                        <div
                        key={m}
                        className="flex justify-between items-center bg-white border rounded-lg px-3 py-2 text-gray-700"
                        >
                        <span>{m}</span>
                        {selectedGroup.pending.includes(m) && (
                            <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 flex items-center gap-1"
                            onClick={() => handleTouch(m)}
                            >
                            <BellRing size={14} />
                            Touch
                            </Button>
                        )}
                        </div>
                    ))}
                    </div>
                </div>
                */}
                </div>
            </section>
            )}
        </main>
    )
}

export default Page
