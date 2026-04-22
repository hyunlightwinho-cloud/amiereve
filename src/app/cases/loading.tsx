export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-brand-border border-t-brand-yellow animate-spin" />
        <p className="text-brand-gray text-sm">로딩 중...</p>
      </div>
    </div>
  )
}
