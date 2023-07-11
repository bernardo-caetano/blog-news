import { AuthButton } from '@/components/Buttons/AuthButton'

export default function Login() {
  return (
    <main className=" flex-1 flex justify-center items-center">
      <div className="w-[400px] h-[280px] bg-gray-800 rounded-xl flex items-center justify-center gap-16 flex-col">
        <p className="text-xl font-bold m-16">Login</p>
        <div className="w-full h-full flex items-center justify-center gap-32 flex-col">
          <AuthButton auth="github" isLogin />
          <AuthButton auth="google" isLogin />
        </div>
      </div>
    </main>
  )
}
