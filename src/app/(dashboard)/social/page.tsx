'use client'

import { useState } from 'react'
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
    UserPlus
} from 'lucide-react'

const Page = () => {
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
    <main className="flex h-[calc(100vh-4rem)] w-full">
        <aside className="w-1/3 border-r p-6 flex flex-col gap-4 bg-gray-50">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
            Grup Sehat
            </h2>
            <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700"
            onClick={createGroup}
            >
            <Plus size={16} />
            </Button>
        </div>

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
        </aside>

        {selectedGroup && (
        <section className="flex-1 flex flex-col h-full p-6 bg-white">
            <header className="border-b pb-3 mb-4 flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                {selectedGroup.name}
                </h2>
                <p className="text-gray-600 text-sm">
                {selectedGroup.description}
                </p>
            </div>
            <div className="text-gray-600 font-medium flex items-center gap-2">
                <Dumbbell size={18} />
                {selectedGroup.sport}
            </div>
            </header>

            <div className="flex gap-6 flex-1 overflow-hidden">
            <div className="flex flex-col flex-1 border rounded-xl p-4 bg-slate-50">
                <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                <MessageCircle size={16} />
                Chat Grup
                </h3>

                <div className="flex-1 overflow-y-auto bg-white rounded-lg p-3 border text-sm text-gray-700">
                {selectedGroup.messages.length === 0 ? (
                    <p className="text-gray-400">Belum ada pesan...</p>
                ) : (
                    selectedGroup.messages.map((m, idx) => (
                    <p key={idx} className="mb-1">
                        <strong>{m.sender}:</strong> {m.text}
                    </p>
                    ))
                )}
                </div>

                <div className="flex gap-2 mt-3">
                <Input
                    placeholder="Ketik pesan..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>Kirim</Button>
                </div>
            </div>


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
            </div>
        </section>
        )}
    </main>
    )
}

export default Page
