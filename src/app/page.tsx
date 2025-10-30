import { Button } from "@/components/ui/button"

const LandingPage = () => {
    return (
      <main>
        <div className = "h-screen p-16 flex flex-col gap-4 w-1/2 justify-center">
          <h1 className = "text-5xl font-semibold text-gray-800">Kata Siapa Hidup Sehat Gak Seru?</h1>
          <h2 className = "text-xl font-medium text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum dolor sit amet consectetur adipisicing.</h2>
        
          <div className = "flex gap-2">
            <Button className = "w-fit text-lg h-auto px-8 py-3 rounded-full">Lorem ipsum</Button>
            <Button className = "w-fit text-lg h-auto px-8 py-3 bg-transparent hover:bg-transparent rounded-full border text-gray-700">Lorem ipsum</Button>
          </div>
        </div>
      </main>
    )
}

export default LandingPage