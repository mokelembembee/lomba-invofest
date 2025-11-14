// @ts-nocheck

"use client"

import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon as Calendar1Icon, RulerIcon, Weight } from "lucide-react"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
// import { MultiSelect } from "@/components/ui/multi-select"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useUser } from '@stackframe/stack'
import { useRouter } from "next/navigation"
import { Toggle } from "@/components/ui/toggle"

const IntroSection = () => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <h1 className="text-3xl font-semibold">Siap hidup sehat?</h1>
      <span className="text-lg max-w-sm text-center text-muted-foreground">
        Sebelum kamu bisa memulai perjalanan hidup sehatmu, kami akan meminta beberapa informasi agar aplikasi dapat lebih sesuai dengan kebutuhanmu!
      </span>
    </div>
  )
}

const BodyInfo = ({ formData, setFormData }: { formData: any; setFormData: any }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-6 my-6">
        <div className="flex flex-col gap-4 col-span-2">
          <Label>Jenis kelamin Anda:</Label>
          <div className="flex w-full gap-2.5">
            <Toggle
              pressed={formData.gender === "male"}
              className="w-full"
              onClick={() => setFormData({ ...formData, gender: "male" })}
            >
              Laki-laki
            </Toggle>
            <Toggle
              pressed={formData.gender === "female"}
              className="w-full"
              onClick={() => setFormData({ ...formData, gender: "female" })}
            >
              Perempuan
            </Toggle>
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          <Label>Tanggal lahir Anda:</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal rounded-lg bg-slate-100 border-0 flex",
                  !formData.birthDate && "text-muted-foreground"
                )}
              >
                <Calendar1Icon className="min-w-6 min-h-6 mr-6 text-muted-foreground" />
                {formData.birthDate ? format(formData.birthDate, "PPP") : <span>Pilih tanggal</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.birthDate}
                onSelect={(date) => setFormData({ ...formData, birthDate: date })}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-4">
          <Label>Tinggi badan Anda (cm):</Label>
          <div className="w-full flex bg-slate-100 rounded-lg items-center group focus-within:ring-1 ring-brand-green-dark">
            <RulerIcon className="min-w-6 ml-6 text-muted-foreground" />
            <Input
              type="number"
              min="0"
              className="border-0 bg-transparent focus-visible:ring-0"
              value={formData.height}
              placeholder="173"
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Label>Berat badan Anda (kg):</Label>
          <div className="w-full flex bg-slate-100 rounded-lg items-center group focus-within:ring-1 ring-brand-green-dark">
            <Weight className="min-w-6 ml-6 text-muted-foreground" />
            <Input
              type="number"
              min="0"
              className="border-0 bg-transparent focus-visible:ring-0"
              value={formData.weight}
              placeholder="65"
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const LifestyleInfo = ({ formData, setFormData }: { formData: any; setFormData: any }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 gap-6 my-6">
        <div className="flex flex-col gap-4 col-span-2">
          <Label>
            Dari skala 0-10 seberapa gemar Anda terhadap <i>junk food</i>?
          </Label>
          <div>
            <div className="w-full flex items-stretch mb-2.5 text-muted-foreground px-1">
              <span>0</span>
              <span className="mx-auto">5</span>
              <span>10</span>
            </div>
            <Slider
              className="w-full"
              max={10}
              min={0}
              step={1}
              value={[formData.foodPreference]}
              onValueChange={(value) => setFormData({ ...formData, foodPreference: value[0] })}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          <Label>Jenis pekerjaan apa yang Anda tekuni?</Label>
          <Select value={formData.job} onValueChange={(value) => setFormData({ ...formData, job: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="worker">Pekerjaan yang melibatkan fisik (pekerja lapangan, buruh)</SelectItem>
              <SelectItem value="stayhome">Mengurus rumah</SelectItem>
              <SelectItem value="businness">Wiraswasta</SelectItem>
              <SelectItem value="office">Pekerja kantor</SelectItem>
              <SelectItem value="farmer">Petani/peternak</SelectItem>
              <SelectItem value="fisherman">Nelayan</SelectItem>
              <SelectItem value="student">Pelajar/mahasiswa</SelectItem>
              <SelectItem value="teacher">Pengajar</SelectItem>
              <SelectItem value="techincian">Teknisi khusus</SelectItem>
              <SelectItem value="medic">Tenaga medis</SelectItem>
              <SelectItem value="security">Petugas keamanan, polisi, tentara</SelectItem>
              <SelectItem value="influencer">Influencer/konten kreator</SelectItem>
              <SelectItem value="other">Lainnya</SelectItem>
              <SelectItem value="none">Tidak ada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          <Label>Dalam waktu seminggu, setiap berapa hari Anda berolahraga?</Label>
          <Select
            value={formData.exerciseFrequency}
            onValueChange={(value) => setFormData({ ...formData, exerciseFrequency: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Setiap hari</SelectItem>
              <SelectItem value="1">Setiap 1-2 hari</SelectItem>
              <SelectItem value="2">Setiap 3-5 hari</SelectItem>
              <SelectItem value="3">1 hari</SelectItem>
              <SelectItem value="4">Tidak pernah</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          <Label>Berapa rata-rata waktu tidur Anda per hari?</Label>
          <Select
            value={formData.sleepDuration}
            onValueChange={(value) => setFormData({ ...formData, sleepDuration: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4">Kurang dari 4 jam</SelectItem>
              <SelectItem value="3">4-6 jam</SelectItem>
              <SelectItem value="2">6-8 jam</SelectItem>
              <SelectItem value="1">8-10 jam</SelectItem>
              <SelectItem value="0">Lebih dari 10 jam</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

const DiabetesInfo = ({ formData, setFormData }: { formData: any; setFormData: any }) => {
  const diseaseList = [
    { value: "heart", label: "Penyakit jantung" },
    { value: "kidney", label: "Gangguan fungsi ginjal" },
    { value: "maag", label: "Maag" },
    { value: "blood pressure", label: "Darah tinggi" },
    { value: "colesterole", label: "Kolestrol tinggi" },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 col-span-2">
        <Label>Apa Anda memiliki riwayat masalah kesehatan?</Label>
        <div className="flex w-full gap-2.5">
          <Toggle
            pressed={formData.hasHealthIssues === true}
            className="w-full"
            onClick={() => setFormData({ ...formData, hasHealthIssues: true })}
          >
            Ya
          </Toggle>
          <Toggle
            pressed={formData.hasHealthIssues === false}
            className="w-full"
            onClick={() => setFormData({ ...formData, hasHealthIssues: false })}
          >
            Tidak
          </Toggle>
        </div>
      </div>

      {formData.hasHealthIssues && (
        <div className="flex flex-col gap-4 col-span-2 mt-6">
          <Label>Apa sajakah masalah kesehatan tersebut?</Label>
          <MultiSelect
            options={diseaseList}
            onValueChange={(selected) => setFormData({ ...formData, selectedDiseases: selected })}
            placeholder="Pilih"
            variant="inverted"
            animation={0}
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 my-6">
        <div className="flex flex-col gap-4 col-span-2">
          <Label>Apakah Anda sedang/pernah mengidap diabetes melitus?</Label>
          <div className="flex w-full gap-2.5">
            <Toggle
              pressed={formData.hasDiabetes === true}
              className="w-full"
              onClick={() => setFormData({ ...formData, hasDiabetes: true })}
            >
              Ya
            </Toggle>
            <Toggle
              pressed={formData.hasDiabetes === false}
              className="w-full"
              onClick={() => setFormData({ ...formData, hasDiabetes: false })}
            >
              Tidak
            </Toggle>
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-2">
          <Label>Apakah Anda memiliki keluarga yang mengidap diabetes melitus?</Label>
          <Select
            value={formData.familyHistory}
            onValueChange={(value) => setFormData({ ...formData, familyHistory: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">Tidak</SelectItem>
              <SelectItem value="closeFamily">Iya, keluarga dekat</SelectItem>
              <SelectItem value="distantFamily">Iya, keluarga jauh</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

const SummaryStep = ({ formData, score, userType }: { formData: any; score: number; userType: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-2xl font-bold">Hasil Assesmen Kesehatan Anda</div>

      <div className="bg-slate-100 rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Bahaya diabetes</h3>
            <div className="text-4xl font-bold text-brand-green-dark">{score}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-brand-green h-2.5 rounded-full" style={{ width: `${score}%` }}></div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tipe Pengguna</h3>
            <div className="text-2xl font-bold text-brand-green-dark">{userType}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h4 className="font-semibold">Detail Kesehatan</h4>
          <ul className="list-disc pl-5 mt-2">
            <li>
              BMI:{" "}
              {(formData.weight / ((formData.height / 100) ** 2)).toFixed(1)}
            </li>
            <li>Frekuensi Olahraga: {formData.exerciseFrequency}</li>
            <li>Durasi Tidur: {formData.sleepDuration} jam/hari</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Rekomendasi</h4>
          <p className="mt-2 text-sm">
            Berdasarkan profil Anda, kami merekomendasikan pemeriksaan gula darah rutin dan konsultasi dengan ahli gizi setiap 3 bulan.
          </p>
        </div>
      </div>
    </div>
  )
}

const Quiz = () => {
  const user = useUser()
  const router = useRouter()

  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    gender: "",
    birthDate: undefined,
    height: "",
    weight: "",
    job: "",
    foodPreference: 5,
    exerciseFrequency: "",
    sleepDuration: "",
    hasHealthIssues: null,
    selectedDiseases: [],
    hasDiabetes: null,
    familyHistory: "",
  })

  // Fungsi perhitungan skor dibuat sinkron agar mudah digunakan di seluruh komponen
  const calculateRiskScore = () => {
    let score = 15

    // Hitung BMI
    const bmi = formData.weight / ((formData.height / 100) ** 2)
    if (bmi > 25) score += 5
    if (bmi > 30) score += 10

    score += formData.foodPreference * 2

    // Penyesuaian berdasarkan frekuensi olahraga
    if (formData.exerciseFrequency === "0") score += 20
    if (formData.exerciseFrequency === "1") score += 10

    if (formData.hasHealthIssues) score += 15
    if (formData.selectedDiseases.length > 0)
      score += 10 * formData.selectedDiseases.length

    if (formData.hasDiabetes) score += 25
    if (formData.familyHistory !== "no") score += 15

    return Math.min(Math.round(score), 100)
  }

  // Fungsi untuk menentukan tipe pengguna berdasarkan skor
  const getUserType = () => {
    const types = [
      {
        name: "Pelajar Keren",
        condition: (s: number) => s < 30 && formData.exerciseFrequency === "0",
      },
      // Tambahkan tipe-tipe lain sesuai kebutuhan
    ]

    const score = calculateRiskScore()
    return types.find((t) => t.condition(score))?.name || "General User"
  }

  const steps = [IntroSection, BodyInfo, LifestyleInfo, DiabetesInfo, SummaryStep]

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.gender && formData.birthDate && formData.height && formData.weight
      case 2: {
        const valid =
          formData.foodPreference !== undefined &&
          formData.exerciseFrequency !== "" &&
          formData.sleepDuration !== "" &&
          formData.job !== ""
        return valid
      }
      case 3: {
        const valid =
          formData.hasDiabetes !== null &&
          formData.familyHistory !== "" &&
          formData.hasHealthIssues !== null

        if (formData.hasHealthIssues) {
          return valid && formData.selectedDiseases.length > 0
        }
        return valid
      }
      default:
        return true
    }
  }

  const handleNext = async () => {
    // Jika berada di langkah terakhir, lakukan update metadata dan redirect
    if (step === steps.length - 1) {
      if (user) {
        await user.update({
          clientMetadata: { ...user.clientMetadata, statistic: formData },
        })
      }
      router.push("/dashboard")
      return
    }

    if (!validateStep(step)) {
      alert("Harap lengkapi semua field yang diperlukan")
      return
    }

    setStep((prev) => prev + 1)
  }

  const CurrentStep = steps[step]
  return (
    <main className="w-screen min-h-screen grid lg:grid-cols-6 lg:p-6 gap-8">
      <div className="col-span-4 bg-white rounded-md max-w-xl w-full m-auto p-6">
        {step === steps.length - 1 ? (
          <SummaryStep
            formData={formData}
            score={calculateRiskScore()}
            userType={getUserType()}
          />
        ) : (
          <CurrentStep formData={formData} setFormData={setFormData} />
        )}

        <div className="flex justify-between mt-6">
          {step > 0 && (
            <Button onClick={() => setStep((prev) => prev - 1)}>
              {step === steps.length - 1 ? "Kembali" : "Sebelumnya"}
            </Button>
          )}

          <Button onClick={handleNext} className={step > 0 ? "ml-auto" : "w-full"}>
            {step === steps.length - 2
              ? "Submit"
              : step === steps.length - 1
              ? "Selesai"
              : "Lanjut"}
          </Button>
        </div>
      </div>

      <div className="w-full h-full hidden lg:block rounded-3xl bg-gradient-to-b from-brand-green to-brand-green-dark col-span-2">
        {/* Progress indicator atau elemen dekoratif */}
      </div>
    </main>
  )
}

export default Quiz