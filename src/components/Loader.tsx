interface LoaderProps {
  loading: boolean
}
export function Loader({ loading }: LoaderProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center ">
        <div className="flex items-center justify-center ">
          <div className="w-[300px] h-[300px] border-t-4 border-b-4 border-l-4 border-green-600 rounded-full animate-spin absolute"></div>
          <div className="relative flex">
            <span className="text-4xl mr-16">Loading</span>
            <span className="animate-bounce w-18 h-60 flex text-4xl">.</span>
            <span className="animate-[bounce_1.2s_ease-in-out_infinite] w-18 h-60 flex text-4xl">
              .
            </span>
            <span className="animate-[bounce_1.5s_ease-in-out_infinite] w-18 h-60 flex text-4xl">
              .
            </span>
          </div>
        </div>
      </div>
    )
  }
}
