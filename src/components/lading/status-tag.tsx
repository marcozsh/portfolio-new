export default function StatusTag({ text } : { text: string }) {
  return (
    <div className="inline-flex items-center px-2 py-1 mb-2 text-sm font-medium rounded-full bg-transparent border border-custom_purple">
      {text}
    </div>
  )
}


